import React from "react";
import NoteItem from "./NoteItem";

function ArchivedNotesList ({ notes, onDelete, onArchived }) {
    if (notes.filter((note) => note.archived === true).length == 0) {
        return (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
        )
    } else {
        return  (
            <div className="notes-list">
                {
                     notes.filter((note) => note.archived === true).map((note) => (
                        <NoteItem
                        key={note.id}
                        onDelete={onDelete}
                        onArchived={onArchived}
                        {...note}
                        />
                    ))
                }
            </div>
        )
    }
    
}

export default ArchivedNotesList