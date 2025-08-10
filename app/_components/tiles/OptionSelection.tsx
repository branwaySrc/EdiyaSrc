// app/_components/tiles/OptionSelection.tsx
"use client";

interface Props {
	quantity: number;
	isIce: boolean;
	productPrice: number;
	onQuantityChange: (change: number) => void;
	onIsIceChange: (value: boolean) => void;
}

export default function OptionSelection(props: Props) {
	const totalCost = props.quantity * props.productPrice;

	return (
		<div className='px-4'>
			<section className="border p-2 rounded-lg border-slate-300 my-3">
				<div className="px-1 flex items-center justify-between ">
					<div>
						<span className="font-bold text-slate-600">주문 수량</span>
					</div>
					<div className="flex items-center gap-2">
						<button onClick={() => props.onQuantityChange(-1)} className="border py-2 px-3 rounded font-bold" disabled={props.quantity <= 1}>
							-
						</button>
						<span className="w-6 text-center font-bold text-lg">{props.quantity}</span>
						<button onClick={() => props.onQuantityChange(1)} className="border py-2 px-3 rounded font-bold">
							+
						</button>
					</div>
				</div>
			</section>
			<section className="mt-4">
				<div className="flex gap-2 p-2 rounded-lg bg-slate-200">
					<button
						onClick={() => props.onIsIceChange(false)}
						className={`px-4 py-3 rounded-lg block w-full ${!props.isIce ? "bg-red-500 text-white" : "bg-slate-400 text-white"}`}
					>
						HOT
					</button>
					<button
						onClick={() => props.onIsIceChange(true)}
						className={`px-4 py-3 rounded-lg block w-full ${props.isIce ? "bg-blue-500 text-white" : "bg-slate-400 text-white"}`}
					>
						<span>ICE</span>
					</button>
				</div>
			</section>
			<section className="flex justify-between mt-5">
				<div className="font-bold text-slate-700">예상 비용</div>
				<div className="font-bold text-slate-700">
					{totalCost.toLocaleString()}
					<span className="ml-1">원</span>
				</div>
			</section>
		</div>
	);
}
