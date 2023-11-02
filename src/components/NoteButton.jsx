import React from "react";

function NoteButton({ id, onDelete, archived, onArchived }) {
    if (archived == false) {
        return (
            <div className="note-item__action">
                <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
                <button className="note-item__archive-button" onClick={() => onArchived(id)}>Arsipkan</button>
            </div>
        )
    } else 
        return (
            <div className="note-item__action">
                <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
                <button className="note-item__archive-button" onClick={() => onArchived(id)}>Pindahkan</button>
            </div>
    )
}

export default NoteButton