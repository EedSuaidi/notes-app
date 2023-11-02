import React from "react";
import NoteInput from './NoteInput'
import NotesList from './NotesList'
import ArchivedNotesList from './ArchivedNotesList'
import { getInitialData } from '../utils/index'

class NoteApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: getInitialData(),
            searchValue: '',
            searchResults: []
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this)

    }

    onSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        const { notes } = this.state;

        if (searchValue === '') {
            this.setState({
                searchValue: '',
                searchResults: notes
            });
        } else {
            const searchResults = notes.filter(note => note.title.toLowerCase().includes(searchValue));
            this.setState({
                searchValue,
                searchResults
            });
        }
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title,
                createdAt: new Date(),
                body,
                archived: false,
              }
            ]
          }
        })
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveNoteHandler(id) {
        this.setState(prevState => ({
            notes: prevState.notes.map(note => {
                if (note.id === id) {
                    if (note.archived === true) {
                        return {
                            ...note,
                            archived: false
                        };
                    } else {
                        return {
                            ...note,
                            archived: true
                        };
                    }
                }
                return note;
            })
        }));
    }


    render() {

        const { searchValue, searchResults } = this.state;

        return (
            <>
                <div className="note-app__header">
                    <h1>Notes</h1>
                    <div className="note-search">
                        <input type="text" placeholder="Cari catatan ..." onChange={this.onSearch} value={searchValue} />
                    </div>
                </div>
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <h2>Catatan Aktif</h2>
                    <NotesList notes={searchValue === '' ? this.state.notes : searchResults} onDelete={this.onDeleteNoteHandler} onArchived={this.onArchiveNoteHandler} />
                    <h2>Arsip</h2>
                    <ArchivedNotesList notes={searchValue === '' ? this.state.notes : searchResults} onDelete={this.onDeleteNoteHandler} onArchived={this.onArchiveNoteHandler} />
                </div>
            </>
        )
    }
}

export default NoteApp
