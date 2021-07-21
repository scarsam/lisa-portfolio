import dynamic from "next/dynamic";
import "@fontsource/chivo/400.css";
import "@fontsource/chivo/300.css";
import "@fontsource/inter";
import "../styles/tailwind.css";
import Navigation from "components/navigation";
import Footer from "components/footer";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

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
      <span className="mix-blend-difference relative z-50">
        <AnimatedCursor
          // @ts-ignore
          innerSize={20}
          outerSize={0}
          color="255, 255, 255"
          outerAlpha={0}
          innerScale={0.8}
          outerScale={0}
        />
      </span>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
