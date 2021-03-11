import NextLink from "next/link";

const Link = ({
  text,
  href,
  className,
  white,
}: {
  text: string;
  href: string;
  className?: string;
  white?: boolean;
}) => {
  return (
    <NextLink href={href}>
      <a
        className={`font-link ${
          white ? "text-white" : "text-copy-link"
        } ${className}`}
      >
        {text}
        <span className="text-lg">&#8594;</span>
      </a>
    </NextLink>
  );
};

export default Link;
