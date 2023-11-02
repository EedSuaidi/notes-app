import React from "react";
import NoteItem from "./NoteItem";

function NotesList ({ notes, onDelete, onArchived }) {
    if (notes.filter((note) => note.archived === false).length == 0) {
        return (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
        )
    } else {
        return  (
            <div className="notes-list">
                {
                     notes.filter((note) => note.archived === false).map((note) => (
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

export default NotesList