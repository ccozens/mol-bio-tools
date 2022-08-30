import React from 'react';
import GitHubLogo from '../media/GitHubLogo.svg';
import GmailLogo from '../media/GmailLogo.svg';

const tools = [
  'Transcribe',
  'Reverse complement',
  'Translate',
  'Primer check',
  'Primer design',
];

export const Navbar = () => (
  <nav className="flex w-11/12 gap-4 p-2 mx-auto rounded bg-coral-std">
    <h1 className="text-4xl btn"> welcome</h1>
    {tools.map((tool) => (
      <a
        href={`/#${tool}`}
        className="inline-flex p-2 my-auto rounded hover:bg-coral-light"
        key={tool}
      >
        {tool}
      </a>
    ))}
    <div className="flex gap-2 ml-auto">
    <a className="p-1 rounded hover:bg-coral-light"
        href="mailto:officegardenchris@gmail.com"
        target="_"
      >
        <img
          src={GmailLogo}
          alt="Gmail logo"
          className="h-8 pr-1 mx-auto"
        ></img>
        Contact me
      </a>
      <a className="p-1 rounded hover:bg-coral-light"
        href="https://github.com/ccozens/mol-bio-tools/"
        target="_"
        >
        <img
          src={GitHubLogo}
          alt="GitHub logo"
          className="h-8 pr-1 mx-auto"
          ></img>
        Source code
      </a>
          </div>

      
  </nav>
);
