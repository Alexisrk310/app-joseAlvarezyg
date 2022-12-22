import React from 'react';
import './styles/Header.css';
export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
	return (
		<div className="header">
			<p>Jose Alvarez Yg</p>
		</div>
	);
};

export default Header;
