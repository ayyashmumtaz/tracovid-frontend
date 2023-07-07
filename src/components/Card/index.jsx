import styled from "styled-components";

const Card = () => (
    <div>
        <CardData>

        <CardHeader>
            <h4>Judul;</h4>
        </CardHeader>
        <CardBody>Data</CardBody>
        </CardData>
    </div>
);

const CardData = styled.div`
background: #fff;
border-radius: 4px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
display: flex;
overflow: hidden;
`;

const CardHeader = styled.div`

`;

const CardBody = styled.div`

`;

export default Card;