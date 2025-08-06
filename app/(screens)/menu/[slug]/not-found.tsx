import Link from "next/link";

export default function ProductNotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 px-4">
			<legend className="text-8xl mb-6">😢</legend>
			<h1 className="text-xl font-bold text-slate-800">상품을 찾을 수 없습니다...</h1>
			<p className="mt-4 text-md text-slate-600 leading-6">
				존재하지 않는 상품의 페이지에 접속하셨거나,
				<br /> 상품이 삭제되었을 수 있습니다.
			</p>
			<Link href="/" className="mt-6 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-200">
				메뉴판으로 돌아가기
			</Link>
		</div>
	);
}
