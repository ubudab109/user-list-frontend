/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { UserDataI } from "../interface/UserDataI";
import { useUserRequest } from "../composables/UserApi";

const DetailUser: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = React.useState<UserDataI>();
    const [loading, setLoading] = React.useState<Boolean>(false);
    const { getUserDetail } = useUserRequest();

    /**
     * The `fetchUser` function asynchronously fetches user details based on an ID, handling errors and
     * navigation accordingly.
     */
    const fetchUser = async () => {
        setLoading(true);
        if (id) {
            await getUserDetail(parseInt(id))
                .then((res) => {
                    setUser(res.data);
                })
                .catch((error) => {
                    alert(error.message ?? "Internal Server Error");
                    navigate("/users");
                });
        } else {
            alert("Invalid param user");
            navigate("/users");
        }
        setLoading(false);
    };

    /* The `React.useEffect(() => { fetchUser(); }, []);` hook in the code snippet is used to perform
    side effects in function components. In this case, it is calling the `fetchUser` function when
    the component mounts for the first time (empty dependency array `[]`). This ensures that the
    user details are fetched only once when the component is initially rendered. */
    React.useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div>
            <Row className="mb-3">
                <Col lg={6} md={12}>
                    <Card className="p-3">
                        {loading ? (
                            <Card.Header className="bg-white no-border">
                                <Card.Title>Loading....</Card.Title>
                            </Card.Header>
                        ) : (
                            <React.Fragment>
                                <Card.Header className="bg-white no-border">
                                    <Card.Title>{user?.fullname}</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col lg={6} md={12}>
                                            <img
                                                src={user?.image ?? "https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png"}
                                                className="img-full"
                                                style={{ borderRadius: "10px" }}
                                                alt="user_profile"
                                            />
                                        </Col>
                                        <Col lg={6} md={12}>
                                            <Col sm={12} className="mb-4">
                                                <h5 className="text-bold">
                                                    First Name
                                                </h5>
                                                <span className="text-muted">
                                                    {user?.firstname}
                                                </span>
                                            </Col>
                                            <Col sm={12} className="mb-4">
                                                <h5 className="text-bold">
                                                    Last Name
                                                </h5>
                                                <span className="text-muted">
                                                    {user?.lastname}
                                                </span>
                                            </Col>
                                            <Col sm={12}>
                                                <h5 className="text-bold">
                                                    Email
                                                </h5>
                                                <span className="text-muted">
                                                    {user?.email}
                                                </span>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </React.Fragment>
                        )}
                    </Card>
                </Col>
            </Row>

            <Button
                onClick={() => navigate("/users")}
                variant="primary"
                style={{
                    background: "#65A7DB",
                    borderColor: "#65A7DB",
                    borderRadius: "20px",
                }}
            >
                Back
            </Button>
        </div>
    );
};

export default DetailUser;
