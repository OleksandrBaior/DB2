import React from "react";
import App from "./App";

class NewNote extends React.Component {

    state = {
       taskDone: true
    };

    taskDone = () => {
        if (this.state.taskDone == true) {
            this.setState({
                taskDone : false
            });
        }
        else {
            this.setState({
                taskDone : true
            });
        }
    };

    changeDone = () => {
        this.setState({
            taskDone : true
        });
    }

    render() {
        const {note, deleteNote} = this.props
      
        return (
              <div id='note' className='task'>
                  {this.state.taskDone ? (
                      <div
                          type="text"
                          rows="1"
                          className="form-control sticker">
                          {note}
                    </div>
                  ) : (
                      <div
                          type="text"
                          rows="1"
                          className="form-control sticker-done">
                          {note}
                    </div>
                  )
                  }
                      <button onClick={() => {this.taskDone()}} type="button" className="btn btn-success btn-task">
                          { this.state.taskDone ?
                              (<span className="glyphicon glyphicon-ok"></span>) :
                              (<span className="glyphicon glyphicon-remove"></span>)
                          }
                      </button>
                    <button onClick={() => {
                        deleteNote(note);
                        this.changeDone();
                    }}
                            id="delete" type="button" className="btn btn-danger btn-task">
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>
              </div>

        )
    }
}
export default NewNote;