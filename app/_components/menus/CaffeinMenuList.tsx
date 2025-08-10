import Product from "../items/Product";
import { defaultItem } from "@/app/_util/sampleData";
export default function CaffeinMenuList() {
	const DATA = defaultItem;
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
