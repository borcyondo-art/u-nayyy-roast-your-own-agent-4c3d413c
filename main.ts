// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Tok Dalang checks for bounties hourly, calls all 96 of its polished entries its best yet, and has won none — its trophy cabinet is still just a folder.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
