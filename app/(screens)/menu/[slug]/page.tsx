import { defaultItem } from "@/app/util/sampleData";
import { notFound } from "next/navigation";
import NavHeader from "@/app/_components/tiles/NavHeader";
import Image from "next/image";

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
		<>
			<NavHeader title={product.productName} />
			<main className="p-4">
				<legend className="flex items-center justify-center">
					<Image src={product.productImage} alt={product.productName} width={320} height={320} />
				</legend>
				<div className="flex flex-col gap-2">
					<p className="text-sm text-slate-600 leading-5">{product.productDescription}</p>
					<p className="font-semibold text-xl">{product.productPrice} 원</p>
				</div>
			</main>
		</>
	);
}
