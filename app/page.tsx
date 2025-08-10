"use client";

import { PropsWithChildren, useState, useEffect } from "react";
import CoffeeMenuList from "./_components/menus/CoffeeMenuList";
import BeverageMenuList from "./_components/menus/BeverageMenuList";
import Category from "./_components/tiles/Category";
import GoToCartList from './_components/items/GoToCartList';

const CATEGORY = ["커피", "베버리지", "베이커리", "과자"];
const STORAGE_KEY = "selectedCategory";

export default function Home() {
	const [selectedCategory, setSelectedCategory] = useState<string>(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem(STORAGE_KEY) || CATEGORY[0];
		}
		return CATEGORY[0];
	});

	// ✨ selectedCategory 상태가 변경될 때마다 localStorage에 저장합니다.
	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, selectedCategory);
	}, [selectedCategory]);

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category);
	};

	return (
		<>
			<Category.Bar>
				{CATEGORY.map(category => (
					<Category.Item key={category} category={category} onClick={() => handleCategoryClick(category)} active={selectedCategory === category} />
				))}
			</Category.Bar>
			<HomeTitle>{selectedCategory}</HomeTitle>
			{selectedCategory === "커피" && <CoffeeMenuList />}
			{selectedCategory === "베버리지" && <BeverageMenuList />}
			{selectedCategory === "베이커리" && <BeverageMenuList />}
			{selectedCategory === "과자" && <BeverageMenuList />}
			<GoToCartList />
		</>
	);
}

function HomeTitle(props: PropsWithChildren) {
	return (
		<div className="p-4">
			<h1 className="font-bold text-xl">
				{props.children}
				<span className="ml-1">메뉴 리스트</span>
			</h1>
		</div>
	);
}
