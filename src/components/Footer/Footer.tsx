import React from 'react';
import './styles/Footer.css';
export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
	return (
		<div className="footer">
			<div>
				<div>
					<div>
						<p>Compañia</p>
						<p>Acerca de Empleo</p>
						<p>Estadisticas</p>
					</div>
					<div>
						<p>Comunidades</p>
						<p>Usuarios</p>
						<p>Restaurante</p>
						<p>Publicidad</p>
						<p>Inversionistas</p>
						<p>Proveedores</p>
					</div>
					<div>
						<p>Enlaces Utiles</p>
						<p>Soporte</p>
						<p>App</p>
					</div>
				</div>
				<div>
					<img alt="" />
					<img alt="" />
					<img alt="" />
				</div>
			</div>
			<p>
				Legal Centro de Privacidad Politicas de Privacidad Cookis Sobre
				Publicidad
			</p>
		</div>
	);
};

export default Footer;
