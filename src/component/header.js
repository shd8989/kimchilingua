import kimchHome from '../assets/img/kimchilingua_home.jpg'
// import { url } from "inspector";

function Header() {
    return (
        <>
        <header class="masthead" style={{backgroundImage: `url(${kimchHome})`, marginTop: 75}}>
            <div class="container">
                <div class="masthead-subheading" style={{color: '#2e3383'}}>Bienvenidos a Kimchilingua!</div>
                <div class="masthead-heading text-uppercase" style={{color: '#2e3383'}}>Mucho gusto!</div>
                <a class="btn btn-xl text-uppercase" style={{color:'#fff',backgroundColor:'#2e3383',border:'#2e3383'}} href="#services">Dime más</a>
            </div>
        </header>
        </>
    )
}

export default Header;