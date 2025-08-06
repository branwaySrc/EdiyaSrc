// app/menu/[slug]/page.tsx

import { notFound } from "next/navigation";

export default function MenuDetailPage({ params }: { params: { slug: string } }) {
	const { slug } = params;

	// 예시: slug 검증 또는 데이터 fetch
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
