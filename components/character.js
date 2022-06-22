import React from 'react';

export default React.memo(function Character({ characters }) {
	return (
		<>
			{characters.map((character, i) => {
				return (
					<div key={i} className="w-1/5 p-4">
						<div className="relative bg-slate-700 p-8 rounded-lg h-72">
							{character.filter_values.character_vision !== undefined && (
								<img
									src={`images/${character.filter_values.character_vision}.png`}
									className="w-8 absolute"
								/>
							)}
							<img src={character.icon_url} className="rounded-full mx-auto" alt="" />
							<div className="w-full text-slate-200 text-center px-3 py-8">
								<span>{character.name}</span>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
});
