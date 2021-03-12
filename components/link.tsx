import NextLink from "next/link";

const Link = ({
  text,
  href,
  className,
  white,
  large,
}: {
  text: string;
  href: string;
  className?: string;
  white?: boolean;
  large?: boolean;
}) => {
  return (
    <NextLink href={href}>
      <a
        className={`font-link ${
          white ? "text-white" : "text-copy-link"
        } ${className}`}
      >
        {text}
        <span className={`${large ? "text-2xl pl-1" : "text-lg pl-0.5"}`}>
          &#8594;
        </span>
      </a>
    </NextLink>
  );
};

export default Link;
