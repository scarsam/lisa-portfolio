import "@fontsource/chivo/400.css";
import "@fontsource/chivo/300.css";
import "@fontsource/inter";
import "../styles/tailwind.css";

// import "tailwindcss/tailwind.css";

import Navigation from "components/navigation";
import Footer from "components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black-1 antialiased text-white min-h-screen">
      <style global jsx>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
