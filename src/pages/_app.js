import Layout from "@/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/styles.scss"
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(
    () => {
      require("bootstrap/dist/js/bootstrap.bundle");
    }
  )
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
