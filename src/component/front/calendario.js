import { Calendar } from '@natscale/react-calendar';

function Calendario() {
    return (
        <>
        <section class="page-section" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Calendario</h2>
                </div>
                <ul class="timeline" style={{display: 'flex',justifyContent: 'space-around'}}>
                    <Calendar />
                    <Calendar />
                    <Calendar />
                </ul>
            </div>
        </section>
        </>
    )
}

export default Calendario;