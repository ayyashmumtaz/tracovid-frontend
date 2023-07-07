import styled from "styled-components";
import gbrHomepage from "../../assets/homepage.svg";

const Hero = () => {

  return (
    <Container>
      <Text>
        <h1>Tracovid</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nisi commodo, porttitor erat et, ullamcorper est. Curabitur commodo nulla quis elementum aliquam. Sed eu nunc vitae velit placerat gravida sed eu nisi. Proin lobortis tincidunt lectus.</p>
        <Button className="hover">Vaccine</Button>
      </Text>

      <Image src={gbrHomepage} alt="Gambar Sampingan" />
    </Container>
  )

}

const Container = styled.div`

  display: flex;
  justify-content: center;
    align-items: center;
`;

const Text = styled.div`
margin: 9rem 9rem 9rem 12rem;
font-family: 'Questrial', sans-serif;
  flex: 1;
`;

const Image = styled.img`
margin: 9rem 10rem 9rem 1rem;
  max-width: 30%;
    height: auto;
`;
const Button = styled.button`
  background-color: #06D6A0;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-family: 'Questrial', sans-serif;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
    cursor: pointer;
    border-radius: 20px;
    &:hover {
      background-color: black;
      color: white;
    };
`;


export default Hero;