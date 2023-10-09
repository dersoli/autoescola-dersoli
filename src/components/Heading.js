import styled from 'styled-components';

const colorYellow = "#ffc107"

const Heading = styled.div`

`

const Title = styled.h1`
    position: relative;
    font-weight: 700;
    letter-spacing: 2;
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    &::after{
        content: "";
        position: absolute;
        left: 0;
        bottom: -3px;
        background-color: ${colorYellow};
        height: 5px;
        width: 70px;
    }
`
