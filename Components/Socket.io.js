import io from 'socket.io-client';
import { BASE_URL } from './Urls';
export const socket = io(BASE_URL);
