import React, { useState } from 'react';

const BinarySearch = (props) => {
	const [ Input, setInput ] = useState('');
	const [ Item, steItem ] = useState('');
	const [ Array, setArray ] = useState([]);
	const [ number, setNumber ] = useState(null);

	// handles input
	const inputHandler = () => {
		setArray(Input.split(','));
		binarySearch(Array, Item);
	};
	const binarySearch = (list, item) => {
		let count = 0;
		console.log(list.sort());
		let low = 0;
		let high = list.length - 1;

		while (low <= high) {
			count++;
			let mid = Math.floor((low + high) / 2);
			let guess = list[mid];
			if (guess === item) {
				setNumber(count);
				return mid;
			} else if (guess > item) {
				high = mid - 1;
			} else {
				low = mid + 1;
			}
		}

		return null;
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
			{number && (
				<div style={{ color: 'green' }}>
					No of comparision : <span style={{ fontWeight: 'bold' }}>{number}</span>
				</div>
			)}
		</div>
	);
};

export default BinarySearch;
