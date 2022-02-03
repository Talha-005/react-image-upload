import axios from "axios";

export const singleFileUpload = async (data) => {
    try {
        const res = await axios.post('/api/v1/image/upload', data);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}