import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import nataly from './img/nataly.png';
import jose from './img/jose.jpg';
import alexis from './img/alexis.jpg';
import './styles/TeamPage.css';
export interface TeamPageInterface {}

const TeamPage: React.FC<TeamPageInterface> = () => {
	const MySwal = withReactContent(Swal);

	return (
		<div className="teampage">
			<div className="team">
				<p>TEAM JOSE ALVAREZ</p>
			</div>
			<p className="text-center our-team">Nuestro team</p>
			<div className="container-card-teams">
				<div
					className="background-team pointer"
					itemType="button"
					data-toggle="modal"
					data-target="#staticBackdrop">
					<div className="nataly"></div>
					<p>Nataly Carriazo</p>
					<div
						className="modal fade"
						id="staticBackdrop"
						data-backdrop="static"
						data-keyboard="false"
						tabIndex={-1}
						aria-labelledby="staticBackdropLabel"
						aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="staticBackdropLabel">
										TEAM JOSE ALVAREZ
									</h5>
									<button
										type="button"
										className="close"
										data-dismiss="modal"
										aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									<div className="d-flex container-team-modals">
										<img src={nataly} alt="img" className="img-info-alexis" />
										<div>
											<p>Nataly Carriazo </p>
											<p>Abogada</p>
											<p>
												Asesora empresarial con más de 10 años de experiencia,
												amante de la gastronomía, la música y la danza.
												Bailarina y cantante por pasión
											</p>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-dismiss="modal">
										Cerrar
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="background-team pointer"
					itemType="button"
					data-toggle="modal"
					data-target="#staticBackdrop1">
					<div className="jose">a</div>
					<p>Jose Alvarez</p>
					<div
						className="modal fade"
						id="staticBackdrop1"
						data-backdrop="static"
						data-keyboard="false"
						tabIndex={-1}
						aria-labelledby="staticBackdropLabel"
						aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="staticBackdropLabel">
										TEAM JOSE ALVAREZ
									</h5>
									<button
										type="button"
										className="close"
										data-dismiss="modal"
										aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									<div className="d-flex container-team-modals">
										<img src={jose} alt="img" className="img-info-alexis" />
										<div>
											<p>Jose Alvarez </p>
											<p>Un loco amante de la comida</p>
											<p>
												Nacido en Cartagena en el barrio piedra de bolívar
												sector Andalucía.
											</p>
											<p>
												Quien inicio su camino en las redes sociales como un
												hobby y hoy lo convirtió en su trabajo de tiempo
												completo.
											</p>
											<p>
												Satisfaciendo sus gustos y rompiendo la dieta de todos
											</p>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-dismiss="modal">
										Cerrar
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="background-team pointer"
					itemType="button"
					data-toggle="modal"
					data-target="#staticBackdrop2">
					<div className="alexis"></div>
					<p>Alexis Mendoza</p>
					<div
						className="modal fade"
						id="staticBackdrop2"
						data-backdrop="static"
						data-keyboard="false"
						tabIndex={-1}
						aria-labelledby="staticBackdropLabel"
						aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="staticBackdropLabel">
										TEAM JOSE ALVAREZ
									</h5>
									<button
										type="button"
										className="close"
										data-dismiss="modal"
										aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									<div className="d-flex container-team-modals">
										<img src={alexis} alt="img" className="img-info-alexis" />
										<div>
											<b>Alexis Mendoza</b>
											<p>
												Estratega digital con mas de 5 años de experiencia en el
												sector de los E-commerse Cantante de Música urbana y
												apasionado por la gastronomía.
											</p>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-dismiss="modal">
										Cerrar
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamPage;
