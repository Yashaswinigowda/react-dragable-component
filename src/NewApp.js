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

// const handleDragEnter = (e, position) => {
//   dragOverItem.current = position;
//   console.log(e.target.innerHTML, position);
//  };

const handleDragEnter = (e, position) => {
  dragOverItem.current = position;
  console.log(e.target.innerHTML);
  const listCopy = [...list];
  console.log(draggingItem.current, dragOverItem.current);
  const draggingItemContent = listCopy[draggingItem.current];
  listCopy.splice(draggingItem.current, 1);
  listCopy.splice(dragOverItem.current, 0, draggingItemContent);

  draggingItem.current = dragOverItem.current;
  dragOverItem.current = null;
  setList(listCopy);
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
{
 list &&
  list.map((item, index) => (
     <h1 key={index} 
     onDragStart={(e) => handleDragStart(e, index)}
     onDragEnter={(e) => handleDragEnter(e, index)}
     onDragOver={(e) => e.preventDefault()}
    //  onDragEnd={handleDragEnd}
     onDragOver={(e) => e.preventDefault()}
     draggable>
       {item}
     </h1>
    ))}

    <ToDoDragDropDemo />
   </>
  );
};
export default App;
