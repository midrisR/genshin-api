import { useEffect, useState } from 'react';
import ButtonTalen from './buttonTallent';
import InfoTalent from './infoTalent';

export default function AttributeTalent({ talent, background }) {
	const { list } = talent.components[0].data;
	const [select, setSelected] = useState(0);
	const [data, setData] = useState(list[select]);

	const handleSelected = (key) => {
		setSelected(key);
	};

	useEffect(() => {
		setData(list[select]);
	}, [select]);

	return (
		<div className={`w-full lg:w-4/5 container mx-auto mt-10 rounded-xl ${background}`}>
			<div className="px-10 pt-10 pb-20">
				<div className="text-lg text-white font-bold mb-6 pb-3 border-b border-white divide-y-2">
					<div>{talent.name}</div>
				</div>
				<ButtonTalen icons={list} handleClick={handleSelected} />
				<InfoTalent talents={data} handleSelected={handleSelected} />
			</div>
		</div>
	);
}
