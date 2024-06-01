import React, { useState } from "react";

const VideoEmbed = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative mx-auto max-w-full overflow-hidden rounded-lg border border-gray-300 shadow-lg">
      {!isPlaying ? (
        <div
          className="relative cursor-pointer overflow-hidden bg-black pt-[56.25%]"
          onClick={handlePlayVideo}
        >
          <img
            src="/image.png"
            alt="Custom Thumbnail"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
            <button
              type="button"
              className="rounded-full bg-white px-4 py-2 text-xl text-black"
              aria-label="Play Video"
            >
              ▶
            </button>
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden bg-black pt-[56.25%]">
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src="https://www.youtube-nocookie.com/embed/qP6po4RgtKM?start=386&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoEmbed;
