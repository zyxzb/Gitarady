import React, { useState, useContext, useReducer } from 'react';
import global_reducer from '../reducers/glogal_reducer';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../utils/actions';

const initialState = {
  isSidebarOpen: false,
};

const GitaradyContext = React.createContext();

export const GitaradyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(global_reducer, initialState);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState([]);
  const articlesPerPage = 5;
  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;
  const currentArticles = totalArticles.slice(
    firstArticleIndex,
    lastArticleIndex
  );

  // SIDEBAR

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalArticles.length / articlesPerPage); i++) {
    pages.push(i);
  }

  return (
    <GitaradyContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        setCurrentPage,
        setTotalArticles,
        currentPage,
        totalArticles,
        currentArticles,
        pages,
      }}
    >
      {children}
    </GitaradyContext.Provider>
  );
};

export const useGitaradyContext = () => {
  return useContext(GitaradyContext);
};
