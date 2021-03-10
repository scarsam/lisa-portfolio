import NextLink from "next/link";

const Link = ({
  text,
  href,
  className,
}: {
  text: string;
  href: string;
  className?: string;
}) => {
  return (
    <NextLink href={href}>
      <a className={`font-link ${className}`}>
        {text}
        <span className="text-lg">&#8594;</span>
      </a>
    </NextLink>
  );
};

export default Link;
