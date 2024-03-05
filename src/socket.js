import io from "socket.io-client";

const socket = io("https://tezzcafe.uz", {
  withCredentials: true,
  autoConnect: true,
  secure: true,
  reconnection: true,
  reconnectionAttempts: Infinity,
  transports: ["websocket"],
  query: {
    table: "65e4aa9bd641977063db0b2d",
    restaurant: "65d652cec4485f20bdf5d897",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDY1MmNlYzQ0ODVmMjBiZGY1ZDg5OSIsInJvbGUiOiJkaXJlY3RvciIsInJlc3RhdXJhbnQiOiI2NWQ2NTJjZWM0NDg1ZjIwYmRmNWQ4OTciLCJpYXQiOjE3MDk0ODQ1MTUsImV4cCI6MTcwOTY1NzMxNX0.3NOP06BW8gRmL4Drmxb2XpeHuS0VTWGUgQVFKY4_Lv0"
  },
});

export default socket;
