import { useSelector } from "react-redux";
import Card from "../Card";
import styled from "styled-components";


const Global = () => {
    const dataFetch = useSelector((state) => state.covid19.covid19.global) ?? [];
    // console.log(dataFetch); 
    return (
        <GlobalStyle>
            <div>
                <h1>Global Situation</h1>
            </div>
            <div className="card_hey">
                {dataFetch.map((item, index) => {
                    return (
                        <Card total={item.total} status={item.status} key={index} />
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

export default Global;