// app/_util/types.ts

// 1. 상품 옵션의 값들을 정의하는 타입
export interface ProductOptionValue {
	optionName: string;
	cost: number | string;
}

// 2. 상품 옵션 자체를 정의하는 타입
export interface ProductOption {
	optionCategory: string;
	optionValues: ProductOptionValue[];
}

export type ProductDetailType = ("ice" | "hot" | "cream" | "plain")[];

// 3. 전체 상품의 타입을 정의하는 타입
export interface MenuType {
	productId: string;
	slug: string;
	productName: string;
	productCategory: ProductCategoryType;
	productType: ProductDetailType;
	productDescription: string;
	productPrice: number;
	productImage: string;
	productOptions?: ProductOption[] | null;
}

export type ProductCategoryType = ("coffee" | "beverage" | "bakery" | "snack")[];
