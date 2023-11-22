import styled from "styled-components";

const Constelar = () => {
    return (
        <ContainerConstelar>
            <TitleConstelar>¿Que es constelar?</TitleConstelar>
            <TxtConstelar> 
                Las constelaciones son un servicio a la vida. Son la filosofía del amor adulto, del amor en acción, amor existencial que lo acepta todo como es, basadas en una visión sistémica de la vida y en las Fuerzas del Amor.
                <br/>
                <br/>
                * Si, aceptación, asentimiento.
                <br/>
                * Orden. 
                <br/>
                * Pertenencia, inclusión.
                <br/>
                * Equilibrio, compensación.
                <br/>
                <br/>
                Nos permiten descubrir la realidad oculta que dirige nuestras decisiones, nuestras emociones y nuestros destinos. Nos llevan a una apertura de la conciencia que va a empezar a transformar nuestra vida. Las constelaciones nos ayudan a estar más vivos, en la fuerza y la responsabilidad del adulto, y a estar centrados en el respeto y en la gratitud. Y con ello nuestras vidas empiezan a cambiar, nos muestran el camino hacia nuestra autonomía y mayor bienestar.   
            </TxtConstelar>
        </ContainerConstelar>
    )
}
const ContainerConstelar = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    @media(max-width: 450px){
        height: 100%;
    }
`;
const TitleConstelar = styled.h2`
        font-size: 1.4em;
`;
 const TxtConstelar = styled.p`
    max-width: 850px;
    padding: 0 10px;
    @media(max-width: 450px){
        max-width: 280px;
    }
`;
export default Constelar;