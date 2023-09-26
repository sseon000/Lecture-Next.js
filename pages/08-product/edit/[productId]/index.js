import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router";
import { useState } from "react";

const UPDATE_PRODUCT = gql`
  mutation updateProduct($productId: ID, $updateProductInput: UpdateProductInput!){
    updateProduct(productId: $productId, updateProductInput: $updateProductInput) {
      _id
      message
    }
  }
`

export default function ProductUpdatePage() {
  const router = useRouter();
  console.log(router.query.productId);

  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  // const [seller, setSeller] = useState("");
  const [inputs, setInputs] = useState({});

  const onChangeSeller = (e) => {
    setSeller(e.target.value);
  }

  const onChangeInput = (e) => {
    const {id, value} = e.target
    console.log(`id: ${id}, value:${value}`);
    setInputs({...inputs, [id]: value})
  }

  const onUpdateProduct = async () => {
    try {
      const result = await updateProduct({
        variables: {
          productId: router.query.productId,
          updateProductInput: {
            name: inputs.name,
            detail: inputs.detail,
            price: Number(inputs.price)
          }
        }
      });
      console.log(result.data?.updateProduct._id);
      void router.push(`/08-product/${result.data?.updateProduct._id}`)

    } catch(error) {
      if(error instanceof Error) {
        console.log(error);
      };
  }  
  }

  return (
    <>
      <h1>상품 수정</h1>
      상품명 : <input id="name" type="text" onChange={onChangeInput}/>
      상품설명 : <input id="detail" type="text" onChange={onChangeInput}/>
      가격 : <input id="price" type="text" onChange={onChangeInput}/>
      <button onClick={onUpdateProduct}>수정하기</button>
    </>
  )
}