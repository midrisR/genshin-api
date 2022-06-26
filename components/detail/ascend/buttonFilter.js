export default function ButtonFilter({ levels, setLevel }) {
	return (
		<div className="flex flex-wrap justify-between items-center">
			{levels.map((level, i) => (
				<div key={i} className="p-2 w-1/4 lg:w-max">
					<button
						className="  px-3 py-1 text-white rounded-xl border border-white"
						onClick={() => setLevel(level.key)}>
						{level.key}
					</button>
				</div>
			))}
		</div>
	);
}
