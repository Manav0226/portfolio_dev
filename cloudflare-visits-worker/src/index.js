function corsHeaders(request, env) {
  const origin = request.headers.get('origin');
  const allowOrigin = !origin || origin === 'null'
    ? '*'
    : (env.ALLOWED_ORIGIN || origin);

  return {
    'access-control-allow-origin': allowOrigin,
    'access-control-allow-methods': 'GET, OPTIONS',
    'access-control-allow-headers': 'content-type',
    'content-type': 'application/json; charset=utf-8',
  };
}

function json(body, status, headers) {
  return new Response(JSON.stringify(body), { status, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const headers = corsHeaders(request, env);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    if (url.pathname !== '/visits') {
      return json({ error: 'Not found' }, 404, headers);
    }

    const current = Number((await env.VISITS.get('total')) || '0');
    const readOnly = url.searchParams.get('mode') === 'read';
    const next = readOnly ? current : current + 1;

    if (!readOnly) {
      await env.VISITS.put('total', String(next));
    }

    return json(
      {
        visits: next,
        cached: readOnly,
        source: 'cloudflare-worker-kv',
      },
      200,
      headers
    );
  },
};
