export const Choice = ({ img, className, started }) => {
	return (
		<img onClick={started} className={className} src={img} alt='Choice Icon' />
	);
};
