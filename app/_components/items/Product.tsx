import { PropsWithChildren } from "react";

interface ProductBarProps extends PropsWithChildren {}
function ProductList(props: ProductBarProps) {
	return <ul className="list-none flex flex-col px-1 gap-2 mt-4">{props.children}</ul>;
}

interface ProductProps extends PropsWithChildren {}
function ProductItem(props: ProductProps) {
	return (
		<li className="w-full border border-slate-400 rounded-lg p-4">
			<span>This is the Item</span>
		</li>
	);
}

const Product = {
	Item: ProductItem,
	List: ProductList,
};

export default Product;
