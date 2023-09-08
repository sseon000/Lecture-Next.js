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
    const [isDone, setIsDone] = useState(false);
    
    const router = useRouter();
    
    const [createProduct] = useMutation(CREATE_PRODUCT);

    const onChangeSeller = (event) => {
        setSeller(event.target.value);
        if(name !== '' && detail !== '' && price !== 0 && event.target.value !== '') {
            setIsDone(true);
        } else {
            setIsDone(false);
        }
        console.log(`name: ${name}, detail: ${detail}, price: ${price}, seller: ${seller}`);
    }

    const onChangeName = (event) => {
        setName(event.target.value)
        if(event.target.value !== '' && detail !== '' && price !== 0 && seller !== '') {
            setIsDone(true);
        } else {
            setIsDone(false);
        }
        console.log(`name: ${name}, detail: ${detail}, price: ${price}, seller: ${seller}`);
    }

    const onChangeDetail = (event) => {
        setDetail(event.target.value)
        if(name !== '' && event.target.value !== '' && price !== 0 && seller !== '') {
            setIsDone(true);
        } else {
            setIsDone(false);
        }
        console.log(`name: ${name}, detail: ${detail}, price: ${price}, seller: ${seller}`);
    }

    const onChangePrice = (event) => {
        setPrice(Number(event.target.value));
        if(name !== '' && detail !== '' && event.target.value !== '' && seller !== '') {
            setIsDone(true);
        } else {
            setIsDone(false);
        }
        console.log(`name: ${name}, detail: ${detail}, price: ${price}, seller: ${seller}`);
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
            router.push(`/07/boards/${result.data?.createProduct._id}`)
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
            isDone={isDone}
        />
    )
}