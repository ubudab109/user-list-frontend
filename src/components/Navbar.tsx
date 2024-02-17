import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar as BootstrapNavbar, Button, Nav } from "react-bootstrap";

interface NavbarPropsI {
    toggle: React.MouseEventHandler<HTMLButtonElement>;
    pageName?: String;
}

const Navbar: React.FC<NavbarPropsI> = ({ toggle, pageName }) => {
    return (
        <BootstrapNavbar
            className="navbar p-3 mb-5 rounded"
            style={{ backgroundColor: "#f5f9fc" }}
            expand
        >
            <Button variant="outline-info toggle_button mr-2" onClick={toggle}>
                <FontAwesomeIcon icon={faAlignLeft} />
            </Button>
            <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
            <BootstrapNavbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" navbar>
                    <h3 className="text-bold">{pageName ?? 'About'}</h3>
                </Nav>
            </BootstrapNavbar.Collapse>

            <BootstrapNavbar.Collapse className="justify-content-end">
                <BootstrapNavbar.Text>
                    <h5 className="mr-2">
                        Mark Otto{" "}
                        <img
                            src="https://editors.dexerto.com/wp-content/uploads/2023/12/26/what-if-season-2-tony-stark-voice-actor.jpg"
                            width={60}
                            className="img-circle"
                            alt="icon logo"
                        />{" "}
                    </h5>
                </BootstrapNavbar.Text>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
};

export default Navbar;
