import { PropsWithChildren } from "react";

function ProductList(props: PropsWithChildren) {
	return <ul className="list-none flex flex-col px-1 gap-2 mt-4">{props.children}</ul>;
}

function ProductItem(props: PropsWithChildren) {
	return (
		<li className="w-full border border-slate-400 rounded-lg p-4">
			<span>This is the Item{props.children}</span>
		</li>
	);
}

const Product = {
	Item: ProductItem,
	List: ProductList,
};

export default Product;
