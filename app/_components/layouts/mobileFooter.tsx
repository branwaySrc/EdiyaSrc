import { PropsWithChildren } from "react";

export default function MobileFooter(props: PropsWithChildren) {
	return (
		<footer className="bg-slate-300  w-full flex">
			<div className="px-4 py-6 text-slate-500">
				<legend className="font-bold text-sm mb-2">이디야커피 월피동점</legend>
				<ul className="text-xs flex flex-col gap-1">
					<li>사업자등록번호 123-4567-789</li>
					<li>
						책임자 김민석 <span>070-4567-7897</span>
					</li>
					<li>서울특별시 구로구 오류로 30 천왕연지타운 1층 이디야</li>
				</ul>
			</div>
		</footer>
	);
}
