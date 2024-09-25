import { useEffect } from "react";
import "./encabezado.css";

const Encabezado = () =>{

    useEffect(()=>{
        const iconoMenu = document.querySelector('[data-iconomenu]');
        
        const toggleMenu = () => {
            document.querySelector('[data-menudesplegable]').classList.toggle('activate');
        };
        iconoMenu.addEventListener('click', toggleMenu);
        return ()=>{
            iconoMenu.removeEventListener('click',toggleMenu)
        }
    }, []);

    return <header className="encabezado">
        <section className="encabezadoContainer">
            <div className="navegacion">
                <i className="fa-solid fa-bars" data-iconomenu></i>
                <img src="/img/logo.png" alt="Logo Colegio"/>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </section>
    </header>
}

export default Encabezado;