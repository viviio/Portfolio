"use client";

import Image from "next/image";

// ──────────────────────────────────────────────
// MaskedImage — 默认半透明白色模糊遮罩，hover 露出原图
// ──────────────────────────────────────────────
type MaskedImageProps = {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
};

export default function MaskedImage({
  src,
  alt,
  ratio = "16 / 9",
  className = "",
}: MaskedImageProps) {
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-lg border border-line ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 66vw"
      />
      {/* 遮罩整层淡出，避免 backdrop-blur 过渡残留 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-500 ease-out group-hover:opacity-0"
        aria-hidden
      >
        <div className="absolute inset-0 bg-white/55" />
        <div className="absolute inset-0 backdrop-blur-md" />
      </div>
    </div>
  );
}
