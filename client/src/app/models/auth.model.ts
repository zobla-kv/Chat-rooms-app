export interface User {
  id: string;
  username: string;
  token: string;
}

export interface AuthServerError {
  error: string;
}

export interface WebSocketMessage {
  type: string; // 'user' | 'server'
  message: ServerMessage | UserMessage;
}

export interface ServerMessage {
  message: string;
  data: any;  //TODO: update
}

export interface UserMessage {
  userId: string;
  message: string;
  data: any;  //TODO: update
}

