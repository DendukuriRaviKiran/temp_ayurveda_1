import styled from "styled-components";
import { mobile } from "../response";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  border-style:groove;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 15px;
    border: none;
    cursor:pointer;
    background: #fb641b;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    border-radius: 5px;
    color: #fff;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
