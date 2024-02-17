import * as React from "react";
import {Route, Routes, useLocation } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import About from "../pages/About";
import User from "../pages/User";
import DetailUser from "../pages/DetailUser";

interface ContentPropsI {
    toggle: React.MouseEventHandler<HTMLButtonElement>;
}


const Content: React.FC<ContentPropsI> = ({ toggle }) => {
    const location = useLocation();

    const pageNames: { [key: string]: string } = {
        '/': 'About',
        '/users': 'User',
        '/users/:id': 'User'
    };

    const getPageName = () => {
        const path = Object.keys(pageNames).find((key) => {
            const regex = new RegExp(`^${key.replace(/:\w+/g, '\\w+')}$`);
            return regex.test(location.pathname);
        });
    
        return path ? pageNames[path] : 'Page Not Found';
    };

    return (
        <Container
            fluid
            className="content"
        >
            <Navbar toggle={toggle} pageName={getPageName()} />
            <Container fluid>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/users" element={<User />} />
                    <Route path="/users/:id" element={<DetailUser />} />
                </Routes>
            </Container>
        </Container>
    );
};

export default Content;
