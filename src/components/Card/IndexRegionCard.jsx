import styled from "styled-components";




const CardRegion = (props) => {


    console.log(props);
    return (<div>
        <CardData>
            <CardHeader>
                <p className="titleRegion">{props.region}</p>
                <Image src="https://img.icons8.com/ios/50/protection-mask.png" alt="image" />
                <p className="labelCovid">Confirmed</p>
                <p className="isiConfirmedCovid">{props.confirmed.toLocaleString()}</p>
                <Image src="https://img.icons8.com/ios/50/trust--v1.png" alt="image" />
                <p className="labelCovid">Recovered</p>
                <p className="isiRecoveredCovid">{props.recovered.toLocaleString()}</p>
                <Image src="https://img.icons8.com/ios/50/skull.png" alt="image" />
                <p className="labelCovid">Death</p>
                <p className="isiDeathCovid">{props.death.toLocaleString()}</p>
            </CardHeader>
        </CardData>
    </div>)
};

const Image = styled.img`
    width: 30px;
    display: flex;
    float: right;

`;

const CardData = styled.div`
font-family: 'Questrial', sans-serif;
    background-color: #FFF;  
    border: solid transparent; 
    margin-bottom: 2rem;
    margin-left:4rem;
    margin-right:4rem;
    width: 350px;
    border: 0;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 10px 20px 20px 20px
    
}

.labelCovid{
color: var(--gray-color, #64748B);
font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom: 0px;
};

.titleRegion{
    font-family: 'Questrial', sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0em;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 3rem;
};

.isiConfirmedCovid{
    color: #06D6A0;
    font-family: 'Questrial', sans-serif;
    margin-top: 0px;
    font-size: 20px;
};

.isiRecoveredCovid{
    color: #118AB2;
    font-family: 'Questrial', sans-serif;
    margin-top: 0px;
    font-size: 20px;
};

.isiDeathCovid{
    color: red;
    font-family: 'Questrial', sans-serif;
    margin-top: 0px;
    font-size: 20px;
};
`;

const CardHeader = styled.div`
    font-family: 'Questrial', sans-serif;
    padding: 10px 10px 10px 10px;
    
`;



export default CardRegion;