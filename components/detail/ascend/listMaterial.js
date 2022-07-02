import React from 'react';
import Image from 'next/image';

export default function ListMaterial({ materials, list }) {
	const filter = (id) => materials.filter((key) => key.material_id === id);

	if (list === null) return undefined;

	return (
		<div className="w-full lg:w-2/6 div p-4 flex flex-wrap px-4">
			{list.map((count, i) => {
				const material = filter(count.ep_id.toString());
				const src = { src: material[0]?.icon_url ?? '/images/loading.gif' };
				return (
					<div key={i} className="w-1/4 px-1 mb-2">
						<div className="bg-slate-100 rounded-lg overflow-hidden relative">
							{material !== null ? (
								<React.Fragment>
									{material[0] !== null ? (
										<Image
											loading="lazy"
											{...src}
											alt="image-alt-text"
											width={500}
											height={500}
										/>
									) : undefined}
									<span
										key={i}
										className="text-white text-xxs tetx-center px-2 rounded-bl-lg bg-gray-800 absolute top-0 pb-0.5 -right-1">
										{count.amount}
									</span>
									<div className="absolute -bottom-2.5 px-1.5 mb-3">
										<span className="text-xxs text-slate-800 font-semibold truncate">
											{material[0]?.name}
										</span>
									</div>
								</React.Fragment>
							) : undefined}
						</div>
					</div>
				);
			})}
		</div>
	);
}
