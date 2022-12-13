import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewNoteForm({addNote}) {
  const [note, setNote] = useState({
    text: '',
  });

  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    addNote(note);
    setNote({
      text:'',
    });
    navigate('/notes');
  }

  function handleChange(evt) {
    setNote({
      ...note,
      [evt.target.name]:evt.target.value,
    });
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label>Text:</label>
        <textarea name="text" value={note.text} onChange={handleChange} required>
        </textarea>
      </div>
      <button type='submit'>Add Note</button>
    </form>
  )
}