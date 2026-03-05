import React, { createContext, useReducer, ReactNode } from 'react';

export interface Book {
  id: string;
  title: string;
  author: string;
  isCheckedOut: boolean;
}

interface State { books: Book[]; }
type Action = { type: 'TOGGLE_CHECKOUT'; payload: string };

const initialState: State = {
  books: [
    { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isCheckedOut: false },
    { id: '2', title: '1984', author: 'George Orwell', isCheckedOut: false },
    { id: '3', title: 'The Hobbit', author: 'J.R.R. Tolkien', isCheckedOut: false },
  ],
};

function bookReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TOGGLE_CHECKOUT':
      return {
        ...state,
        books: state.books.map((b) =>
          b.id === action.payload ? { ...b, isCheckedOut: !b.isCheckedOut } : b
        ),
      };
    default: return state;
  }
}

export const BookContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);
  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};