import { bakeryMenu } from "./bakery.db";
import { coffeeMenu } from "./coffee.db";
import { snackMenu } from "./snack.db";
import { beverageMenu } from "./beverage.db";

export const EdiyaMenu = [...bakeryMenu, ...coffeeMenu, ...snackMenu, ...beverageMenu];
