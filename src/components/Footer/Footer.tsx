import React from 'react';
import './styles/Footer.css';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
	return (
		<div className="footer">
			<div>
				<div className="footer-container flex-wrap">
					<div className="mt-5 ">
						<p>Compañia</p>
						<p>Acerca de Empleo</p>
						<p>Estadisticas</p>
					</div>
					<div className="mt-5 mb-3 ">
						<p>Comunidades</p>
						<p>Usuarios</p>
						<p>Restaurante</p>
						<p>Publicidad</p>
						<p>Inversionistas</p>
						<p>Proveedores</p>
					</div>
					<div className="mt-5 mb-3 ">
						<p>Enlaces Utiles</p>
						<p>Soporte</p>
						<p>App</p>
					</div>
					<div className="d-flex ">
						<img
							src="https://previews.123rf.com/images/cherezoff/cherezoff1310/cherezoff131000612/23286722-vidrio-c%C3%ADrculo-3d-en-el-fondo-blanco.jpg"
							width={80}
							height={80}
							alt="circulo blanco"
						/>
						<img
							src="https://previews.123rf.com/images/cherezoff/cherezoff1310/cherezoff131000612/23286722-vidrio-c%C3%ADrculo-3d-en-el-fondo-blanco.jpg"
							width={80}
							height={80}
							alt="circulo blanco"
						/>
						<img
							src="https://previews.123rf.com/images/cherezoff/cherezoff1310/cherezoff131000612/23286722-vidrio-c%C3%ADrculo-3d-en-el-fondo-blanco.jpg"
							width={80}
							height={80}
							alt="circulo blanco"
						/>
					</div>
				</div>
				<div className="priv mt-3">
					<p className="">
						Legal Centro de Privacidad Politicas de Privacidad Cookis Sobre
						Publicidad
					</p>
				</div>
			</div>
			<div className="footer-bottom fixed-bottom">
				<div>
					<p className="mb-0">Jose Alvarez</p>
				</div>
				<div>
					<img
						src={facebook}
						alt="Facebook"
						width={50}
						height={50}
						className="mr-3 facebook"
					/>
					<img
						src={instagram}
						alt="instagram"
						className="instagram"
						width={50}
						height={50}
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
