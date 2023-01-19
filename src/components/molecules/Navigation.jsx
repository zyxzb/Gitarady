import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { links } from '../../utils/constants';
import Logo from '../atoms/Logo';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { useGitaradyContext } from '../../context/context';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--bgc-color);
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 0;
  border-bottom: 1px solid lightgray;
  .logo-name {
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  ul {
    display: flex;
    width: 400px;
    justify-content: space-between;
    li {
      list-style: none;
      a {
        color: black;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        &.active-link {
          border-bottom: 1px solid var(--main-color);
        }
      }
    }
  }
  .nav-links {
    display: none;
  }
  .nav-text {
    font-size: 11px;
  }
  .nav-toggle {
    background-color: transparent;
    border: none;
    svg {
      cursor: pointer;
      font-size: 2rem;
      color: black;
    }
  }
  @media (min-width: 992px) {
    padding: 0 60px;
    .nav-toggle {
      display: none;
    }
    .nav-links {
      display: flex;
    }
    .nav-text {
      display: block;
      font-size: 20px;
    }
  }
`;

const Navigation = () => {
  const { openSidebar, isSidebarOpen } = useGitaradyContext();

  return (
    <NavContainer>
      <div className='logo-name'>
        <Logo />
        <span className='nav-text'>Gitarady - Nauka Gry na Gitarze</span>
      </div>
      <button
        className='nav-toggle'
        onClick={openSidebar}
        tabIndex={isSidebarOpen ? -1 : null}
        aria-label='otwórz nawigacje'
      >
        <AiOutlineMenuUnfold />
      </button>
      <ul className='nav-links'>
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <Link to={url} activeClassName='active-link'>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </NavContainer>
  );
};

export default Navigation;
