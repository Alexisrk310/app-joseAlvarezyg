import React from 'react';
import { Card } from './components/Card';

import './styles/HomePage.css';
export interface HomePageInterface {}

const HomePage: React.FC<HomePageInterface> = () => {
	return (
		<div className="homepage">
			<div className="mr-5 ml-5">
				<div className="row">
					<p className=" mt-3 col-12 col-md-6">RECOMENDADOS DE LA SEMANA</p>
					<p className="show-more pointer mt-3 col-12 col-md-6 text-right">
						MOSTRAR MAS
					</p>
				</div>
				<div className="d-flex contain-card">
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
				</div>
				{/* <div className="mt-3 row">
					<p className="col-12 col-md-6 ">TOP 10 DE COLOMBIA</p>
					<p className="pointer col-12 col-md-6 text-right">MOSTRAR MAS</p>
				</div>
				<div className="d-flex contain-card">
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
				</div> */}
				{/* <div className="mt-3 row">
					<p className="col-12 col-md-6">TOP 10 DE CARTAGENA</p>
					<p className="pointer col-12 col-md-6 text-right">MOSTRAR MAS</p>
				</div>
				<div className="d-flex contain-card">
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
					<Card
						img={
							'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-aa429d1533d621aa16a4c85bb4c8faaa_screen.jpg?ts=1597915301'
						}
						title={'Restaurante'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ultrices lacus, non imperdiet libero'
						}
						specialized={'Pizza'}
						zone={'Cartagena'}
					/>
				</div> */}
				<h3 className="text-center m-5">SOÑADORES QUE INSPIRAN</h3>

				<div className="grid">
					<div className="sidebar">1</div>
					<div className="video1">2</div>
					<div className="video2">3</div>
					<div className="video3">4</div>
					<div className="video4">5</div>
					<div className="video5">6</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
