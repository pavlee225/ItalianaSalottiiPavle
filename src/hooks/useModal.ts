import { useCallback, useState } from 'react';

const useModal = () => {
  const [isOpen, setOpen] = useState(false);
  const closeModal = useCallback(() => setOpen(false), []);
  const openModal = useCallback(() => setOpen(true), []);

  return { isOpen, closeModal, openModal };
}

export default useModal;

// export default () => {
//   const [isOpen, setOpen] = useState(false);
//   const closeModal = useCallback(() => setOpen(false), []);
//   const openModal = useCallback(() => setOpen(true), []);

//   return { isOpen, closeModal, openModal };
// };
