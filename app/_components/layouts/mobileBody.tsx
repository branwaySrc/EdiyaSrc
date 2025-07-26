import { PropsWithChildren } from "react";

interface MobileBodyProps extends PropsWithChildren {}

export default function MobileBody(props: MobileBodyProps) {
	return <main className="w-full min-h-screen relative">{props.children}</main>;
}
