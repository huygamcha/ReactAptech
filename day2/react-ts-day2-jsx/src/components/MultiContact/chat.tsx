import { useState } from "react";

interface Chat {
  name: string;
  email: string;
}
function Chat({ value }: { value: Chat }) {
  const [message, setMessage] = useState("");
  return (
    <div>
      <textarea
        value={message}
        cols="40"
        rows="5"
        placeholder={`Chat with ${value.name}`}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button>{`send to ${value.email}`}</button>
    </div>
  );
}

export default Chat;
