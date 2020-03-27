import React, {useState, useEffect} from "react";
import axios from "axios";
import CardMaker from "./CardMaker";
import styled from "styled-components";

const CardData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
            .then(res => {
                // console.log(res.data.results);
                let characters = setData(res.data.results);
            })
            .catch(err => {
             console.log("error", err);
            })
        }, [])

    return (
        data.map((val, index) => (
            <CardMaker key={index} data={val}/>
        ))
    )
}

export default CardData;