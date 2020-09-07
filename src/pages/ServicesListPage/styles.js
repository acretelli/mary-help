import styled from 'styled-components';

export const SearchContainer = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const SearchBtn = styled.button `
  margin: 0;
  background-color: #f9ebff;
`

export const Input = styled.input `
  flex: 1;
`

export const CategoriesContainer = styled.div `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
`

export const Categories = styled.div `
  width: calc(100%/2 - 16px);
  max-width: 400px;
  padding: 16px;
  margin: 8px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px rgba(50, 50, 50, 0.5);
  text-align: center;
  font-weight: 700;
  color: #8130a2;
  cursor: pointer;
`

export const TextSmall = styled.p `
  width: 100%;
  margin-bottom: 24px;
  font-size: 0.9rem;
  color: #828282;
`