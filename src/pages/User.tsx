/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Button, Card, Row, Table } from "react-bootstrap";
import CustomPagination from "../components/CustomPagination";
import { useNavigate } from "react-router-dom";
import { UserDataI } from "../interface/UserDataI";
import { PaginationDataI } from "../interface/PaginationDataI";
import { useUserRequest } from "../composables/UserApi";

const User: React.FC = () => {
    const navigate = useNavigate();
    const [users, setUsers] = React.useState<Array<UserDataI>>([]);
    const [paginate, setPaginate] = React.useState<PaginationDataI>();
    const [loading, setLoading] = React.useState<Boolean>(false);
    const [messageError, setMessageError] = React.useState<String>("");

    const { getUserList } = useUserRequest();

    const fetchUser = async () => {
        setLoading(true);
        await getUserList(paginate?.current_page ?? 1)
            .then((res) => {
                setPaginate(res.pagination);
                setUsers(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setMessageError(err.message ?? err.data.message);
                setLoading(false);
            });
    };
    
    const handlePageChange = (page: number) => {
        setPaginate((prevState) => {
            if (!prevState || prevState.current_page === page) {
                return prevState;
            }
            return {
                ...prevState,
                current_page: page
            };
        });
    }

    React.useEffect(() => {
        fetchUser();
    }, [paginate?.current_page]);

    return (
        <div>
            <Card>
                <Card.Header className="bg-white no-border">
                    <Card.Title>All Users</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table responsive size="sm">
                        <thead>
                            <tr>
                                <th style={{ width: "80px" }} scope="col"></th>
                                <th style={{ width: "300px" }} scope="col">
                                    Fullname
                                </th>
                                <th scope="col">Email</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={5}>Loading....</td>
                                </tr>
                            ) : messageError !== "" ? (
                                <tr>
                                    <td colSpan={5}>{messageError}</td>
                                </tr>
                            ) : users.length < 1 ? (
                                <tr>
                                    <td colSpan={5}>
                                        There's No User Data Here
                                    </td>
                                </tr>
                            ) : (
                                users.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <img
                                                src={
                                                    item.image ??
                                                    "https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png"
                                                }
                                                width={50}
                                                className="img-circle"
                                                alt="user_profile"
                                            />
                                        </td>
                                        <td className="py-2">
                                            {item.fullname}
                                        </td>
                                        <td className="py-2">{item.email}</td>
                                        <td className="py-2">
                                            <Button
                                                onClick={() =>
                                                    navigate(
                                                        `/users/${item.id}`
                                                    )
                                                }
                                                variant="primary"
                                                style={{
                                                    background: "#65A7DB",
                                                    borderColor: "#65A7DB",
                                                    borderRadius: "20px",
                                                }}
                                            >
                                                View Detail
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                    <Row className="justify-content-end">
                        <CustomPagination
                            currentPage={paginate?.current_page ?? 1}
                            itemsPerPage={paginate?.per_page ?? 10}
                            onPageChange={(page) => handlePageChange(page)}
                            totalItems={paginate?.total ?? 0}
                        />
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default User;
