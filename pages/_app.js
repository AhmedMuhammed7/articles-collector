import { ChakraProvider } from '@chakra-ui/react'
import "react-datepicker/dist/react-datepicker.css";
import Layout from '../Layout';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp