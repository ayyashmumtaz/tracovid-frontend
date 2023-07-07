import styled from "styled-components";

const Footer = () => {
    return (
        <footer>
    <Foot>
      <Text>&copy; 2023 Ayyash Mumtaz Hafidz. All rights reserved.</Text>
    </Foot>
        </footer>
    )
}

const Foot = styled.footer`
  background: #f2f2f2;
  padding: 1rem;
  text-align: center;
`;

const Text = styled.p`
  color: #666;
  font-size: 14px;
`;

export default Footer