const server = Bun.serve({
  port: process.env.PORT || 3000,
  async fetch(req) {
    const url = new URL(req.url);
    let filePath = url.pathname;
    
    // Handle root path
    if (filePath === '/') {
      filePath = '/index.html';
    }

    // Try the exact path first
    let file = Bun.file(`./out${filePath}`);
    if (await file.exists()) {
      return new Response(file);
    }
    
    // If not found and no extension, try with .html
    if (!filePath.includes('.')) {
      file = Bun.file(`./out${filePath}.html`);
      if (await file.exists()) {
        return new Response(file);
      }

      // For blog posts, try the markdown file directly
      if (filePath.startsWith('/blog/')) {
        const slug = filePath.split('/').pop();
        file = Bun.file(`./src/content/blog/${slug}.md`);
        if (await file.exists()) {
          return new Response(file);
        }
      }
    }
    
    // If still not found, return 404
    return new Response('Not Found', { status: 404 });
  },
});

console.log(`Serving static files on http://localhost:${server.port}`); 