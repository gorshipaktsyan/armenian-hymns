import { Box } from '@mui/material';

import { setLetter } from '../../../redux/slice/alphabeticalSlice';
import { AppDispatch } from '../../../redux/store';
import { LanguageTypes } from '../../../types';

import AlphabeticalStyledComponents from './styles';

interface Alphabet {
  dispatch: AppDispatch;
  language: LanguageTypes;
}

const { StyledAlphabet, StyledLetter } = AlphabeticalStyledComponents;

function Alphabet({ dispatch, language }: Alphabet) {
  function handleClick(letter: string): void {
    dispatch(setLetter(letter));
  }

  return (
    <Box sx={{ maxWidth: '250px' }}>
      <StyledAlphabet>
        {language.alphabeticalIndex.alphabet.map((letter, index) => (
          <StyledLetter key={index} onClick={() => handleClick(letter)}>
            {letter}
          </StyledLetter>
        ))}
      </StyledAlphabet>
    </Box>
  );
}

export default Alphabet;
