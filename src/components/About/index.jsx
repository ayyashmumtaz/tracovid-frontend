import styled from "styled-components";

const About = () => {
    return (
        <>
            <AboutContainer>
                <AboutContent>
                    <AboutTitle>About</AboutTitle>
                    <AboutText>
                        This is a simple website that displays the number of cases of Covid-19 in Indonesia and the provinces in Indonesia.
                    </AboutText>
                    <AboutText>
                        This website is made using React JS and styled-components.
                    </AboutText>
                </AboutContent>
            </AboutContainer>
        </>
    )
}

const AboutContainer = styled.div`
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
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 1rem;
`;

export default About