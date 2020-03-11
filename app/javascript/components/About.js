import React from "react";
import Typography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import {Container} from "@material-ui/core";

export default function About() {
    return (
        <Container>
            <Typography variant={"h3"}>
                This is the about page in React!
            </Typography>
        </Container>
    )
}