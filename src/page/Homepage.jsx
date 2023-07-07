import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Region from "../components/Region";
import Hero from "../components/Hero";
import Global from "../components/Global";
import axios from "axios";
import { useEffect } from "react";
import { updateData } from "../feature/dataSlice";
import { useDispatch } from "react-redux";


const Homepage = () => {
    const dispatch = useDispatch();
    const getGlobalData = async () => {
        const response = await axios("https://covid-fe-2023.vercel.app/api/global.json");
        const globalData = response.data;
        dispatch(updateData(globalData));
    };
    useEffect(() => { getGlobalData() }, []);
    return (
        <div>
            <Navbar />
            <Hero />
            <Global />
            <Region />
            <Footer />
        </div>
    );
};

export default Homepage;