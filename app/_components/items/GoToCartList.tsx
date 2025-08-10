"use client";

import { useRouter } from "next/navigation";

export default function GoToCartList() {
	const router = useRouter();

	return (
		<div className="fixed bottom-0 mx-auto min-w-sm max-w-xl w-full">
			<button onClick={() => router.push("/cart")} className="block items-center justify-center p-4 w-full border-2 border-blue-600 bg-blue-600">
				<span className="text-white font-bold">내가 담은 주문표 보기</span>
			</button>
		</div>
	);
}
