//Placeholder for a future component that will contain an interactive puzzle once 
//we get into higher-level functionality with React and where I can connect 
//To an API

//Prop for title
//Prop for a title 
type Props = {
    title: string;
  };

function PuzzlePlayArea({title}: Props) {
    return (
        <div className="card mb-3" style={{ width: "100%"}}>
            <h2 className="card-title spicy-rice-regular">{title}</h2> 
            <img 
                src="/PuzzleImages/future-flower-power.jpg" 
                alt="Image of a completed puzzle" 
                className="card-img-left img-fluid rounded-start" 
            />
        </div>
    )
}

export default PuzzlePlayArea;