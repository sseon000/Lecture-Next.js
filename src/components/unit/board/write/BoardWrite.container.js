import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from 'react';
import { CREATE_PRODUCT } from "./BoardWrite.queries";
import BoardWirteUI from "./BoardWrite.presenter";

export default function BoardWrite(){
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
            router.push(`/06/boards/${result.data?.createProduct._id}`)
        } catch(error) {
            if(error instanceof Error) alert('상품 등록중 오류가 발생했습니다!')
        }
    }

    return (
        <BoardWirteUI 
            onChangeSeller={onChangeSeller}
            onChangeName={onChangeName}
            onChangeDetail={onChangeDetail}
            onChangePrice={onChangePrice}
            onClickRegProduct={onClickRegProduct}
        />
    )
}