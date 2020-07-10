import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import ProductInfo from './components/ProductInfo';
import Home from './components/Home';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/Products" exact component={Products} />
					<Route path="/Cart" component={Cart} />
					<Route path="/products/:id" component={ProductInfo} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
