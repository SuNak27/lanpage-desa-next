import Layout from "@/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/styles.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect } from "react";
import { ContextProvider } from "@/utils/context";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Filler,
  Tooltip,
  Title
);

export type AppProps = {
  Component: React.ComponentType & { getLayout?: (page: React.ReactNode) => React.ReactNode };
  pageProps: any;
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(
    () => {
      require("bootstrap/dist/js/bootstrap.bundle");
    }
  )

  const getLayout = Component.getLayout || ((page) => {
    return (
      <ContextProvider>
        <Layout>{page}</Layout>
      </ContextProvider>
    )
  });
  return getLayout(<Component {...pageProps} />);
}
