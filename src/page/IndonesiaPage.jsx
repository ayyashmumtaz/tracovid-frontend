import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import GlobalIndonesia from "../components/Global/indexIndonesia";
import Table from "../components/Table";
import axios from "axios";
import { useEffect } from "react";
import { updateData } from "../feature/dataSlice";
import { useDispatch } from "react-redux";

const IndonesiaPage = () => {
    const dispatch = useDispatch();
    const getIndonesiaData = async () => {
        const response = await axios("https://covid-fe-2023.vercel.app/api/indonesia.json");
        const IndoData = response.data;
        dispatch(updateData(IndoData));
    };

    useEffect(() => { getIndonesiaData() }, []);
    return (
        <>
            <Navbar />
            <Hero />
            <GlobalIndonesia />
            <Table />
            <Footer />
        </>
    );
}

export default IndonesiaPage;