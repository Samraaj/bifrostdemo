import { useMemo, useState } from 'react';

type PriceInputType = {
	currency?: 'SOL' | 'USD';
	size?: 'sm' | 'md' | 'full';
};
function PriceInput({ currency = 'SOL', size = 'sm' }: PriceInputType) {
	const [val, setVal] = useState('1');

	const sizeClassNames = useMemo(() => {
		switch (size) {
			case 'sm':
				return 'w-32 w-fit ';
			case 'md':
				return 'w-56 w-fit ';
			case 'full':
				return 'w-full ';
			default:
				return 'w-32 w-fit ';
		}
	}, [size]);

	return (
		<div
			className={
				'flex justify-between px-4 py-2 bg-white/10 text-white text-lg border border-white/20 rounded-lg ' +
				sizeClassNames
			}
		>
			<input
				value={val}
				onChange={(e) => setVal(e.target.value)}
				className="outline-none bg-transparent border-black border-r mr-4 w-full "
			/>
			{currency}
		</div>
	);
}

export default PriceInput;
