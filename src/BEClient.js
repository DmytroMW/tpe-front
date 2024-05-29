import axios          from 'axios';
import { SERVER_URL } from './config';

const serverUrl = SERVER_URL;

const BEClient = axios.create({
    withCredentials : true,
    baseURL         : serverUrl
});

export default BEClient; 
