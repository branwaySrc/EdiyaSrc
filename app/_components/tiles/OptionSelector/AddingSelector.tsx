"use client";
import { useState } from "react";

export default function AddingSelector() {
	return (
		<section className="my-4">
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-2">
					<SelectorHeader header="사이즈" required />
					<RequiredSelector />
				</div>
				<div className="flex flex-col gap-2">
					<SelectorHeader header="에스프레소" />
					<OptionalSelector />
					<OptionalSelector />
					<OptionalSelector />
				</div>
				<div className="flex flex-col gap-2">
					<SelectorHeader header="에스프레소" />
					<OptionalSelector />
					<OptionalSelector />
					<OptionalSelector />
				</div>
			</div>
			<span className="flex border-b border-b-slate-400 w-full h-8" />
		</section>
	);
}

function SelectorHeader(props: { header: string; required?: boolean }) {
	return (
		<div className="flex justify-between bg-slate-200 p-3">
			<h2 className="font-bold">{props.header}</h2>
			{props.required ? <aside className="text-red-600">필수선택 </aside> : <aside className="text-slate-700">선택 옵션</aside>}
		</div>
	);
}

function RequiredSelector() {
	const [selectedOption, setSelectedOption] = useState<string>("Large");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(e.target.value);
	};
	return (
		<>
			<div className="flex justify-between p-4">
				<label className="flex w-full gap-4">
					<input
						className="scale-200 accent-blue-500"
						type="radio"
						name="flavor"
						value="Large"
						checked={selectedOption === "Large"}
						onChange={handleChange}
					/>
					라지
				</label>
				<label className="flex w-full gap-4">
					<input
						className="scale-200 accent-blue-500"
						type="radio"
						name="flavor"
						value="Extra"
						checked={selectedOption === "Extra"}
						onChange={handleChange}
					/>
					엑스트라
				</label>
			</div>
		</>
	);
}

export function OptionalSelector() {
	const [isSelected, setIsSelected] = useState(false);

	const handleToggle = () => {
		setIsSelected(prev => !prev);
	};

	return (
		<label className="p-3 flex gap-3">
			<input className="accent-blue-600 scale-150" type="checkbox" checked={isSelected} onChange={handleToggle} />
			Hazelnut
		</label>
	);
}
