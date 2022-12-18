import React from 'react';
import './styles/AboutPage.css';
export interface AboutPageInterface {}

const AboutPage: React.FC<AboutPageInterface> = () => {
	return (
		<div className="aboutpage">
			<div className="initial-img">
				<div>
					<p className="come">Ven te enseño</p>
					<p className="artist">Artista de la culinaria</p>
					<button className="seemore btn btn-info">Ver categorias</button>
				</div>
			</div>
			<div className="container-carousel">
				<div className="container-waves">
					<div className="wave wave1"></div>
					<div className="wave wave2"></div>
					<div className="wave wave3"></div>
					<div className="wave wave4"></div>
				</div>
				<div
					id="carouselExampleControls"
					className="carousel slide"
					data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src="https://a.cdn-hotels.com/gdcs/production0/d904/1a2db549-b49d-4845-aa19-c9d72f4266c2.jpg"
								className="d-block w-100 carousel-img"
								height={400}
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								src="https://ingenieriademenu.com/wp-content/uploads/2022/02/letrero-restaurante.jpg"
								className="d-block w-100 carousel-img"
								height={400}
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								src="https://a.cdn-hotels.com/gdcs/production0/d904/1a2db549-b49d-4845-aa19-c9d72f4266c2.jpg"
								className="d-block w-100 carousel-img"
								height={400}
								alt="..."
							/>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-target="#carouselExampleControls"
						data-slide="prev">
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-target="#carouselExampleControls"
						data-slide="next">
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</button>
				</div>
				<div className="container-waves rotate">
					<div className="wave wave1"></div>
					<div className="wave wave2"></div>
					<div className="wave wave3"></div>
					<div className="wave wave4"></div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
