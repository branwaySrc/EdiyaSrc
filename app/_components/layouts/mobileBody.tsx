import { PropsWithChildren } from "react";

export default function MobileBody(props: PropsWithChildren) {
	return <main className="w-full min-h-screen relative">{props.children}</main>;
}
