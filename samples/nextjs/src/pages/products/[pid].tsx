import type { AppProps } from 'next/app';
import { useRouter } from 'next/router'

import ProductDetail from '../../components/ProductDetail'

function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  const { pid } = router.query

  return (
    <div className="container">
      <ProductDetail productId={pid} />
    </div>
  );
}

export default App;
