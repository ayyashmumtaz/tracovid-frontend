import styled from "styled-components";

const CardRegion = (props) => {
    console.log(props);
    return (<div>
        <CardData>
            <CardHeader>
                <h4>{props.region}</h4>
                <h5>Confirmed : {props.confirmed}</h5>
                <h5>Recovered : {props.recovered}</h5>
                <h5>Death : {props.death}</h5>
            </CardHeader>
        </CardData>
    </div>)
};

const CardData = styled.div`
    background-color: #9BE8D8;  
    border: solid transparent; 
    margin-bottom: 2rem;
    margin-left:4rem;
    border: 0;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 10px 10px 10px 10px
    box-shadow: 0px 10px 55px -2px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 10px 55px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 10px 55px -2px rgba(0,0,0,0.75);;
}
`;

const CardHeader = styled.div`
    font-family: 'Questrial', sans-serif;
    padding: 10px 10px 10px 10px;
    text-align: center;
`;



export default CardRegion;