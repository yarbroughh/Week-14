// Static form layout for adding new puzzles — 
// functionality to connect input fields to data file will
// be added in Week 16.

import { Card } from "react-bootstrap";
import { TitleProps } from "./types";
//No longer need - getting props from App
//import { puzzles } from "./data";

//Prop for a title and to add functionality for the Add button
type Props = TitleProps & {
  onAdd: () => void;
};


function Sidebar({ title, onAdd }: Props) {
    return (
      <Card className="p-4">
        <Card.Title className="spicy-rice-regular">{title}</Card.Title>   
      <form className="sidebar-form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Puzzle Name</label>
            <input 
              type="text" 
              id="name"
              className="form-control"
              placeholder="Give your puzzle a name."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="type" className="form-label">Puzzle Type</label>
            <input
              type="text"
              id="type"
              className="form-control"
              placeholder="What type of puzzle is it?"
            />
          </div>  
          <div className="mb-3">
            <label htmlFor="level" className="form-label">Difficulty Level</label>
            <input
              type="number"
              id="level"
              className="form-control"
              placeholder="Difficulty on scale 1-10."
              min="1"
              max="10"
            />
            </div>
            <div className="mb-3">
            <label htmlFor="date" className="form-label">Date Completed</label>
            <input
              type="date"
              id="date"
              className="form-control"
              placeholder="On what date did you finish?"
            />
          </div>  
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Upload an Image</label>
            <input
              type="url"
              id="image"
              className="form-control"
              placeholder="Give your image a name."
            />
            </div>  
            <div className="mb-3">
            <label htmlFor="notes" className="form-label">Notes</label>
            <input
              type="text"
              id="notes"
              className="form-control"
              placeholder="Any notes?"
            />
            </div>
          <div className="mb-3"> 
              <button type="button" className="btn btn-primary w-100" onClick={onAdd}>Add</button>
          </div>
      </form>
      </Card>
    )
}

export default Sidebar;