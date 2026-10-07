'use client';

import { useState } from 'react';
import { youtubeEmbedUrl, youtubeThumbnail, youtubeWatchUrl } from '@/lib/post-video';

interface LiteYouTubeProps {
  id: string;
  title: string;
}

/**
 * Lightweight YouTube facade: shows the poster image and a play button, and only
 * loads the privacy-enhanced (youtube-nocookie.com) iframe after a click.
 * Without JavaScript the facade is a plain link to the video on YouTube.
 */
export default function LiteYouTube({ id, title }: LiteYouTubeProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-black shadow-md" style={{ aspectRatio: '16 / 9' }}>
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={youtubeEmbedUrl(id, { nocookie: true, autoplay: true })}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <a
          href={youtubeWatchUrl(id)}
          className="group absolute inset-0 block hover:no-underline"
          aria-label={`Play video: ${title}`}
          onClick={(event) => {
            event.preventDefault();
            setActive(true);
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={youtubeThumbnail(id, 'hqdefault')}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" aria-hidden="true" />
          <span
            className="absolute left-1/2 top-1/2 flex h-16 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-canadian-red shadow-lg transition-transform group-hover:scale-105 group-focus-visible:scale-105"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 fill-white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </a>
      )}
    </div>
  );
}
