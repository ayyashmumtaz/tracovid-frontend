import styled from "styled-components";

const About = () => {
    return (
        <>
            <AboutContainer>
                <AboutContent>
                    <AboutTitle>About</AboutTitle>
                    <AboutText>
                        Ucapan Terima Kasih dan Selamat Menggunakan Aplikasi Tracovid!
                        Kami ingin mengucapkan terima kasih yang sebesar-besarnya kepada Kak Aufa Billah, atas bimbingannya dalam mengajari saya Frontend.
                        Dengan aplikasi Tracovid yang hebat ini, kami berharap dapat memberikan bantuan dan informasi yang berguna dalam melacak dan memantau situasi Covid-19. Aplikasi ini dirancang dengan cermat dan dilengkapi dengan fitur-fitur yang berguna untuk membantu melindungi kesehatan dan keamanan kita semua.
                        Kami berterima kasih atas dedikasi dan kerja keras Anda dalam mengembangkan aplikasi ini. Semoga aplikasi Tracovid ini dapat memberikan manfaat yang besar bagi pengguna di seluruh dunia.
                        Selamat menggunakan aplikasi Tracovid! Dengan menggunakan aplikasi ini, mari kita tetap waspada, menjaga kesehatan, dan saling peduli untuk memutus rantai penyebaran Covid-19.
                        Terima kasih dan semoga kesuksesan selalu menyertai perjalanan Anda!


                    </AboutText>
                    <AboutText>
                        Best Regards,
                        <strong> Ayyash Mumtaz Hafidz, Mahasiswa TI 01 NIM 0110221032</strong>
                    </AboutText>
                </AboutContent>
            </AboutContainer>
        </>
    )
}

const AboutContainer = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70-80vh;
`;

const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AboutTitle = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2rem;
`;

const AboutText = styled.p`
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 4rem;
    margin-right: 25rem;
    margin-left: 25rem;
`;

export default About