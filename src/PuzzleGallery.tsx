import { Card, Row, Col} from 'react-bootstrap';
import { useEffect, useState } from 'react';

//No longer using this because I'm getting puzzles from Props now
// import { puzzles } from './data'; 

import { TitleProps, Puzzle } from './types';

type Props = TitleProps & {
    puzzles: Puzzle[];
    onSelect: (puzzle: Puzzle) => void;
    //accept this prop so I can highlight the currently selected puzzle
    selectedPuzzle: Puzzle | undefined;
    };

//Create container to hold 5 images and carets to display additional
//It will pull in an array of images


function PuzzleGallery({ title, puzzles, onSelect, selectedPuzzle }: Props) {
//I worked with AI to figure out how to make the images be a functional
//carousel for when there are more than 5 images
//first create a way to handle the left and right carets
    const [startIndex, setStartIndex] = useState(0);
//Reset startIndex if the puzzles array changes to resolve bug where the 
//carousel did not function as intended
    useEffect(() => {
        if (puzzles.length <= 5) {
            setStartIndex(0);
        } else {
            setStartIndex(Math.max(0, puzzles.length - 5));
        }
    }, [puzzles]);
    
    const handleLeft = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };
    
    const handleRight = () => {
        if (startIndex + 5 < puzzles.length) {
            setStartIndex(startIndex +1);
        }
    };

    return (
        <Card className="mb-3" style={{ width: "100%"}}>
            <Card.Title className="spicy-rice-regular">{title}</Card.Title> 
                <Row className="g-0 align-items-center">
                    <Col md={1}>
                        <img 
                            src="./caret_left.png" 
                            alt="caret pointing left" 
                            className="img-fluid rounded"
                            style={{ width: 'auto', height: '50px', cursor: 'pointer'}}
                            onClick={handleLeft}
                            />
                    </Col>
                        {puzzles.slice(startIndex, startIndex + 5).map((puzzle) => ( //Change slice from 5 to "startIndex"
                    //This contains the trigger when an image is selected and add a class
                    //to be able to highlight the selected puzzle
                    <Col 
                        md={2} 
                        className={`p-1 ${selectedPuzzle?.id === puzzle.id ? 'selected-puzzle' : ''}`} 
                        key={puzzle.id}
                    >
                        <img 
                            src={`./PuzzleImages/${puzzle.image}.jpg`}
                            alt={`Image of a completed ${puzzle.name} puzzle.`}
                            className="rounded"
                            style={{
                                height: '125px',
                                width: '150px',
                                objectFit: 'cover'
                            }}
                            onClick={() => onSelect(puzzle)}
                            />
                    </Col>
                    ))}
                    <Col md={1}>
                        <img 
                            src="./caret_right.png" 
                            alt="caret pointing right" 
                            className="img-fluid rounded"
                            style={{ width: 'auto', height: '50px', cursor: 'pointer' }}
                            onClick={handleRight}
                        />
                    </Col>
            </Row>
    </Card> 
    )
}

export default PuzzleGallery;