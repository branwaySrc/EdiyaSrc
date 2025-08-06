import { defaultItem } from "@/app/util/sampleData";
import { notFound } from "next/navigation";
import NavHeader from "@/app/_components/tiles/NavHeader";

// Correctly define PageProps to indicate 'params' is a Promise
type PageProps = {
	params: Promise<{ slug: string }>;
};

export default async function MenuDetailPage({ params }: PageProps) {
	// Await the params to get the object with the slug
	const resolvedParams = await params;
	const product = defaultItem.find(product => product.slug === resolvedParams.slug);

	if (!product) {
		notFound();
	}

	return (
		<main className="p-4">
			<NavHeader title={product.productName} />
			<h1 className="text-xl font-bold">{product.productName}</h1>
			<p className="text-sm text-slate-600">{product.productDescription}</p>
			<p className="font-semibold">{product.productPrice}원</p>
			<img src={product.productImage} alt={product.productName} className="w-64 h-64 object-cover mt-4" />
		</main>
	);
}
