import styled from "styled-components";
import Card from "../Card/IndexRegionCard";
import { useSelector } from "react-redux";

const Region = () => {
    const dataFetch = useSelector((state) => state.covid19.covid19.regions) ?? [];
    //  console.log(dataFetch);
    return (
        <RegionStyle>
            <div>
                <h1 className="centeredText">Situation by Region</h1>
            </div>
            <div className="card_hey">
                {dataFetch.map((item, index) => {
                    return (
                        <Card region={item.name} death={item.numbers.death} confirmed={item.numbers.confirmed} recovered={item.numbers.recovered} key={index} />
                    )
                })}
            </div>
        </RegionStyle>
    )
}

const RegionStyle = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
.judulReg{
   
    font-family: 'Questrial', sans-serif;
    font-size: 40px;
    text-align: center;
}

.card_hey {
   
    justify-content:center;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr ;
    margin-left:1rem;
    margin-bottom:10rem;
    text-transform: uppercase;
}

.centeredText{
    text-align: center;
    margin-bottom:5rem;
}
`;
export default Region