import Link from "components/link";

const Navigation: React.VFC = () => {
  return (
    <header className="py-10 flex justify-between container mx-auto">
      <h1 className="text-xl">Nice to meet you 👋️</h1>
      <nav className="flex">
        <Link className="block mr-5" href="/" text="Work" />
        <Link className="block" href="/" text="Info" />
      </nav>
    </header>
  );
};

export default Navigation;
