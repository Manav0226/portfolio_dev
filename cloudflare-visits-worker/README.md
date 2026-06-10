# Cloudflare Visits Worker

This Worker exposes:

- `GET /visits`

It increments a Cloudflare KV counter and returns JSON like:

```json
{
  "visits": 1248,
  "cached": false,
  "source": "cloudflare-worker-kv"
}
```

## Cloudflare dashboard setup

1. Create a Worker named `portfolio-visits`
2. Add a KV namespace binding:
   - Binding name: `VISITS`
   - Namespace: `portfolio-visits-kv`
3. Add a variable:
   - `ALLOWED_ORIGIN = https://manav-mehta.vercel.app`
4. Paste `src/index.js` into the Worker editor
5. Deploy

## Local file testing

The Worker code allows `file://` testing by returning `Access-Control-Allow-Origin: *`
when the browser sends no origin or `Origin: null`.

## Portfolio connection

Set this in `index.html`:

```html
<meta name="mm-visits-endpoint" content="https://portfolio-visits.manav-mehta.workers.dev/visits">
```
