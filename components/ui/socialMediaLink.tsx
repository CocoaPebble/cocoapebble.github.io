import React from "react";

interface SocialMediaLinkProps {
  platform: string;
  url: string;
  svgPath: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  platform,
  url,
  svgPath,
}) => {
  return (
    <a
      className="group -m-1 p-1"
      aria-label={`Follow on ${platform}`}
      href={url}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
      >
        <path d={svgPath}></path>
      </svg>
    </a>
  );
};

export default SocialMediaLink;
