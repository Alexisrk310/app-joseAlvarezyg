import React from 'react';
import './styles/InitialPage.css';
export interface InitialPageInterface {}

const InitialPage: React.FC<InitialPageInterface> = () => {
	return (
		<div className="homepage">
			<div className="initial-img">
				<div>
					<p className="come">Ven te enseño</p>
					<p className="artist">Artista de la culinaria</p>
					<button className="seemore btn btn-info">Ver categorias</button>
				</div>
			</div>
		</div>
	);
};

export default InitialPage;
