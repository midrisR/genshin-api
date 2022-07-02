import { useCallback } from 'react';

export default function ButtonTalen({ icons, setSelected, setData, select }) {
	const handleSelected = useCallback((key) => {
		setSelected(key);
		setData(icons[key]);
	});

	return (
		<div className="flex flex-wrap justify-start lg:justify-between">
			{icons.map((icon, i) => {
				return (
					<div key={i} className="w-1/4 lg:w-max p-2">
						<div
							className={`${
								select === i ? 'bg-white/20' : ''
							} rounded-full p-3 border-4 border-slate-100/70 cursor-pointer`}
							onClick={() => handleSelected(i)}>
							<img src={icon.icon_url} alt={icon.icon_url} className="w-8" />
						</div>
					</div>
				);
			})}
		</div>
	);
}
