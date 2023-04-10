export default function Square(props: {
	value: string
	onSquareClick: () => void
}) {
	const { value, onSquareClick } = props

	return (
		<button className='square' type='button' onClick={onSquareClick}>
			{value}
		</button>
	)
}
