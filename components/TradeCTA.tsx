import Button from 'components/Button';
import { useMemo } from 'react';

type TradeCTAType = {
	currency?: 'SOL' | 'USD';
};

function TradeCTA({ currency = 'SOL' }: TradeCTAType) {
	const currencyLabel = useMemo(() => {
		switch (currency) {
			case 'SOL':
				return 'Solana';
			case 'USD':
				return 'US Dollar';
			default:
				return 'SOL';
		}
	}, [currency]);

	return (
		<div className="flex h-fit w-[347px] flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-5 py-5">
			<div className="flex w-full flex-col gap-2">
				<div className="font-Inter text-xl font-bold leading-[24px] text-white">
					Trade {currencyLabel} today
				</div>
				<div className="font-Inter text-sm text-white">
					{`Buy ${currencyLabel} with your credit card, debit card, or bank account.`}
				</div>
			</div>
			<Button color="primary" size="full" icon="none">
				Buy ${currency}
			</Button>
		</div>
	);
}

export default TradeCTA;
