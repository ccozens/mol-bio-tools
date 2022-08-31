import React from 'react';
import GitHubLogo from '../media/GitHubLogo.svg';
import GmailLogo from '../media/GmailLogo.svg';
import DNA from '../media/dna-svgrepo-com.svg'

const tools = [
  'Transcribe',
  'Reverse complement',
  'Translate',
  'Primer check',
  'Primer design',
];

const toolList = tools.map((tool) => (
  <a
    href={`/#${tool}`}
    className="inline-flex p-2 m-auto rounded lg:hover:bg-coral-light hover:bg-coral-light/25 hover:text-slate-900"
    key={tool}
  >
    {tool}
  </a>
));

export const Navbar = () => (
  <nav className="flex w-11/12 gap-4 p-2 mx-auto rounded bg-coral-std">
    <img src={DNA} alt="stylised DNA" className="h-12 my-auto md:h-14"></img>
    <h1 className="my-auto text-5xl whitespace-nowrap"> DNA utilities</h1>
    
    <div className="m-auto dropdown lg:hidden">
    <label tabIndex="0" htmlFor="menu-toggle" className="m-1 cursor-pointer btn">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
         </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />
      <ul tabIndex="0" className="text-center dropdown-content menu">
      {toolList}
      </ul>
      </div>
   
   
   <nav className="hidden gap-4 p-2 m-auto text-lg lg:block">
     {toolList}
    </nav>
    
   
    <div className="flex gap-2 ml-auto text-center">
      <a
        className="p-1 rounded hover:bg-coral-light"
        href="mailto:officegardenchris@gmail.com"
        target="_"
      >
        <img
          src={GmailLogo}
          alt="Gmail logo"
          className="h-12 pr-1 m-auto md:h-8"
        ></img>
        <p className='hidden md:block'>Contact me</p>
      </a>
      <a
        className="p-1 rounded hover:bg-coral-light"
        href="https://github.com/ccozens/mol-bio-tools/"
        target="_"
      >
        <img
          src={GitHubLogo}
          alt="GitHub logo"
          className="h-12 pr-1 m-auto md:h-8"
        ></img>
        <p className='hidden md:block'>Source code</p>
      </a>
    </div>
  </nav>
);