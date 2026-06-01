// Drop-in video embed for the showcase. Renders nothing if `url` is empty,
// so the page is safe to ship before a recording exists. When you have a
// Loom / YouTube / Vimeo URL, swap it in via the `url` prop on /how.
//
// Supported URL forms:
//   YouTube: https://www.youtube.com/watch?v=ID  |  https://youtu.be/ID
//   Loom:    https://www.loom.com/share/ID       |  https://www.loom.com/embed/ID
//   Vimeo:   https://vimeo.com/ID
//   Any:     a direct iframe `src` URL is also accepted (used as-is)

type Props = {
  url?: string;
  title?: string;
  caption?: string;
};

function toEmbedSrc(raw: string): string | null {
  const url = raw.trim();
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.host.toLowerCase();

    if (host.includes('youtube.com')) {
      const id = u.searchParams.get('v');
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (host === 'youtu.be') {
      const id = u.pathname.replace(/^\//, '');
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (host.includes('loom.com')) {
      const id = u.pathname.split('/').filter(Boolean).pop();
      return id ? `https://www.loom.com/embed/${id}` : url;
    }
    if (host.includes('vimeo.com')) {
      const id = u.pathname.replace(/^\//, '');
      return id ? `https://player.vimeo.com/video/${id}` : url;
    }
    return url;
  } catch {
    return null;
  }
}

export function VideoEmbed({ url, title = 'Demo', caption }: Props) {
  const src = url ? toEmbedSrc(url) : null;
  if (!src) return null;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500 mb-3">
          Demo
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 leading-tight mb-6">
          See it in motion.
        </h2>
        <div
          className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50"
          style={{ paddingBottom: '56.25%' /* 16:9 */ }}
        >
          <iframe
            src={src}
            title={title}
            className="absolute inset-0 h-full w-full"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        {caption && (
          <p className="mt-4 text-sm text-gray-600">{caption}</p>
        )}
      </div>
    </section>
  );
}
