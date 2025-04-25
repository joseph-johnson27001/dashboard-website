function generateHTML(post) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${post.title}</title>
  <meta name="description" content="${post.description}" />
  <meta property="og:title" content="${post.title}" />
  <meta property="og:description" content="${post.description}" />
  <meta property="og:image" content="${post.image}" />
  <meta property="og:url" content="https://templatedashboards.com/resources/${post.slug}" />
  <meta name="twitter:card" content="summary_large_image" />
  <script>
    // Only redirect if not already on the correct path
    const expectedPath = "/resources/${post.slug}";
    if (window.location.pathname !== expectedPath) {
      window.location.href = expectedPath;
    }
  </script>
</head>
<body>
  <p>Redirecting to <a href="/resources/${post.slug}">${post.title}</a>...</p>
</body>
</html>`;
}

// Ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Main function
function generateStaticPages() {
  const files = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".json"));

  files.forEach((filename) => {
    const filePath = path.join(postsDir, filename);
    const postData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const slug = postData.slug || filename.replace(".json", "");
    const html = generateHTML(postData);

    const postOutDir = path.join(outputDir, slug);
    ensureDir(postOutDir);

    const outPath = path.join(postOutDir, "index.html");
    fs.writeFileSync(outPath, html, "utf-8");

    console.log(`✅ Generated static page: /resources/${slug}`);
  });
}

generateStaticPages();
