import styled from "styled-components";

const Card = (props) => {
    //console.log(props.total);
    return (<div>
        <CardData>
            <CardHeader>

                <h2>{props.status}</h2>
                <h4>{props.total.toLocaleString()}</h4>
            </CardHeader>
        </CardData>
    </div>)
};

const CardData = styled.div`
    background-color: #9BE8D8;  
    border: solid transparent; 
    width: 250px;
    margin-left:5rem;
    border: 0;
    border-radius: 20px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
`;

const CardHeader = styled.div`
    font-family: 'Questrial', sans-serif;
    padding: 10px 10px 10px 10px;
    text-align: center;
`;



export default Card;