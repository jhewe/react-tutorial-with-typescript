import { useState } from 'react'
import Board from './Board'

export default function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)])
	const [currentMove, setCurrentMove] = useState(0)
	const [sortAsc, setSortAsc] = useState(true)

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

	function toggleSort(): void {
		setSortAsc(!sortAsc)
	}

	const moves = history.map((_squares, move) => {
		const desc = move ? `Go to move #${move}` : 'Go to game start'
		return {
			move,
			desc,
		}
	})

	if (!sortAsc) {
		moves.reverse()
	}

	const movesList = moves.map(({ move, desc }) => (
		<li key={move}>
			{move === currentMove ? (
				<small>
					<i>{desc}</i>
				</small>
			) : (
				<button onClick={() => jumpTo(move)} type='button'>
					{desc}
				</button>
			)}
		</li>
	))

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
				<button onClick={toggleSort} type='button'>
					{sortAsc ? 'Sort Descending' : 'Sort Ascending'}
				</button>
				<ol>{movesList}</ol>
			</div>
		</div>
	)
}
