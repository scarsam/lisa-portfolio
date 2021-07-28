import Link from "components/link";
import NextLink from "next/link";

const Navigation: React.VFC = () => {
  return (
    <nav className="grid grid-cols-12 px-4">
      <header className="pt-8 pb-8 md:pb-14 flex col-span-12 justify-between container mx-auto">
        <NextLink href="/">
          <a className="text-xl md:text-3xl col-span-3">
            <h1 className="title">
              Nice to meet you <span className="hand-wiggle">👋️</span>
            </h1>
          </a>
        </NextLink>
        <div className="flex flex-col md:flex-row items-end">
          <Link
            white
            large
            className="text-xl md:text-3xl md:pr-4"
            href="/#work"
            text="Work"
          />
          <Link
            white
            large
            className="text-xl md:text-3xl"
            href="/about"
            text="Info"
          />
        </div>
      </header>
    </nav>
  );
};

export default Navigation;
