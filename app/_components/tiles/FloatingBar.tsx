"use client";

import { useCart, CartItem } from "@/app/_util/cartContext";
import Toast from "../items/Toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
	product: CartItem;
}

export default function FloatingBar(props: Props) {
	const [showToast, setShowToast] = useState(false);
	const { addToCart } = useCart();
	const router = useRouter();

	const handleAddToCart = () => {
		addToCart(props.product);
		console.log("장바구니에 담았습니다.");
		setShowToast(true);
		// 수정된 부분: 3000ms(3초) 지연 시간을 setTimeout의 두 번째 인자로 전달
		setTimeout(() => {
			setShowToast(false);
		}, 2000);
	};

	const handleOrderClick = () => {
		router.push("/cart"); // 주문표 버튼 클릭 시 장바구니 페이지로 이동
	};

	return (
		<>
			{showToast && <Toast message="장바구니에 담았습니다." />}
			<div className="fixed bottom-0 w-full min-w-sm max-w-xl mx-auto border-t border-slate-300 bg-white">
				<section className="p-2 flex justify-between gap-2">
					<button onClick={handleAddToCart} className="block items-center justify-center p-4 w-full border-2 border-blue-600 rounded-lg bg-blue-600">
						<span className="text-white font-bold">장바구니 담기</span>
					</button>
					<button
						onClick={handleOrderClick}
						className="block items-center justify-center p-4 w-[30%] min-w-[120px] border-2 border-blue-600 rounded-lg"
					>
						<span className="text-blue-600 font-bold">주문표</span>
					</button>
				</section>
			</div>
		</>
	);
}
