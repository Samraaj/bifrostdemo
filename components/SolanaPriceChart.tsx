function SolanaPriceChart() {
	return (
		<div className="flex h-[410px] h-fit w-[801px] flex-col rounded-2xl border border-white/[0.08] bg-white/[0.04] px-6 pt-4 pb-6">
			<div className="flex w-full flex-col gap-4">
				<div className="flex w-full items-center gap-2">
					<div className="flex h-8 w-8 flex-col items-center justify-center gap-2 rounded px-2 py-2">
						<div className="font-Inter text-sm font-medium text-white">1H</div>
					</div>
					<div className="flex h-8 w-8 items-center justify-center gap-2 rounded border border-white/[0.08] bg-white/[0.08] px-2 py-2">
						<div className="font-Inter text-sm font-semibold text-white">1D</div>
					</div>
					<div className="flex h-8 w-8 flex-col items-center justify-center gap-2 rounded px-2 py-2">
						<div className="font-Inter text-sm font-medium text-white">1M</div>
					</div>
					<div className="flex h-8 w-8 flex-col items-center justify-center gap-2 rounded px-2 py-2">
						<div className="font-Inter text-sm font-medium text-white">3M</div>
					</div>
					<div className="flex h-8 w-8 flex-col items-center justify-center gap-2 rounded px-2 py-2">
						<div className="font-Inter text-sm font-medium text-white">1Y</div>
					</div>
					<div className="flex h-8 w-8 flex-col items-center justify-center gap-2 rounded px-2 py-2">
						<div className="font-Inter text-sm font-medium text-white">2Y</div>
					</div>
					<div className="flex h-8 w-8 flex-col items-center justify-center gap-2 rounded px-2 py-2">
						<div className="font-Inter text-sm font-medium text-white">3Y</div>
					</div>
					<div className="flex h-8 w-8 flex-col items-center justify-center gap-2 rounded px-2 py-2">
						<div className="font-Inter text-sm font-medium text-white">5Y</div>
					</div>
					<div className="flex h-8 w-8 flex-col items-center justify-center gap-2 rounded px-2 py-2">
						<div className="font-Inter text-sm font-medium text-white">ALL</div>
					</div>
				</div>
				<img
					src="https://bifrost-code.s3.us-east-2.amazonaws.com/Line%202.svg?Content-Type=image"
					alt="Line 2"
				/>
				<div className="flex flex-col gap-1">
					<div className="font-Inter text-5xl font-semibold leading-[48px] text-white">$24.50</div>
					<div className="flex flex-col">
						<div className="font-Inter text-base font-medium text-[#14f195]">↗$0.74 (3.10%)</div>
						<div className="font-Inter text-xs text-white">
							Last update: 3:03 AM, January 27, 2023
						</div>
					</div>
				</div>
			</div>
			<img
				src="https://bifrost-code.s3.us-east-2.amazonaws.com/Vector.svg?Content-Type=image"
				alt="Vector"
			/>
			<div className="flex w-full items-center justify-end gap-3">
				<img
					src="https://bifrost-code.s3.us-east-2.amazonaws.com/Frame%20626406.svg?Content-Type=image"
					alt="Frame 626406"
				/>
				<img
					src="https://bifrost-code.s3.us-east-2.amazonaws.com/Frame%20626407.svg?Content-Type=image"
					alt="Frame 626407"
				/>
				<img
					src="https://bifrost-code.s3.us-east-2.amazonaws.com/Frame%20626411.svg?Content-Type=image"
					alt="Frame 626411"
				/>
				<img
					src="https://bifrost-code.s3.us-east-2.amazonaws.com/Frame%20626409.svg?Content-Type=image"
					alt="Frame 626409"
				/>
				<img
					src="https://bifrost-code.s3.us-east-2.amazonaws.com/Frame%20626408.svg?Content-Type=image"
					alt="Frame 626408"
				/>
				<img
					src="https://bifrost-code.s3.us-east-2.amazonaws.com/Frame%20626410.svg?Content-Type=image"
					alt="Frame 626410"
				/>
			</div>
		</div>
	);
}

export default SolanaPriceChart;
