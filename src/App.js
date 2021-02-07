import React from "react";
import NewNote  from "./NewNote";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            note: [],
            inputValue: ''
        };
    }
    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.addNewNote()
        }
    }

    updateInputValue =  (evt) => {
        this.setState({
            inputValue: evt.target.value
        });
    }

    addNewNote = note => {
        const updateNotes = [...this.state.note];
        const inputValue = this.state.inputValue;
        updateNotes.push(inputValue);

        this.setState({
            note: updateNotes,
            inputValue: ''
        });
    }

    deleteNote = note => {
        const Newnote = this.state.note;
        const indexNote = Newnote.indexOf(note);
        var removedItem = Newnote.splice(indexNote,1)
        this.setState({
            note: Newnote
        });
    };

     render() {
       return (
        <div>
        <header>
              <div className="head ">
                    <div className="input-group new-task" >
                      <input
                          value={this.state.inputValue} onChange={this.updateInputValue}
                          onKeyPress={this._handleKeyPress}
                          id='newTask' type="text" className="form-control" placeholder="New task..."/>
                          <span className="input-group-btn">
                              <button onClick={()=>{this.addNewNote()}} id="plus" type="button" className="btn btn-default">
                                    <span className="glyphicon glyphicon-plus size_button"></span>
                              </button>
                          </span>
                    </div>
              </div>
        </header>
          <div className='main'>
              {this.state.note.map((note,index) =>
                  <NewNote note={note} key={index} deleteNote={this.deleteNote}/>)
              }
          </div>
          </div>
    )
  }
}
export default App;


