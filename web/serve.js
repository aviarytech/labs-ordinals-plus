const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch(req) {
    const filePath = new URL(req.url).pathname;
    const file = Bun.file(`./out${filePath === '/' ? '/index.html' : filePath}`);
    return new Response(file);
  },
});

console.log(`Serving static files on http://localhost:${server.port}`); 