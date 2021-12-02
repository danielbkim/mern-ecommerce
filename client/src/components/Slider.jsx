import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
    background-color: coral;
    position: relative;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    // change opacity levels on hover?
    opacity: 0.5;
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
`;
const Slide = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    padding: 50px;
    flex: 1;
`;
const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined />
            </Arrow>
            <Slide>
                <Wrapper>
                    <ImgContainer>
                        <Image src='https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SALE: PRODUCT 1</Title>
                        <Description>Hello</Description>
                        <Button>SHOP</Button>
                    </InfoContainer>
                </Wrapper>
            </Slide>
            <Slide>
                <Wrapper>
                    <ImgContainer>
                        <Image src='https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SALE: PRODUCT 1</Title>
                        <Description>Hello</Description>
                        <Button>SHOP</Button>
                    </InfoContainer>
                </Wrapper>
            </Slide>
            <Slide>
                <Wrapper>
                    <ImgContainer>
                        <Image src='https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SALE: PRODUCT 1</Title>
                        <Description>Hello</Description>
                        <Button>SHOP</Button>
                    </InfoContainer>
                </Wrapper>
            </Slide>
            <Slide>
                <Wrapper>
                    <ImgContainer>
                        <Image src='https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SALE: PRODUCT 1</Title>
                        <Description>Hello</Description>
                        <Button>SHOP</Button>
                    </InfoContainer>
                </Wrapper>
            </Slide>
            <Slide>
                <Wrapper>
                    <ImgContainer>
                        <Image src='https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SALE: PRODUCT 1</Title>
                        <Description>Hello</Description>
                        <Button>SHOP</Button>
                    </InfoContainer>
                </Wrapper>
            </Slide>
            <Arrow direction="right">
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default Slider;
