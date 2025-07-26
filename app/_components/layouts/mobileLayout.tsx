import { PropsWithChildren } from "react";
interface MobileLayoutProps extends PropsWithChildren {}

export default function MobileLayout(props: MobileLayoutProps): React.ReactNode {
	return (
		<div className="w-full min-h-screen flex justify-center bg-blue-200">
			<div className="w-full max-w-sm mx-auto bg-white relative tracking-tight">{props.children}</div>
		</div>
	);
}
