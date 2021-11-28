function Top() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#services">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio">Curso</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about">Calendario</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">Contacto con nosotros</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Top;