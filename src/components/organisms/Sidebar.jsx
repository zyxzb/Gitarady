import React from 'react';
import { links } from '../../utils/constants';
import { Link } from 'gatsby';
import { useGitaradyContext } from '../../context/context';
import { AiOutlineClose } from 'react-icons/ai';
import { Wrapper } from './Sidebar.styled';
import Logo from '../atoms/Logo';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGitaradyContext();
  return (
    <Wrapper>
      <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className='sidebar-header'>
          <div>
            <Logo />
          </div>
          <button
            type='button'
            className='close-btn'
            onClick={closeSidebar}
            tabIndex={isSidebarOpen ? null : '-1'}
            aria-label='zamknij nawigacje'
          >
            <AiOutlineClose />
          </button>
        </div>
        <ul className='links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link
                  to={url}
                  onClick={closeSidebar}
                  activeClassName='active-link'
                  tabIndex={isSidebarOpen ? null : '-1'}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </Wrapper>
  );
};

export default Sidebar;
