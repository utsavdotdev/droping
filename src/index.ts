import "dotenv/config";
import { lookup } from "node:dns/promises";

const domainToWatch = process.env.DOMAIN_TO_WATCH?.trim();

if (!domainToWatch) {
  console.error("Missing DOMAIN_TO_WATCH in .env file.");
  process.exit(1);
}

const domain = domainToWatch;

async function main() {
  console.log(`[DropPing] Checking DNS for ${domain}...`);

  try {
    const result = await lookup(domain);

    console.log(`[DropPing] ${domain} resolves to ${result.address}`);
  } catch {
    console.log(`[DropPing] ${domain} does not currently resolve in DNS`);
  }
}

main().catch((error: unknown) => {
  console.error("[DropPing] Unexpected error while checking DNS:", error);
  process.exit(1);
});
