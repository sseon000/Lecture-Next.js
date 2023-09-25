import { useRouter } from "next/router"

export default function ProductDetailPage() {
  const router = useRouter();

  console.log(router.query.productId);

  return (
    <>
      <h1>상품 상세</h1>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button>수정하기</button>
    </>
  )
}