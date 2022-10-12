import React from 'react';
import menuIcon from '../media/menuIcon.svg';
import GitHubLogo from '../media/GitHubLogo.svg';
import GmailLogo from '../media/GmailLogo.svg';
import DNA from '../media/dna-svgrepo-com.svg';
import { Link } from 'react-router-dom';

const tools = [
  'Analyse protein',
  'Translate protein',
  'Reformat protein',
  'Transcribe',
  'Reverse complement',
];

const toolListMain = tools.map((tool) => (
  <a
    href={`/#${tool}`}
    className="inline-flex text-xl py-2 px-3 m-auto rounded hover:bg-orange-300/50 hover:outline outline-slate-200  hover:text-slate-900"
    key={tool}
  >
    {tool}
  </a>
));

const toolListDropdown = tools.map((tool) => (
  <a
    href={`/#${tool}`}
    className="block p-2 m-auto rounded hover:outline outline-slate-200 hover:bg-orange-300 hover:text-slate-900"
    key={tool}
  >
    {tool}
  </a>
));

export const Navbar = () => (
  <nav className="flex gap-3 p-2 mx-auto bg-orange-400 w-full sticky top-0 z-10">
    <img
      src={DNA}
      alt="stylised DNA"
      className="h-12 w-12 my-auto lg:h-14 lg:w-14"
    ></img>
    <h1 className="my-auto text-5xl whitespace-nowrap">
      <a href="#top">MolBioTools</a>
    </h1>

    <ul className="hidden p-2 m-auto text-lg xl:block">
      {toolListMain}
    </ul>

    <div className="flex gap-3 ml-auto text-center">
      <div
        id="dropdown"
        className="p-1 rounded hover:bg-orange-300/50 hover:outline outline-slate-200 m-auto xl:hidden"
      >
        <button className="m-auto bg-transparent">
          <img
            src={menuIcon}
            alt="Dropdown menu icon"
            className="h-12 w-12 m-auto"
          ></img>
        </button>

        <ul
          id="dropdown-menu"
          className="hidden absolute bg-orange-400 m-3"
        >
          {toolListDropdown}
        </ul>
      </div>

      <Link
        className="p-1 rounded hover:bg-orange-300/50 hover:outline outline-slate-200"
        to="/contact"
      >
        <img
          src={GmailLogo}
          alt="Gmail logo"
          className="h-12 w-12 m-auto lg:h-8 lg:w-8"
        ></img>
        <p className="hidden lg:block">Contact me</p>
      </Link>
      <a
        className="p-1 rounded hover:bg-orange-300/50 hover:outline outline-slate-200"
        href="https://github.com/ccozens/mol-bio-tools/"
        target="_"
      >
        <img
          src={GitHubLogo}
          alt="GitHub logo"
          className="h-12 w-12 m-auto lg:h-8 lg:w-8"
        ></img>
        <p className="hidden lg:block">Source code</p>
      </a>
    </div>
  </nav>
);
