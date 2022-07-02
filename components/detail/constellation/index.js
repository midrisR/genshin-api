import Image from 'next/image';

export default function Constellation({ constellation, background }) {
	const { list } = constellation.components[0].data;
	const anchorTagsRemoved = (data) => {
		return data.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g, ' ');
	};

	return (
		<div
			className={`w-full container mx-auto mt-10 rounded-xl overflow-x-auto ${background} bg-opacity-70`}>
			<div className="px-10 py-8">
				<div className="text-lg text-white font-bold mb-6 pb-3 border-b border-white divide-y-2">
					<span className="capitalize">{constellation.name}</span>
				</div>
				{list.map((c, i) => (
					<div key={i} className="py-3">
						<div className="flex items-center">
							<Image
								loading="lazy"
								src={c.icon_url}
								alt="image-alt-text"
								width={60}
								height={60}
							/>
							<span className="text-white text-lg font-bold ml-4">{c.name}</span>
						</div>
						<div
							className="text-white/80"
							dangerouslySetInnerHTML={{ __html: anchorTagsRemoved(c.desc) }}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
