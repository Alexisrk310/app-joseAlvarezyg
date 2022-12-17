import React from 'react';
import './styles/AboutPage.css';
export interface AboutPageInterface {}

const AboutPage: React.FC<AboutPageInterface> = () => {
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

export default AboutPage;
