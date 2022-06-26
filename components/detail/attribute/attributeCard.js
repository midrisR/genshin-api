export default function AttributeCard({ character, background }) {
	return (
		<div
			className={`w-full lg:w-4/5 container mx-auto mt-10 rounded-xl overflow-x-auto ${background}`}>
			<div className="px-10 py-8">
				<div className="text-lg text-white font-bold mb-6 pb-3 border-b border-white divide-y-2">
					<div>{character.name}</div>
				</div>

				{character.components.map((component, i) => {
					return (
						<div key={i}>
							<div className="text-lg text-white font-bold">{component.name}</div>
							{/*  */}
							<div key={i} className="grid grid-1 lg:grid-cols-2 lg:gap-2 gap-y-4">
								{component.data.list.map((list, i) => (
									<div key={i} className="div flex gap-8 md:gap-2">
										<div className="w-2/5">
											<span className="text-white text-opacity-70 font-semibold">
												{list.key}
											</span>
										</div>
										<span className="text-white text-opacity-90 text-sm md:text-base">
											{list.value}
										</span>
									</div>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
