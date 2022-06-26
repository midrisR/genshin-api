export default function ListLevelAscend({ data, combat }) {
	return (
		<div className="w-full lg:w-4/6">
			<table className="w-full">
				<thead className="border-b border-white border-opacity-10">
					<tr>
						<th
							scope="col"
							className="text-sm font-medium text-white p-2 text-left"></th>
						{data.values.map((key, i) => (
							<th
								key={i}
								scope="col"
								className="text-sm font-medium text-white p-2 text-left">
								{key}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{combat.map((val, i) => {
						return (
							<tr key={i} className="border-b border-white border-opacity-10">
								<td className="p-2 text-white font-bold lowercase">{val.key}</td>
								{val.values.map((n, i) => (
									<td
										key={i}
										className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
										{n}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
