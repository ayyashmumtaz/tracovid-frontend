import { useSelector } from "react-redux";



const Global = () => {
    const global = useSelector(state => state.covid19.covid19);
    console.log(global);
    return (
            <div>
                <h1>Global Situation</h1>
                {global.map((item, index) => {
                    return (
                        <Card/>
                    )
                })}
            </div>
    )
}

export default Global;