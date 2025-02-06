import fs from 'fs'
import path from 'path'

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ordinals Plus Specifications</title>
    <meta http-equiv="refresh" content="0; url=https://ordinals.plus/specifications" />
    <script>
        window.location.href = "https://ordinals.plus/specifications";
    </script>
</head>
<body>
    <p>Redirecting to <a href="https://ordinals.plus/specifications">Ordinals Plus Specifications</a>...</p>
</body>
</html>`

// Ensure the dist directory exists
const distDir = path.join(process.cwd(), '../dist')
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true })
}

// Write the HTML file
fs.writeFileSync(path.join(distDir, 'index.html'), html)
console.log('Redirect page generated successfully!') 