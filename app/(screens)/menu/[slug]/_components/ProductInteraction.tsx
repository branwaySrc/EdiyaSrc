// app/_components/tiles/ProductInteraction.tsx
"use client";

import { useState } from "react";
import { ProductType } from "@/app/_util/types";
import OptionSelection from "@/app/_components/tiles/OptionSelection";
import CartFloatingBar from "@/app/_components/tiles/CartFloatingBar";

interface Props {
	product: ProductType;
}

export default function ProductInteraction({ product }: Props) {
	const [selectedOptions, setSelectedOptions] = useState({
		quantity: 1,
		isIce: false,
	});

	const handleQuantityChange = (change: number) => {
		setSelectedOptions(prevOptions => ({
			...prevOptions,
			quantity: prevOptions.quantity + change,
		}));
	};

	const handleIsIceChange = (value: boolean) => {
		setSelectedOptions(prevOptions => ({
			...prevOptions,
			isIce: value,
		}));
	};

	return (
		<>
			{/* OptionSelection에 상태와 핸들러를 props로 전달 */}
			<OptionSelection
				quantity={selectedOptions.quantity}
				isIce={selectedOptions.isIce}
				productPrice={product.productPrice}
				onQuantityChange={handleQuantityChange}
				onIsIceChange={handleIsIceChange}
			/>
			{/* FloatingBar에 선택된 옵션 상태와 상품 정보 전달 */}
			<CartFloatingBar
				product={{
					...product,
					...selectedOptions, // quantity와 isIce 추가
				}}
			/>
		</>
	);
}
