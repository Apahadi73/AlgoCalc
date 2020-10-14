import React, { useState } from 'react';

const BubbleSort = (props) => {
	const [ Input, setInput ] = useState('');
	const [ Array, setArray ] = useState([]);
	const [ number, setNumber ] = useState(null);
	const [ passNumber, setPassNumber ] = useState(null);
	const [ arrayElementPass, setArrayElementPass ] = useState([]);
	let arrayPass = [];

	// handles input
	const inputHandler = () => {
		setArray(Input.split(','));
		bubbleSort(Array.map(Number));
	};

	let bubbleSort = (inputArr) => {
		let passNumber = 0;
		let comparisionNum = 0;
		let len = inputArr.length;
		let cloneArray = [];
		for (let i = 0; i < len; i++) {
			if (arraysEqual(cloneArray, inputArr)) {
				console.log('reached');
				break;
			}
			arrayPass.push(`Pass number :${passNumber} : ${inputArr}`);
			passNumber++;
			cloneArray = [ ...inputArr ];
			for (let j = 0; j < len - i - 1; j++) {
				if (inputArr[j] > inputArr[j + 1]) {
					let tmp = inputArr[j];
					inputArr[j] = inputArr[j + 1];
					inputArr[j + 1] = tmp;
				}
				comparisionNum++;
			}
			console.log(comparisionNum);
		}
		console.log(arrayPass);
		console.log(`pass number : ${passNumber - 1}`);
		setNumber(comparisionNum);
		console.log(`comparision number : ${comparisionNum}`);
		setPassNumber(passNumber);
		setArrayElementPass(arrayPass);
	};
	const arraysEqual = (a, b) => {
		if (a === b) return true;
		if (a == null || b == null) return false;
		if (a.length !== b.length) return false;
		for (var i = 0; i < a.length; ++i) {
			if (a[i] !== b[i]) return false;
		}
		return true;
	};

	const renderList = () => {
		return arrayElementPass.map((element) => <li>{element}</li>);
	};

	return (
		<div className="ui container">
			<div>
				<div className="ui input" style={{ margin: '2rem', width: '90%', alignItems: 'center' }}>
					Array:
					<input
						value={Input}
						type="text"
						placeholder="Search..."
						onChange={(event) => setInput(event.target.value)}
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
				{passNumber && (
					<div style={{ color: 'green' }}>
						No of pass number : <span style={{ fontWeight: 'bold' }}>{passNumber}</span>
					</div>
				)}
				{arrayElementPass && <ui>{renderList()}</ui>}
			</div>
			<h2>Number of key comparisions = n(n-1)/2</h2>
			<h2>Number of passes = n-1</h2>
		</div>
	);
};

export default BubbleSort;
