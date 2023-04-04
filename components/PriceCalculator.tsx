import PriceInput from 'components/PriceInput';
import { useMemo } from 'react';

type PriceCalculatorType = {
	currency?: 'SOL' | 'USD';
};

function PriceCalculator({ currency = 'SOL' }: PriceCalculatorType) {
	const currencyLabel = useMemo(() => {
		switch (currency) {
			case 'SOL':
				return 'SOL';
			case 'USD':
				return 'USD';
			default:
				return 'SOL';
		}
	}, [currency]);

	return (
		<div className="flex h-fit w-[347px] flex-col rounded-2xl border border-white/[0.08] bg-white/[0.04]">
			<div className="flex w-full flex-col gap-1 px-5 py-4">
				<div className="font-Inter text-xl font-bold leading-[24px] text-white">
					{currencyLabel} Price Calculator
				</div>
				<div className="font-Inter text-xs text-white">Last update: 3:03 AM, January 27, 2023</div>
			</div>
			<img src="/images/Crypto News Site/Line-3.svg" alt="Line 3" />
			<div className="flex w-full flex-col items-center justify-center gap-2 px-4 py-4">
				{currency === 'SOL' ? (
					<>
						<PriceInput currency="SOL" size="full" />
						<PriceInput currency="USD" size="full" />
					</>
				) : (
					<>
						<PriceInput currency="USD" size="full" />
						<PriceInput currency="SOL" size="full" />
					</>
				)}
			</div>
		</div>
	);
}

export default PriceCalculator;
