import a1 from '../../assets/img/curso/a1.jpg'
import a2 from '../../assets/img/curso/a2.jpg'
import b1 from '../../assets/img/curso/b1.jpg'
import b2 from '../../assets/img/curso/b2.jpg'
import c1 from '../../assets/img/curso/c1.jpg'
import c2 from '../../assets/img/curso/c2.jpg'

function Curso() {
    return (
        <>
        <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center" style={{marginBottom: 50}}>
                    <h2 class="section-heading text-uppercase">Cursos</h2>
                    <h3 class="section-subheading text-muted">COREANO</h3>
                    <div style={{display: 'flex', justifyContent:'center', marginTop: '50px'}}>
                        <a class="btn btn-xl text-uppercase" style={{color:'#fff',backgroundColor:'#2e3383',border:'#2e3383'}} href="#services">Programa de estudio</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4">
                        
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={a1} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Introductorio</div>
                                <div class="portfolio-caption-subheading text-muted" style={{textAlign: 'left'}}>
                                    <p>Lun-Jue, 6:00-8:00PM(GMT-3)</p>
                                    <p>Inicia: 3 de Enero 2022</p>
                                    <p>Duración: 3 semanas</p>
                                    <p>Horas: 24 horas</p>
                                    <p>Clases: 12 sesiones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={a2} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Básico 1</div>
                                <div class="portfolio-caption-subheading text-muted" style={{textAlign: 'left'}}>
                                    <p>Lun/Mié, 8:00-10:00PM(GMT-3)</p>
                                    <p>Inicia: 3 de Enero 2022</p>
                                    <p>Duración: Un mes y medio</p>
                                    <p>Horas: 24 horas</p>
                                    <p>Clases: 12 sesiones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={b1} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Básico 3</div>
                                <div class="portfolio-caption-subheading text-muted" style={{textAlign: 'left'}}>
                                    <p>Mar/Jue, 10:00-11:30PM(GMT-3)</p>
                                    <p>Inicia: 4 de Enero 2022</p>
                                    <p>Duración: Bimestre</p>
                                    <p>Horas: 24 horas</p>
                                    <p>Clases: 16 sesiones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={b2} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">TOPIK 1</div>
                                <div class="portfolio-caption-subheading text-muted" style={{textAlign: 'left'}}>
                                    <p>Lun/Mié, 10:00-12:00PM(GMT-3)</p>
                                    <p>Inicia: 3 de Enero 2022</p>
                                    <p>Duración: Un mes</p>
                                    <p>Horas: 16 horas</p>
                                    <p>Clases: 8 sesiones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={c1} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Intermedio 1</div>
                                <div class="portfolio-caption-subheading text-muted" style={{textAlign: 'left'}}>
                                    <p>Mar/Jue, 8:00-10:00PM(GMT-3)</p>
                                    <p>Inicia: 4 de Enero 2022</p>
                                    <p>Duración: Un mes y medio</p>
                                    <p>Horas: 24 horas</p>
                                    <p>Clases: 12 sesiones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={c2} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">NIVEL BÁSICO</div>
                                <div class="portfolio-caption-subheading text-muted" style={{textAlign: 'left'}}>
                                    <p>Lun/Mié, 8:00-10:00PM(GMT-3)</p>
                                    <p>Inicia: 3 de Enero 2022</p>
                                    <p>Duración: Un mes y medio</p>
                                    <p>Horas: 24 horas</p>
                                    <p>Clases: 12 sesiones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent:'center', marginTop: '50px'}}>
                    <a class="btn btn-xl text-uppercase" style={{color:'#fff',backgroundColor:'#2e3383',border:'#2e3383'}} href="#services">+Info</a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Curso;