import NewNoteForm from "../../components/NewNotesForm/NewNotesForm";

export default function NewNotePage({addNote}) {
  return (
    <>
      <NewNoteForm addNote={addNote} />
    </>
  );
}