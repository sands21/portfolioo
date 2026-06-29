import { NextResponse } from "next/server";
import { getProfile } from "@/lib/content";

export const dynamic = "force-dynamic";

type LastfmImage = { size: string; "#text": string };
type LastfmTrack = {
  name: string;
  url: string;
  artist?: { "#text": string };
  image?: LastfmImage[];
  "@attr"?: { nowplaying?: string };
};

/**
 * Live "now playing" via Last.fm. Set LASTFM_API_KEY in env and the Last.fm username in the
 * CMS profile. If either is missing, returns { ok: false } and the card shows its static text.
 */
export async function GET() {
  const key = process.env.LASTFM_API_KEY;
  const { lastfmUser } = await getProfile();
  if (!key || !lastfmUser) return NextResponse.json({ ok: false });

  try {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${encodeURIComponent(
      lastfmUser,
    )}&api_key=${key}&format=json&limit=1`;
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();
    const t: LastfmTrack | undefined = data?.recenttracks?.track?.[0];
    if (!t) return NextResponse.json({ ok: true, playing: false });

    const art =
      (t.image?.find((im) => im.size === "extralarge") ||
        t.image?.find((im) => im.size === "large") ||
        t.image?.[0])?.["#text"] || null;

    return NextResponse.json({
      ok: true,
      playing: t["@attr"]?.nowplaying === "true",
      track: t.name,
      artist: t.artist?.["#text"] ?? "",
      art,
      url: t.url,
    });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
