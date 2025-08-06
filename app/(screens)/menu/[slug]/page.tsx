import { defaultItem } from "@/app/util/sampleData";
import { notFound } from "next/navigation";

type PageProps = {
	params: { slug: string };
};

export default function MenuDetailPage({ params }: PageProps) {
	const product = defaultItem.find(item => item.slug === params.slug);

	if (!product) {
		notFound();
	}

	return (
		<main className="p-4">
			<h1 className="text-xl font-bold">{product.productName}</h1>
			<p className="text-sm text-slate-600">{product.productDescription}</p>
			<p className="font-semibold">{product.productPrice}원</p>
			<img src={product.productImage} alt={product.productName} className="w-64 h-64 object-cover mt-4" />
		</main>
	);
}
