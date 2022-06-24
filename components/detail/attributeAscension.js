import { useState } from 'react';
import ListAsencion from './listAscension';

export default function AttributeAscension({ character, background, material }) {
	const [select, setSelected] = useState('Lv.20');
	const handleSelect = (value) => {
		setSelected(value);
	};
	const combat = character.components[0].data.list.find((c) => c.key === select);
	console.log(combat);
	return (
		<div className={`w-full lg:w-4/5 container mx-auto mt-10 py-12 rounded-xl ${background}`}>
			<div className="px-10 py-8">
				<div className="text-lg text-white font-bold mb-6 pb-3 border-b border-white divide-y-2">
					<div>{character.name}</div>
				</div>

				{character.components.map((component, i) => {
					return (
						<div key={i}>
							<div className="text-lg text-white font-bold">{component.name}</div>
							{/*  */}
							<div key={i} className="grid grid-cols-2 gap-2">
								<div key={i} className="flex justify-between">
									{component.data.list.map((list, i) => {
										const combat = component.data.list.find((c) => {
											return c.key === select;
										});
										return (
											<div key={i}>
												<div
													className="px-4 py-2"
													onClick={() => handleSelect(list.key)}>
													<span
														className={`${
															list.key === select ? 'bg-white/40' : ''
														} text-white border border-white text-opacity-70  px-4 py-1 rounded-full font-semibold cursor-pointer foucs:outline-none"`}>
														{list.key}
													</span>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<ListAsencion data={combat} material={material} />
		</div>
	);
}
