import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../response";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;



const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  border-style:groove;
  padding: 7px 8px;
  border-color: aqua;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="data:image/jpeg;base64,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" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Some Shit
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductSize>
                    <b>Size:</b> S
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>10</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>₹ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxAyWSVAnRwrtamtEKlvu4myWFbczkPxB8Q&usqp=CAU" />
                <Details>
                  <ProductName>
                    <b>Product:</b> No shit
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
            
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>₹ 50</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Delivery Charges</SummaryItemText>
              <SummaryItemPrice>₹ 6</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ 86</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;