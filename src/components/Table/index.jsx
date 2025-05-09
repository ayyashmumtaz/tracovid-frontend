import styled from "styled-components";
import { useSelector } from "react-redux";



const Table = () => {
    const provinsiData = useSelector((state) => state.covid19.covid19.regions) ?? [];
    //console.log(provinsiData);
    return (<div>
        <div><TitleTable>Situation by Provinsi</TitleTable></div>
        <TableData>
            <thead>
                <tr>
                    <th>Provinsi</th>
                    <th>Positif</th>
                    <th>Sembuh</th>
                    <th>Dirawat</th>
                    <th>Meninggal</th>
                </tr>
            </thead>
            <tbody>
                {provinsiData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.numbers.confirmed}</td>
                        <td>{item.numbers.recovered}</td>
                        <td>{item.numbers.treatment}</td>
                        <td>{item.numbers.death}</td>
                    </tr>
                ))}
            </tbody>
        </TableData>

    </div>)
};



const TitleTable = styled.h1`
    text-align:center;
    margin-top:1rem;
    margin-bottom:4rem;
`;

const TableData = styled.table`
    font-family: 'Questrial', sans-serif;
    border-collapse: collapse;
    width: 90%;
    margin-left:5rem;
    margin-right:5rem;
    margin-bottom:10rem;
    text-transform: uppercase;
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #dddddd;
    }
`;


export default Table;