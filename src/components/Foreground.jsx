import React, { useRef, useState } from 'react'
import Card from './card';
import AddCard from './AddCard';

function Foreground() {
  const ref = useRef(null);

  const [data, setData] = useState([
    {
      desc: "This is the background we needed",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Downlaod Now", tagColor: "sky" },
    },
    {
      desc: "This is the background we needed",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Downlaod Now", tagColor: "sky" },
    },
    {
      desc: "This is the background we needed",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Downlaod Now", tagColor: "green" },
    },
  ]);

  const addCard = (newCard) => {
    setData([...data, newCard]);
  };

  return (
    <>
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}

        <AddCard onAddCard={addCard} />
      </div>
    </>
  );
}

export default Foreground;