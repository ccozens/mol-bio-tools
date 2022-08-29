import React from 'react';

const tools = ['Translate', 'Reverse complement', 'Transcribe', 'Primer check'];

const ToolList = ({ list }) => (
  <ul className="justify-items-end">
    {list.map((item) => (
      <li className="inline-flex px-6 py-2" key={item}>{item}</li>
    ))}
  </ul>
);

export const Navbar = () => (
    <nav className="flex w-11/12 p-2 mx-auto rounded bg-slate-700">
    <h1 className="text-4xl btn"> welcome</h1>
    <ToolList list={tools} />
  </nav>
);
