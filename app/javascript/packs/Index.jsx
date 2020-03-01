// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import {render} from "react-dom"
import PropTypes from 'prop-types'
import App from "../components/App";
import {Container} from "@material-ui/core";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4D5F80',
        },
        secondary: {
            main: '#B7312C'
        }
    }
})

document.addEventListener("DOMContentLoaded", () => {
    render(
        <ThemeProvider theme={theme}>
            <Container maxWidth={'lg'}>
                <App/>
            </Container>
        </ThemeProvider>,
        document.body.appendChild(document.createElement("div"))
    );
});