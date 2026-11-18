// Lets you drop videos into a project's Markdown like an image:
//   ![Prototype walkthrough](/media/ai-project/walkthrough.mp4)
//   ![Episode with narration](/media/x/ep1.mp4#sound)   ← adds a sound on/off button
// Video files live in /public/media/<project>/ (see README).
export default function remarkVideo() {
  const isVideo = (url) => /\.(mp4|webm|mov)(\?[^#]*)?(#sound)?$/i.test(url || '');
  const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  const walk = (node) => {
    if (!node || !Array.isArray(node.children)) return;
    node.children = node.children.map((child) => {
      if (child.type === 'image' && isVideo(child.url)) {
        // add #sound to the URL to give the video a sound toggle, e.g. /media/x.mp4#sound
        const sound = /#sound$/.test(child.url);
        const url = child.url.replace(/#sound$/, '');
        return {
          type: 'html',
          value: `<video src="${esc(url)}" autoplay muted loop playsinline${sound ? ' data-sound' : ''} aria-label="${esc(child.alt)}"></video>`,
        };
      }
      walk(child);
      return child;
    });
  };
  return (tree) => walk(tree);
}
