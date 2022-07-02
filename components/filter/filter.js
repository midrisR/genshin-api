export default function Filter({ show, handleShow, data, title, handleSelect }) {
	return (
		<div className="w-max lg:w-1/6 px-4">
			<div className="flex w-full relative">
				<div
					className="rounded-full border w-full border-orange-200 flex justify-between text-sm font-light items-center px-3 py-1"
					onClick={handleShow}
					htmlFor={title}>
					<span className="text-orange-200">{title}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-orange-200 visited:text-orange-800"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				{/* collapse */}
				<div
					className={`${
						show ? 'block absolute top-8 left-0' : 'hidden'
					} w-full z-10 mt-1.5 divide-y divide-gray-100 rounded-xl shadow-xl bg-slate-700`}>
					<ul className="py-1 text-sm text-orange-400" aria-labelledby="dropdownDefault">
						<div>
							{data.map((val, i) => (
								<li
									key={i}
									htmlFor={title}
									className="block px-4 py-2 hover:bg-gray-600 hover:text-orange-200"
									onClick={handleSelect}>
									{val}
								</li>
							))}
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
}
