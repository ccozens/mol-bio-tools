import { Analyse } from './analyse';
import { Translate } from './translate';
import { ReformatProtein } from './reformatProtein'
import { Transcribe } from './transcribe';
import { ReverseComplementDNA } from './reverse-complement';


export const Home = () => {

    return(
        <>
        
          < Analyse />
          < Translate />
          < ReformatProtein />
            < Transcribe />
            < ReverseComplementDNA />
        </>
    )
}


/*
  < Navbar />
            < Analyse />
            < Translate />
            < ReformatProtein />
            < Transcribe />
            < ReverseComplementDNA />*/