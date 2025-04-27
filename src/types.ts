//I found that I was adding "title" prop to almost every file. 
//Learned that I can add a types.ts to consolidate

export type Puzzle = {
    id: number;
    name: string;
    type: string;
    difficulty: string;
    date: string;
    image: string;
    notes: string;
    isFavorite: boolean; //Added a field that I can update prior to finishing a form
  };
  
  export type TitleProps = {
    title: string;
  };
  
  export type PuzzleProps = {
    puzzle: Puzzle | undefined;
  };