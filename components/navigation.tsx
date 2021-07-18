import Link from "components/link";
import NextLink from "next/link";

const Navigation: React.VFC = () => {
  return (
    <nav className="grid grid-cols-12 px-4">
      <header className="pt-8 pb-24 flex col-span-12 justify-between container mx-auto">
        <NextLink href="/">
          <a className="text-3xl col-span-3">
            <h1>
              Nice to <span className="block md:inline">meet you 👋️</span>
            </h1>
          </a>
        </NextLink>
        <div className="flex flex-col md:flex-row items-end">
          <Link
            white
            large
            className="text-3xl md:pr-4"
            href="/#work"
            text="Work"
          />
          <Link white large className="text-3xl" href="/about" text="Info" />
        </div>
      </header>
    </nav>
  );
};

export default Navigation;
