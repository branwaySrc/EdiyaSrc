"use client";
import { useState } from "react";
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
			{selectedCategory === "커피" && <CaffeinMenuList />}
			{selectedCategory === "베버리지" && <div>🍹 Beverage List</div>}
			{selectedCategory === "베이커리" && <div>🥐 Bakery List</div>}
			{selectedCategory === "과자" && <div>🍪 Snack List</div>}
		</>
	);
}
