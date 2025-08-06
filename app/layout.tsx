import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import MobileLayout from "@/app/_components/layouts/mobileLayout";
import "./globals.css";
import MobileHeader from "@/app/_components/layouts/mobileHeader";
import MobileFooter from "./_components/layouts/mobileFooter";
import MobileBody from "./_components/layouts/mobileBody";

const notoSansKR = Noto_Sans_KR({
	variable: "--font-noto-sans-kr",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "이디야 월피동점 메뉴판",
	description: "이디야커피 월피동점",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${notoSansKR.variable} antialiased`}>
				<MobileLayout>
					<MobileHeader />
					<MobileBody>{children}</MobileBody>
					<MobileFooter />
				</MobileLayout>
			</body>
		</html>
	);
}
