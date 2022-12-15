import React from 'react';
import { Card } from './components/Card';

import './styles/HomePage.css';
export interface HomePageInterface {}

const HomePage: React.FC<HomePageInterface> = () => {
	return (
		<div className="homepage">
			<div className="m-5 mt-5">
				<div className="d-flex justify-content-between">
					<p>RECOMENDADOS DE LA SEMANA</p>
					<p>MOSTRAR MAS</p>
				</div>
				<div className="d-flex">
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
				<div className="mt-3 d-flex justify-content-between">
					<p>TOP 10 DE COLOMBIA</p>
					<p>MOSTRAR MAS</p>
				</div>
				<div className="d-flex">
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
				<div className="mt-3 d-flex justify-content-between">
					<p>TOP 10 DE CARTAGENA</p>
					<p>MOSTRAR MAS</p>
				</div>
				<div className="d-flex">
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
				<h3 className="text-center mt-3">SOÑADORES QUE INSPIRAN</h3>
				<div className="dreamers mt-3">
					<div className="video1">1</div>
					<div className="video2">2</div>
					<div className="video3">3</div>
					<div className="video4">4</div>
					<div className="video5">5</div>
					<div className="video6">6</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
