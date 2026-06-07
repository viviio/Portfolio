"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import Placeholder from "./Placeholder";

// ──────────────────────────────────────────────
// VideoTile — 进入视口自动播放，无标签；无 src 则占位
// ──────────────────────────────────────────────
type VideoTileProps = {
  label: string;
  ratio: string;
  src?: string;
};

export default function VideoTile({ label, ratio, src }: VideoTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const hasVideo = Boolean(src?.trim());

  useEffect(() => {
    if (!hasVideo || reduceMotion) return;
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [hasVideo, reduceMotion, src]);

  return (
    <figure className="w-full overflow-hidden rounded-lg border border-line bg-bg-elev leading-none">
      {hasVideo ? (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          className="block h-auto w-full bg-black"
        />
      ) : (
        <Placeholder kind="video" ratio={ratio} label={label} className="rounded-none border-0" />
      )}
    </figure>
  );
}
