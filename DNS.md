# DNS changes at GoDaddy for wejdan.info

Panel: https://dcc.godaddy.com/control/dnsmanagement?domainName=wejdan.info

## Delete
- `A @ WebsiteBuilder Site` — delete this. It's the GoDaddy site builder stub.

## Add (apex A records → GitHub Pages)
| Type | Name | Value             | TTL    |
|------|------|-------------------|--------|
| A    | @    | 185.199.108.153   | 1 hour |
| A    | @    | 185.199.109.153   | 1 hour |
| A    | @    | 185.199.110.153   | 1 hour |
| A    | @    | 185.199.111.153   | 1 hour |

## Modify
- `CNAME www` → change value from `wejdan.info.` to `wejdan0404.github.io.`

## Keep
- NS, SOA, `_domainconnect` CNAME, DMARC TXT — leave as-is.

## After the changes
1. Wait 5–60 min for DNS propagation.
2. Visit https://wejdan.info — the Astro site should load.
3. GitHub will auto-provision HTTPS; may take 15 min after DNS is verified.
4. In the repo Settings → Pages, "Enforce HTTPS" should become available — enable it.
