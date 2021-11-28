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
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Curso</h2>
                    <h3 class="section-subheading text-muted">Presentar el curso</h3>
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
                                <div class="portfolio-caption-heading">A1</div>
                                <div class="portfolio-caption-subheading text-muted">Comprender y utilizar expresiones cotidianas de uso muy frecuente en cualquier lugar del mundo hispanohablante para satisfacer necesidades inmediatas.</div>
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
                                <div class="portfolio-caption-heading">A2</div>
                                <div class="portfolio-caption-subheading text-muted">Comprender y utilizar expresiones cotidianas de uso frecuente, relacionadas casi siempre con áreas de experiencia que le sean especialmente relevantes por su inmediatez (información básica sobre sí mismo y sobre su familia, compras y lugares de interés, ocupaciones, etc.).</div>
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
                                <div class="portfolio-caption-heading">B1</div>
                                <div class="portfolio-caption-subheading text-muted">Comprender los puntos principales de textos orales y escritos en variedades normalizadas de la lengua y que no sean excesivamente localizadas, siempre que versen sobre asuntos conocidos, ya sean estos relacionados con el trabajo, el estudio o la vida cotidiana.</div>
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
                                <div class="portfolio-caption-heading">B2</div>
                                <div class="portfolio-caption-subheading text-muted">Comprender lo esencial de textos orales y escritos complejos, incluso aunque traten sobre temas abstractos, se presenten en diversas variedades del español o tengan un carácter técnico, principalmente si tratan sobre áreas de conocimiento especializado a las que se ha tenido acceso.</div>
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
                                <div class="portfolio-caption-heading">C1</div>
                                <div class="portfolio-caption-subheading text-muted">Desenvolverse con soltura al procesar una amplia variedad de textos orales y escritos de cierta extensión en cualquier variante de la lengua, reconociendo incluso en ellos sentidos implícitos, actitudes o intenciones.</div>
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
                                <div class="portfolio-caption-heading">C2</div>
                                <div class="portfolio-caption-subheading text-muted">Desenvolverse en cualquier situación en la que se requiera comprender prácticamente todo lo que se oye o se lee, independientemente de la extensión de los textos, de su complejidad o grado de abstracción, del grado de familiarización con los temas que tratan, de la variedad de la lengua que empleen o de la necesidad de realizar inferencias u otras operaciones para conocer su contenido.</div>
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