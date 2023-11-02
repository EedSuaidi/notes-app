import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            body: "",
            maxLength: 50
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this)
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)

    }

    onTitleChangeHandler(event) {
        const title = event.target.value;
        const { maxLength } = this.state;

        if (title.length <= maxLength) {
            this.setState({ title });
        }
    }

    onBodyChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitHandler(event) {
        event.preventDefault()
        this.props.addNote(this.state)

        this.state.title = ""
        this.state.body = ""
    }

    render() {

        const { title, maxLength } = this.state;
        const remainingChars = maxLength - title.length;

        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitHandler}>
                    <p className="note-input__title__char-limit">Sisa karakter : {remainingChars}</p>
                    <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeHandler} required />
                    <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeHandler} required></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }

}

export default NoteInput