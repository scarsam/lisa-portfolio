import Link from "components/link";

const Navigation: React.VFC = () => {
  return (
    <header className="pt-8 pb-24 col-span-12 flex justify-between container mx-auto">
      <h1 className="text-xl">Nice to meet you 👋️</h1>
      <nav className="flex">
        <Link white className="block mr-5" href="/" text="Work" />
        <Link white className="block" href="/" text="Info" />
      </nav>
    </header>
  );
};

export default Navigation;
