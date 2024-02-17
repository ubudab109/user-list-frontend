import axios from "axios"
import { ResponseI } from "../interface/ResponseI";
import { UserDataI } from "../interface/UserDataI";

interface UserRequestFunctions {
  getUserList: (page: number) => Promise<ResponseI>;
  getUserDetail: (userId: number) => Promise<ResponseI>;
}

/**
 * The `useUserRequest` function in TypeScript defines two asynchronous functions for fetching a list
 * of users and user details from a backend API.
 * @returns {UserRequestFunctions} The `useUserRequest` function returns an object containing two functions:
 * 1. `getUserList`: This function asynchronously fetches a list of users from a backend API based on
 * the specified page number. It returns a Promise that resolves to an object of type `ResponseI`
 * containing status, message, user data array, and pagination information.
 * 2. `getUserDetail`: This function asynchronously fetches user
 */
export function useUserRequest() : UserRequestFunctions {

  /**
   * The function `getUserList` asynchronously fetches a list of users from a backend API based on the
   * specified page number.
   * @param {number} page - The `page` parameter in the `getUserList` function is used to specify the
   * page number for fetching a list of users from the backend API. This parameter determines which
   * page of user data to retrieve.
   * @returns {Promise<ResponseI>} The `getUserList` function returns a Promise that resolves to an object of type
   * `ResponseI`. This object contains the following properties:
   * - `status`: The status of the request data
   * - `message`: The message from the request data
   * - `data`: An array of user data
   * - `pagination`: Pagination information from the request data
   */
  const getUserList = async (page: number): Promise<ResponseI> => {
    const request = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users?page=${page}`);
    const userData: Array<UserDataI> = request.data.data.data;
    const response: ResponseI = {
      status: request.data.status,
      message: request.data.message,
      data: userData,
      pagination: request.data.data.pagination
    };
    return response;
  };

  /**
   * The function `getUserDetail` asynchronously fetches user details from a backend API using the
   * userId parameter.
   * @param {number} userId - The `userId` parameter is a number that represents the unique identifier
   * of a user in the system.
   * @returns {Promise<ResponseI>} The `getUserDetail` function is returning a response object with the following structure:
   * - status: The status code received from the API response
   * - message: The message received from the API response
   * - data: The user data object if the status is 200, otherwise null
   */
  const getUserDetail = async (userId: number) => {
    const request = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/${userId}`);
    let response: ResponseI;
    if (request.data.status === 200) {
      const userData: UserDataI = request.data.data;
      response = {
        status: request.data.status,
        message: request.data.message,
        data: userData,
      };
    } else {
      response = {
        status: request.data.status,
        message: request.data.message,
        data: null
      };
    }
    return response;
  };

  return {
    getUserList,
    getUserDetail,
  };
};
