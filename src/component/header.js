import kimchHome from '../assets/img/kimchilingua_home.jpg'

function Header() {
    return (
        <>
        <header class="masthead" style={{backgroundImage: `url(${kimchHome})`, backgroundSize: '100% auto'}}>
            <div class="container">
                <div class="masthead-subheading" style={{color: '#2e3383'}}>Bienvenidos a Kimchilingua!</div>
                <div class="masthead-heading text-uppercase" style={{color: '#2e3383', fontFamily: 'enjoy_bold'}}>안녕하세요</div>
                <a class="btn btn-xl text-uppercase" style={{color:'#fff',backgroundColor:'#2e3383',border:'#2e3383'}} href="#services">Ver más</a>
            </div>
        </header>
        </>
    )
}

export default Header;