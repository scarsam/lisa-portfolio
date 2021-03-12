import Link from "components/link";
import NextLink from "next/link";

const Navigation: React.VFC = () => {
  return (
    <nav>
      <header className="pt-8 pb-24 grid grid-cols-12 gap-6 flex justify-between container mx-auto">
        <NextLink href="/">
          <a className="text-3xl col-span-3">
            <h1>Nice to meet you 👋️</h1>
          </a>
        </NextLink>
        <Link
          white
          large
          className="col-start-11 col-span-1 text-3xl"
          href="/work"
          text="Work"
        />
        <Link
          white
          large
          className="col-span-1 text-3xl"
          href="/about"
          text="Info"
        />
      </header>
    </nav>
  );
};

export default Navigation;
