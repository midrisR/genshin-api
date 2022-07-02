import { useState, useEffect } from 'react';
import ButtonFilter from './buttonFilter';
import ListAscend from './listAscend';

export default function AttributeAscend({ ascen, background }) {
	const [level, setLevel] = useState('Lv.20');
	const id = [];
	const { ...components } = ascen;
	const data = components.components[0];
	const { list } = data.data;
	const filter = list.filter((c) => {
		return c.key === level;
	});
	if (filter[0].materials !== null) filter[0].materials.map((val) => id.push(val.ep_id));

	useEffect(() => {
		if (filter[0].materials !== null) {
			const u = filter[0].materials.map((val) => val.ep_id);
			id.push(u);
		}
	}, [level]);

	return (
		<div
			className={`w-full container mx-auto mt-10 rounded-xl overflow-hidden ${background} bg-opacity-70`}>
			<div className="px-10 py-8">
				<div className="text-lg text-white font-bold mb-6 pb-3 border-b border-white divide-y-2">
					<span className="capitalize">{data.component_id}</span>
				</div>
				<ButtonFilter levels={list} setLevel={setLevel} />
				<ListAscend level={filter[0].combatList} materials={filter[0].materials} id={id} />
			</div>
		</div>
	);
}
