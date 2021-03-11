import React, { Component } from "react";
import NotesList from "../components/NotesList.jsx";
import AddNote from "../components/AddNote.jsx";

export default class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.URL = "https://ra-6-task-2-server.herokuapp.com/notes";
  }

  getNotes = () => {
    fetch(this.URL)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ notes: result });
      });
  };

  onNewNote = (note) => {
    fetch(this.URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(note),
    }).then(() => this.getNotes());
  };

  onDelete = (id) => {
    fetch(`${this.URL}/${id}`, {
      method: "DELETE",
    }).then(() => this.getNotes());
  };

  render() {
    return (
      <>
        <div className="header-and-refresh">
          <h1>Notes</h1>
          <div
            className="material-icons change_circle"
            onClick={() => {
              this.getNotes();
            }}
          >
            change_circle
          </div>
        </div>
        <NotesList notes={this.state.notes} onDelete={this.onDelete} />
        <AddNote onNewNote={this.onNewNote} />
      </>
    );
  }

  componentDidMount() {
    this.getNotes();
  }
}
