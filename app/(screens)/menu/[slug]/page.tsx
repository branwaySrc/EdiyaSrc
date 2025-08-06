import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface MenuDetailPageProps {
	params: {
		slug: string;
	};
}

export default function MenuDetailPage({ params }: MenuDetailPageProps) {
	const { slug } = params;

	if (!slug) {
		notFound();
	}

	return (
		<main className="p-4">
			<h1>메뉴 상세: {slug}</h1>
			{/* 실제 메뉴 데이터 렌더링 */}
		</main>
	);
}
