import React from 'react';
import { ShoppingCart, ShoppingBag } from 'react-feather';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-sm navbar-dark p-3">
				<div className="container">
					<Link className="navbar-brand" to="/">
						Twiddle <ShoppingBag />
					</Link>
					<button
						className="navbar-toggler d-lg-none"
						type="button"
						data-toggle="collapse"
						data-target="#collapsibleNavId"
					></button>

					<div
						className="collapse navbar-collapse"
						id="collapsibleNavId"
					>
						<div className="mr-auto"></div>
						<ul className="navbar-nav">
							<li className="nav-item active">
								<Link className="nav-link" to="/Products">
									Products{' '}
									<span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Cart">
									Cart <ShoppingCart />
									<span
										className="badge badge-primary badge-pill"
										style={{
											position: 'absolute',
											top: '-3px',
										}}
									>
										0
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
