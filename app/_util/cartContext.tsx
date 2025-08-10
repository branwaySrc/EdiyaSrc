"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
	slug: string;
	productName: string;
	productPrice: number;
}

interface CartContextType {
	cart: CartItem[];
	addToCart: (item: CartItem) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
	children: ReactNode;
}

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

	const addToCart = (item: CartItem) => {
		setCart(prevCart => [...prevCart, item]);
	};

	return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}
