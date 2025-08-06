import BackAction from "../items/BackAction";
interface NavHeader {
	title?: string;
}

export default function NavHeader(props: NavHeader) {
	return (
		<nav className="flex gap-2 items-center">
			<BackAction />
			<div className="font-bold mb-1">{props.title || "No Title"}</div>
		</nav>
	);
}
