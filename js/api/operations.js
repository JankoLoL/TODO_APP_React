import {API_KEY,API_URL} from "./constants";

/**
 * Fetch all operations from the server.
 * @param {string} id - ID of the task.
 * @param {function} successCallback - Function that saves the data from the server.
 */

export const getOperations = async (id, successCallback) => {
    try{
        const response = await fetch(`${API_URL}/tasks/${id}/operations`,{
            headers:{
                Authorization:API_KEY,
            }
        });
        const data = await respone.json();

        if(data.error || typeof successCallback !== "function"){
            throw new Error("Error while fetching data from the server");
        }
        successCallback(data.data);
    } catch (err){
        console.log(err);
    }
};