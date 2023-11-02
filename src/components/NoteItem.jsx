import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteButton from "./NoteButton";

function NoteItem({ title, createdAt, body, archived, onDelete, onArchived, id }) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} createdAt={createdAt} body={body} />
            <NoteButton id={id} archived={archived} onDelete={onDelete} onArchived={onArchived} />
        </div>
    )
}

export default NoteItem
