import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

/** Reads the local content (src/content/*) committed to the repo. */
export const reader = createReader(process.cwd(), keystaticConfig);
