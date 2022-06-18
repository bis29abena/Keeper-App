import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevsNotes) => {
      return [...prevsNotes, note];
    });
  }

  function delNote(id) {
    setNotes((prevs) => {
      return prevs.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {notes.map((itemNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={itemNote.title}
            content={itemNote.content}
            del={delNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
