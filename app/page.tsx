"use client";

import { PropsWithChildren, useState } from "react";
import CaffeinMenuList from "./_components/menus/CaffeinMenuList";
import Category from "./_components/tiles/Category";

const CATEGORY = ["커피", "베버리지", "베이커리", "과자"];

export default function Home() {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(CATEGORY[0]);
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
			{selectedCategory === "커피" && <CaffeinMenuList />}
			{selectedCategory === "베버리지" && <div>🍹 Beverage List</div>}
			{selectedCategory === "베이커리" && <div>🥐 Bakery List</div>}
			{selectedCategory === "과자" && <div>🍪 Snack List</div>}
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
