import { toMetaDescription } from './site';

/**
 * Optional YouTube video fields for a blog post.
 * Set them on a post (e.g. `{ ...octPost(...), youtubeId: 'abc123DEF45', ... }`)
 * to render the "Watch the video" player and emit VideoObject JSON-LD.
 */
export type PostVideoFields = {
  /** 11-character YouTube video ID (not the full URL). */
  youtubeId?: string;
  /** Video title as published on YouTube. Defaults to the post title. */
  youtubeTitle?: string;
  /** ISO 8601 upload/publish date, e.g. '2026-10-07' or '2026-10-07T19:30:00-04:00'. */
  youtubeUploadDate?: string;
  /** ISO 8601 duration, e.g. 'PT8M42S'. */
  youtubeDuration?: string;
};

export type BlogPostRecord = {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  author: string;
  date: string;
  updated: string;
  excerpt: string;
  image: string;
  content: string;
} & PostVideoFields;

export type PostVideo = {
  id: string;
  title: string;
  uploadDate?: string;
  duration?: string;
};

const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;
const ISO_DURATION = /^P(?:\d+D)?(?:T(?:\d+H)?(?:\d+M)?(?:\d+(?:\.\d+)?S)?)?$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:\d{2})?)?$/;

/** Returns the post's video, or null when no valid youtubeId is set. Invalid optional fields are dropped. */
export function getPostVideo(post: { title: string } & PostVideoFields): PostVideo | null {
  const id = post.youtubeId?.trim();
  if (!id || !YOUTUBE_ID.test(id)) return null;
  const uploadDate = post.youtubeUploadDate?.trim();
  const duration = post.youtubeDuration?.trim();
  return {
    id,
    title: post.youtubeTitle?.trim() || post.title,
    uploadDate: uploadDate && ISO_DATE.test(uploadDate) ? uploadDate : undefined,
    duration: duration && duration !== 'P' && duration !== 'PT' && ISO_DURATION.test(duration) ? duration : undefined,
  };
}

export function youtubeThumbnail(id: string, size: 'hqdefault' | 'maxresdefault' | 'sddefault' = 'hqdefault'): string {
  return `https://i.ytimg.com/vi/${id}/${size}.jpg`;
}

export function youtubeEmbedUrl(id: string, opts: { nocookie?: boolean; autoplay?: boolean } = {}): string {
  const host = opts.nocookie ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com';
  const query = opts.autoplay ? '?autoplay=1&rel=0' : '';
  return `${host}/embed/${id}${query}`;
}

export function youtubeWatchUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

/**
 * VideoObject JSON-LD. Google requires name, thumbnailUrl and uploadDate,
 * so this returns null when the upload date is missing.
 */
export function videoObjectSchema(post: { excerpt: string }, video: PostVideo) {
  if (!video.uploadDate) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: toMetaDescription(post.excerpt),
    thumbnailUrl: [youtubeThumbnail(video.id, 'maxresdefault'), youtubeThumbnail(video.id, 'hqdefault')],
    uploadDate: video.uploadDate,
    ...(video.duration ? { duration: video.duration } : {}),
    embedUrl: youtubeEmbedUrl(video.id),
    contentUrl: youtubeWatchUrl(video.id),
  };
}
