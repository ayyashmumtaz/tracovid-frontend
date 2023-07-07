import styled from "styled-components";

const Card = () => (
    <div>
        <CardData>
            <h4>Judul;</h4>
        </CardData>
    </div>
);

const CardData = styled.div`
background-color: #FFFEFF;
margin: 1rem 1rem 1rem 1rem;
width: 350px;
height: 200px;
border: solid transparent;
border: 0;
border-radius: 30px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding: 10px 10px 10px 10px;
}
`;



export default Card;