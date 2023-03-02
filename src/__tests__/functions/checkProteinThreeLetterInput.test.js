import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { checkProteinThreeLetterInput } from '../../functions/checkProteinThreeLetterInput';

// tbj-tab for test block

describe('validate  that protein is in three letter input format', () => {
test('checkProteinThreeLetterInput should throw an error if any characters other than 20 natural three letter codes present', () => {
  //setup
  const proteinError1 = 'MILDTDYITEDGKZPVIRIFKKENGEFKIDYDRNFEPZYIYALLKDDSAIEDVKKITAERHGT';
  const proteinError2 = 'TAAAAAAA7AAATAAAAAAAAAA';
  const proteinError3 = 'xyz';
  //expected
  
  //test
    expect(checkProteinThreeLetterInput(proteinError1)).toContain(
    'Non-amino acid character entered, please enter only 20 natural residues in three letter format.'
    );
    expect(checkProteinThreeLetterInput(proteinError2)).toContain(
      'Non-amino acid character entered, please enter only 20 natural residues in three letter format.'
      );
      expect(checkProteinThreeLetterInput(proteinError3)).toContain(
        'Non-amino acid character entered, please enter only 20 natural residues in three letter format.'
        );
      });

test('checkProteinThreeLetterInput should return exact input if no error', () => {
  //setup
  const protein1 = 'LeuGluGluArgGlnLysValLysLysLysMet';
  const protein2 = 'LysTyrGluValProProGluLysLeuValIleTyrGluGlnIleThrArgAspLeuLysAspTyrLysAlaThrGlyProHisValAlaValAlaLysArgLeuAlaAlaArgGlyIleLysIleArgProGlyThrValIleSerTyrIleValLeuLysGlySerGlyArgIleGlyAsp';
  const protein3 =
    'ArgProIleGluValTrpLysLeuTyrPheThrHisProGlnAspValProAlaIleArgAspLysIleLysGluHisProAlaValValAspIleTyrGluTyrAspIleProPheAlaLysArgTyrLeuIleAspLysGlyLeuIleProMetGluGlyAspGluGluLeuLysMetLeuAlaPheAspIleGluThrLeuTyrHisGluGlyGluGluPheAlaGluGlyProIleLeuMetIleSerTyrAlaAspGluGluGlyAlaArgValIleThrTrpLysAsnIleAspLeuProTyrValAspValValSerThrGluLysGluMetIleLysArgPheLeuLysValValLysGluLysAspProAspValLeuIleThrTyrAsnGlyAspAsnPheAspPheAlaTyrLeuLysLysArgSerGluLysLeuGlyValLysPheIleLeuGlyArgGluGlySerGluProLysIleGlnArgMetGlyAspArgPheAlaValGluValLysGlyArgIleHisPheAspLeuTyrProValIleArgArgThrIleAsnLeuProThrTyrThrLeuGluAlaValTyrGluAlaIlePheGlyGlnProLysGluLysValTyrAlaGluGluIleAlaGlnAlaTrpGluThrGlyGluGlyLeuGluArgValAlaArgTyrSerMetGluAspAlaLysValThrTyrGluLeuGlyLysGluPhePheProMetGluAlaGlnLeuSerArgLeuValGlyGlnSerLeuTrpAspValSerArgSerSerThrGlyAsnLeuValGluTrpPheLeuLeuArgLysAlaTyrGluArgAsnGluLeuAlaProAsnLysProAspGluArgGluLeuAlaArgArgArgGluSerTyrAlaGlyGlyTyrValLysGluProGluArgGlyLeuTrpGluAsnIle';
  const protein4 = 'LysLysLysLysLysLysLysLysLysLysLysLys';

  //test
  expect(checkProteinThreeLetterInput(protein1)).toBe(protein1);
  expect(checkProteinThreeLetterInput(protein2)).toBe(protein2);
  expect(checkProteinThreeLetterInput(protein3)).toBe(protein3);
  expect(checkProteinThreeLetterInput(protein4)).toBe(protein4);
});


});
