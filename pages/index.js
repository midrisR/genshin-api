import { useState, useCallback } from 'react';
import data from '../api/data.json';
import Character from '../components/character';
import Filter from '../components/filter';
import filterData from '../api/filter';

export async function getServerSideProps() {
	const res = await fetch('http://localhost:5000/characters');
	const data = await res.json();
	return {
		props: { data },
	};
}

export default function Home({ data }) {
	const [characters, setCharacters] = useState(data);
	const [vision, setVision] = useState('');
	const [rarity, setRarity] = useState('');
	const [openVision, setOpenVision] = useState(false);
	const [openRarity, setOpenRarity] = useState(false);

	const handleSelect = useCallback((e) => {
		const name = e.target.innerText;
		setVision(name);
		handleFilter(name);
		setOpenVision((prevState) => !prevState);
	});

	const handleSelectRarity = useCallback((e) => {
		const name = e.target.innerText;
		setRarity(name);
		handleFilterRarity(name);
		setOpenRarity((prevState) => !prevState);
	});

	const handleFilterRarity = useCallback((value) => {
		const filter = data.filter((character) => {
			if (vision !== '') {
				return (
					character.filter_values.character_rarity === value &&
					character.filter_values.character_vision === vision
				);
			} else {
				return character.filter_values.character_rarity === value;
			}
		});
		setCharacters(filter);
	});

	const handleFilter = useCallback((value) => {
		const filter = data.filter((character) => {
			if (rarity !== '') {
				return (
					character.filter_values.character_rarity === rarity &&
					character.filter_values.character_vision === value
				);
			} else {
				return character.filter_values.character_vision === value;
			}
		});
		setCharacters(filter);
	});
	return (
		<div className="w-full">
			<div className="py-4 flex flex-wrap">
				<Filter
					handleSelect={handleSelect}
					data={filterData.visions}
					show={openVision}
					handleShow={() => setOpenVision((prevState) => !prevState)}
					title="vision"
				/>
				<Filter
					handleSelect={handleSelectRarity}
					data={filterData.quality}
					show={openRarity}
					handleShow={() => setOpenRarity((prevState) => !prevState)}
					title="rarity"
				/>
				<button
					className="px-8 py-1 text-orange-200 text-sm rounded-full border border-orange-200 focus:outline-none"
					onClick={() => setCharacters(data)}>
					Reset
				</button>
				<div className="w-full flex flex-wrap items-center">
					<Character characters={characters} element={vision} rarity={rarity} />
				</div>
			</div>
		</div>
	);
}
