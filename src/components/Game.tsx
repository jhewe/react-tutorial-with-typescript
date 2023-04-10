import { useState } from 'react'
import Board from './Board'

export default function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)])
	const [currentMove, setCurrentMove] = useState(0)
	const xIsNext = currentMove % 2 === 0
	const currentSquares = history[currentMove]

	function handlePlay(nextSquares: string[]): void {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]

		setHistory(nextHistory)
		setCurrentMove(nextHistory.length - 1)
	}

	function jumpTo(nextMove: number): void {
		setCurrentMove(nextMove)
	}

	const moves = history.map((_squares, move) => {
		const desc = move ? `Go to move #${move}` : 'Go to game start'
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)} type='button'>
					{desc}
				</button>
			</li>
		)
	})

	return (
		<div className='game'>
			<div className='game-board'>
				<Board
					xIsNext={xIsNext}
					squares={currentSquares}
					onPlay={handlePlay}
				/>
			</div>
			<div className='game-info'>
				<ol>{moves}</ol>
			</div>
		</div>
	)
}
