//Placeholder for a future component that will contain an interactive puzzle once 
//we get into higher-level functionality with React and where I can connect 
//To an API

//Active Puzzle does not manage state (at this point)-it just receives title as a prop
//and displays an image
import { Card } from 'react-bootstrap';
//Updated to import props instead of repeating in more than one component.
import { TitleProps } from './types';

type Props = TitleProps;

function PuzzlePlayArea({title}: Props) {
    return (
        <Card className="mb-3" style={{ width: "100%"}}>
            <Card.Title className="spicy-rice-regular">{title}</Card.Title> 
            <img 
                src="/PuzzleImages/future-flower-power.jpg" 
                alt="Image of a completed puzzle" 
                className="img-fluid rounded" 
            />
        </Card>
    )
}

export default PuzzlePlayArea;