import Square from './Square'
import { useState } from 'react'

export default function Board() {
	const [isXNext, setIsXNext] = useState(true)
	const [squares, setSquares] = useState(Array(9).fill(null))

	function handleClick(i: number) {
		if (squares[i] !== null) {
			return
		}

		const nextSquare = [...squares]
		nextSquare[i] = isXNext ? 'X' : 'O'
		setSquares(nextSquare)
		setIsXNext(!isXNext)
	}

	return (
		<>
			<div className='board-row'>
				<Square
					value={squares[0]}
					onSquareClick={() => handleClick(0)}
				/>
				<Square
					value={squares[1]}
					onSquareClick={() => handleClick(1)}
				/>
				<Square
					value={squares[2]}
					onSquareClick={() => handleClick(2)}
				/>
			</div>
			<div className='board-row'>
				<Square
					value={squares[3]}
					onSquareClick={() => handleClick(3)}
				/>
				<Square
					value={squares[4]}
					onSquareClick={() => handleClick(4)}
				/>
				<Square
					value={squares[5]}
					onSquareClick={() => handleClick(5)}
				/>
			</div>
			<div className='board-row'>
				<Square
					value={squares[6]}
					onSquareClick={() => handleClick(6)}
				/>
				<Square
					value={squares[7]}
					onSquareClick={() => handleClick(7)}
				/>
				<Square
					value={squares[8]}
					onSquareClick={() => handleClick(8)}
				/>
			</div>
		</>
	)
}
