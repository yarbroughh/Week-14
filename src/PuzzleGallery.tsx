import { puzzles } from './data';

//URL where I found the Bootstrap Carousel code
//https://www.lambdatest.com/blog/bootstrap-carousel-examples/#:~:text=Asked%20Questions%20(FAQs)-,What%20are%20Bootstrap%20Carousels?,to%20consider%20when%20designing%20carousels.
//Create container to hold 5 images and carets to display additional
//It will pull in an array of images

//This is my row of 5 for my static version since
//I'm not ready to figure out how to do a carousel

function PuzzleGallery() {
    return (
        <div className="card mb-3" style={{ width: "100%"}}>
            <div className="row g-0 align-items-center">
                <div className="col-md-1">
                <img 
                        src="./daisy-left.png" 
                        alt="Image of a daisy that represents a caret pointing left" 
                        className="img-fluid rounded"
                        style={{ width: 'auto', height: '50px'}}
                        />
                 </div>
                 {puzzles.slice(0, 5).map((puzzle) => ( //Display 5 puzzles
                <div className="col-md-2 p-1" key={puzzle.id}>
                    <img 
                        src={`./PuzzleImages/${puzzle.image}.jpg`}
                        alt={`Image of a completed ${puzzle.name} puzzle.`}
                        className="rounded"
                        style={{
                            width: '100%',
                            height: '100px'
                        }}
                        />
                </div>
                 ))}
                <div className="col-md-1">
                <img 
                        src="./daisy-right.png" 
                        alt="Image of a daisy that represents a caret pointing right" 
                        className="img-fluid rounded"
                        style={{ width: 'auto', height: '50px'}}
                        />
                 </div>
        </div>
    </div> 
    )
}

export default PuzzleGallery;