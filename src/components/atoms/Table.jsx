import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.table`
  margin: 0 auto;
  padding: 16px;
  position: relative;
  &::after,
  ::before {
    position: absolute;
    content: '';
    clip-path: polygon(
      0% 0%,
      0% 100%,
      4% 100%,
      4% 4%,
      100% 4%,
      100% 100%,
      100% 100%,
      100% 100%,
      100% 100%,
      100% 0%
    );
    background-color: var(--main-color);
    width: 50px;
    height: 50px;
  }
  &::after {
    left: 0;
    top: 0;
  }
  &::before {
    right: 0;
    bottom: 0;
    transform: rotate(180deg);
  }
  th {
    color: #333;
    font-size: 1.5rem;
    padding-bottom: 2rem;
  }
  td {
    font-weight: bold;
    color: var(--main-color);
    font-size: 1rem;
    padding: 0.8rem;
    text-transform: uppercase;
    text-align: center;
  }
  @media (min-width: 576px) {
    padding: 30px;
    td {
      font-size: 1.3rem;
      padding: 1.5rem;
    }
  }
`;

const Table = () => {
  return (
    <Wrapper>
      <thead>
        <tr>
          <th colSpan='2'>Więcej ➡ Taniej</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1 X 60 MINUT </td>
          <td>Inwestycja 90zł</td>
        </tr>
        <tr>
          <td>4 X 60 MINUT </td>
          <td>Inwestycja 320zł</td>
        </tr>
        <tr>
          <td>8 X 60 MINUT </td>
          <td>Inwestycja 600zł</td>
        </tr>
      </tbody>
    </Wrapper>
  );
};

export default Table;
