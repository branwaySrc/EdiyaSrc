// app/_util/data/coffeeMenu.ts
import { MenuType } from "./types";

export const coffeeMenu: MenuType[] = [
	{
		productId: "C01",
		slug: "americano",
		productName: "아메리카노",
		productCategory: ["coffee"],
		productType: ["ice", "hot"],
		productDescription: "에스프레소에 물을 더한 클래식 커피.",
		productPrice: 3200,
		productImage: "/noImage.jpg",
		productOptions: [
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
		],
	},
	{
		productId: "C02",
		slug: "cafelatte",
		productName: "카페 라떼",
		productCategory: ["coffee"],
		productType: ["ice", "hot", "cream"],
		productDescription: "풍부한 에스프레소와 부드러운 우유의 조화.",
		productPrice: 3700,
		productImage: "/noImage.jpg",
		productOptions: [
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
		],
	},
	{
		productId: "C03",
		slug: "caramel-macchiato",
		productName: "카라멜 마끼아또",
		productCategory: ["coffee"],
		productType: ["ice", "hot", "cream"],
		productDescription: "달콤한 카라멜 소스가 더해진 라떼.",
		productPrice: 4200,
		productImage: "/noImage.jpg",
		productOptions: [
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
		],
	},
	{
		productId: "C04",
		slug: "vanilla-latte",
		productName: "바닐라 라떼",
		productCategory: ["coffee"],
		productType: ["ice", "hot"],
		productDescription: "부드러운 바닐라 향이 일품인 라떼.",
		productPrice: 4200,
		productImage: "/noImage.jpg",
		productOptions: [
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
		],
	},
	{
		productId: "C05",
		slug: "cappuccino",
		productName: "카푸치노",
		productCategory: ["coffee"],
		productType: ["ice", "hot", "cream"],
		productDescription: "에스프레소에 우유 거품을 가득 올린 커피.",
		productPrice: 3700,
		productImage: "/noImage.jpg",
		productOptions: [
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
		],
	},
	{
		productId: "C06",
		slug: "espresso",
		productName: "에스프레소",
		productCategory: ["coffee"],
		productType: ["hot"],
		productDescription: "커피의 진한 맛을 느낄 수 있는 기본 에스프레소.",
		productPrice: 2500,
		productImage: "/noImage.jpg",
		productOptions: [
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
		],
	},
	{
		productId: "C07",
		slug: "cafe-mocha",
		productName: "카페 모카",
		productCategory: ["coffee"],
		productType: ["ice", "hot"],
		productDescription: "초콜릿 소스와 에스프레소, 우유가 어우러진 달콤한 커피.",
		productPrice: 4200,
		productImage: "/noImage.jpg",
		productOptions: [
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
		],
	},
	{
		productId: "C08",
		slug: "tiramisu-latte",
		productName: "티라미수 라떼",
		productCategory: ["coffee"],
		productType: ["ice", "hot"],
		productDescription: "티라미수 맛을 그대로 담은 특별한 라떼.",
		productPrice: 4500,
		productImage: "/noImage.jpg",
		productOptions: [
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
		],
	},
	{
		productId: "C09",
		slug: "dolce-latte",
		productName: "돌체 라떼",
		productCategory: ["coffee"],
		productType: ["ice", "hot"],
		productDescription: "연유의 달콤함이 느껴지는 부드러운 라떼.",
		productPrice: 4500,
		productImage: "/noImage.jpg",
		productOptions: [
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
		],
	},
	{
		productId: "C10",
		slug: "hazelnut-latte",
		productName: "헤이즐넛 라떼",
		productCategory: ["coffee"],
		productType: ["ice", "hot"],
		productDescription: "헤이즐넛 시럽이 더해져 고소한 풍미가 가득한 라떼.",
		productPrice: 4200,
		productImage: "/noImage.jpg",
		productOptions: [
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
			{
				optionName: "Size",
				optionValues: [
					{ option: "Regular", cost: 0 },
					{ option: "Large", cost: 500 },
				],
			},
		],
	},
];
