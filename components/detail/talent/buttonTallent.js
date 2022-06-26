export default function ButtonTalen({ icons, handleClick }) {
	return (
		<div className="flex flex-wrap justify-start lg:justify-between">
			{icons.map((icon, i) => {
				return (
					<div key={i} className="w-1/4 lg:w-max p-2">
						<div
							className="rounded-full p-3  border-2 border-slate-100/70 cursor-pointer"
							onClick={() => handleClick(i)}>
							<img src={icon.icon_url} alt={icon.icon_url} className="w-12" />
						</div>
					</div>
				);
			})}
		</div>
	);
}
