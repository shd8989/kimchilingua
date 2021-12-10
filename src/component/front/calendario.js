import Calender from './calender/calender';
import { ThemeProvider } from 'styled-components';
import Theme from '../../assets/styles/theme';

// https://www.npmjs.com/package/react-calendar

function Calendario() {
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
                
                <div style={{display: 'flex', justifyContent:'center', marginTop: '50px'}}>
                    <a class="btn btn-xl text-uppercase" style={{color:'#fff',backgroundColor:'#2e3383',border:'#2e3383'}} href="#services">+Info</a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Calendario;