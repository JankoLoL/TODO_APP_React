import {API_KEY, API_URL} from "./constants";

// @param {function} successCallback - Function that saves the data from the server.


export const getTasks = async (successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            headers: {
                Authorization: API_KEY,
                'Content-Type': 'application/json',
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

/**
 * Add new task
 * @param {object} task - Object representing task
 * @param {function} successCallback - Function that saves incoming data
 */
export const addTask = async (task, successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'POST',
            headers: {
                Authorization: API_KEY,
            },
            body: JSON.stringify(task)
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== "function") {
            throw new Error("Error while adding new task");
        }

        successCallback(data.data);
    } catch (err) {
        console.log(err);
    }
}
