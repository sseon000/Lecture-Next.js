import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router"
import { useState } from 'react';


const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
        _id
        seller
        name
        detail
        price
        createdAt
        }
    }
`

const margin = {
    marginRight: "10px"
}

export default function BoardDetailPage(){
    // const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();
    console.log(router.query.id);

    const {data} = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: router.query.id
        }
    });

    /*
    if(data) {
        setIsLoading(false);
    }
    */

    return (
        <>
            <h1>게시판 상세 화면입니다!!</h1>
            <div>
                {/* {data?.fetchProduct.name} */}
                {!data ? 
                    'loading...' : 
                    (<div>
                        <span style={margin}>{data.fetchProduct._id.slice(0,4)}</span> 
                        <span style={margin}>{data.fetchProduct.seller}</span>
                        <span style={margin}>{data.fetchProduct.name}</span>
                        <span style={margin}>{data.fetchProduct.detail}</span>
                        <span style={margin}>{data.fetchProduct.price}</span>
                        <span style={margin}>{data.fetchProduct.createAt}</span>
                    </div>)}
            </div>
        </>
    )
}