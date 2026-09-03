const UPLOAD_MARKER = '/image/upload/';

export function cloudinaryUrl(url: string, transform: string): string {
  const idx = url.indexOf(UPLOAD_MARKER);
  if (idx === -1) return url;
  const insertAt = idx + UPLOAD_MARKER.length;
  return url.slice(0, insertAt) + transform + '/' + url.slice(insertAt);
}

export const CARD_THUMB = 'f_auto,q_auto,w_800,c_fill,g_auto';
export const DETAIL_IMAGE = 'f_auto,q_auto,w_1600,c_limit';
