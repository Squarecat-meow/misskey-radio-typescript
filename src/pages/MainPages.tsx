import React, { useEffect, useRef, useReducer } from "react";
import NoteComponents from "../Components/MainPages/NoteComponents";

export interface noteType {
  id: string;
  avatarUrl: string;
  username: string;
  renoteUser: null | {
    avatarUrl?: string;
    name?: string;
    renoteText?: string;
  };
  cw: string;
  text: string;
}

type Action = "APPEND_NOTE";

interface actionType {
  type: Action;
  note?: noteType;
}

const initialNote = [
  {
    id: "",
    avatarUrl: "",
    username: "",
    renoteUser: {
      renoteText: "",
      avatarUrl: "",
      name: "",
    },
    cw: "",
    text: "",
  },
];

const reducer = (state: noteType[], action: actionType) => {
  switch (action.type) {
    case "APPEND_NOTE":
      if (state.length > 4) {
        return [...state.slice(1), action.note!];
      } else {
        return [...state, action.note!];
      }
    default:
      return state;
  }
};

const MainPages = () => {
  const [notes, dispatch] = useReducer(reducer, initialNote);
  const ws = useRef<null | WebSocket>(null);

  const server = localStorage.getItem("server");
  const token = localStorage.getItem("token");

  const wsUrl = `wss://${server}/streaming?i=${token}`;

  useEffect(() => {
    const socket = new WebSocket(wsUrl);
    ws.current = socket;

    ws.current.onopen = () => {
      console.log("WebSocket Connected!");
      ws.current?.send(
        JSON.stringify({
          type: "connect",
          body: {
            channel: "homeTimeline",
            id: "3",
          },
        })
      );
    };

    ws.current.onmessage = (e) => {
      const note = JSON.parse(e.data).body.body;
      const newNote: noteType = {
        id: note.id,
        avatarUrl: note.user.avatarUrl,
        username: note.user.name,
        renoteUser: note.renote && {
          renoteText: note.renote.text,
          avatarUrl: note.renote.user.avatarUrl,
          name: note.renote.user.name,
        },
        cw: note.cw,
        text: note.text,
      };
      dispatch({
        type: "APPEND_NOTE",
        note: newNote,
      });
    };

    return () => {
      console.log("Clean up, Disconnected");
      ws.current?.close();
    };
  }, []);

  return (
    <div>
      <NoteComponents notes={notes} />
    </div>
  );
};

export default MainPages;
