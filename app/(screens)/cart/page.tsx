"use client";
import { useCart } from "@/app/_util/cartContext";
import NavHeader from "@/app/_components/tiles/NavHeader";

export default function CartPage() {
	const { cart } = useCart();

	const total = cart.reduce((sum, item) => sum + item.productPrice, 0);

	return (
		<>
			<NavHeader title="뒤로가기" />
			<main className="p-4">
				<h1 className="text-2xl font-bold mb-4">주문표 목록</h1>
				{cart.length === 0 ? (
					<p>장바구니가 비어 있습니다.</p>
				) : (
					<ul className="flex flex-col gap-4">
						{cart.map((item, index) => (
							<li key={index} className="flex justify-between items-center border-b pb-2">
								<div className="flex flex-col">
									<span className="font-semibold">{item.productName}</span>
									<span className="text-sm text-slate-600">{item.productPrice} 원</span>
								</div>
							</li>
						))}
					</ul>
				)}
				<div className="mt-8 pt-4 border-t border-slate-300">
					<p className="text-xl font-bold flex justify-between">
						<span>총 합계:</span>
						<span>{total} 원</span>
					</p>
				</div>
			</main>
		</>
	);
}
