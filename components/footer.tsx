import Link from "components/link";

const Footer = () => {
  return (
    <footer className="pb-8 grid grid-cols-12 gap-2 container mx-auto">
      <div className="col-span-1">
        <p className="text-copy-1 pb-1">Social</p>
        <Link
          className="block"
          href="https://www.linkedin.com/in/lisa-skole"
          text="LinkedIn"
        />
        <Link
          className="block"
          href="https://www.instagram.com/skolangi"
          text="Instagram"
        />
      </div>
      <div className="col-span-2">
        <p className="text-copy-1 pb-1">Contact</p>
        <Link
          className="block"
          href="mailto:hello@lisaskole.com"
          text="hello@lisaskole.com"
        />
      </div>
      <p className="text-copy-1 col-span-2 col-start-11">
        &copy; {new Date().getFullYear()}, Lisa Skole
      </p>
    </footer>
  );
};

export default Footer;
