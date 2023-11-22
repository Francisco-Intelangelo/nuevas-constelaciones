import styled from "styled-components"
import Card from "./Card"
import img1 from "../../assets/imgSlider/img1.png"
import img2 from "../../assets/imgSlider/img2.jpg"
import img3 from "../../assets/imgSlider/img3.png"
import img4 from "../../assets/imgSlider/img4.jpg"
import img5 from "../../assets/imgSlider/img5.jpg"
import img6 from "../../assets/imgSlider/img6.jpg"
import Slider from "../Slider/Slider"

const images_indiv = [img1,img2,img3];
const images_group = [img4,img5,img6];
const images_online = [img3,img6,img2];

const cards_data = [
    {
        id: 2,
        title: "Individuales",
        text: `textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó`,
        images: images_group,
    },
    {
        id: 3,
        title: "Online",
        text: `textos y los mezcló de tal manera que logró hacer un libro de textos especimen.`,
        images:images_online,
    },
    {
        id: 1,
        title: "Grupales",
        text: `textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando`,
        images: images_indiv,
    }
]


 const Cards = () => {
  return (
    <DivCards>
        <TitleContainer>¡Prueba tu mismo!</TitleContainer>
        <ContainerCards>
            {
                cards_data.map(card =>(
                    <ContainerInfoCard key={card.id}>
                        <Slider images={card.images} autoPlay={true}/>
                        <Card title={card.title} text={card.text}/>
                    </ContainerInfoCard>
                ))       
            }
        </ContainerCards>
    </DivCards>
  )
}
const DivCards = styled.div`
    height: 100%;
`;
const TitleContainer = styled.h2`
    font-size: 1.4em;
`;
const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 715px){
        flex-direction: column;
    }
`;
const ContainerInfoCard = styled.div` 
    width: 220px;
    height: 410px;
    border: 1px solid #ccc;
    margin: 0 10px;
    @media(max-width: 700px){
        margin: 10px 0;
    }
`;
export default Cards;