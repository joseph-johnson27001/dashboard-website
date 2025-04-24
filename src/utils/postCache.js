const postCache = new Map();

export async function preloadPost(slug) {
  if (postCache.has(slug)) return;

  try {
    const res = await fetch(`/Resources/posts/${slug}.json`);
    if (!res.ok) throw new Error("Failed to preload");

    const data = await res.json();
    postCache.set(slug, data);
  } catch (err) {
    console.warn("Preload failed:", slug);
  }
}

export function getPost(slug) {
  return postCache.get(slug) || null;
}
