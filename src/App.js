import logo from './logo.svg';
import './App.css';
import ToDoDragDropDemo from './ToDoDragDropDemo';

// function App() {
//   return (
//     <ToDoDragDropDemo />
//   );
// }

// export default App;


// https://blog.usejournal.com/implementing-react-drag-and-drop-without-any-external-library-d7ec00437afb

import React, { useState , useRef} from 'react';
const App = () => {
const draggingItem = useRef();
const dragOverItem = useRef();
const [list, setList] = useState([
'Chicken Biriyani',
'Mutton Pulao',
'Paneer Masala',
'Tandoori Chicken',
'Dal Makhana',
'Malai Kofta',
]);

const handleDragStart = (e, position) => {
  draggingItem.current = position;
  console.log("handle drag start ", e.target.innerHTML, position);
};

const handleDragEnter = (e, position) => {
  dragOverItem.current = position;
  console.log(e.target.innerHTML, position);
 };

 const handleDragEnd = (e) => {
  const listCopy = [...list];
  const draggingItemContent = listCopy[draggingItem.current];
  listCopy.splice(draggingItem.current, 1);
  listCopy.splice(dragOverItem.current, 0, draggingItemContent);
   
   draggingItem.current = null;
   dragOverItem.current = null;
   setList(listCopy);
};

// All dishes above. Indian
return (
<>
<div className="droppable"
   onDragOver={(e) => e.preventDefault()}
   onDrop={handleDragEnd}
  //  onDragEnd={handleDragEnd}
>
{
 list &&
  list.map((item, index) => (
     <h1 key={index} 
     className="draggable"
     onDragStart={(e) => handleDragStart(e, index)}
     onDragEnter={(e) => handleDragEnter(e, index)}
     draggable>
       {item}
     </h1>
    ))}
  </div>
   </>
  );
};
export default App;
