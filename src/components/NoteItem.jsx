import React from "react";

export default function NoteItem(props) {
  return (
    <div className="note-item">
      <div className="note-text-field">
        <p>{props.content}</p>
      </div>
      <div
        className="material-icons disabled_by_default"
        onClick={() => {
          props.deleteNote(props.id);
        }}
      >
        disabled_by_default
      </div>
    </div>
  );
}
