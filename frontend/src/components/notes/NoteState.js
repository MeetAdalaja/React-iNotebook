import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Note
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });

    const json = await response.json()
    setNotes(json)
  }


  // Add a Note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });

    // Logic of adding note in client 
    const note = await response.json();
    setNotes(notes.concat(note))
  }


  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = response.json();

    // logic for delete note in client
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }


  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Login to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }



  return (

    <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}


export default NoteState;

