"use client"; // 클라이언트 컴포넌트로 지정

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BackAction() {
	const router = useRouter();

	return (
		<button className="block" type="button" onClick={() => router.back()}>
			<Image alt="backIcon" src={"/chevron-left.svg"} width={30} height={30} />{" "}
		</button>
	);
}
