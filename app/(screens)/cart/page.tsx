// app/cart/page.tsx (수정된 코드)
"use client";

import { useCart } from "@/app/_util/cartContext";
import NavHeader from "@/app/_components/tiles/NavHeader";
import Link from "next/link";

export default function CartPage() {
	const { cart, removeItem, updateQuantity } = useCart();
	const total = cart.reduce((sum, item) => sum + item.productPrice * item.quantity, 0);

	return (
		<>
			<NavHeader title="주문표" />
			<main className="p-4">
				{cart.length > 0 ? (
					<>
						<ul className="flex flex-col gap-6">
							{cart.map(item => (
								// key값에 isIce를 포함하여 고유성을 보장합니다.
								<li key={`${item.slug}-${item.isIce}`} className="flex justify-between items-center border-b border-slate-300 pb-2">
									<div className="flex flex-col gap-1">
										<span className="font-semibold">
											{item.isIce ? "Ice / " : "Hot / "}
											{item.productName}
										</span>
										<span className="text-sm text-slate-600">
											{item.productPrice.toLocaleString()} 원 x {item.quantity} = {(item.productPrice * item.quantity).toLocaleString()} 원
										</span>
									</div>
									<div className="flex items-center gap-2">
										<button
											onClick={() => updateQuantity(item.slug, item.isIce, item.quantity - 1)}
											className="border py-2 px-3 rounded font-bold"
											disabled={item.quantity <= 1}
										>
											-
										</button>
										<span className="w-6 text-center font-bold text-lg">{item.quantity}</span>
										<button onClick={() => updateQuantity(item.slug, item.isIce, item.quantity + 1)} className="border py-2 px-3 rounded font-bold">
											+
										</button>
										{/* ✨ removeItem에 item.isIce 전달 */}
										<button onClick={() => removeItem(item.slug, item.isIce)} className=" py-2 px-3 bg-red-600 rounded ml-4">
											<span className="text-white font-bold text-sm">삭제하기</span>
										</button>
									</div>
								</li>
							))}
						</ul>
						<section className="mt-4 flex justify-between items-center font-bold text-lg">
							<span>총 합계</span>
							<span>{total.toLocaleString()} 원</span>
						</section>
					</>
				) : (
					<div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 px-4">
						<legend className="text-8xl mb-6">😢</legend>
						<h1 className="text-xl font-bold text-slate-800">주문표가 비어있습니다...</h1>
						<p className="mt-4 text-md text-slate-600 leading-6">지금 바로 상품을 주문표에 담아보세요!</p>
						<Link href="/" className="mt-6 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-200">
							메뉴판으로 돌아가기
						</Link>
					</div>
				)}
			</main>
		</>
	);
}
