import Product from "../items/Product";
import { coffeeMenu } from "@/app/_util/data/coffeeMenu";
export default function CoffeeMenuList() {
	const DATA = coffeeMenu;
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
