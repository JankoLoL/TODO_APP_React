import {API_KEY, API_URL} from "./constants";

// @param {function} successCallback - Function that saves the data from the server.


export const getTasks = async (successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            headers: {
                Authorization: API_KEY,
            },
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== "function") {
            throw new Error("Error while fetching data from the server");
        }

        successCallback(data.data);
    } catch (err) {
        console.log(err);
    }
};
