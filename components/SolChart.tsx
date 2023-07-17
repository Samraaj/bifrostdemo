function SolChart() {
	return (
		<div className="flex h-[410px] w-[801px] flex-col items-start rounded-2xl border border-white border-opacity-[0.07999999821186066] bg-white bg-opacity-[0.03999999910593033] px-6 pt-4 pb-6">
			<div className="flex w-full flex-col items-start gap-4 font-Inter">
				<div className="flex w-full items-center gap-2 text-sm text-white">
					<div className="flex h-8 w-8 flex-col items-center justify-center gap-2 rounded px-2 py-2 font-medium">
						<div>1H</div>
					</div>
					<div className="flex h-8 w-8 items-center justify-center gap-2 rounded border border-white border-opacity-[0.07999999821186066] bg-white bg-opacity-[0.07999999821186066] px-2 py-2 font-semibold">
						<div>1D</div>
					</div>
					<div className="flex h-8 w-8 flex-col items-center justify-center gap-2 rounded px-2 py-2 font-medium">
						<div>1M</div>
					</div>
					<div className="flex h-8 w-8 flex-col items-center justify-center gap-2 rounded px-2 py-2 font-medium">
						<div>3M</div>
					</div>
					<div className="flex h-8 w-8 flex-col items-center justify-center gap-2 rounded px-2 py-2 font-medium">
						<div>1Y</div>
					</div>
					<div className="flex h-8 w-8 flex-col items-center justify-center gap-2 rounded px-2 py-2 font-medium">
						<div>2Y</div>
					</div>
					<div className="flex h-8 w-8 flex-col items-center justify-center gap-2 rounded px-2 py-2 font-medium">
						<div>3Y</div>
					</div>
					<div className="flex h-8 w-8 flex-col items-center justify-center gap-2 rounded px-2 py-2 font-medium">
						<div>5Y</div>
					</div>
					<div className="flex h-8 w-8 flex-col items-center justify-center gap-2 rounded px-2 py-2 font-medium">
						<div>ALL</div>
					</div>
				</div>
				<img src="/images/SolChart/Line-2.svg" alt="Line 2" className="h-2.5 w-[753px]" />
				<div className="flex flex-col items-start gap-1">
					<div className="text-5xl font-semibold leading-[48px] text-white">$24.50</div>
					<div className="flex flex-col items-start">
						<div className="text-base font-medium text-[#14f195]">↗$0.74 (3.10%)</div>
						<div className="text-xs text-white">Last update: 3:03 AM, January 27, 2023</div>
					</div>
				</div>
			</div>
			<img src="/images/SolChart/Vector.svg" alt="Vector" />
			<div className="flex w-full items-center justify-end gap-3">
				<img src="/images/SolChart/Frame-626406.svg" alt="Frame 626406" className="h-8 w-8" />
				<img src="/images/SolChart/Frame-626407.svg" alt="Frame 626407" className="h-8 w-8" />
				<img src="/images/SolChart/Frame-626411.svg" alt="Frame 626411" className="h-8 w-8" />
				<img src="/images/SolChart/Frame-626409.svg" alt="Frame 626409" className="h-8 w-8" />
				<img src="/images/SolChart/Frame-626408.svg" alt="Frame 626408" className="h-8 w-8" />
				<img src="/images/SolChart/Frame-626410.svg" alt="Frame 626410" className="h-8 w-8" />
			</div>
		</div>
	);
}
export default SolChart;
