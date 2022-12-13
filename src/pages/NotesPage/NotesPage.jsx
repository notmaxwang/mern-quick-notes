import NoteCard from "../../components/NoteCard/NoteCard";

export default function NotesPage({notes}) {
  
  const noteCards = notes.map((n, idx) => (
    <NoteCard  note={n} idx={idx}/>
  ));

  return (
    <>
      <h1>Notes</h1>
      {notes.length===0 ?
      <p>No Notes Yet!</p>
      :
      <div>
        {noteCards}
      </div>
      }
    </>
  );
}