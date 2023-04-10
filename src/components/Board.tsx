import Square from './Square'

export default function Board(props: {
	xIsNext: boolean
	squares: string[]
	onPlay: (i: string[]) => void
}) {
	const { xIsNext, squares, onPlay } = props

	const winner = calculateWinner(squares)

	function handleClick(i: number): void {
		if (squares[i] || calculateWinner(squares)) {
			return
		}

		const nextSquares = [...squares]
		nextSquares[i] = xIsNext ? 'X' : 'O'

		onPlay(nextSquares)
	}

	return (
		<>
			<div className='status'>
				{winner
					? `Winner: ${winner}`
					: `Next player: ${xIsNext ? 'X' : 'O'}`}
			</div>
			{[0, 3, 6].map((startId) => (
				<div className='board-row' key={startId}>
					{[0, 1, 2].map((offset) => (
						<Square
							key={startId + offset}
							value={squares[startId + offset]}
							onSquareClick={() => handleClick(startId + offset)}
						/>
					))}
				</div>
			))}
		</>
	)
}

function calculateWinner(squares: string[]): string | null {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i]
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a]
		}
	}

	return null
}
