import { useState } from 'react'
// @ts-ignore
import reactLogo from './assets/react.svg'
import './App.css'

function factorial(num: number) {
	if (num <= 1) {
		return 1
	}

	let out = 2
	for (let i = 3; i < num; i++) {
		out = out * i
	}
	return out
}

function App() {
	const [number, setNumber] = useState(0)
	const [factorialNumber, setFactorial] = useState(1)

	return (
		<div className="App">
			<div className="card">
				<input onChange={(n) => setNumber(Number(n.target.value))}/>
				<button onClick={() => setFactorial(factorial(number))}>
					{number}! is {factorialNumber}
				</button>
			</div>
		</div>
	)
}

export default App
