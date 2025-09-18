interface VideoBackgroundProps {
  videoSrc?: string;
  children: React.ReactNode;
}

const VideoBackground = ({ videoSrc, children }: VideoBackgroundProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {videoSrc ? (
        <>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
      <div className="absolute top-0 left-0 w-full h-full 
                     bg-gradient-to-br from-purple-900/90 via-black/80 to-pink-900/90 z-10
                     animate-pulse" />
        </>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full 
                     bg-gradient-to-br from-purple-600/40 via-pink-500/30 to-purple-800/40 z-0 
                     animate-pulse" />
      )}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;