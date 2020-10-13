import React, { useState } from 'react';

const BinarySearch = (props) => {
	const [ Input, setInput ] = useState('');
	const [ Item, steItem ] = useState('');
	const [ Array, setArray ] = useState([]);
	const [ index, setIndex ] = useState(null);

	// handles input
	const inputHandler = () => {
		console.log(Input);
		setArray(Input.split(','));
		sequential_search(Array, Item, Array.length);
	};
	const sequential_search = (A, X, N) => {
		let count = 1;
		for (var I = 0; I < N; I++) {
			if (A[I] === X) {
				setIndex(count);
			}
			count++;
		}
	};

	return (
		<div className="ui container">
			<div className="ui input" style={{ margin: '2rem', width: '90%', alignItems: 'center' }}>
				Array:
				<input
					value={Input}
					type="text"
					placeholder="Search..."
					onChange={(event) => setInput(event.target.value)}
				/>
			</div>
			<div className="ui input" style={{ margin: '2rem', width: '90%', alignItems: 'center' }}>
				Item to be Searched:
				<input
					value={Item}
					type="text"
					placeholder="Search..."
					onChange={(event) => steItem(event.target.value)}
				/>
			</div>
			<button className="ui button" onClick={inputHandler} style={{ margin: '2rem', width: '30%' }}>
				Calculate
			</button>
			{index && (
				<div style={{ color: 'green' }}>
					No of comparision made : <span style={{ fontWeight: 'bold' }}>{index}</span>
				</div>
			)}
		</div>
	);
};

export default BinarySearch;
