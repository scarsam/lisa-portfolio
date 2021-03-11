import Link from "components/link";

const Footer = () => {
  return (
    <footer className="pb-8 col-span-12 flex justify-between container mx-auto">
      <div className="footer-links flex">
        <div className="social mr-32">
          <p className="text-copy-1 pb-1">Social</p>
          <Link className="block" href="/" text="LinkedIn" />
          <Link className="block" href="/google" text="Instagram" />
        </div>
        <div className="contact">
          <p className="text-copy-1 pb-1">Contact</p>
          <Link
            className="block"
            href="mailto:hello@lisaskole.com"
            text="hello@lisaskole.com"
          />
        </div>
      </div>
      <p className="text-copy-1">
        &copy; {new Date().getFullYear()}, Lisa Skole
      </p>
    </footer>
  );
};

export default Footer;
