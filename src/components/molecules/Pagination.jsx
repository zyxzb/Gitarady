import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { MdNavigateBefore } from 'react-icons/md';
import { useGitaradyContext } from '../../context/context';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;

  svg,
  button {
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
  svg {
    width: 35px;
    height: 45px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    width: 2rem;
    height: 2rem;
    border: 1px solid var(--main-color);
    background-color: transparent;
    color: var(--main-color);
    &.active {
      background-color: var(--main-color);
      border: none;
      color: var(--bgc-color);
    }
  }
`;

const Pagination = () => {
  const { currentPage, setCurrentPage, pages } = useGitaradyContext();

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(pages.length);
    }
  };
  const nextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(pages[0]);
    }
  };
  return (
    <Wrapper>
      <MdNavigateBefore onClick={prevPage} />
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? 'active' : null}
          >
            {page}
          </button>
        );
      })}
      <MdNavigateNext onClick={nextPage} />
    </Wrapper>
  );
};

export default Pagination;
