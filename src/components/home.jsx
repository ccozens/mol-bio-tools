import { AnalyseProtein } from './analyseProtein';
import { Translate } from './translate';
import { ReformatProtein } from './reformatProtein';
import { AnalyseDNA } from './analyseDNA';
import { Transcribe } from './transcribe';
import { ReverseComplementDNA } from './reverse-complement';

export const Home = () => {
  return (
    <>
      <AnalyseProtein />
      <Translate />
      <ReformatProtein />
      <AnalyseDNA />
      <Transcribe />
      <ReverseComplementDNA />
    </>
  );
};
