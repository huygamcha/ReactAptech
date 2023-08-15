import React, { useState, useEffect } from "react";

const options: string[] = [
  "posts",
  "comments",
  "albums",
  "photos",
  "todos",
  "users",
];

interface User {
  id: number;
  title?: string;
  name?: string;
}

function Content(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [value, setValue] = useState<string>("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${value}`)
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
      });
  }, [value]);

  return (
    <div>
      {options.map((option) => (
        <button
          style={
            option === value ? { backgroundColor: "#000", color: "#fff" } : {}
          }
          onClick={() => setValue(option)}
          key={option}
        >
          {option}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.title || user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
