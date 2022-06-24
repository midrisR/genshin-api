import { useState } from 'react';
export default function Table({ data, material }) {
	const [show, setShow] = useState(false);

	const handleShow = (id) => {
		setShow((prevState) => ({
			...prevState,
			[id]: !prevState[id],
		}));
	};

	const filter = (n) => {
		const result = material.filter((m) => m.id === n);
		return result[0];
	};

	return (
		<div className="px-10 rounded-xl overflow-hidden mb-10">
			<div className="flex w-full">
				<table className="text-sm text-left w-3/5">
					<thead className="text-xs text-white uppercase">
						<tr>
							<th scope="col" className="px-6 py-2">
								lorem
							</th>
							<th scope="col" className="px-6 py-2">
								Before Ascension
							</th>
							<th scope="col" className="px-6 py-2">
								After Ascension
							</th>
						</tr>
					</thead>
					<tbody>
						{data.combatList.slice(1).map((val, i) => {
							return (
								<tr key={i} className="text-white border-b">
									<td className="px-6 whitespace-nowrap">{val.key}</td>
									{val.values.map((v, i) => (
										<td key={i} className="px-6 whitespace-nowrap">
											{v}
										</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
				<div className="text-xs text-white uppercase font-bold w-2/5">
					<div className="px-6 py-2">Ascension Materials</div>
					<div className={`flex flex-wrap gap-4 px-4 mt-20`}>
						{data.materials !== null ? (
							<>
								{data.materials.map((dt, i) => {
									const x = dt.replace(/[!@#$%^&*]/g, '');
									const parse = JSON.parse(x);
									const result = filter(parse[0].ep_id);
									console.log(result);
									return (
										<div
											key={i}
											className="w-1/4 bg-slate-200 rounded-xl text-center text-slate-800 overflow-hidden relative"
											onMouseEnter={() => handleShow(i)}
											onMouseLeave={() => handleShow(i)}>
											<img
												src={result.icon_url}
												className="object-contain w-20"
											/>
											<div className="py-2">
												<span className=" text-slate-800 text-sm text-center font-semibold">
													{parse[0].amount}
												</span>
											</div>
											<div
												className={`${
													show[i] ? 'block' : 'hidden'
												} py-2 absolute h-full w-full top-0 bg-black bg-opacity-40 flex flex-col items-center justify-center`}>
												<span className=" text-white text-xs text-center font-bold">
													{result.name}
												</span>
											</div>
										</div>
									);
								})}
							</>
						) : (
							<p className="text-slate-100 text-xl text-center font-semibold">
								No Drop
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
