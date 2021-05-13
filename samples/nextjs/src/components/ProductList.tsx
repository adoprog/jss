import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';
import OcProductList from "../ordercloud/components/OcProductList"

type ProductListProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const getListImage = (p) => {
  return `https://picsum.photos/439?random=` + Math.floor(Math.random() * 1000);
}

const ProductList = ({ fields }: ProductListProps): JSX.Element => (
  <>
    <Text tag="h2" className="display-4" field={fields.heading} />
    <OcProductList options={{pageSize:4, categoryID: "Golf"}} imgSrcMap={getListImage} columns={{xs:2}} hrefMap={p => `/products/${p.ID}`}/>
  </>
);

export default ProductList;
