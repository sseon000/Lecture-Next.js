import { useRouter } from "next/router"

export default function ProductListPage() {
  const router = useRouter();

  const onCreateProductMove = () => {
    router.push('08-product/new');
  }

  return (
    <>
      <h1>상품 목록</h1>
      <div>상품1</div>
      <button onClick={onCreateProductMove}>상품 등록</button>
    </>
  )
}