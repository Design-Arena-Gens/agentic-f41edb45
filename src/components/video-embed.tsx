type VideoEmbedProps = {
  videoId: string;
  title: string;
};

export function VideoEmbed({ videoId, title }: VideoEmbedProps) {
  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-emerald-500/20">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
