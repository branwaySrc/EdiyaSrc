import Product from "../items/Product";
import { beverageMenu } from "@/app/_util/data/beverageMenu";
export default function BeverageMenuList() {
	const DATA = beverageMenu;
	return (
		<Product.List>
			{DATA.map(product => (
				<Product.Item
					slug={product.slug}
					key={product.productId}
					productDescription={product.productDescription}
					productName={product.productName}
					productPrice={product.productPrice}
					productType={product.productType}
					productImage={product.productImage}
				/>
			))}
		</Product.List>
	);
}
