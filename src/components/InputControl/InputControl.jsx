import PropTypes from "prop-types";
export function InputControl(props) {
	return (
		<div className=''>
			{props.label && (
				<label className='font-semibold text-base text-[#313131]'>
					{props.label}
				</label>
			)}
			<input
				type='text'
				{...props}
				className='w-full rounded-[5px] border border-[#ddd] outline-none py-[10px] px-4 text-black'
			/>
		</div>
	);
}

InputControl.propTypes = {
	label: PropTypes.any
};
