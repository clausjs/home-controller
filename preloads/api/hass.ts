import { config } from 'dotenv';
config();
import axios from 'axios';

const TOKEN = process.env.HASS_TOKEN;
const isInTestMode: boolean = process.env.HASS_URL && process.env.HASS_PORT && TOKEN ? false : true;

const BASE_URL = `http://${process.env.HASS_URL}:${process.env.HASS_PORT}/api/`;
const DEFAULT_CONFIG: { headers: { Authorization: string } } = {
    headers: { Authorization: `Bearer ${TOKEN}` }
};

export const getApiStatus = async (): Promise<{ message: string }> => {
    if (!isInTestMode) {
        try {
            const response = await axios.get(BASE_URL, DEFAULT_CONFIG);
            console.log("response: ", response);
            return { message: "Success" };
        } catch (apiStatusGetError) {
            console.error("Encountered an error checking api status", apiStatusGetError);
            return apiStatusGetError;
        }
    }

    return { message: "API running in test mode." };
}

