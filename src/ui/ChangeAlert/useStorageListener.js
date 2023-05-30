import { useState } from 'react';

function useStorageListener(sincronize) {
  const [storageChange, setStorageChange] = useState(false);

  window.addEventListener('storage', (change) => {
    if (change.key === 'TODOS_V3') {
      console.log('HUBO CAMBIOS EN TODOS_V3');
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow,
  };
}

export { useStorageListener };
