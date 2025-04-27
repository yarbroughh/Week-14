//Imports to connect all the components
import { useState } from 'react';
//Changed this:
//import { puzzles } from './data';
//to this to connect using state:
import { puzzles as initialPuzzles } from './data';
import { Puzzle } from './types';
import Sidebar from './Sidebar';
import PuzzleGallery from './PuzzleGallery';
import ActivePuzzle from './ActivePuzzle';
import PuzzlePlayArea from './PuzzlePlayArea';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css'

// Placeholder for now: display a static puzzle as the active one,
//  pulled from test data.
//Update the variable from the static:
// const selectedPuzzle = puzzles.find(puzzle => puzzle.id === 6)
//and add the variable state inside the function (two const)

//Start the main function to display the components including the 
//active puzzle which will display the one clicked
//Need to handle add, delete, update (toggle favorite), and select
function App() {
  const [puzzles, setPuzzles] = useState<Puzzle[]>(initialPuzzles);
  const [selectedPuzzle, setSelectedPuzzle] = useState<Puzzle | undefined>(undefined);
  const handleSelect = (puzzle: Puzzle) => {
    setSelectedPuzzle(puzzle);
  };
  const handleDelete = (id: number) => {
    const updatedPuzzles = puzzles.filter(puzzle => puzzle.id !== id);
    setPuzzles(updatedPuzzles);
    // Clear selected puzzle if it was deleted
    if (selectedPuzzle?.id === id) {
      setSelectedPuzzle(undefined);
    } 
  };
    const handleToggleFavorite = (id: number) => {
    const updatedPuzzles  = puzzles.map(puzzle =>
      puzzle.id === id ? { ...puzzle, isFavorite: !puzzle.isFavorite } : puzzle);
      setPuzzles(updatedPuzzles);
      //add this because the puzzle wasn't updating to show favorited right away
      if (selectedPuzzle && selectedPuzzle.id === id) {
      const updatedSelectedPuzzle = updatedPuzzles.find(puzzle => puzzle.id === id);
      setSelectedPuzzle(updatedSelectedPuzzle);
    }
  };

//handleAdd takes no arguments.
//The function itself creates a new hardcoded puzzle.
//Spread the old array (...puzzles) and add the new puzzle at the end.
//Needed to adjust puzzles.length + 1 for the ID to create a new ID
//because more than one puzzle was selected in certain instances of add/delete
  const handleAdd = () => {
    const nextId = puzzles.length > 0 ? Math.max(...puzzles.map(p => p.id)) + 1 : 1;

    const newPuzzle = {
      id: nextId,
      name: "New Puzzle",
      type: "Jigsaw", 
      difficulty: "Medium", 
      date: "2025-04-25", 
      image: "default-image",
      notes: "This is a new puzzle added!",
      isFavorite: false // Add new field so that I can update before doing a form
    };

    //When adding a new puzzle, set the selected puzzle automatically to be highlighted
    const updatedPuzzles = [...puzzles, newPuzzle];
    setPuzzles(updatedPuzzles);
    setSelectedPuzzle(newPuzzle);
  };
  
  return (//reminder everything has to be in parens so it doesn't return early
    <Container className="p-4">
      <div className="spicy-rice-regular">
        <h1>Puzzle Power</h1>
      </div>
      <Row>
        <Col md={12}>
          <PuzzleGallery puzzles={puzzles} title="Puzzle Gallery" onSelect={handleSelect} selectedPuzzle={selectedPuzzle} />
        </Col>
      </Row>
      <Row>
        <Col md={4} className='mb-3'>
          <Sidebar title="Add a Puzzle" onAdd={handleAdd}/>
        </Col>
        <Col md={8}>
          <ActivePuzzle puzzle={selectedPuzzle} title="Selected Puzzle" onDelete={handleDelete} onToggleFavorite={handleToggleFavorite} /> 
          <PuzzlePlayArea title="Future Component for Puzzle Activity"/>
        </Col>
      </Row>
    </Container>
  );
}

//Exports
export default App
