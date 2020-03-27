import React from "react";
import styled from "styled-components";

const CardMaker = props => {
    // console.log(props);
    const StarDiv = styled.div `
        width: 400px;
        background-color: black;
        display: flex;
        flex-direction: column;
        margin: 5% 0;
    `;

    const Char = styled.h2 `
        color: white;
    `;

    const TextDiv = styled.div `
        background-color: lightgrey;
    `;

    return(
        <StarDiv>
            <Char>{props.data.name}</Char>
            <TextDiv>
                <p>Birth Year: {props.data.birth_year}</p>
                <p>Gender: {props.data.gender}</p>
                <p>Height: {props.data.height}cm</p>
                <p>Mass: {props.data.mass}kg</p>
                <p>Eye Color: {props.data.eye_color}</p>
            </TextDiv>
        </StarDiv>
    )
}

export default CardMaker;