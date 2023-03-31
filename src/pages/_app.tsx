import theme from '@/config';
import { Layout } from '@/layouts';
import { ChakraProvider } from '@chakra-ui/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export type AppProps = {
  Component: React.ComponentType & { getLayout?: (page: React.ReactNode) => React.ReactNode };
  pageProps: any;
};

export default function App({ Component, pageProps }: AppProps) {

  const getLayout = (page: React.ReactNode) => {
    return (
      <ChakraProvider theme={theme}>
        <Layout>
          {Component.getLayout ? Component.getLayout(page) : page}
        </Layout>
      </ChakraProvider >
    )
  }

  return getLayout(<Component {...pageProps} />)
}
