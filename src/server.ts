import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

interface WhiteboardJoinData {
  whiteboardId: string;
  userId: string;
}

interface DocumentChangeData {
  whiteboardId: string;
  data: any;
}

io.on("connection", (socket) => {
  console.log("a user connected");

  // Join a whiteboard room
  socket.on("join-whiteboard", async ({ whiteboardId, userId }: WhiteboardJoinData) => {
    if (isUserAllowedToEdit(whiteboardId, userId)) {
      await socket.join(whiteboardId);
      console.log(`user ${userId} joined whiteboard ${whiteboardId}`);
    } else {
      console.log(`user ${userId} not allowed to edit whiteboard ${whiteboardId}`);
    }
  });

  // Leave a whiteboard room
  socket.on("leave-whiteboard", async (whiteboardId: string) => {
    await socket.leave(whiteboardId);
    console.log(`user left whiteboard ${whiteboardId}`);
  });

  // Handle collaboration events, e.g. document changes
  socket.on("document-change", ({ whiteboardId, data }: DocumentChangeData) => {
    socket.to(whiteboardId).emit("document-change", data);
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});

// Check if the user is allowed to edit the whiteboard
function isUserAllowedToEdit(whiteboardId: string, userId: string): boolean {
  // Implement your logic to check if the user is allowed to edit the whiteboard.
  // This could involve checking your database or any other data source.
  // For example, you could have a whiteboard_users table that maps
  // whiteboard IDs to user IDs, and check if the user ID is in that table.

  // For the sake of the example, we'll just allow any user to edit any whiteboard.
  return true;
}
