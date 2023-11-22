import { NavLink } from "react-router-dom"
import styled from "styled-components";
 const Card = (cards_data) =>{
  return (
    <CardContainer>
      <InfoCard>
        <TitleCard>{cards_data.title}</TitleCard>
        <TxtCard>{cards_data.text}</TxtCard>
        <ButtonCard className="button-card" to="/requestappointment">Solicitar Turno</ButtonCard>
      </InfoCard>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  height: 240px;
`;
const InfoCard = styled.div`
  text-align: start;
  padding: 0 10px;
  position: relative;
  height: 100%;
`;
const TitleCard = styled.h3`
  font-size: 1em;
  color: rgb(47, 47, 147);
`;
const TxtCard = styled.p`
  font-size: .8em;
`;
const ButtonCard = styled(NavLink)`
  width: fit-content;
  position: absolute;
  bottom: 0;
  left: 1;
  margin-bottom: 15px;
  background-color: rgb(220, 253, 253);
  color: #000;
  font-size: .7em;
  border-radius: 20px;
  padding: 5px 8px;
`;
export default Card