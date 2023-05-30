import React, { useEffect } from 'react';

function useLocalStorage(itemName, initialItemValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialItemValue })
  );
  const { error, sincronizedItem, loading, item } = state;

  // ACTION CREATORS

  const onError = (error) => {
    dispatch({ type: actionTypes.error, payload: error });
  };

  const onSuccess = (item) => {
    dispatch({ type: actionTypes.success, payload: item });
  };

  const onSave = (item) => {
    dispatch({ type: actionTypes.save, payload: item });
  };

  const onSincronize = () => {
    dispatch({ type: actionTypes.sincronize });
  };

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

        onSuccess(parsedItem);
        // setItem(parsedItem);
        // setLoading(false);
        // setSincronizedItem(true);
      } catch (error) {
        onError(error);
      }
    }, 200);
  }, [sincronizedItem]);

  /* function that help us to save the item at the state and also localStorage */
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronize();
  };

  /* we return the item that is the main thing that we wont save on localStorage, and saveItem, the function to actualize the state and localStorage */
  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

const initialState = ({ initialItemValue }) => ({
  error: false,
  sincronizedItem: true,
  loading: true,
  item: initialItemValue,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.error:
      return {
        ...state,
        error: true,
      };

    case actionTypes.success:
      return {
        ...state,
        error: false,
        loading: false,
        sincronizedItem: true,
        item: action.payload,
      };

    case actionTypes.save:
      return {
        ...state,
        item: action.payload,
      };

    case actionTypes.sincronize:
      return {
        ...state,
        Loading: true,
        sincronizedItem: false,
      };

    default:
      break;
  }
};

export { useLocalStorage };
