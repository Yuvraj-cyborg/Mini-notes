import React, { useState } from 'react';

const AddCard = ({ onAddCard }) => {
  const [data, setData] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.trim()) { 
      onAddCard({
        desc: data.trim(), 
        filesize: '1mb',
        close: true,
        tag: { isOpen: true, tagTitle: 'download', tagColor: 'green' },
      });
      setData("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='fixed right-5 '>
      <input
        type="text"
        value={data} 
        onChange={(e) => setData(e.target.value)} 
        placeholder="enter ur note"
        className=' bg-zinc-900 rounded-xl text-center text-zinc-300'
      />
      <button type='submit' className='absolute top-8 right-12 w-16 h-6 flex rounded-xl bg-green-500 text-zinc-100 text-center justify-center'>Add</button>
    </form>
  );
}

export default AddCard;