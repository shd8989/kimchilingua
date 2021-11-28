import '../styles/bootstrap_styles.css';
import '@natscale/react-calendar/dist/main.css';
import Top from './top';
import Header from './header';
import Inicio from './front/inicio';
import Curso from './front/curso';
import Calendario from './front/calendario';
import Contacto from './front/contacto';
import Footer from './footer';

function Index() {
    return (
        <>
        <Top />
        <Header />
        <Inicio />
        <Curso />
        <Calendario />
        <Contacto />
        <Footer />
                
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        
        <script src="js/scripts.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        </>
    );
  }

export default Index;