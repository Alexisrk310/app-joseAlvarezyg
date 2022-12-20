import React from 'react';
import './styles/TeamPage.css';
export interface TeamPageInterface {}

const TeamPage: React.FC<TeamPageInterface> = () => {
	return (
		<div className="teampage">
			<div className="team">
				<p>TEAM JOSE ALVAREZ</p>
			</div>
			<p className="text-center our-team">Nuestro team</p>
			<div className="container-card-teams">
				<div className="background-team">
					<div className="nataly"></div>
					<p>Nataly Carriazo</p>
				</div>
				<div className="background-team">
					<div className="jose">a</div>
					<p>Jose Alvarez</p>
				</div>
				<div className="background-team">
					<div className="alexis"></div>
					<p>Alexis Mendoza</p>
				</div>
			</div>
		</div>
	);
};

export default TeamPage;
