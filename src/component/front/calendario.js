import Calender from './calender/calender';
import { ThemeProvider } from 'styled-components';
import Theme from '../../assets/styles/theme';

import {v4 as uuidv4} from 'uuid';
import { useState } from "react";
import Modal from './modal';

// https://www.npmjs.com/package/react-calendar

const message = [
    {
        "question":"¿En qué fechas me puedo inscribir?",
        "answer": "Te podrás inscribir antes del día de inicio de la clase. Deberás tener una cuenta de PAYPAL para realizar el trámite",
    },
    {
        "question":"¿Las clases son en línea?",
        "answer":"Efectivamente las clases son en línea mediante ZOOM.",
    },
    {
        "question":"¿Cuánto dura el curso?",
        "answer":"Nuestros cursos son de un mes y medio.",
    },
    {
        "question":"¿Cuántas clases dura el curso o nivel?",
        "answer":"Cada curso consta de 12 clases de 2 horas c/u ** 24 horas totales del curso. Cursarás 2 clase por semana durante el bimestre.",
    },
    {
        "question":"¿Cuál es el costo unitario por nivel?",
        "answer":"Kimchilingua NO cobra matrícula. El costo total es de ₩120,000 KRW equivalentes a $100 USD para el nivel básico y TOPIKⅠ o de ₩130,000 KRW equivalentes a $110 USD para el nivel intermedio        El curso de nivel básico y TOPIK tienen un costo normal de ₩120,000 KRW equivalentes a $100 USD y el de nivel intermedio ₩130,000 KRW equivalentes a $110 USD.",
    },
    {
        "question":"¿Cuántas personas son por clase?",
        "answer":"Las clases de Kimchilingua están diseñadas para que sean en grupos reducidos y que puedas avanzar tus estudios más rápidamente con atención personalizada.",
    },
    {
        "question":"¿Cuáles son los requisitos para ingresar a las clases? ",
        "answer":"",
        "infor":["Computador/dispositivo para ingresar","Conexión a internet","Audífonos y micrófono para interactuar con la profesora","Dominio del idioma español."]
    },
    {
        "question":"Si no tengo cuenta PAYPAL ¿Puedo inscribirme con la cuenta de otra persona?",
        "answer":"Claro que sí puedes realizar la compra con la cuenta de algún familiar o amigo que quiera ayudarte.",
    },
    {
        "question":"¿Mandan grabaciones?",
        "answer":"Solo con aviso previo(un día antes) mandamos grabaciones de la clase. No mandamos más de 1/2 del curso.",
    },
    {
        "question":"¿Tienes más dudas?",
        "answer":"Si tienes más dudas puedes enviarnos un correo a kimchilingua@gmail.com o llamarnos al teléfono +82 10 2276 8225. Te informamos que todos los cupos son LIMITADOS. Si estás interesado en inscribirte te recomendamos apartar tu lugar lo más pronto posible debido a que los lugares se llenan muy rápido.",
    },
];

