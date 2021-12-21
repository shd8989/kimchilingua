import basico1 from '../../assets/img/curso/Básico1.jpg'
import basico3 from '../../assets/img/curso/Básico-3.jpg'
import intermedio from '../../assets/img/curso/Intermedio.jpg'
import introductorio from '../../assets/img/curso/Introductorio-1.jpg'
import topik from '../../assets/img/curso/Topik-1.jpg'
import {v4 as uuidv4} from 'uuid';

import { useState, useEffect } from "react";
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
        "title":[{"1":"Bimestre 1"}, {"2":"Bimestre 2"}, {"3":"Bimestre 3"}, {"4":"Bimestre 4"}, {"5":"Bimestre 5"}],
        "subtitle":[{"1":"『EPS TOPIK』  8-12"}, {"2":"『EPS TOPIK』  13-17"}, {"3":"『EPS TOPIK』  18-21"}, {"4":"『EPS TOPIK』  22-26"}, {"5":"『EPS TOPIK』  27-30"}],
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
        "title":[{"1":"Bimestre 1"}, {"2":"Bimestre 2"}, {"3":"Bimestre 3"}, {"4":"Bimestre 4"}, {"5":"Bimestre 5"}],
        "subtitle":[{"1":"『『Seogang』 3A 1-8"}, {"2":"『『Seogang』 3B 1-4"}, {"3":"『『Seogang』 3B 5-8"}, {"4":"『『Seogang』 4A 1-4"}, {"5":"『『Seogang』 4A 5-8"}],
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
        "title":[{"1":"Bimestre 1"}, {"2":"Bimestre 2"}, {"3":"Bimestre 3"}, {"4":"Bimestre 4"}, {"5":"Bimestre 5"}, {"6":"Bimestre 6"}],
        "subtitle":[{"1":"『『Seogang』 4B 1-4"}, {"2":"『『Seogang』 4B 5-8"}, {"3":"『『Seogang』 5A 1-4"}, {"4":"『『Seogang』 5A 5-8"}, {"5":"『『Seogang』 5B 1-4"}, {"6":"『『Seogang』 5B 5-8"}],
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
    // console.log(Object.keys(message[0]))    // ['nivel', 'title', 'subtitle', 'content']
    // console.log(Object.entries(message[0])) // [['nivel', 'NIVEL INTRODUCTORIO'], ['title', Array(1)], ['subtitle', Array(1)], ['content', Array(1)]]
    // for(var prop in message) {
    //     console.log(message[prop].nivel)  // {nivel: 'NIVEL INTRODUCTORIO', title: Array(1), subtitle: Array(1), content: Array(1)}
    // }
    
    var list = [];
    const titleStyle = {
        display: 'flex',
        fontSize: '0.7rem',
        marginBottom: 20
    }
    const titleContinueStyle = {
        display: 'flex',
        fontSize: '0.7rem',
        marginBottom: 10
    }
    const subStyle = {
        fontSize: '0.5rem',
        border: 'solid 0.5px black',
        padding: 0,
        borderRadius: 10,
        width: '20%',
        marginRight: '10px'
    }
    // message.map(item => {
    //     list.push(<div key={uuidv4} style={{display: 'flex'}}>
    //         <div class="col-md-3">{item.nivel}</div>
    //         <div class="col-md-9">
    //             <div>{Object.values(item.title[0])[0]}</div>
    //             <div>{Object.values(item.subtitle[0])[0]}</div>
    //             <div>{Object.values(item.content[0])[0]}</div>
    //         </div>
    //     </div>)
    // })

    list.push(<div key={uuidv4} class="row" style={titleStyle}>
        <div class="col-md-3" style={{color:'#036aa7', fontWeight: 'bold', fontSize: '1rem'}}>{message[0].nivel}</div>
        <div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#036aa7', borderRadius: '10px 10px 0 0'}}>{Object.values(message[0].title[0])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#036aa7', borderTop: 'solid 1px #036aa7'}}>{Object.values(message[0].subtitle[0])[0]}</div>
            <div style={{borderTop: 'solid 0.5px #036aa7', padding: '5px 0px 15px 3px'}}>{Object.values(message[0].content[0])[0]}</div>
            <div style={{minHeight:10, background: '#036aa7', borderRadius: '0 0 10px 10px'}}></div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={titleContinueStyle}>
        <div class="col-md-3" style={{color:'#2d4c8f', fontWeight: 'bold', fontSize: '1rem'}}>{message[1].nivel}</div>
        <div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#2d4c8f', borderRadius: '10px 10px 0 0'}}>{Object.values(message[1].title[0])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#2d4c8f', borderTop: 'solid 1px #2d4c8f'}}>{Object.values(message[1].subtitle[0])[0]}</div>
            <div name="basico" style={{borderTop: 'solid 0.5px #2d4c8f', padding: '5px 0px 15px 3px'}}>{Object.values(message[1].content[0])[0]}</div>
            <div style={{minHeight:10, background: '#2d4c8f', borderRadius: '0 0 10px 10px'}}></div>
        </div>
        <div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#2d4c8f', borderRadius: '10px 10px 0 0'}}>{Object.values(message[1].title[1])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#2d4c8f', borderTop: 'solid 1px #2d4c8f'}}>{Object.values(message[1].subtitle[1])[0]}</div>
            <div name="basico" style={{borderTop: 'solid 0.5px #2d4c8f', padding: '5px 0px 15px 3px'}}>{Object.values(message[1].content[1])[0]}</div>
            <div style={{minHeight:10, background: '#2d4c8f', borderRadius: '0 0 10px 10px'}}></div>
        </div>
        <div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#2d4c8f', borderRadius: '10px 10px 0 0'}}>{Object.values(message[1].title[2])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#2d4c8f', borderTop: 'solid 1px #2d4c8f'}}>{Object.values(message[1].subtitle[2])[0]}</div>
            <div name="basico" style={{borderTop: 'solid 0.5px #2d4c8f', padding: '5px 0px 15px 3px'}}>{Object.values(message[1].content[2])[0]}</div>
            <div style={{minHeight:10, background: '#2d4c8f', borderRadius: '0 0 10px 10px'}}></div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={titleStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#2d4c8f', borderRadius: '10px 10px 0 0'}}>{Object.values(message[1].title[3])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#2d4c8f', borderTop: 'solid 1px #2d4c8f'}}>{Object.values(message[1].subtitle[3])[0]}</div>
            <div style={{borderTop: 'solid 0.5px #2d4c8f', padding: '5px 0px 15px 3px'}}>{Object.values(message[1].content[3])[0]}</div>
            <div style={{minHeight:10, background: '#2d4c8f', borderRadius: '0 0 10px 10px'}}></div>
        </div>
        <div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#2d4c8f', borderRadius: '10px 10px 0 0'}}>{Object.values(message[1].title[4])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#2d4c8f', borderTop: 'solid 1px #2d4c8f'}}>{Object.values(message[1].subtitle[4])[0]}</div>
            <div style={{borderTop: 'solid 0.5px #2d4c8f', padding: '5px 0px 15px 3px'}}>{Object.values(message[1].content[4])[0]}</div>
            <div style={{minHeight:10, background: '#2d4c8f', borderRadius: '0 0 10px 10px'}}></div>
        </div>
        <div class="col-md-3">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={titleContinueStyle}>
        <div class="col-md-3" style={{color:'#233274', fontWeight: 'bold', fontSize: '1rem'}}>{message[2].nivel}</div>
        <div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#233274', borderRadius: '10px 10px 0 0'}}>{Object.values(message[2].title[0])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#233274', borderTop: 'solid 1px #233274'}}>{Object.values(message[2].subtitle[0])[0]}</div>
            <div name="inter" style={{borderTop: 'solid 0.5px #233274', padding: '5px 0px 15px 3px'}}>{Object.values(message[2].content[0])[0]}</div>
            <div style={{minHeight:10, background: '#233274', borderRadius: '0 0 10px 10px'}}></div>
        </div>
        <div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#233274', borderRadius: '10px 10px 0 0'}}>{Object.values(message[2].title[1])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#233274', borderTop: 'solid 1px #233274'}}>{Object.values(message[2].subtitle[1])[0]}</div>
            <div name="inter" style={{borderTop: 'solid 0.5px #233274', padding: '5px 0px 15px 3px'}}>{Object.values(message[2].content[1])[0]}</div>
            <div style={{minHeight:10, background: '#233274', borderRadius: '0 0 10px 10px'}}></div>
        </div>
        <div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#233274', borderRadius: '10px 10px 0 0'}}>{Object.values(message[2].title[2])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#233274', borderTop: 'solid 1px #233274'}}>{Object.values(message[2].subtitle[2])[0]}</div>
            <div name="inter" style={{borderTop: 'solid 0.5px #233274', padding: '5px 0px 15px 3px'}}>{Object.values(message[2].content[2])[0]}</div>
            <div style={{minHeight:10, background: '#233274', borderRadius: '0 0 10px 10px'}}></div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={titleStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#233274', borderRadius: '10px 10px 0 0'}}>{Object.values(message[2].title[3])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#233274', borderTop: 'solid 1px #233274'}}>{Object.values(message[2].subtitle[3])[0]}</div>
            <div style={{borderTop: 'solid 0.5px #233274', padding: '5px 0px 15px 3px'}}>{Object.values(message[2].content[3])[0]}</div>
            <div style={{minHeight:10, background: '#233274', borderRadius: '0 0 10px 10px'}}></div>
        </div>
        <div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#233274', borderRadius: '10px 10px 0 0'}}>{Object.values(message[2].title[4])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#233274', borderTop: 'solid 1px #233274'}}>{Object.values(message[2].subtitle[4])[0]}</div>
            <div style={{borderTop: 'solid 0.5px #233274', padding: '5px 0px 15px 3px'}}>{Object.values(message[2].content[4])[0]}</div>
            <div style={{minHeight:10, background: '#233274', borderRadius: '0 0 10px 10px'}}></div>
        </div>
        <div class="col-md-3">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={titleContinueStyle}>
        <div class="col-md-3" style={{color:'#111b49', fontWeight: 'bold', fontSize: '1rem'}}>{message[3].nivel}</div>
        <div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#111b49', borderRadius: '10px 10px 0 0'}}>{Object.values(message[3].title[0])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#111b49', borderTop: 'solid 1px #111b49'}}>{Object.values(message[3].subtitle[0])[0]}</div>
            <div style={{borderTop: 'solid 0.5px #111b49', padding: '5px 0px 15px 3px'}}>{Object.values(message[3].content[0])[0]}</div>
            <div style={{minHeight:10, background: '#111b49', borderRadius: '0 0 10px 10px'}}></div>
        </div>
        <div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#111b49', borderRadius: '10px 10px 0 0'}}>{Object.values(message[3].title[1])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#111b49', borderTop: 'solid 1px #111b49'}}>{Object.values(message[3].subtitle[1])[0]}</div>
            <div style={{borderTop: 'solid 0.5px #111b49', padding: '5px 0px 15px 3px'}}>{Object.values(message[3].content[1])[0]}</div>
            <div style={{minHeight:10, background: '#111b49', borderRadius: '0 0 10px 10px'}}></div>
        </div><div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#111b49', borderRadius: '10px 10px 0 0'}}>{Object.values(message[3].title[2])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#111b49', borderTop: 'solid 1px #111b49'}}>{Object.values(message[3].subtitle[2])[0]}</div>
            <div style={{borderTop: 'solid 0.5px #111b49', padding: '5px 0px 15px 3px'}}>{Object.values(message[3].content[2])[0]}</div>
            <div style={{minHeight:10, background: '#111b49', borderRadius: '0 0 10px 10px'}}></div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={titleStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#111b49', borderRadius: '10px 10px 0 0'}}>{Object.values(message[3].title[3])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#111b49', borderTop: 'solid 1px #111b49'}}>{Object.values(message[3].subtitle[3])[0]}</div>
            <div style={{borderTop: 'solid 0.5px #111b49', padding: '5px 0px 15px 3px'}}>{Object.values(message[3].content[3])[0]}</div>
            <div style={{minHeight:10, background: '#111b49', borderRadius: '0 0 10px 10px'}}></div>
        </div><div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#111b49', borderRadius: '10px 10px 0 0'}}>{Object.values(message[3].title[4])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#111b49', borderTop: 'solid 1px #111b49'}}>{Object.values(message[3].subtitle[4])[0]}</div>
            <div style={{borderTop: 'solid 0.5px #111b49', padding: '5px 0px 15px 3px'}}>{Object.values(message[3].content[4])[0]}</div>
            <div style={{minHeight:10, background: '#111b49', borderRadius: '0 0 10px 10px'}}></div>
        </div><div class="col-md-3" style={subStyle}>
            <div style={{textAlign:'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', background: '#111b49', borderRadius: '10px 10px 0 0'}}>{Object.values(message[3].title[5])[0]}</div>
            <div style={{textAlign:'center', color: '#ffffff', background: '#111b49', borderTop: 'solid 1px #111b49'}}>{Object.values(message[3].subtitle[5])[0]}</div>
            <div style={{borderTop: 'solid 0.5px #111b49', padding: '5px 0px 15px 3px'}}>{Object.values(message[3].content[5])[0]}</div>
            <div style={{minHeight:10, background: '#111b49', borderRadius: '0 0 10px 10px'}}></div>
        </div>
    </div>)

    useEffect(() => {
        var basicoArr = document.getElementsByName('basico');
        var interArr = document.getElementsByName('inter');
        if(modalVisible) {
            var basicoHeight = basicoArr[0].offsetHeight + "px"
            document.getElementsByName('basico')[1].style.height = basicoHeight;
            document.getElementsByName('basico')[2].style.height = basicoHeight;

            var interHeight = interArr[2].offsetHeight + "px"
            document.getElementsByName('inter')[0].style.height = interHeight;
            document.getElementsByName('inter')[1].style.height = interHeight;
        }
    }, );
    
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
                            message={message}>{list}</Modal>
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