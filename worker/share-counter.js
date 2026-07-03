export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/share') {
      return new Response('Not found', { status: 404 });
    }

    const today = new Date().toISOString().slice(0, 10);

    if (request.method === 'POST') {
      const [total, dayCount] = await Promise.all([
        env.SHARE_COUNTS.get('total'),
        env.SHARE_COUNTS.get(`day:${today}`),
      ]);
      await Promise.all([
        env.SHARE_COUNTS.put('total', String((parseInt(total) || 0) + 1)),
        env.SHARE_COUNTS.put(`day:${today}`, String((parseInt(dayCount) || 0) + 1)),
      ]);
      return new Response('ok');
    }

    if (request.method === 'GET') {
      const [total, dayCount] = await Promise.all([
        env.SHARE_COUNTS.get('total'),
        env.SHARE_COUNTS.get(`day:${today}`),
      ]);
      return new Response(
        JSON.stringify({ total: parseInt(total) || 0, today: parseInt(dayCount) || 0 }),
        { headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response('Method not allowed', { status: 405 });
  },
};
