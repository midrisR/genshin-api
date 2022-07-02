import Star from './star';
import Image from 'next/image';

export default function CharacterInfo({ character, background }) {
	const filterValue = Object.values(character.filter_values);
	return (
		<>
			<div className="w-full top-20 z-20 mt-20">
				<div className="flex gap-2 items-center">
					{/* character icon */}
					<div
						className={`${
							background[character.filter_values.character_vision]
						} shadow-xl rounded-xl overflow-hidden`}>
						<div
							style={{
								width: '5rem',
								height: '5rem',
								position: 'relative',
							}}>
							<Image
								src={character.icon_url}
								layout="fill"
								objectFit="cover"
								alt={character.name}
							/>
						</div>
					</div>
					{/* character info */}
					<div className="info">
						<div className="flex gap-2">
							<p className="text-white text-2xl font-black uppercase">
								{character.name}
							</p>
							<div
								className="rounded-xl overflow-hidden"
								style={{
									width: '1.5rem',
									height: '1.5rem',
									position: 'relative',
								}}>
								<Image
									src={`/images/${character.filter_values.character_vision}.png`}
									layout="fill"
									objectFit="cover"
									alt={character.filter_values.character_vision}
								/>
							</div>
						</div>
						{/* character rarity */}
						<Star star={character.filter_values.character_rarity} />
					</div>
				</div>
				{/* character bio */}
				<div className="flex flex-wrap gap-2 mt-3">
					{filterValue.map((val, i) => (
						<div
							key={i}
							className="text-white text-xs px-3 bg-black p-1 rounded-md bg-opacity-40 w-fit">
							{val}
						</div>
					))}
				</div>
				{/* character desc */}
				<div className="w-full md:w-1/2">
					<span className="text-white text-sm italic mt-3">{character.desc}</span>
				</div>
			</div>
		</>
	);
}
