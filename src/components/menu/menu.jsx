import React, { useEffect } from 'react';
import "./menu.css";

const Menu = () => {

    useEffect(() => {
        const iconoClose = document.querySelector('[data-closeicon]');
        
        const toggleMenu = () => {
            document.querySelector('[data-menudesplegable]').classList.toggle('activate');
        };

        iconoClose.addEventListener('click', toggleMenu);

        // Cleanup function to remove the event listener
        return () => {
            iconoClose.removeEventListener('click', toggleMenu);
        };
    }, []);

    return (
        <section className="menu" data-menudesplegable>
            <div className="menu__container">
                <div className="menuIcono">
                    <i className="fa-solid fa-xmark" data-closeicon></i>
                </div>

                <ul className="listaNav">
                    <li>
                        <i className="fa-regular fa-square-plus"></i>
                        <h3>Acerca de</h3>
                    </li>
                    <li>
                        <i className="fa-regular fa-square-plus"></i>
                        <h3>Carreras</h3>
                    </li>
                    <li>
                        <i className="fa-regular fa-square-plus"></i>
                        <h3>Actividades</h3>
                    </li>
                    <li>
                        <i className="fa-regular fa-square-plus"></i>
                        <h3>Inscripciones</h3>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Menu;
