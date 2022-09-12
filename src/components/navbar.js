import React from 'react';
import menuIcon from '../media/menuIcon.svg';
import GitHubLogo from '../media/GitHubLogo.svg';
import GmailLogo from '../media/GmailLogo.svg';
import DNA from '../media/dna-svgrepo-com.svg';

const tools = ['Translate', 'Transcribe', 'Reverse complement'];

const toolListMain = tools.map((tool) => (
  <a
    href={`/#${tool}`}
    className="inline-flex text-xl py-2 px-10 m-auto rounded lg:hover:bg-orange-300/50 hover:border border-slate-200  hover:text-slate-900"
    key={tool}
  >
    {tool}
  </a>));

const toolListDropdown = tools.map((tool) => (
  <a
    href={`/#${tool}`}
    className="block  p-2 m-auto rounded hover:border border-slate-200 hover:bg-orange-300 hover:text-slate-900"
    key={tool}
  >
    {tool}
  </a>
));

export const Navbar = () => (
  <nav className="flex gap-4 p-2 mx-auto rounded bg-orange-400 w-full sticky top-0">
    <img
      src={DNA}
      alt="stylised DNA"
      className="h-12 my-auto lg:h-14"
    ></img>
    <h1 className="my-auto text-5xl whitespace-nowrap">
      DNA utilities
    </h1>

    <ul className="hidden p-2 m-auto text-lg lg:block">{toolListMain}</ul>

    <div id="dropdown" className="m-auto lg:hidden">
      <button className="m-auto bg-transparent">
        <img
          src={menuIcon}
          alt="Dropdown menu icon"
          className="h-12 m-auto"
        ></img>
      </button>

      <ul id="dropdown-menu" className="hidden absolute bg-orange-400">
        {toolListDropdown}
      </ul>
    </div>

    <div className="flex gap-2 ml-auto text-center">
      <a
        className="p-1 rounded hover:bg-orange-300/50 hover:border border-slate-200"
        href="mailto:officegardenchris@gmail.com"
        target="_"
      >
        <img
          src={GmailLogo}
          alt="Gmail logo"
          className="h-12 m-auto md:h-8"
        ></img>
        <p className="hidden md:block">Contact me</p>
      </a>
      <a
        className="p-1 rounded hover:bg-orange-300/50 hover:border border-slate-200"
        href="https://github.com/ccozens/mol-bio-tools/"
        target="_"
      >
        <img
          src={GitHubLogo}
          alt="GitHub logo"
          className="h-12 m-auto md:h-8"
        ></img>
        <p className="hidden md:block">Source code</p>
      </a>
    </div>
  </nav>
);
