import io from 'socket.io-client';

const socket = io('https://tezzcafe.uz', { // Replace with your server URL
  reconnection: true,
});

export default socket;
