import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { checkProteinOneLetterInput } from '../../functions/checkProteinOneLetterInput';

// tbj-tab for test block

describe('validate that protein is in one letter input format', () => {
  test('checkProteinOneLetterInput should throw an error if any characters other thann ARNDCEQGHILKMFPSTWYV present', () => {
    //setup
    const proteinError1 =
      'MILDTDYITEDGKZPVIRIFKKENGEFKIDYDRNFEPZYIYALLKDDSAIEDVKKITAERHGT';
    const proteinError2 = 'TAAAAAAA7AAATAAAAAAAAAA';
    const proteinError3 = 'xyz';
    //expected

    //test
    expect(checkProteinOneLetterInput(proteinError1)).toContain(
      'Non-amino acid character entered, please enter only 20 natural residues.'
    );
    expect(checkProteinOneLetterInput(proteinError2)).toContain(
      'Non-amino acid character entered, please enter only 20 natural residues.'
    );
    expect(checkProteinOneLetterInput(proteinError3)).toContain(
      'Non-amino acid character entered, please enter only 20 natural residues.'
    );
  });

  test('checkProteinOneLetterInput should return exact input if no error', () => {
    //setup
    const protein1 = 'LEERQKVKKKM';
    const protein2 =
      'KYEVPPEKLVIYEQITRDLKDYKATGPHVAVAKRLAARGIKIRPGTVISYIVLKGSGRIGD';
    const protein3 =
      'RPIEVWKLYFTHPQDVPAIRDKIKEHPAVVDIYEYDIPFAKRYLIDKGLIPMEGDEELKMLAFDIETLYHEGEEFAEGPILMISYADEEGARVITWKNIDLPYVDVVSTEKEMIKRFLKVVKEKDPDVLITYNGDNFDFAYLKKRSEKLGVKFILGREGSEPKIQRMGDRFAVEVKGRIHFDLYPVIRRTINLPTYTLEAVYEAIFGQPKEKVYAEEIAQAWETGEGLERVARYSMEDAKVTYELGKEFFPMEAQLSRLVGQSLWDVSRSSTGNLVEWFLLRKAYERNELAPNKPDERELARRRESYAGGYVKEPERGLWENI';
    const protein4 = 'KKKKKKKKKKKKKKKKK';

    //test
    expect(checkProteinOneLetterInput(protein1)).toBe(protein1);
    expect(checkProteinOneLetterInput(protein2)).toBe(protein2);
    expect(checkProteinOneLetterInput(protein3)).toBe(protein3);
    expect(checkProteinOneLetterInput(protein4)).toBe(protein4);
  });

  test('checkProteinOneLetterInput should format to non-gapped uppercase', () => {
    // setup
    const protein1 = 'AAttGgcC';
    const protein2 = 'cacgtacgt';
    const protein3 =
      'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGA\nGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAG\nCTTTGGCGGCAGCTAGGGGAGGAT';

    const exp_protein1 = 'AATTGGCC';
    const exp_protein2 = 'CACGTACGT';
    const exp_protein3 =
      'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';

    //test
    expect(checkProteinOneLetterInput(protein1)).toBe(exp_protein1);
    expect(checkProteinOneLetterInput(protein2)).toBe(exp_protein2);
    expect(checkProteinOneLetterInput(protein3)).toBe(exp_protein3);
  });
});
