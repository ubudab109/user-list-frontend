import React from "react";
import { Col, Row } from "react-bootstrap";

const About: React.FC = () => {
    return (
        <Row>
            <Col xl={6} md={12}>
                <h4 className="text-bold">Lorem ipsum dolor sit amet</h4>
                <p className="text-justify font-weight-600">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Nulla vel turpis turpis. Sed mauris mauris, aliquam sed ante
                    ut, ullamcorper laoreet erat. Duis eu rutrum purus. Ut
                    luctus bibendum tellus ut congue. Ut dolor nisi, maximus
                    aliquam nulla sed, venenatis consequat arcu. Nulla hendrerit
                    vehicula arcu. In consectetur, purus sed consequat posuere,
                    orci nunc consequat ipsum, ut sodales urna massa at neque.
                </p>
                <p className="text-justify font-weight-600">
                    Nulla eget tellus sodales, venenatis lacus eget, lobortis
                    libero. Cras scelerisque metus non mi condimentum, ac
                    lacinia enim fermentum. Sed arcu tortor, hendrerit a eros
                    ac, eleifend porta enim. Suspendisse molestie enim quam, a
                    maximus massa faucibus nec. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                    Integer tortor odio, iaculis eget lobortis iaculis, tempor
                    nec ante. Aliquam venenatis nisl at ipsum commod
                </p>
            </Col>
            <Col xl={6} md={12}>
                <img
                    src={`${process.env.PUBLIC_URL}/about.png`}
                    className="img-half"
                    alt="about"
                />
            </Col>
        </Row>
    );
};

export default About;
