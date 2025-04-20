//Imports 
import { puzzles } from './data';
import Sidebar from './Sidebar';
import PuzzleGallery from './PuzzleGallery';
import ActivePuzzle from './ActivePuzzle';
import PuzzlePlayArea from './PuzzlePlayArea';
import './App.css'

// Placeholder for now: display a static puzzle as the active one,
//  pulled from test data.

const selectedPuzzle = puzzles.find(puzzle => puzzle.id === 6)

//Start the main function to display the components including the "static"
//active puzzle which will later display the one clicked
function App() {
  return (//reminder everything  has to be in parens so it doesn't return early
    <div className="container mt-4">
      <div className="spicy-rice-regular">
        <h1>Puzzle Power</h1>
      </div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar title="Add a Puzzle"/>
        </div>
        <div className="col-md-9">
          <PuzzleGallery />
          <ActivePuzzle puzzle={selectedPuzzle} title="Selected Puzzle"/> 
          <PuzzlePlayArea title="Future Component for Puzzle Activity"/>
        </div>
      </div>
    </div>
  );
}

//Exports
export default App
