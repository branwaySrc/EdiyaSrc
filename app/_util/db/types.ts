// app/_util/types.ts

// 1. 상품 옵션의 값들을 정의하는 타입
export interface ProductOptionValue {
	option: string;
	cost: number;
}

// 2. 상품 옵션 자체를 정의하는 타입
export interface ProductOption {
	optionName: string;
	optionValues: string[] | ProductOptionValue[];
}

// 🔥 productCategory와 productType을 배열 타입으로 변경
export type ProductCategoryType = ("coffee" | "beverage" | "bakery" | "snack")[];
export type ProductDetailType = ("ice" | "hot" | "cream" | "plain")[];

// 3. 전체 상품의 타입을 정의하는 타입
export interface MenuType {
	productId: string;
	slug: string;
	productName: string;
	productCategory: ProductCategoryType; // 🔥 변경된 타입 적용
	productType: ProductDetailType; // 🔥 변경된 타입 적용
	productDescription: string;
	productPrice: number;
	productImage: string; // 🔥 productOptions를 위에서 정의한 타입으로 설정
	productOptions: ProductOption[];
}
