import { useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import ListLevelAscend from './listLevelAscend';
import ListMaterial from './listMaterial';

export default function ListAscend({ level, id, materials }) {
	const combat = level.slice(1);
	const address = 'https://backend-api-genshin.herokuapp.com/material/find';
	const fetcher = async (url) => await axios.post(url, { material: id }).then((res) => res.data);
	const { data, mutate } = useSWR(address, fetcher, { revalidateOnMount: false });

	useEffect(() => {
		mutate();
	}, [level]);

	if (!data) return <p>loading</p>;

	return (
		<div className="mt-8 flex flex-wrap">
			<ListLevelAscend data={level[0]} combat={combat} />
			<ListMaterial materials={data} list={materials} />
		</div>
	);
}
