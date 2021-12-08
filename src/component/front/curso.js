import basico1 from '../../assets/img/curso/Básico1.jpg'
import basico3 from '../../assets/img/curso/Básico-3.jpg'
import intermedio from '../../assets/img/curso/Intermedio.jpg'
import introductorio from '../../assets/img/curso/Introductorio-1.jpg'
import topik from '../../assets/img/curso/Topik-1.jpg'

import { useState } from "react";
import Modal from './modal';

const message = [
    {
        "nivel":"NIVEL INTRODUCTORIO",
        "title":[{"1":"Bimestre 1"}],
        "subtitle":[{"1":"『EPS TOPIK』 1-7"}],
        "content":[{"1":"Este nivel está dirigido para las personas que estudian coreano por primera vez. Se inician en el conocimiento del alfabeto coreano Hangul(한글), las sílabas y la estructura de frase, saludos, agradecimiento y auto-presentación."}]
    },
    {
        "nivel":"NIVEL BÁSICO",
        "title":[{"1":"Bimestre 1", "2":"Bimestre 2", "3":"Bimestre 3", "4":"Bimestre 4", "5":"Bimestre 5"}],
        "subtitle":[{"1":"『EPS TOPIK』  8-12", "2":"『EPS TOPIK』  13-17"}, {"3":"『EPS TOPIK』  18-21"}, {"4":"『EPS TOPIK』  22-26"}, {"5":"『EPS TOPIK』  27-30"}],
        "content":[
            {"1":"En este nivel se estudia la gramática y el vocabulario más básico guiado a las expresiones cotidianas. Aprenderán las herramientas para poder comprender la lengua oral y escrita de forma más sencilla. Aprenderán numerales: Fecha, hora y contéo."},
            {"2":"En este nivel aprenderán expresiones más prácticas: hacer citas, pedir comida en restaurantes, expresiones relacionadas con el clima, pasatiempos y viajes."},
            {"3":"En este nivel aprenderán cómo usar el transporte público, llamadas telefónicas comunes, compras por Internet, expresiones al colaborar con compañeros y para hacer invitaciones."},
            {"4":"En este nivel aprenderán cómo hablar de prohibiciones, modales y normas de etiquetas de Corea, honoríficos, estudios y el cuerpo humano."},
            {"5":"En este nivel aprenderán cómo entablar conversaciones en lugares como hospitales y oficinas gubernamentales."}
        ]
    },
    {
        "nivel":"NIVEL INTERMEDIO",
        "title":[{"1":"Bimestre 1", "2":"Bimestre 2", "3":"Bimestre 3", "4":"Bimestre 4", "5":"Bimestre 5"}],
        "subtitle":[{"1":"『『Seogang』 3A 1-8", "2":"『『Seogang』 3B 1-4"}, {"3":"『『Seogang』 3B 5-8"}, {"4":"『『Seogang』 4A 1-4"}, {"5":"『『Seogang』 4A 5-8"}],
        "content":[
            {"1":"El contenido varía dependiendo del nivel y necesidades de los estudiantes"},
            {"2":"El contenido varía dependiendo del nivel y necesidades de los estudiantes"},
            {"3":"El contenido varía dependiendo del nivel y necesidades de los estudiantesBimestre"},
            {"4":"El contenido varía dependiendo del nivel y necesidades de los estudiantes"},
            {"5":"El contenido varía dependiendo del nivel y necesidades de los estudiantes"}
        ]
    },
    {
        "nivel":"NIVEL AVANZADO",
        "title":[{"1":"Bimestre 1", "2":"Bimestre 2", "3":"Bimestre 3", "4":"Bimestre 4", "5":"Bimestre 5", "6":"Bimestre 6"}],
        "subtitle":[{"1":"『『Seogang』 4B 1-4", "2":"『『Seogang』 4B 5-8"}, {"3":"『『Seogang』 5A 1-4"}, {"4":"『『Seogang』 5A 5-8"}, {"5":"『『Seogang』 5B 1-4"}, {"6":"『『Seogang』 5B 5-8"}],
        "content":[
            {"1":"El contenido varía dependiendo de los estudiantes"},
            {"2":"El contenido varía dependiendo de los estudiantes"},
            {"3":"El contenido varía dependiendo de los estudiantes"},
            {"4":"El contenido varía dependiendo de los estudiantes"},
            {"5":"El contenido varía dependiendo de los estudiantes"},
            {"6":"El contenido varía dependiendo de los estudiantes"}
        ]
    },
];

function Curso() {
    const [modalVisible, setModalVisible] = useState(false)
    const openModal = () => {
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }
    console.log(message)
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
                            onClose={closeModal}
                            message={message}></Modal>
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