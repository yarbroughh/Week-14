// Static form layout for adding new puzzles — 
// functionality will be added later.

//Prop for a title 
type Props = {
  title: string;
};


function Sidebar({ title }: Props) {
    return (
      <div className="card p-4">
        <h2 className="card-title spicy-rice-regular">{ title }</h2>  
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
              <button type="submit" className="btn btn-primary w-100">Add</button>
          </div>
      </form>
      </div>
    )
}

export default Sidebar;