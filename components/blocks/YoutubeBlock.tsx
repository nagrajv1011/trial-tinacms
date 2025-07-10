export const YoutubeBlock = ({ videoId, title }: { videoId: string; title?: string }) => {
  return (
    <div className="aspect-video w-full my-6">
      <iframe
        title={title || "YouTube Video"}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
        className="w-full h-full rounded-md"
      />
    </div>
  );
};
