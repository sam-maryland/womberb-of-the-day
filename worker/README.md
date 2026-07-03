# Share counter Worker

Counts clicks on the Share button, entirely on Cloudflare's free tier.

## Setup

1. `npm install -g wrangler` (if not already installed), then `wrangler login`.
2. Create the KV namespace: `wrangler kv namespace create SHARE_COUNTS`
   Copy the returned `id` into `wrangler.toml`.
3. `wrangler deploy` from this directory. This registers the route
   `womberb.com/api/share`, which requires the zone to be proxied through
   Cloudflare (orange cloud) — Workers routes only intercept traffic for
   proxied zones, so DNS for `womberb.com` needs to stay orange-clouded.
4. Check counts any time: `curl https://womberb.com/api/share` returns
   `{"total": N, "today": N}`.

Free tier is 100k requests/day, far more than this site needs.
