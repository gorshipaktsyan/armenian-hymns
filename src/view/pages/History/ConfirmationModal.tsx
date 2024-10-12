import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';

import { setIsConfirmOpen } from '../../../redux/slice/historySlice';
import { AppDispatch } from '../../../redux/store';
import { LanguageTypes } from '../../../types';

interface ConfirmModal {
  handleClearHistory: () => void;
  dispatch: AppDispatch;
  isConfirmOpen: boolean;
  language: LanguageTypes;
}
export default function ConfirmModal({
  handleClearHistory,
  dispatch,
  isConfirmOpen,
  language
}: ConfirmModal) {
  return (
    <Dialog open={isConfirmOpen} onClose={() => dispatch(setIsConfirmOpen(false))}>
      <DialogContent>
        <DialogContentText sx={{ color: 'black' }}>{language.history.dialog}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => dispatch(setIsConfirmOpen(false))}>
          {language.history.no}
        </Button>
        <Button onClick={handleClearHistory} autoFocus>
          {language.history.yes}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
