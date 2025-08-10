// app/_util/types.ts (수정된 코드)

export interface ProductType {
	productId: string;
	slug: string;
	productName: string;
	productType: string[];
	productCategory: "Coffee" | "Beverage" | "Bakery" | "Snack";
	productDescription: string;
	productPrice: number;
	productImage: string;
}

// ✨ 장바구니에 담을 때 사용되는 객체 타입
// product 정보, 수량, 온도가 모두 포함됩니다.
export interface AddToCartItem extends ProductType {
	isIce: boolean;
	quantity: number; // 🔥 quantity 속성 추가
}

// 장바구니에 담긴 상품 타입 (CartState에서 사용)
