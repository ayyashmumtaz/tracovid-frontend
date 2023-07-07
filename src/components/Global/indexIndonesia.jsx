import { useSelector } from "react-redux";
import CardIndonesia from "../Card/CardIndonesia";
import styled from "styled-components";


const GlobalIndonesia = () => {
    const dataFetch = useSelector((state) => state.covid19.covid19.indonesia) ?? [];
    console.log(dataFetch);
    return (
        <GlobalStyle>
            <div>
                <h1>Indonesia Situation</h1>
            </div>
            <div className="card_hey">
                {dataFetch.map((item, index) => {
                    return (
                        <CardIndonesia totalIndo={item.total} statusIndo={item.status} key={index} />
                    )
                })}
            </div>
        </GlobalStyle>
    )
}
const GlobalStyle = styled.div`
    .card_hey {
        display:flex;
        justify-content:center;

        margin-left:1rem;
        margin-bottom:10rem;
        text-transform: uppercase;
    }
    h1 {
        
        text-align:center;
        margin-top:1rem;
        margin-bottom:4rem;
    }
`

export default GlobalIndonesia;