import React, { useState, useEffect } from 'react';
import { checkProteinOneLetterInput } from '../scripts/checkProteinOneLetterInput';
import { ProteinChart } from './proteinChart';
import { ComputeExtinctionCoefficients } from '../scripts/computeProteinCoefficients';

const tgo = 'MILDTDYITEDGKPVIRIFKKENGEFKIDYDRNFEPYIYALLKDDSAIEDVKKITAERHGTTVRVVRAEKVKKKFLGRPIEVWKLYFTHPQDVPAIRDKIKEHPAVVDIYEYDIPFAKRYLIDKGLIPMEGDEELKMLAFDIETLYHEGEEFAEGPILMISYADEEGARVITWKNIDLPYVDVVSTEKEMIKRFLKVVKEKDPDVLITYNGDNFDFAYLKKRSEKLGVKFILGREGSEPKIQRMGDRFAVEVKGRIHFDLYPVIRRTINLPTYTLEAVYEAIFGQPKEKVYAEEIAQAWETGEGLERVARYSMEDAKVTYELGKEFFPMEAQLSRLVGQSLWDVSRSSTGNLVEWFLLRKAYERNELAPNKPDERELARRRESYAGGYVKEPERGLWENIVYLDFRSLYPSIIITHNVSPDTLNREGCEEYDVAPQVGHKFCKDFPGFIPSLLGDLLEERQKVKKKMKATIDPIEKKLLDYRQRAIKILANSFYGYYGYAKARWYCKECAESVTAWGRQYIETTIREIEEKFGFKVLYADTDGFFATIPGADAETVKKKAKEFLDYINAKLPGLLELEYEGFYKRGFFVTKKKYAVIDEEDKITTRGLEIVRRDWSEIAKETQARVLEAILKHGDVEEAVRIVKEVTEKLSKYEVPPEKLVIYEQITRDLKDYKATGPHVAVAKRLAARGIKIRPGTVISYIVLKGSGRIGDRAIPFDEFDPAKHKYDAEYYIENQVLPAVERILRAFGYRKEDLRYQKTRQVGLGAWLKPKT';

export const Analyse = () => {

  // control textbox default content and updating
  const [input, setInput] = useState(
    tgo
  );

  const handleTextChange = (event) => {
    setInput(event.target.value);
  };

  // blank input box on first click only
    const [count, setCount] = useState(0);
  const handleClick = (event) => {
    if (count === 0) {
      setInput('');
      setCount(count+1);
    }
  };

  // check input and format protein
  const checkedProtein = checkProteinOneLetterInput(input);
  const [protein, setProtein] = useState(checkedProtein);

  // call setProtein to update protein when checked input, outFormat or spacer changes
  useEffect(() => {
    setProtein(checkedProtein);
  }, [checkedProtein]);

  

  return (
    <div
      className="container gap-4 px-4 py-6 scroll-mt-20 mx-auto text-2xl my-5 bg-orange-300"
      id="Analyse protein">

      <p>Analyse protein</p>
      
      <div className="p-2 text-lg flex ">
        <p >Enter protein here in single letter format (eg MILD) format:</p>
        <a className="mx-auto py-1 px-8 text-sm w-fit border rounded cursor-pointer switch border-slate-600 bg-amber-200/50 hover:amber-200 hover:border-slate-400" href="#Reformat protein">Convert three letter to single letter (MetIleLeuAsp -&gt; MILD) </a>
      </div>
      <div className="h-48 p-2 text-base border rounded border-slate-600 bg-amber-200/50 min-h-16">
        <textarea
          id="inputBox"
          className="w-full h-full p-2 bg-transparent overflow-y-auto"
          value={input}
          onChange={handleTextChange}
          onClick={handleClick}
          type="text"
          aria-label="Protein input form for analysis"
        />
      </div>

      <div className="xl:h-60 p-2 mt-2 text-base border rounded border-slate-600 bg-amber-200/50 min-h-16" 
            aria-label="Protein parameters">
        <p className="text-center text-xl w-full mx-auto">
          Protein parameters
        </p>

        { protein.includes('Non-') === true ? 
                <p className="text-xl text-center" > {protein}</p> : 

        <div className="flex lg:flex-wrap">
          <ProteinChart protein={protein} outFormat={'oneLetter'} />

          <ComputeExtinctionCoefficients
            protein={protein}
            outFormat={'oneLetter'}
            /> 
            </div> 
            }
      </div>
    </div>
  );
};

