import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      message
    }
  }
`

export default function ProductCreatePage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const router = useRouter();
  const [seller, setSeller] = useState("");
  const [inputs, setInputs] = useState({});

  const onChangeSeller = (e) => {
    setSeller(e.target.value);
  }

  const onChangeInput = (e) => {
    const {id, value} = e.target
    console.log(`id: ${id}, value:${value}`);
    setInputs({...inputs, [id]: value})
  }

  const onCreateProduct = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller,
          createProductInput: {
            name: inputs.name,
            detail: inputs.detail,
            price: Number(inputs.price)
          }
        }
      });
      console.log(result.data?.createProduct._id);
      void router.push(`/08-product/${result.data?.createProduct._id}`)

    } catch(error) {
      if(error instanceof Error) {
        console.log(error);
      };
  }  
  }

  return (
    <>
      <h1>상품 등록</h1>
      판매자 : <input id="seller" type="text" onChange={onChangeSeller}/>
      상품명 : <input id="name" type="text" onChange={onChangeInput}/>
      상품설명 : <input id="detail" type="text" onChange={onChangeInput}/>
      가격 : <input id="price" type="text" onChange={onChangeInput}/>
      <button onClick={onCreateProduct}>등록하기</button>
    </>
  )
}