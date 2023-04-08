export default function Square(prop: {
	value: string
	onSquareClick: () => void
}) {
	const { value, onSquareClick } = prop

	return (
		<button className='square' type='button' onClick={onSquareClick}>
			{value}
		</button>
	)
}
