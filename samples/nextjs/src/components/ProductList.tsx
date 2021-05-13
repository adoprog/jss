import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';
import OcProductList from "../ordercloud/components/OcProductList"
import {getMasterImageUrl} from "./ProductDetail";

type ProductListProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const getListImage = (p) => {
  return `${getMasterImageUrl(p)}&t=w400`
}

const ProductList = ({ fields }: ProductListProps): JSX.Element => (
  <>
    <Text tag="h2" className="display-4" field={fields.heading} />
    <OcProductList options={{pageSize:4, categoryID: "Golf"}} imgSrcMap={getListImage} columns={{xs:2}} hrefMap={p => `/products/${p.ID}`}/>
  </>
);

export default ProductList;
