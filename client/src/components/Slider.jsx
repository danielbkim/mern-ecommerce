import { useState } from "react"; 
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { products } from "./slideData";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: lightseagreen;
    position: relative;
    overflow: hidden;
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
    z-index: 2;
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;
const Slide = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: ${props => props.bg};
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
    /* border-radius: px; */
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick ={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
                <Wrapper slideIndex={slideIndex}>
                { products.map((item) => (
                    <Slide bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.description}</Description>
                            <Button>See Now!</Button>
                        </InfoContainer>
                    </Slide>
                )) }
                </Wrapper>
            <Arrow direction="right" onClick = {() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default Slider;
