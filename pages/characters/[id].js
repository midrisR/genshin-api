import { useRouter } from 'next/router';
import axios from 'axios';
import AttributeCard from '../../components/detail/attributeCard';
import AttributeAscension from '../../components/detail/attributeAscension';
import CharacterInfo from '../../components/detail/info';

export async function getServerSideProps(ctx) {
	const { id } = ctx.params;
	const res = await axios.get(`http://localhost:5000/characters/${id}`);
	const character = res.data;
	return {
		props: { character: character.character, material: character.material },
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
	Pyro: 'bg-red-900/70',
	Anemo: 'bg-teal-900/70',
	Hydro: 'bg-sky-900/70',
	Electro: 'bg-purple-900/70',
	Cryo: 'bg-cyan-900/70',
	Geo: 'bg-yellow-900/70',
};
export default function DetailCharacter({ character, material }) {
	const router = useRouter();
	const handleClick = (e) => {
		e.preventDefault();
		router.push('/');
	};
	return (
		<div
			className={`${
				background[character.filter_values.character_vision]
			} min-h-screen relative`}>
			<div className="absolute w-full bg-gradient-to-br from-black/60 to-red-900/30 z-0 h-full"></div>
			{/* <div className="container flex justify-center items-center absolute z-0 "> */}
			<div className="mx-auto sm:w-3/4 md:w-2/4 fixed inset-0 flex items-center">
				<img
					src={character.header_img_url}
					className="opacity-50 h-screen animate-wiggle"
					alt={character.name}
				/>
			</div>
			<div className="relative p-20">
				<button
					className="px-3 py-2 bg-white/20 rounded-xl text-white focus:outline-none flex items-center gap-1"
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
				<div className="absolut z-50">
					<CharacterInfo character={character} background={background} />
					{/* character all info */}
					<AttributeCard
						character={character.modules[0]}
						background={elementalCard[character.filter_values.character_vision]}
					/>
					<AttributeAscension
						character={character.modules[1]}
						material={material}
						background={elementalCard[character.filter_values.character_vision]}
					/>
				</div>
			</div>
		</div>
	);
}
