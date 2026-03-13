"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const domainToWatch = process.env.DOMAIN_TO_WATCH?.trim();
if (!domainToWatch) {
    console.error("Missing DOMAIN_TO_WATCH in .env file.");
    process.exit(1);
}
console.log(`[DropPing] Watching ${domainToWatch}`);
