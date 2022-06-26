import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default React.memo(function Character({ characters }) {
	return (
		<>
			{characters.map((character, i) => {
				return (
					<div key={i} className="w-1/2 lg:w-1/6 p-4">
						<Link href={`/characters/${character._id}`}>
							<a>
								<div className="relative bg-slate-700 p-6 rounded-lg h-60 ">
									{character.filter_values?.character_vision !== undefined && (
										<img
											src={`images/${character.filter_values.character_vision}.png`}
											className="w-8 absolute"
										/>
									)}
									<div className="flex items-center justify-center">
										<div className="rounded-full overflow-hidden w-3/4">
											<Image
												loading="lazy"
												src={character.icon_url}
												alt={character.name}
												width={500}
												height={500}
												// objectFit="cover"
												layout="responsive"
											/>
										</div>
									</div>
									<div className="w-full text-slate-200 text-lg text-center px-3 py-8">
										<span>{character.name}</span>
									</div>
								</div>
							</a>
						</Link>
					</div>
				);
			})}
		</>
	);
});
