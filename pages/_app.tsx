import "../styles/globals.css";
import "../styles/index.css";

import Header from "../components/Head";

function MyApp({ Component, pageProps }) {
  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}

export default MyApp;
