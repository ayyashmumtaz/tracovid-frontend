import styled from "styled-components";

const Region = () => {
    return (
        <RegionStyle>
        <div>
            <h1 className="judulReg">Situation by Regions</h1>
            <p className="centeredText">Updated : </p>
        </div>
        </RegionStyle>
    )
}

const RegionStyle = styled.div`
.judulReg{
    @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
    font-family: 'Questrial', sans-serif;
    font-size: 40px;
    text-align: center;
}

.centeredText{
    text-align: center;
}
`;
export default Region