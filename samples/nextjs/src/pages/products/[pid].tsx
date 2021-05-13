import { useRouter } from 'next/router'
import ProductDetail from '../../components/ProductDetail'

function App(): JSX.Element {
  const router = useRouter()
  const { pid } = router.query

  return (
    <div className="container">
      <ProductDetail productId={pid} />
    </div>
  );
}

export default App;
