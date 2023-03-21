import React from "react";
import "./styles/Footer.css";
import facebook from "./img/facebook2.png";
import instagram from "./img/instagram2.png";
import youtube from "./img/youtube2.png";
export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Sigue a Jose Alvarez en:</h3>
          <div className="flex justify-center md:justify-start mt-2">
            <a href="https://www.facebook.com/josealvarezyg" className="text-gray-400 hover:text-gray-300 mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/josealvarezyg_/?hl=es-la" className="text-gray-400 hover:text-gray-300 mx-2">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <h3 className="text-lg font-bold">Enlaces útiles:</h3>
          <div className="flex justify-center md:justify-end mt-2">
            <a href="/contactanos" className="text-gray-400 hover:text-gray-300 mx-2">
              <i className="uil uil-envelope-alt"></i> Contacto
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">
              <i className="uil uil-file-alt"></i> Términos de uso
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">
              <i className="uil uil-shield-check"></i> Política de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
