import Button from 'components/Button';

type BuyNowProps = {
	CTA?: string;
	currency?: string;
};

function BuyNow({ CTA = 'Buy Solana Now', currency = 'SOL' }: BuyNowProps) {
	return (
		<div className="flex h-fit flex-col items-center gap-6 rounded-lg bg-[#0a0c1b] px-10 py-5">
			<div className="flex flex-col gap-2.5">
				<div className="font-Inter font-medium leading-[32px] text-white">{CTA}</div>
			</div>
			<Button color="primary" size="sm" icon="none">
				Buy ${currency == 'SOL' ? 'Solana' : 'USD'}
			</Button>
		</div>
	);
}

export default BuyNow;
