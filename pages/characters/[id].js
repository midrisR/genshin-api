import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import AttributeCard from '../../components/detail/attribute';
import CharacterInfo from '../../components/detail/basic/info';
import AttributeTalent from '../../components/detail/talent';
import AttributeAscend from '../../components/detail/ascend';
import Constellation from '../../components/detail/constellation';

export async function getServerSideProps(ctx) {
	const { id } = ctx.params;
	const res = await axios.get(process.env.URL + id);
	const character = res.data;
	return {
		props: { character },
	};
}

const background = {
	Pyro: 'bg-red-800',
	Anemo: 'bg-teal-800',
	Hydro: 'bg-blue-800',
	Electro: 'bg-purple-800',
	Cryo: 'bg-sky-500',
	Geo: 'bg-yellow-800',
};

const elementalCard = {
	Pyro: 'bg-red-900',
	Anemo: 'bg-teal-900',
	Hydro: 'bg-blue-900',
	Electro: 'bg-purple-900',
	Cryo: 'bg-cyan-900',
	Geo: 'bg-yellow-900',
};

export default function DetailCharacter({ character }) {
	const router = useRouter();
	const handleClick = (e) => {
		e.preventDefault();
		router.push('/');
	};

	useEffect(() => {
		let bg = document.getElementsByClassName('bg-overlay');
		bg[0].classList.remove('opacity-0');
		bg[0].classList.add('opacity-80');
	}, []);

	return (
		<div
			className={`${
				background[character.filter_values.character_vision]
			} min-h-screen relative`}>
			<div className="absolute w-full bg-gradient-to-br from-black/60 to-red-900/30 z-0 h-full"></div>
			{/* <div className="container flex justify-center items-center absolute z-0 "> */}
			<div className="container mx-auto absolute top-5 flex justify-center items-center">
				{/*default make h-screen in class*/}
				<img
					src={character.header_img_url}
					className="transition-all duration-1000  ease-in opacity-0 bg-overlay"
					alt={character.name}
					width="auto"
				/>
			</div>
			<div className="relative px-8 py-4 md:p-20">
				<button
					className="px-3 py-2 mb-4 md:mb-0 bg-white/20 rounded-xl text-white focus:outline-none flex items-center gap-1"
					onClick={handleClick}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
					</svg>
					<span>Back</span>
				</button>
				<div>
					<div className="lg:px-20 px-8">
						<CharacterInfo character={character} background={background} />
						{/* character all info */}
						<AttributeCard
							character={character.modules[0]}
							background={elementalCard[character.filter_values.character_vision]}
						/>
						<AttributeAscend
							ascen={character.modules[1]}
							background={elementalCard[character.filter_values.character_vision]}
						/>

						<AttributeTalent
							talent={character.modules[3]}
							background={elementalCard[character.filter_values.character_vision]}
						/>
						<Constellation
							constellation={character.modules[4]}
							background={elementalCard[character.filter_values.character_vision]}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
