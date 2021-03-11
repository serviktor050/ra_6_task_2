import React from "react";
import NoteItem from "../components/NoteItem.jsx";

export default function NotesList(props) {
  const { notes } = props;

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          content={note.content}
          deleteNote={props.onDelete}
        />
      ))}
    </div>
  );
}
