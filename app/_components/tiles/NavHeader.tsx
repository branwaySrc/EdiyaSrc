import BackAction from "../items/BackAction";
interface NavHeader {
	title?: string;
}

export default function NavHeader(props: NavHeader) {
	return (
		<nav className="flex gap-3 items-center py-3 px-2 border-b border-slate-200">
			<BackAction />
			<div className="font-bold text-xl">{props.title || "No Title"}</div>
		</nav>
	);
}