function Calendario() {
    const [modalVisible, setModalVisible] = useState(false)
    const openModal = () => {
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }
    var list = [];
    const leftStyle = {
        display: 'flex',
        marginBottom: 5
    }
    const titleContinueStyle = {
        display: 'flex',
        marginBottom: 20
    }
    const titleStyle = {
        fontSize: '1rem',
        display: 'flex'
    }
    const answerStyle = {
        fontSize: '0.8rem'
    }

    list.push(<div key={uuidv4} class="row" style={leftStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={titleStyle}>
            <div style={{background: '#263776', color: '#ffffff', padding: '5px 20px 5px 40px', marginLeft: -30}}>{message[0].question}</div>
            <div></div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={titleContinueStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={answerStyle}>
            {message[0].answer}
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={leftStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={titleStyle}>
            <div style={{background: '#de842d', color: '#ffffff', padding: '5px 20px 5px 40px', marginLeft: -30}}>{message[1].question}</div>
            <div></div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={titleContinueStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={answerStyle}>
            {message[1].answer}
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={leftStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={titleStyle}>
            <div style={{background: '#dc3e3b', color: '#ffffff', padding: '5px 20px 5px 40px', marginLeft: -30}}>{message[2].question}</div>
            <div></div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={titleContinueStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={answerStyle}>
            {message[2].answer}
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={leftStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={titleStyle}>
            <div style={{background: '#263776', color: '#ffffff', padding: '5px 20px 5px 40px', marginLeft: -30}}>{message[3].question}</div>
            <div></div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={titleContinueStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={answerStyle}>
            {message[3].answer}
        </div>
    </div>)
    
    list.push(<div key={uuidv4} class="row" style={leftStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={titleStyle}>
            <div style={{background: '#de842d', color: '#ffffff', padding: '5px 20px 5px 40px', marginLeft: -30}}>{message[4].question}</div>
            <div></div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={titleContinueStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={answerStyle}>
            {message[4].answer}
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={leftStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={titleStyle}>
            <div style={{background: '#dc3e3b', color: '#ffffff', padding: '5px 20px 5px 40px', marginLeft: -30}}>{message[5].question}</div>
            <div></div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={titleContinueStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={answerStyle}>
            {message[5].answer}
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={leftStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={titleStyle}>
            <div style={{background: '#263776', color: '#ffffff', padding: '5px 20px 5px 40px', marginLeft: -30}}>{message[6].question}</div>
            <div></div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={titleContinueStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={answerStyle}>
            <div>- {Object.values(message[6].infor[0])}</div>
            <div>- {Object.values(message[6].infor[1])}</div>
            <div>- {Object.values(message[6].infor[2])}</div>
            <div>- {Object.values(message[6].infor[3])}</div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={leftStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={titleStyle}>
            <div style={{background: '#de842d', color: '#ffffff', padding: '5px 20px 5px 40px', marginLeft: -30}}>{message[7].question}</div>
            <div></div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={titleContinueStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={answerStyle}>
            {message[7].answer}
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={leftStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={titleStyle}>
            <div style={{background: '#dc3e3b', color: '#ffffff', padding: '5px 20px 5px 40px', marginLeft: -30}}>{message[8].question}</div>
            <div></div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={titleContinueStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={titleStyle}>
            {message[8].answer}
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={leftStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={titleStyle}>
            <div style={{background: '#263776', color: '#ffffff', padding: '5px 20px 5px 40px', marginLeft: -30}}>{message[9].question}</div>
            <div></div>
        </div>
    </div>)
    list.push(<div key={uuidv4} class="row" style={titleContinueStyle}>
        <div class="col-md-3"></div>
        <div class="col-md-9" style={titleStyle}>
            {message[9].answer}
        </div>
    </div>)

    return (
        <>
        <section class="page-section" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Calendario</h2>
                </div>
                <ul style={{display: 'flex',justifyContent: 'space-around', position: 'relative', listStyle: 'none'}}>
                    <ThemeProvider theme={Theme}>
                        <Calender />
                    </ThemeProvider>
                </ul>
                
                <div id="faq" style={{display: 'flex', justifyContent:'center', marginTop: '50px'}}>
                    <button class="btn btn-xl text-uppercase" style={{color:'#fff',backgroundColor:'#2e3383',border:'#2e3383'}} onClick={openModal}>PREGUNTAS FRECUENTES</button>
                    {
                        modalVisible && <Modal
                        visible={modalVisible}
                        closable={true}
                        maskClosable={true}
                        onClose={closeModal}
                        message={message}>{list}</Modal>
                    }
                </div>
                <div class="row" style={{marginTop:'1rem'}}>
                    <div class="col-md-12"><h5 class="my-3">Por este medio te informamos cualquier duda que puedas tener respecto a las inscripciones de nuevo ingreso a los cursos de idiomas en línea de Kimchilingua. Kimchilingua garantiza el aprendizaje correcto por una profesora nativa y en las clases podrás conocer más sobre la cultura coreana, costumbres, hábitos entre otras cosas.</h5></div>
                    <div class="col-md-12"><h5 class="my-3">Nuestros programas de aprendizaje están diseñados para conducirte a la certificación internacional del Idioma coreano a través del TOPIK “Test of Proficiency In Korean” / “Examen de certificación del idioma Coreano” (한국교육과정평가원) en todos sus niveles, (http://www.topik. go.kr/jsp/hp/main/#).</h5></div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Calendario;