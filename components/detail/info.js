import Star from '../star';
export default function CharacterInfo({ character, background }) {
	const filterValue = Object.values(character.filter_values);
	return (
		<>
			<div className="w-full top-20 z-20">
				<div className=" px-3 lg:px-36">
					<div className="flex gap-2 items-center">
						{/* character icon */}
						<div
							className={`${
								background[character.filter_values.character_vision]
							} shadow-xl rounded-xl overflow-hidden`}>
							<img src={character.icon_url} className="rounded-lg w-20" alt="" />
						</div>
						{/* character info */}
						<div className="info">
							<div className="flex gap-2">
								<p className="text-white text-2xl font-black uppercase">
									{character.name}
								</p>
								<div className="">
									<img
										src={`../images/${character.filter_values.character_vision}.png`}
										className="w-8 absolute"
									/>
								</div>
							</div>
							{/* character rarity */}
							<Star star={character.filter_values.character_rarity} />
						</div>
					</div>
					{/* character bio */}
					<div className="flex gap-4 mt-3">
						{filterValue.map((val, i) => (
							<div
								key={i}
								className="text-white text-xs px-3 bg-black p-1 rounded-md bg-opacity-40">
								{val}
							</div>
						))}
					</div>
					{/* character desc */}
					<div className="w-full md:w-1/2">
						<span className="text-white text-sm italic mt-3">{character.desc}</span>
					</div>
				</div>
			</div>
		</>
	);
}
