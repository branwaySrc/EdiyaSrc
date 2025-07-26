import { PropsWithChildren } from "react";

function CategoryBar(props: PropsWithChildren) {
	const topSticky = "sticky top-0 z-50";
	return (
		<aside className={`flex gap-2 py-2 border-b border-slate-200 bg-white ${topSticky}`}>
			<span className="ml-[0px] " />
			{props.children}
		</aside>
	);
}

interface CategoryItemProps {
	category?: string;
	onClick?: () => void;
	active?: boolean; // 선택된 상태 (props.current → active로 통일)
	disabled?: boolean;
	hidden?: boolean; // hidden 상태
}

function CategoryItem(props: CategoryItemProps) {
	const { category, onClick, active, disabled, hidden } = props;

	const hiddenClass = hidden ? "hidden" : "";
	const activeClass = active ? "border-blue-700 bg-blue-700 text-white" : "border-slate-500 text-slate-500";

	return (
		<button onClick={onClick} disabled={disabled} className={`border rounded-md px-3 py-2 ${hiddenClass} ${activeClass}`}>
			<span className="text-sm font-bold">{category || "아이템"}</span>
		</button>
	);
}

const Category = {
	Bar: CategoryBar,
	Item: CategoryItem,
};

export default Category;
