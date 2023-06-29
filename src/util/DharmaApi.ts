import axios from "axios";

const DharmaApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Content-Type": "application/json",
  },
});

export { DharmaApi as default };
