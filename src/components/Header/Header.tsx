import React from 'react';
import './styles/Header.css';
import Signature from './img/firma.webp'
export interface HeaderInterface {}
import Img from "react-cool-img";


const Header: React.FC<HeaderInterface> = () => {
	return (
		<div className="header">
			<Img lazy={true} cache={true} className='w-40 h-12' src={Signature} alt="" />
		</div>
	);
};

export default Header;
