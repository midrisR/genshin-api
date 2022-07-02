import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
export default React.memo(function AttributeTalentInfo({ talent, background }) {
	const [data, setData] = useState([]);

	const x = talent.materials && talent.materials.map((n) => n.map(({ ep_id }) => ep_id));
	const url = process.env.URL_MATERIAL;
	async function getImage(id) {
		try {
			const { data } = await axios.post(url, { material: id });
			setData(data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getImage(x);
	}, []);

	const Icon = ({ id }) => {
		const result = data.find((c) => c.material_id === id.toString());
		if (!result) return <p>loading</p>;
		return (
			<div
				className="rounded-xl overflow-hidden"
				style={{
					width: '2rem',
					height: '2rem',
					position: 'relative',
				}}>
				{' '}
				<Image src={result.icon_url} alt={result.name} layout="fill" objectFit="cover" />
			</div>
		);
	};

	return (
		<div className="w-full overflow-x-auto mt-10 rounded-lg">
			{talent.materials !== null ? (
				<table className="w-full">
					<tbody className="border-b border-white border-opacity-10 text-white">
						{talent.attributes.map((val, i) => {
							return (
								<tr
									key={i}
									className="border-b border-white border-opacity-10 relative">
									<th
										className={`w-full sticky z-10 inset-0 text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-200 ${background}`}>
										{val.key}
									</th>
									{val.values.map((n, d) => {
										return (
											<td
												key={d}
												className="relative px-6 py-4 whitespace-nowrap text-xs font-medium text-white">
												{n}
											</td>
										);
									})}
								</tr>
							);
						})}
						<tr>
							<th
								className={`w-full sticky z-10 inset-0 text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-white ${background}`}>
								Talent Level-Up Material
							</th>
							{talent.materials.map((n, d) => {
								return (
									<td
										key={d}
										className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
										{n.map((x, u) => {
											return (
												<div
													key={u}
													className="relative overflow-hidden bg-white/50 rounded-xl mb-3">
													<Icon id={x.ep_id} />
													<span className="text-white text-xxs tetx-center px-3 rounded-bl-lg bg-gray-800 absolute top-0 pb-0.5 -right-1">
														{x.amount}
													</span>
												</div>
											);
										})}
									</td>
								);
							})}
						</tr>
					</tbody>
				</table>
			) : undefined}
		</div>
	);
});
