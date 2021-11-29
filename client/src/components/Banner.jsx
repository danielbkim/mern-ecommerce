import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Banner = () => {
    return (
        <Container>
            Shop Black Friday Deals! Use code 'BF20' for 20% off all items!
        </Container>
    );
};

export default Banner;
