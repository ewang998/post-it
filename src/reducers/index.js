import { combineReducers } from "redux";

//pre-stored notes
let presetnotes = [{ id: 0, text: 'click on me to show detail about notes', date: '6/1/2019, 12:00:00 PM'},
                   { id: 1, text: 'click the button to the right to delete this message', date: '6/1/2019, 12:00:00 PM'}];

const notesReducer = (notes = presetnotes, action) => {
  if (action.type === "ADD_NOTE") {
      return [...notes, {id: action.payload.id, text: action.payload.text, date: action.payload.date}];
    } else if (action.type === "DELETE_NOTE") {
      return notes.filter(note => note.id !== action.payload);
    }
    return notes;
};

const notesidReducer = (currentid = 2, action) => {
  if (action.type === "ADD_NOTE") {
      return currentid+1;
    }
    return currentid;
};

const currentnoteReducer = (currentnote = null, action) => {
  if (action.type === "SELECT_NOTE") {
      return action.payload;
    }
    return currentnote;
};

export default combineReducers({
    notes: notesReducer,
    currentid: notesidReducer,
    currentnote: currentnoteReducer
});
