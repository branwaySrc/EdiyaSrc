import { ProductType } from "../types";

export const beverageMenu : ProductType[] = [
	{
		productId: "1",
		slug: "breadA",
		productName: "빵에 초콜릿 들어있는거",
		productType: ["iced", "hot"],
		productCategory: "Bakery",
		productDescription: "This is the description of Item that can tell anything about the menu concept and all",
		productPrice: 4200,
		productImage: "/coffee.jpg",
	},
	{
		productId: "2",
		slug: "breadB",
		productName: "빵에 초콜릿 없는거",
		productType: ["iced", "hot"],
		productCategory: "Bakery",
		productDescription: "This is the description of Item that can tell anything about the menu concept and all",
		productPrice: 4200,
		productImage: "/noImage.jpg",
	},
	{
		productId: "3",
		slug: "breadC-latte",
		productName: "빵에 아무것도 없는거",
		productType: ["iced", "hot"],
		productCategory: "Bakery",
		productDescription: "Smooth and sweet vanilla flavor with rich espresso.",
		productPrice: 4500,
		productImage: "/noImage.jpg",
	},
	{
		productId: "4",
		slug: "breadD-latte",
		productName: "베이글",
		productType: ["iced", "hot"],
		productCategory: "Bakery",
		productDescription: "Nutty hazelnut twist for a deeper taste experience.",
		productPrice: 4600,
		productImage: "/noImage.jpg",
	},
];
