import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

function ProductList(props: PropsWithChildren) {
	return <ul className="list-none flex flex-col gap-2 px-4 mb-10">{props.children}</ul>;
}

interface ProductItemProps {
	slug: string;
	productName: string;
	productDescription?: string;
	productPrice: number;
	productImage: string;
	productType: string[];
}

function ProductItem(props: ProductItemProps) {
	const { productType } = props;

	const hasHot = productType.includes("hot");
	const hasIced = productType.includes("iced");

	return (
		<Link href={`./menu/${props.slug}`}>
			<li className="w-full border border-slate-200 rounded-lg p-4 flex justify-between">
				<section className="flex flex-col max-w-[320px] gap-2 justify-between">
					<div className="flex flex-col gap-2">
						<h2 className="font-bold text-md ">{props.productName}</h2>
						<legend className="font-bold text-lg">
							{props.productPrice}
							<span>원</span>
						</legend>
					</div>
					<article className="flex flex-col gap-2">
						<div className="text-xs font-bold text-slate-400">선택 가능한 옵션</div>
						<div className="flex gap-2">
							{hasIced && <IcedBadge />}
							{hasHot && <HotBadge />}
						</div>
					</article>
				</section>
				<aside className="w-full max-w-[120px] min-w-[100px]">
					<div className="border rounded-md border-slate-200 overflow-hidden ">
						<Image alt={"menu"} src={props.productImage || "./noImage"} width={120} height={120} />
					</div>
				</aside>
			</li>
		</Link>
	);
}

function IcedBadge() {
	return <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-xs">🧊 ICED</span>;
}

function HotBadge() {
	return <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded-xs">🔥 HOT</span>;
}

const Product = {
	Item: ProductItem,
	List: ProductList,
};

export default Product;
