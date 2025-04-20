//Receive puzzle prop

type Puzzle = {
  id: number;
  name: string;
  type: string;
  difficulty: string;
  date: string;
  image: string;
  notes: string;
};

//Props for puzzle and title - I think in week 15 I should be able to 
//do something to only have to do this once?
type Props = {
  puzzle: Puzzle | undefined;
  title: string;
};


//pass the puzzle as a prop to display the "active" puzzle (chosen as index 2)
function ActivePuzzle({ puzzle, title }: Props) {
    if (!puzzle) return <h2>Please choose a puzzle to edit or delete.</h2>;
    return (
        <div className="card mb-3" style={{ width: "100%"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img 
              src={`./PuzzleImages/${puzzle.image}.jpg`}
              alt={`Image of a completed ${puzzle.name} puzzle.`} 
            className="card-img-left img-fluid rounded-start" 
            />
          </div>
          <div className="col-md-6 ps-4">
            <div className="card-body text-start">
              <h2 className="card-title spicy-rice-regular">{title}</h2>
              <p className="card-text">
              <strong>Name:</strong> {puzzle.name}<br />
              <strong>Type:</strong> {puzzle.type}<br />
              <strong>Difficulty:</strong> {puzzle.difficulty}<br />
              <strong>Date Completed:</strong> {puzzle.date}<br />
              <strong>Notes:</strong> {puzzle.notes}
              </p>
            </div>
            </div>
            <div className="col-md-2">
              <a className="btn btn-primary mt-4 mb-4 w-100">Edit</a>
              <a className="btn btn-primary w-100">Delete</a>
            </div>
          </div>

    </div>
    )
}

export default ActivePuzzle;