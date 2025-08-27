"use client";

interface Props {
	onIsIceChange: (value: boolean) => void;
	isIce: boolean;
}
export default function TemperatureSelector(props: Props) {
	return (
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
	);
}
