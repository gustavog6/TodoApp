import React, { useEffect } from "react";

function useLocalStorage(itemName, initialItemValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialItemValue); //state created

  useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItem;
        const localStorageItem = localStorage.getItem(itemName);
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialItemValue));
          parsedItem = initialItemValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  /* function that help us to save the item on the state and also localStorage */
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  /* we return the item that is the main thing that we wont save on localStorage, and saveItem, the function to actualize the state and localStorage */
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };