import React from 'react';
import './styles/Footer.css';
import facebook from './img/facebook2.png';
import instagram from './img/instagram2.png';
import youtube from './img/youtube2.png';
export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
	return (
		<div className="footer">
			<div className='footer-div'>
				<p>Legal</p>
				<p>Centro de Privacidad</p>
				<p>Politicas de Privacidad</p>
				<p>Cookies</p>
				<p>Sobre Publicidad</p>
				<p>Soporte</p>
			</div>
			<div className="footer-bottom fixed-bottom">
				<div>
					<p className="mb-0">Jose Alvarez Yg</p>
				</div>
				<div>
					<img
						src={facebook}
						alt="Facebook"
						width={50}
						height={50}
						className="mr-3 facebook pointer"
						onClick={() =>
							window.open('https://www.facebook.com/josealvarezyg')
						}
					/>
					<img
						src={youtube}
						alt="youtube "
						className="youtube pointer mr-3"
						width={50}
						height={50}
						onClick={() =>
							window.open('https://www.youtube.com/@josealvarezyg/featured')
						}
					/>
					<img
						src={instagram}
						alt="instagram"
						className="instagram pointer"
						width={50}
						height={50}
						onClick={() =>
							window.open('https://www.instagram.com/josealvarezyg_/?hl=es-la')
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;

{
	/* <div className="footer">
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
						className="mr-3 facebook pointer"
						onClick={() =>
							window.open('https://www.facebook.com/josealvarezyg')
						}
					/>
					<img
						src={instagram}
						alt="instagram"
						className="instagram pointer"
						width={50}
						height={50}
						onClick={() =>
							window.open('https://www.instagram.com/josealvarezyg_/?hl=es-la')
						}
					/>
				</div>
			</div>
		</div> */
}
