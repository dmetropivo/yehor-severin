import { createContext, FC, useCallback, useContext, useState } from 'react';
import lockScroll from '../utils/lockScroll';
import ClothesStorePopup from '../UI/popups/ClothesStorePopup/ClothesStorePopup';

const PopupContext = createContext(undefined);

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error(
      '`usePopup()` must be called inside a `PopupProvider` child.',
    );
  }

  return context;
};

const PopupProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [render, setRender] = useState(false);

  const handleOpen = useCallback((type, data) => {
    setRender(true);
    lockScroll.enable();
    setTimeout(() => {
      setOpen(true);
    }, 100);
  }, []);

  const handleClose = useCallback(() => {
    lockScroll.disable();
    setOpen(false);
  }, []);

  return (
    <PopupContext.Provider value={handleOpen}>
      {children}
      {render && <ClothesStorePopup open={open} handleClose={handleClose} />}
    </PopupContext.Provider>
  );
};

export default PopupProvider;
