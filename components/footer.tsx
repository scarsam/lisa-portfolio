import Link from "components/link";

const Footer = () => {
  return (
    <footer className="py-10 flex justify-between container mx-auto">
      <div className="footer-links flex">
        <div className="social mr-5">
          <p>Social</p>
          <Link className="block" href="/" text="Work" />
          <Link className="block" href="/google" text="Info" />
        </div>
        <div className="contact">
          <p>Contact</p>
          <Link
            className="block"
            href="mailto:hello@lisaskole.com"
            text="hello@lisaskole.com"
          />
        </div>
      </div>
      &copy; {new Date().getFullYear()}, Lisa Skole
    </footer>
  );
};

export default Footer;
