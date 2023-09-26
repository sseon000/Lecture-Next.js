import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router"

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID){
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`

export default function ProductDetailPage() {
  const router = useRouter();
  console.log(router.query.productId);

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId }
  });
  console.log(data);

  const onCreateProductMove = () => {
    router.push(`edit/${router.query.productId}`);
  }

  return (
    <>
      <h1>상품 상세</h1>
      <div>{data?.fetchProduct.name}</div>
      <div>{data?.fetchProduct.detail}</div>
      <div>{data?.fetchProduct.price}</div>
      <button onClick={onCreateProductMove}>수정하기</button>
    </>
  )
}