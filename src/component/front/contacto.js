import ReactWhatsapp from 'react-whatsapp';

function Contacto() {
    return (
        <>
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Contacta con nosotros</h2>
                </div>
                
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
                                
                                <textarea class="form-control" id="message" placeholder="Tu mensaje" data-sb-validations="required"></textarea>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                    
                    <div class="d-none" id="submitSuccessMessage">
                        <div class="text-center text-white mb-3">
                            <div class="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    
                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                    
                    <div class="text-center">
                        <ReactWhatsapp class="btn btn-primary btn-xl text-uppercase" number="82-10-1111-1111" message="La cuenta de Kimchilingua de Whatsapp">Enviar</ReactWhatsapp>
                        </div>
                </form>
            </div>
        </section>
        </>
    )
}

export default Contacto;