import React, { Component } from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';

class Note extends Component {
    edit() {
        console.log('Editing');
    }

    remove() {
        console.log('removing');
    }

    render() {
        return(
            <div className="note">
                <p> Learn React </p>
                <span>
                    <button onClick={this.edit.bind(this)} id="edit"> <FaPencil /> </button>
                    <button onClick={this.remove.bind(this)} id="remove"> <FaTrash /> </button>
                </span>
            </div>
        );
    }
}

export default Note;