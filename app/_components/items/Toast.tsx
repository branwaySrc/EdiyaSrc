interface Props {
	message?: string;
}
export default function Toast(props: Props) {
	return (
		<div className="fixed top-8 w-full min-w-sm max-w-xl mx-auto flex items-center justify-center">
			<article className="p-3 bg-slate-900 w-full text-center mx-8 rounded-lg">
				<span className="text-white font-bold text-sm">{props.message || "Something has happen"}</span>
			</article>
		</div>
	);
}
