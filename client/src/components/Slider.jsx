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
`;
const Slide = styled.div`
    display: flex;
    align-items: center;
`;
const ImgContainer = styled.div`

`;
const InfoContainer = styled.div`
`;

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                <ImgContainer></ImgContainer>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default Slider;
