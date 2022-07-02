import React, { useEffect, useState } from 'react';
import ButtonTalen from './buttonTallent';
import InfoTalent from './infoTalent';
import AttributeTalentInfo from './attributeTalentInfo';

export default function AttributeTalent({ talent, background }) {
	const { list } = talent.components[0].data;
	const [select, setSelected] = useState(0);
	const [data, setData] = useState(list[select]);

	useEffect(() => {
		setData(list[select]);
	}, [select, data, list]);

	return (
		<div className={`w-full container mx-auto mt-10 rounded-xl ${background} bg-opacity-70`}>
			<div className="px-10 pt-10 pb-20">
				<div className="text-lg text-white font-bold mb-6 pb-3 border-b border-white divide-y-2">
					<div>{talent.name}</div>
				</div>
				<ButtonTalen
					icons={list}
					setSelected={setSelected}
					setData={setData}
					select={select}
				/>
				<InfoTalent talents={data} />
				<AttributeTalentInfo talent={data} background={background} />
			</div>
		</div>
	);
}
