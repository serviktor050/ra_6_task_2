import React from "react";
import { useState } from "react";
import shortid from "shortid";

const DEFAULT_FORM = {
  content: "",
};

export default function AddNote(props) {
  const { onNewNote } = props;

  const [state, setState] = useState(DEFAULT_FORM);

  const onFormFieldChange = (e) => {
    setState((prev) => {
      const newState = {
        ...prev,
        content: e.target.value,
      };

      return newState;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.content !== "") {
      const note = {
        id: shortid.generate(),
        content: state.content,
      };
      onNewNote(note);

      setState((prev) => ({ ...prev, content: "" }));
    }
  };

  return (
    <div className="add-note">
      <textarea
        name="content"
        placeholder="Напишите что-нибудь"
        onChange={onFormFieldChange}
        value={state.content}
      />
      <div className="material-icons add_box" onClick={onSubmit}>
        add_box
      </div>
    </div>
  );
}
