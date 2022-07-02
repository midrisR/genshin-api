import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default React.memo(function Character({ characters }) {
	return (
		<>
			{characters.map((character, i) => {
				return (
					<div key={i} className="container mx-auto lg:m-0 w-1/2 lg:w-1/6 p-4">
						<Link href={`/characters/${character._id}`}>
							<a>
								<div className="w-full relative bg-slate-600 p-6 rounded-xl shadow-lg overflow-hidden">
									{character.filter_values?.character_vision !== undefined && (
										<img
											src={`images/${character.filter_values.character_vision}.png`}
											className="w-8 absolute z-10 left-12 lg:left-3"
										/>
									)}
									<div className="mx-auto rounded-full overflow-hidden w-40	md:w-auto">
										<Image
											loading="lazy"
											src={character.icon_url}
											alt={character.name}
											width={200}
											height={200}
											layout="responsive"
										/>
									</div>
									<div className="w-full text-slate-200 font-semibold text-lg text-center mt-4">
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
