import Layout from "@/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/styles.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
