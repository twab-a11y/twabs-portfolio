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
          <div className="absolute top-0 left-0 w-full h-full bg-background/80 z-10" />
        </>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background/95 to-primary/20 z-0" />
      )}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;