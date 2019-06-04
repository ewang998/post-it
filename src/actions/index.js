//add note action
//take the text and generate the time at the time of submit
export const addnote = (note, id) => {
  const time = new Date().toLocaleString();
  return {
      type: "ADD_NOTE",
      payload: {
        id: id,
        text: note,
        date: time
      }
    };
};

//delete note action
//delete the note from store with the text
export const deletenote = id => {
  return {
      type: "DELETE_NOTE",
      payload: id
    };
};

export const selectnote = id => {
  return {
      type: "SELECT_NOTE",
      payload: id
    };
};
