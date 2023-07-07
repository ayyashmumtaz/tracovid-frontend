import styled from "styled-components";


const Table = (props) => {
    console.log(props.totalIndo);
    return (<div>
        <div><h1>Situation by Provinsi</h1></div>
        <TableData>
            <TableHeader>

                <h2>{props.statusIndo}</h2>
                <h4>{props.totalIndo}</h4>
            </TableHeader>
        </TableData>
    </div>)
};

const TableData = styled.div`
   justify-content:center;
    border: solid transparent;
    width: 250px;
    margin-left:5rem;
    border: 0;
  
}
h1 {
    text-align:center;
    margin-top:1rem;
    margin-bottom:4rem;
}
`;

const TableHeader = styled.div`
    font-family: 'Questrial', sans-serif;
    padding: 10px 10px 10px 10px;
    text-align: center;
`;
export default Table;