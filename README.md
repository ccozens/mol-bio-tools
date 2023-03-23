| [ ![ Netlify Status ]( https://api.netlify.com/api/v1/badges/07a61939-b9e7-4e24-8d5a-f4ea2a1fd382/deploy-status ) ]( https://app.netlify.com/sites/creative-cocada-575991/deploys ) | [ ![ Build and test ]( https://github.com/ccozens/mol-bio-tools/workflows/Build%20and%20Test%20React%20Application/badge.svg ) ]( https://github.com/ccozens/mol-bio-tools/actions ) | [![codecov](https://codecov.io/gh/ccozens/mol-bio-tools/branch/main/graph/badge.svg?token=5XMBKKENT0)](https://codecov.io/gh/ccozens/mol-bio-tools) |
|:-:|:-:|:-:|

# Welcome to molbiotools
### &emsp;[Live site here](https://creative-cocada-575991.netlify.app/)


<p style="text-align: center;">
<hr />
<h4>23rd March 2023: update complete </h4>
I regard this repo and site as deprecated. Please head over to [astro-mol-bio-tools](https://github.com/ccozens/astro-mol-bio-tools) for the new version.

<hr />
<h4>1st March 2023: updating begun</h4>  
I'm just starting a 4-stage revamp:   <br>
1. remove duplication   <br>
2. modularise - ensure I have separate computation and display components   <br>
** during modularise, I realise I need to add proper state management to fix some of the workarounds I implemented when I built. Given points 3 and 4, a rebuild with redux or similar baked in from the outset seems most sensible **   <br>
3. migrate to TypeScript   <br>
4. migrate to something other than CRA (likely Vite / astro / NextJS).   <br>

I'm also keen to add some API functionality regarding getting proteins from / sending searches to UniPROT / BLAST.
<hr />
</p>

This repo is what happens when a molecular biologist learns web development - you start building some tools you wish you'd been able to use for the last decade or so.  This was my first website, build with React (CRA), JavaScript and Tailwind. On my todo is a significant refactor as its really not DRY, and I'd prefer it in TS. None of that impacts functionality for any molecular biologists out there.


## General features
In part, this is *another* molecular biology tooling site. That said, I've built in a range of features that I've wanted for ages and never found, for example:

- no submit buttons, no changing page: enter your DNA/protein and analysis appears right next to it, in real time.
- new line characters automatically removed, so multi-line entries get parsed as a single string. I have spent years removing line breaks from [UniProt](https://www.uniprot.org/) / [NCBI entrez gene](https://www.ncbi.nlm.nih.gov/gene) to analyse them and it drove me nuts.
- it tells you where incorrect characters are. A few Ns in the middle of your DNA? The error message will tell you where to look.
- input boxes clear demo content on first click, and from then you can edit the content as you see fit.
- output boxes can be highlighted and copied from. Scroll bars will appear if necessary.
 


## Tools available
### [Analyse protein](https://creative-cocada-575991.netlify.app/#Analyse%20protein)
Enter protein into the box, parameters (length, MW, extinction coefficient and A280) display.

### [Translate DNA to protein](https://creative-cocada-575991.netlify.app/#Translate%20protein)
Enter DNA in box, translated protein appears next to it. There are toggles to show output in 1 (MILD...) or 3 (MetIleLeuAsp...) letter code, and for a range of spacers. Again, parameters (length, MW, extinction coefficient and A280) print out in real time.

### [Reformat protein](https://creative-cocada-575991.netlify.app/#Reformat%20protein)
Enter three letter protein (MetIleLeuAsp...) and it converts to single letter (MILD).
This is here as I only wrote the analysis logic for single letter proteins, thoguh

### [Transcribe DNA to RNA](https://creative-cocada-575991.netlify.app/#Transcribe)
Basically, changes T -> U. 

### [Reverse complement DNA](https://creative-cocada-575991.netlify.app/#Reverse%20complement)
Returns reverse complement of your strand (ATGCAA -> TTGCAT).


## Questions / comments
Please get in touch with feedback / requests. This was my first JS project, so I'd love feedback, and I want it to be useful, so happy to add featues. I've a list of possibles, so do let me know if there are any I could prioritise / you'd like to help you (however you like - via Github, [email](mailto:officechrisgarden@gmail.com), [LinkedIn](https://www.linkedin.com/in/chris-cozens-b2883a45/)). Also, do get in touch with problems/typos. 

- primer analysis
	- melting temp calculator
	- GC content
- BLAST integration
- RNA shape integration
- further protein parameters
	- other features
	- print out table of AA content
- DNA parameters
	- gene length / GC content

## Todo

- add text export feature for caclulated parameters
- add file import, eg:
	- [React dropzone](https://blog.logrocket.com/create-drag-and-drop-component-react-dropzone/) 
	- [HTML5 drag and drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
	- [HTML FileReader API](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
	- [Load data from static file NextJS](https://vercel.com/guides/loading-static-file-nextjs-api-route)

## Technical details
This was all written on VSCode in React/JS.
Tests are written with [jest](https://jestjs.io/) and [React testing library](https://testing-library.com/docs/react-testing-library/intro/) and [jest-dom](https://github.com/testing-library/jest-dom). Its hosted on netlify, deployed directly from this github repo.
The favicon is from [svgrepo](https://www.pngrepo.com/svg/51923/dna), and I followed [these instructions](https://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them/ ) on using svg as favicon.
I've a plan to refactor this substantially, as I learned to much doing it that I'd set about it differently (and with much more order) if I started again (probably in Typescript). However, for now I'm moving on to other things as I'd prefer to ship something that works, get some user feedback, and work on another project before returning to this one.


### What is the protein?
If anybody is wondering, the demo protein is Tgo, a thermophillic DNA polymerase I worked on for most of my 10 year academic career. [This paper](https://www.pnas.org/doi/abs/10.1073/pnas.1120964109) is my PhD work - it was accepted just after I'd submitted my thesis.
