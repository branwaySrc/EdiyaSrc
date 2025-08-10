"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartItem, AddToCartItem } from "./types";

interface CartContextType {
	cart: CartItem[];
	addToCart: (item: AddToCartItem) => void;
	removeItem: (slug: string, isIce: boolean) => void;
	updateQuantity: (slug: string, isIce: boolean, quantity: number) => void;
}
interface CartProviderProps {
	children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: CartProviderProps) {
	const [cart, setCart] = useState<CartItem[]>([]);

	useEffect(() => {
		const storedCart = localStorage.getItem("cart");
		if (storedCart) {
			setCart(JSON.parse(storedCart));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	// ✨ 수정된 addToCart 함수
	const addToCart = (item: AddToCartItem) => {
		setCart(prevCart => {
			// slug와 isIce가 모두 일치하는 기존 상품을 찾는다.
			const existingItem = prevCart.find(cartItem => cartItem.slug === item.slug && cartItem.isIce === item.isIce);
			if (existingItem) {
				return prevCart.map(cartItem =>
					cartItem.slug === item.slug && cartItem.isIce === item.isIce ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
				);
			}
			return [...prevCart, { ...item, quantity: item.quantity }];
		});
	};
	// ✨ removeItem 함수 수정
	const removeItem = (slug: string, isIce: boolean) => {
		setCart(prevCart => prevCart.filter(item => !(item.slug === slug && item.isIce === isIce)));
	};

	// ✨ updateQuantity 함수 수정
	const updateQuantity = (slug: string, isIce: boolean, quantity: number) => {
		if (quantity <= 0) {
			removeItem(slug, isIce); // 수정된 removeItem 호출
			return;
		}
		setCart(prevCart => prevCart.map(item => (item.slug === slug && item.isIce === isIce ? { ...item, quantity } : item)));
	};

	return <CartContext.Provider value={{ cart, addToCart, removeItem, updateQuantity }}>{children}</CartContext.Provider>;
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}
