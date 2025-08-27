// app/_components/tiles/OptionSelection.tsx
"use client";

import { MenuType } from "@/app/_util/db/types";
import QuantitySelector from "./OptionSelector/QuantitySelector";
import TemperatureSelector from "./OptionSelector/TemperatureSelector";
import AddingSelector from './OptionSelector/AddingSelector';

interface Props {
	quantity: number;
	isIce: boolean;
	productPrice: number;
	onQuantityChange: (change: number) => void;
	onIsIceChange: (value: boolean) => void;
	option?: MenuType["productOptions"] | null;
}

export default function OptionSelection(props: Props) {
	const totalCost = props.quantity * props.productPrice;

	return (
		<div className="px-4">
			<QuantitySelector quantity={props.quantity} onQuantityChange={props.onQuantityChange} onIsIceChange={props.onIsIceChange} />
			<TemperatureSelector onIsIceChange={props.onIsIceChange} isIce={props.isIce} />
			<AddingSelector/>
			<EstimatedCost>{totalCost.toLocaleString()}</EstimatedCost>
		</div>
	);
}

function EstimatedCost(props: { children: React.ReactNode }) {
	return (
		<section className="flex justify-between mt-5">
			<div className="font-bold text-slate-700">예상 비용</div>
			<div className="font-bold text-slate-700">
				{props.children}
				<span className="ml-1">원</span>
			</div>
		</section>
	);
}
