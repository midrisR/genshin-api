import { useState } from 'react';
export default function FilterRating({ show, handleShow, data, onChange }) {
	const [selected, setSelected] = useState([]);

	const handleChange = (event) => {
		const value = event.target.value;
		setSelected(value);
		onChange(value);
	};
	return (
		<div className="w-1/6 px-4">
			<div className="w-full  px-3 md:mb-0">
				<label
					className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-state">
					State
				</label>
				<div className="relative">
					<select
						onChange={handleChange}
						className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-state">
						{data.map((val, i) => (
							<option
								key={i}
								defaultValue={val}
								selected={selected.indexOf(val) > -1}>
								{val}
							</option>
						))}
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg
							className="fill-current h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20">
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}
