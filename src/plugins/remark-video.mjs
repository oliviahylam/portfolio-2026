// Lets you drop videos into a project's Markdown like an image:
//   ![Prototype walkthrough](/media/ai-project/walkthrough.mp4)
// Video files live in /public/media/<project>/ (see README).
export default function remarkVideo() {
  const isVideo = (url) => /\.(mp4|webm|mov)(\?.*)?$/i.test(url || '');
  const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  const walk = (node) => {
    if (!node || !Array.isArray(node.children)) return;
    node.children = node.children.map((child) => {
      if (child.type === 'image' && isVideo(child.url)) {
        return {
          type: 'html',
          value: `<video src="${esc(child.url)}" autoplay muted loop playsinline aria-label="${esc(child.alt)}"></video>`,
        };
      }
      walk(child);
      return child;
    });
  };
  return (tree) => walk(tree);
}
