import basico1 from '../../assets/img/curso/Básico1.jpg'
import basico2 from '../../assets/img/curso/Básico-2.jpg'
import basico3 from '../../assets/img/curso/Básico-3.jpg'
import intermedio from '../../assets/img/curso/Intermedio.jpg'
import introductorio from '../../assets/img/curso/Introductorio-1.jpg'
import topik from '../../assets/img/curso/Topik-1.jpg'

import { useState } from "react";
import Modal from './modal';

const message = "NIVEL INTRODUCTORIO \
\
Bimestre 1: 『EPS TOPIK』 1-7 \
Este nivel está dirigido para las personas que estudian coreano por primera vez. Se inician en el conocimiento del alfabeto coreano Hangul(한글), las sílabas y la estructura de frase, saludos, agradecimiento y auto-presentación.  \
\
NIVEL BÁSICO \
\
Bimestre 1: 『EPS TOPIK』  8-12 \
En este nivel se estudia la gramática y el vocabulario más básico guiado a las expresiones cotidianas y aprenderán las herramientas para poner comprender la lengua oral y escrita de forma más sencilla. \
Aprenderán numerales: Fecha, la hora y contéo. \
\
Bimestre 2: 『EPS TOPIK』  13-17 \
En este nivel aprenderán expresiones más practicas: hacer citas, pedir comida en restaurantes, espresiones relacionadas con el clima, pasatiempos y viajes. \
\
Bimestre 3: 『EPS TOPIK』  18-21 \
\
En este nivel aprenderán cómo usar transportes públicos, típicas llamadas telefónicas, compras por Internet, expresiones al colaborar con los compañeros y de invitaciones.  \
\
Bimestre 4: 『EPS TOPIK』 22-26\
\
En este nivel aprenderán cómo hablar de prohibiciones, modales y etiquetas de Corea, honoríficos, estudios y el cuerpo humano. \
\
Bimestre 5: 『EPS TOPIK』  27-30\
En este nivel aprenderán conversaciones en lugares como hospitales y oficinas gubernamentales. \
\
NIVEL INTERMEDIO \
\
Bimestre 1: 『Seogang』 3A 1-8\
El contenido varia depende de los estudiantes\
Bimestre 2: 『Seogang』  3B 1-4\
El contenido varia depende de los estudiantes\
\
\
Bimestre 3: 『Seogang』  3B 5-8\
El contenido varia depende de los estudiantes\
\
Bimestre 4: 『Seogang』  4A 1-4\
El contenido varia depende de los estudiantes\
\
Bimestre 5: 『Seogang』  4A 5-8\
El contenido varia depende de los estudiantes\
\
NIVEL AVANZADO  \
\
Bimestre 1: 『Seogang』  4B 1-4\
El contenido varia depende de los estudiantes\
\
Bimestre 2: 『Seogang』  4B 5-8\
El contenido varia depende de los estudiantes\
\
Bimestre 3: 『Seogang』  5A 1-4\
El contenido varia depende de los estudiantes\
\
Bimestre 4: 『Seogang』  5A 5-8\
El contenido varia depende de los estudiantes\
\
Bimestre 5: 『Seogang』  5B 1-4\
El contenido varia depende de los estudiantes\
\
Bimestre 6: 『Seogang』  5B 5-8\
El contenido varia depende de los estudiantes\
";

function Curso() {
    const [modalVisible, setModalVisible] = useState(false)
    const openModal = () => {
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }
    return (
        <>
        <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center" style={{marginBottom: 50}}>
                    <h2 class="section-heading text-uppercase">Cursos</h2>
                    <div style={{display: 'flex', justifyContent:'center', marginTop: '50px'}}>
                        <button class="btn btn-xl text-uppercase" style={{color:'#fff',backgroundColor:'#2e3383',border:'#2e3383'}} onClick={openModal}>Programa de estudio</button>
                        {
                            modalVisible && <Modal
                            visible={modalVisible}
                            closable={true}
                            maskClosable={true}
                            onClose={closeModal}>{message}</Modal>
                        }
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4">
                        
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={introductorio} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Introductorio</div>
                                <div class="portfolio-caption-subheading text-muted" style={{textAlign: 'left'}}>
                                    <p>Lun-Jue, 6:00-8:00PM(GMT-3)</p>
                                    <p>Inicia: 3 de Enero 2022</p>
                                    <p>Duración: 3 semanas</p>
                                    <p>Horas totales: 24 horas</p>
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
                                <img class="img-fluid" src={basico1} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Básico 1</div>
                                <div class="portfolio-caption-subheading text-muted" style={{textAlign: 'left'}}>
                                    <p>Lun/Mié, 8:00-10:00PM(GMT-3)</p>
                                    <p>Inicia: 3 de Enero 2022</p>
                                    <p>Duración: Un mes y medio</p>
                                    <p>Horas totales: 24 horas</p>
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
                                <img class="img-fluid" src={basico3} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Básico 3</div>
                                <div class="portfolio-caption-subheading text-muted" style={{textAlign: 'left'}}>
                                    <p>Mar/Jue, 10:00-11:30PM(GMT-3)</p>
                                    <p>Inicia: 4 de Enero 2022</p>
                                    <p>Duración: Bimestre</p>
                                    <p>Horas totales: 24 horas</p>
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
                                <img class="img-fluid" src={topik} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">TOPIK 1</div>
                                <div class="portfolio-caption-subheading text-muted" style={{textAlign: 'left'}}>
                                    <p>Lun/Mié, 10:00-12:00PM(GMT-3)</p>
                                    <p>Inicia: 3 de Enero 2022</p>
                                    <p>Duración: Un mes</p>
                                    <p>Horas totales: 16 horas</p>
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
                                <img class="img-fluid" src={intermedio} alt="..." />
                            </a>
                            <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Intermedio 1</div>
                                <div class="portfolio-caption-subheading text-muted" style={{textAlign: 'left'}}>
                                    <p>Mar/Jue, 8:00-10:00PM(GMT-3)</p>
                                    <p>Inicia: 4 de Enero 2022</p>
                                    <p>Duración: Un mes y medio</p>
                                    <p>Horas totales: 24 horas</p>
                                    <p>Clases: 12 sesiones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style={{marginTop:'1rem'}}>
                    <div class="col-md-12"><h5 class="my-3">* Consultar en el caso de necesitar clases de TOPIK Ⅱ y clases presenciales</h5></div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Curso;