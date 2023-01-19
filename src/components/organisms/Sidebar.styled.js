import styled from 'styled-components';

export const Wrapper = styled.div `
  .sidebar {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bgc-color);
    transform: translate(-100%);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    &.show-sidebar {
      transform: translate(0);
    }
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 0;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    margin-top: 0.2rem;
    svg{
      color: black;
    }
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    li {
      list-style: none;
      a {
        color: black;
        display: block;
        text-align: left;
        font-size: 1.2rem;
        text-transform: uppercase;
        padding: 1rem 1.5rem;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        &.active-link {
          border-bottom: 1px solid var(--main-color);
        }
      }
    }
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;