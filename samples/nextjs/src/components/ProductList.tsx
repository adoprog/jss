import { Text, RichText, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';
import OcProductList from "../ordercloud/components/OcProductList"
import {getMasterImageUrl} from "./ProductDetail";

type ProductListkProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
    content: Field<string>;
  };
};

const getListImage = (p) => {
  return `${getMasterImageUrl(p)}&t=w400`
}

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ProductList = ({ fields }: ProductListProps): JSX.Element => (
  <>
    <Text tag="h2" className="display-4" field={fields.heading} />

    <RichText className="contentDescription" field={fields.content} />

    <OcProductList options={{pageSize:4, categoryID: "Golf"}} imgSrcMap={getListImage} columns={{xs:2}} hrefMap={p => `/products/${p.ID}`}/>

  </>
);

export default ProductList;
