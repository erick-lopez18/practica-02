import { Component } from "react";
import logo_educacion from "../images/logo_educacion.png";
import logo_tecnm from "../images/logo_tecnm.png";
import logo_itt from "../images/logo_itt.png";


class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo_educacion} className="App-logo" alt="logo" />
                <img src={logo_tecnm} className="App-logo" alt="logo" />
                <img src={logo_itt} className="App-logo" alt="logo" />
            </header>
        );
    }
}

export default Header;
