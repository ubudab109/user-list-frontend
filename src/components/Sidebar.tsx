import * as React from "react";
import {
    faBriefcase,
    faTimes,
    faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

interface SidebarPropsI {
    isOpen: Boolean;
    toggle: React.MouseEventHandler<HTMLButtonElement>;
}

const Sidebar: React.FC<SidebarPropsI> = ({ isOpen, toggle }) => {
    const location = useLocation();
    return (
        <div className={classNames("sidebar", { "is-open": isOpen })}>
            <div className="sidebar-header mb-3">
                <Button
                    variant="link"
                    onClick={toggle}
                    style={{ color: "#fff" }}
                    className="mt-4 text-center"
                >
                    <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
                </Button>
                <img
                    src={`${process.env.PUBLIC_URL}/icon.png`}
                    className="center-image"
                    alt="icon times"
                />
            </div>

            <Nav className="flex-column pt-2">
                <Nav.Item
                    className={classNames("mb-2 font-xl", {
                        active: location.pathname === "/",
                    })}
                >
                    <Nav.Link as={Link} to="/">
                        <FontAwesomeIcon icon={faCircleInfo} className="mr-2" />
                        About
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item
                    className={classNames("mb-2 font-xl", {
                        active: location.pathname.startsWith("/users"),
                    })}
                >
                    <Nav.Link as={Link} to="/users">
                        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                        User
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Sidebar;
