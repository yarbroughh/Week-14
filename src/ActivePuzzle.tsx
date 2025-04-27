//Active Puzzle does not manage state - it just receives puzzle and title as props
//and displays the data
import { Card, Row, Col, Button } from 'react-bootstrap';


//Updated to import props instead of repeating in more than one component.
import { PuzzleProps, TitleProps } from './types';

type Props = PuzzleProps & TitleProps & {
  onDelete: (id: number) => void;
  onToggleFavorite: (id: number) => void;
};

//pass the puzzle as a prop to display the "active" puzzle (chosen as index 2)
function ActivePuzzle({ puzzle, title, onDelete,  onToggleFavorite }: Props) {
    if (!puzzle) return (
        <Card className="mb-3" style={{ width: "100%"}}>
          <h2>Please choose a puzzle to edit or delete from the Puzzle Gallery above.</h2>
        </Card> 
    )

    //use React Bootstrap for layout and styling
    return (
        <Card className="mb-3" style={{ width: "100%"}}>
          <Card.Title className="spicy-rice-regular">{title}</Card.Title>
        <Row className="g-0">
          <Col md={4}>
            <img 
              src={`./PuzzleImages/${puzzle.image}.jpg`}
              alt={`Image of a completed ${puzzle.name} puzzle.`} 
            className="img-fluid rounded" 
            />
          </Col>
          <Col md={6} className="ps-4">
            <Card.Body className="text-start">
              <Card.Text>
              <strong>Name:</strong> {puzzle.name}<br />
              <strong>Type:</strong> {puzzle.type}<br />
              <strong>Difficulty:</strong> {puzzle.difficulty}<br />
              <strong>Date Completed:</strong> {puzzle.date}<br />
              <strong>Notes:</strong> {puzzle.notes}<br />
              <strong>Favorite:</strong> {puzzle.isFavorite ? (
                <>
                 <img 
                  src="./PuzzleImages/favorite.png" 
                  alt="Rainbow Heart" 
                  style={{ width: '20px', marginLeft: '5px' }} 
                />
                </>
              ) : ''}
              </Card.Text>
            </Card.Body>
            </Col>
            <Col md={2}>
            <Button 
              className="btn-primary mb-4 w-100"
              onClick={() => onToggleFavorite(puzzle.id)}
            >
              Favorite
            </Button>
              <Button className="btn-primary mb-4 w-100" 
              //To confirm clicking works (but can't save to database yet)
              onClick={() => console.log('Edit clicked')}>Edit</Button>
              <Button className="btn-primary w-100"
              onClick={() => onDelete(puzzle.id)}>Delete</Button>
            </Col>
          </Row>
    </Card>
    )
}

export default ActivePuzzle;