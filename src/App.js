import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import SequentialSearch from './pages/SequentialSearch';
import BinarySearch from './pages/BinarySearch';
import Bubblesort from './pages/BubbleSort';
import InsertionSort from './pages/InsertionSort';
import Knapsack from './pages/Knapsack';
import MergeSort from './pages/MergeSort';
import QuickSort from './pages/QuickSort';
import SelectionSort from './pages/SelectionSort';
import StringPattern from './pages/StringPattern';

import './App.css';
import Mergesort from './pages/MergeSort';

function App() {
	return (
		<Router>
			<div className="app">
				<div className="app__navigation">
					<div className="ui  menu">
						<Link className="item" to="/">
							Sequential Search
						</Link>
						<Link to="/binarySearch" className="item">
							Binary
						</Link>
						<Link to="/bubbleSort" className="item">
							Bubble Sort
						</Link>
						<Link to="/insertionSort" className="item">
							Insertion Sort
						</Link>
						<Link to="/knapsack" className="item">
							Knapsack
						</Link>
						<Link to="/mergeSort" className="item">
							Merge Sort
						</Link>
						<Link to="/quickSort" className="item">
							Quick Sort
						</Link>
						<Link to="/selectionSort" className="item">
							Selection Sort
						</Link>
						<Link to="/stringPattern" className="item">
							String Pattern (Brute)
						</Link>
					</div>
				</div>
			</div>

			<Switch>
				<Route path="/" exact>
					<SequentialSearch />
				</Route>
				<Route path="/binarySearch" exact>
					<BinarySearch />
				</Route>
				<Route path="/bubbleSort" exact>
					<Bubblesort />
				</Route>
				<Route path="/insertionSort" exact>
					<InsertionSort />
				</Route>
				<Route path="/knapsack" exact>
					<Knapsack />
				</Route>
				<Route path="/mergeSort" exact>
					<Mergesort />
				</Route>
				<Route path="/quickSort" exact>
					<QuickSort />
				</Route>
				<Route path="/selectionSort" exact>
					<SelectionSort />
				</Route>
				<Route path="/stringPattern" exact>
					<StringPattern />
				</Route>
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default App;
