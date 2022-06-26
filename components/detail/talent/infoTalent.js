import { useEffect, useState } from 'react';
export default function InfoTalent({ talents, select }) {
	const [load, setLoad] = useState(true);
	const anchorTagsRemoved = talents.desc
		.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g, ' ')
		.replace(/(<span)/gim, '<div')
		.replace(/<\/span>/gim, '</div>');

	const handleLoad = () => {
		setLoad((load) => !load);
	};

	useEffect(() => {
		const el = document.getElementById('info').children;
		[...el].map((element) => {
			element.classList.add('mt-4');
		});
	}, []);

	return (
		<div className="w-full flex flex-wrap mt-10">
			<div className="w-full md:w-2/5 ">
				{talents.talent_img !== null ? (
					<div className="rounded-xl overflow-hidden">
						<img src={talents.talent_img} />
					</div>
				) : undefined}
			</div>
			<div
				className={`${
					talents.talent_img ? 'md:w-3/5' : 'w-full'
				} px-8 mt-5 md:mt-0 no-scrollbar text-white lg:overflow-visible`}>
				<p className="text-3xl font-bold mb-2">{talents.key}</p>
				<div
					id="info"
					className={load ? 'h-40 overflow-hidden transition-all' : undefined}
					dangerouslySetInnerHTML={{ __html: anchorTagsRemoved }}
				/>
				{anchorTagsRemoved.length > 300 ? (
					<div
						className="w-max mt-2 px-4 py-1 rounded-lg text-white text-sm flex gap-1 items-center bg-white/20 cursor-pointer"
						onClick={handleLoad}>
						<span>Collapse</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4"
							viewBox="0 0 20 20"
							fill="currentColor">
							<path
								fillRule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				) : undefined}
			</div>
		</div>
	);
}
