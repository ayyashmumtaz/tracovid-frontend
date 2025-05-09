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
.judulReg{
   
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
    text-align: center;
}

.card_hey {
    font-family: 'Poppins', sans-serif;
    justify-content:center;
    display:grid;
    grid-template-columns: repeat(3, 0.1fr) ;
    grid-gap: 10px;
    margin-left:1rem;
    text-transform: uppercase;
}

.centeredText{
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin-bottom:5rem;
}
`;
export default Region