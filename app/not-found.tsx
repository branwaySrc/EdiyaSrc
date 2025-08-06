import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 px-4">
			<legend className="text-8xl mb-6">😢</legend>
			<h1 className="text-xl font-bold text-slate-800"> 페이지를 찾을 수 없습니다...</h1>
			<p className="mt-4 text-md text-slate-600 leading-6">
				요청하신 페이지가 존재하지 않거나,
				<br />주소가 잘못되었을 수 있습니다.
			</p>
			<Link href="/" className="mt-6 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200">
				홈으로 돌아가기 🏠
			</Link>
		</div>
	);
}
