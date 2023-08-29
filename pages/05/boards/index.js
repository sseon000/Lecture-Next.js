import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from 'react';

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
        _id
        number
        message
        }
    }
`

export default function BoardPage(){
    const [seller, setSeller] = useState("");
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [price, setPrice] = useState(0);
    
    const router = useRouter();
    
    const [createProduct] = useMutation(CREATE_PRODUCT);


    const onChangeSeller = (event) => {
        setSeller(event.target.value);
    }

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeDetail = (event) => {
        setDetail(event.target.value)
    }

    const onChangePrice = (event) => {
        setPrice(Number(event.target.value));
    }

    const onClickRegProduct = async () => {
        try {
            const result = await createProduct({
                variables: {
                    seller,
                    createProductInput: {
                        name,
                        detail,
                        price
                    }
                }
            });

            console.log(result.data?.createProduct._id);
            console.log(result.data?.createProduct.number);
            console.log(result.data?.createProduct.message);
            router.push(`/05/boards/${result.data?.createProduct._id}`)
        } catch(error) {
            if(error instanceof Error) alert('상품 등록중 오류가 발생했습니다!')
        }
    } 
    
    return (
        <>
            판매자: <input type="text" onChange={onChangeSeller}/><br />
            상품명: <input type="text" onChange={onChangeName}/><br />
            상품내용: <input type="text" onChange={onChangeDetail}/><br />
            상품가격: <input type="text" onChange={onChangePrice}/><br />
            <button onClick={onClickRegProduct}>상품 등록</button>
        </>
    )
}