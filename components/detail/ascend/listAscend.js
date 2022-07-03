import { useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import ListLevelAscend from './listLevelAscend';
import ListMaterial from './listMaterial';

export default function ListAscend({ level, id, materials }) {
	const combat = level.slice(1);
	const url = process.env.material;
	const fetcher = async (url) => await axios.post(url, { material: id }).then((res) => res.data);
	const { data, mutate } = useSWR(url, fetcher, {
		revalidateOnMount: true,
	});

	useEffect(() => {
		mutate();
		console.log('[Node.js only] ENV_VARIABLE:', process.env.customKey);
	}, [level]);

	if (!data) return null;

	return (
		<div className="mt-8 flex flex-wrap">
			<ListLevelAscend data={level[0]} combat={combat} />
			<ListMaterial materials={data} list={materials} />
		</div>
	);
}
