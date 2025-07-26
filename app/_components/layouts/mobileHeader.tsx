import { Children, PropsWithChildren } from "react";

export default function MobileHeader(props: PropsWithChildren) {
	return (
		<nav className="bg-blue-700 h-5 flex justify-center items-center py-5">
			<h1 className="text-white font-bold">이디야 월피동점</h1>
		</nav>
	);
}
