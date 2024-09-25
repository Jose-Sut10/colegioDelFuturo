import "./encabezado.css";

const Encabezado = () =>{
    return <header className="encabezado">
        <section className="encabezadoContainer">
            <div className="navegacion">
                <i class="fa-solid fa-bars"></i>
                <img src="/img/logo.png" alt="Logo Colegio"/>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </section>
    </header>
}

export default Encabezado;