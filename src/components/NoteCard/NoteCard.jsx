export default function NoteCard({ note }) {
  return(
    <>
      <div>{note.text}</div>
      <div>{note.createdAt.toLocaleString()}</div>
    </>
  )
}