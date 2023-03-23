import { ValuesLogin, ValuesRegister } from "@/models/interface";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "./styles/NavBar.css";
import Swal from "sweetalert2";
import Logout from "../AuthGoogle/Logout";
import Signature from "../Header/img/firma.webp";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Img from "react-cool-img";

export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
  const local = JSON.parse(localStorage.getItem("@user") as any);
  const navigate = useNavigate();
  const handleToggle = () => {
    const bar = document.querySelector(".navbar");
    const toggle = document.querySelector(".container-navbar");
    toggle?.classList.toggle("responsive");
    bar?.classList.toggle("bar-toggle");
  };
  const handleSignOff = () => {
    Swal.fire({
      title: "Estas seguro de cerrar sesión?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("@user");
        navigate("/login");
      }
    });
  };

  return (
    <div className="navbar flex justify-between">
      <div className="navbar-start w-[30%]">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content bg-black mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "isActive pointer navbar-brand"
                    : "pointer navbar-brand"
                }
              >
                <HomeOutlinedIcon />
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"restaurante"}
                className={({ isActive }) =>
                  isActive
                    ? "isActive pointer navbar-brand"
                    : "pointer navbar-brand"
                }
              >
                <RestaurantOutlinedIcon />
                RESTAURANTES
              </NavLink>
            </li>
            <li>
              {local?.token || local?.data?.token ? (
                <li>
                  <NavLink
                    to={"restaurante/crear"}
                    className={({ isActive }) =>
                      isActive
                        ? "isActive pointer navbar-brand"
                        : "pointer navbar-brand"
                    }
                  >
                    <FoodBankOutlinedIcon />
                    MI RESTAURANTE
                  </NavLink>
                </li>
              ) : (
                ""
              )}
            </li>
            <li>
              <NavLink
                to={"tour"}
                className={({ isActive }) =>
                  isActive
                    ? "isActive pointer navbar-brand"
                    : "pointer navbar-brand"
                }
              >
                <DeliveryDiningOutlinedIcon />
                TOUR GASTRONOMICO
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"videos"}
                className={({ isActive }) =>
                  isActive
                    ? "isActive pointer navbar-brand"
                    : "pointer navbar-brand"
                }
              >
                <VideoCameraFrontOutlinedIcon />
                VIDEOS PUBLICADOS
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"contactanos"}
                className={({ isActive }) =>
                  isActive
                    ? "isActive pointer navbar-brand"
                    : "pointer navbar-brand"
                }
              >
                <ContactSupportOutlinedIcon />
                CONTACTANOS
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to={"/"} className="btn hidden md:block btn-ghost normal-case text-xl">
          <Img src={Signature} alt="" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "isActive pointer navbar-brand"
                  : "pointer navbar-brand"
              }
            >
              <HomeOutlinedIcon />
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"restaurante"}
              className={({ isActive }) =>
                isActive
                  ? "isActive pointer navbar-brand"
                  : "pointer navbar-brand"
              }
            >
              <RestaurantOutlinedIcon />
              RESTAURANTES
            </NavLink>
          </li>
          {local?.token || local?.data?.token ? (
            <li>
              <NavLink
                to={"restaurante/crear"}
                className={({ isActive }) =>
                  isActive
                    ? "isActive pointer navbar-brand"
                    : "pointer navbar-brand"
                }
              >
                <FoodBankOutlinedIcon />
                MI RESTAURANTE
              </NavLink>
            </li>
          ) : (
            ""
          )}
          <li>
            <NavLink
              to={"tour"}
              className={({ isActive }) =>
                isActive
                  ? "isActive pointer navbar-brand"
                  : "pointer navbar-brand"
              }
            >
              <DeliveryDiningOutlinedIcon />
              TOUR GASTRONOMICO
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"videos"}
              className={({ isActive }) =>
                isActive
                  ? "isActive pointer navbar-brand"
                  : "pointer navbar-brand"
              }
            >
              <VideoCameraFrontOutlinedIcon />
              VIDEOS PUBLICADOS
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"contactanos"}
              className={({ isActive }) =>
                isActive
                  ? "isActive pointer navbar-brand"
                  : "pointer navbar-brand"
              }
            >
              <ContactSupportOutlinedIcon />
              CONTACTANOS
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {!JSON.parse(localStorage.getItem("@user") as any) ? (
          <>
            <NavLink
              to={"login"}
              className="btn bg-[#33D1CB] text-white gap-2 hover:bg-[#23B2AC]"
            >
              <LoginOutlinedIcon />
              
              Conectar
            </NavLink>

            <NavLink
              to={"register"}
              className="btn bg-[#33D1CB] text-white w-auto  hover:bg-[#23B2AC]"
            >
              <AppRegistrationOutlinedIcon />
                Registrate
            </NavLink>
          </>
        ) : !local?.data?.token ? (
          <div onClick={handleSignOff} className="text-white cursor-pointer">
            <LogoutOutlinedIcon />
          </div>
        ) : (
          <Logout event={handleSignOff}/>
        )}
      </div>
    </div>
    // <div className="container-navbar sticky-top">
    // 	<div className="navbar">
    // 		<NavLink
    // 			to={'/'}
    // 			className={({ isActive }) =>
    // 				isActive ? 'isActive pointer navbar-brand' : 'pointer navbar-brand'
    // 			}>
    // 			HOME
    // 		</NavLink>
    // 		<NavLink
    // 			to={'restaurante'}
    // 			className={({ isActive }) =>
    // 				isActive ? 'isActive pointer navbar-brand' : 'pointer navbar-brand'
    // 			}>
    // 			RESTAURANTES
    // 		</NavLink>
    // 		{local?.token || local?.data?.token ? (
    // 			<NavLink
    // 				to={'restaurante/crear'}
    // 				className={({ isActive }) =>
    // 					isActive
    // 						? 'isActive pointer navbar-brand'
    // 						: 'pointer navbar-brand'
    // 				}>
    // 				MI RESTAURANTE
    // 			</NavLink>
    // 		) : undefined}
    // 		{/* <NavLink
    // 		to={'ven'}
    // 		className={({ isActive }) =>
    // 			isActive ? 'isActive pointer navbar-brand' : 'pointer navbar-brand'
    // 		}>
    // 		VEN TE ENSEÑO
    // 		</NavLink> */}

    // 		<NavLink
    // 			to={'tour'}
    // 			className={({ isActive }) =>
    // 				isActive ? 'isActive pointer navbar-brand' : 'pointer navbar-brand'
    // 			}>
    // 			TOUR GASTRONOMICO
    // 		</NavLink>
    // 		<NavLink
    // 			to={'videos'}
    // 			className={({ isActive }) =>
    // 				isActive ? 'isActive pointer navbar-brand' : 'pointer navbar-brand'
    // 			}>
    // 			VIDEOS PUBLICADOS
    // 		</NavLink>
    // 		<NavLink
    // 			to={'team'}
    // 			className={({ isActive }) =>
    // 				isActive ? 'isActive pointer navbar-brand' : 'pointer navbar-brand'
    // 			}>
    // 			TEAM JOSE ALVAREZ
    // 		</NavLink>
    // 		<NavLink
    // 			to={'contactanos'}
    // 			className={({ isActive }) =>
    // 				isActive ? 'isActive pointer navbar-brand' : 'pointer navbar-brand'
    // 			}>
    // 			CONTACTANOS
    // 		</NavLink>
    // 		{/* <i className="fa-solid fa-magnifying-glass pointer white"></i> */}
    // 		<div style={{ gap: '5px', display: 'flex' }}>
    // 			{!JSON.parse(localStorage.getItem('@user') as any) ? (
    // 				<>
    // 					<NavLink to={'login'} className="pointer btn btn-info">
    // 						Inicia Sesión
    // 					</NavLink>
    // 					<NavLink to={'register'} className="pointer btn btn-info">
    // 						Registrate
    // 					</NavLink>
    // 				</>
    // 			) : !local?.data?.token ? (
    // 				<button className="pointer btn btn-info" onClick={handleSignOff}>
    // 					Cerrar sesión
    // 				</button>
    // 			) : (
    // 				<Logout event={handleSignOff} />
    // 			)}
    // 		</div>
    // 	</div>
    // 	<i
    // 		className="fa-solid fa-bars barJose pointer"
    // 		onClick={handleToggle}></i>
    // </div>
  );
};

export default NavBar;
