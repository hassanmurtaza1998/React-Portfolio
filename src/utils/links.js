export const normalizeUrl = (url) => {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
};

export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};
