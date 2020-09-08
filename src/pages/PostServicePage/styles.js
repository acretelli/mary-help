import styled from 'styled-components';

export const NewPostInput = styled.input `
  margin: 8px 0;
  padding: 8px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 2px rgba(50, 50, 50, 0.5);
`

export const NewPostTextArea = styled.textarea `
  width: calc(100% - 32px);
  min-height: 80px;
  margin: 40px 0 8px 0;
  padding: 8px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 2px rgba(50, 50, 50, 0.5);
`

export const RadioContainer = styled.div`
    width: calc(100% - 32px);
    max-width: 400px;
    margin: 0 auto;
    padding: 12px;
    border: none;
    border-radius: 8px;
    box-shadow: none;
    display: flex;
    align-items:center;
    justify-content: center;
`

export const InputRadio = styled.input`
    width: 20px;
    border: none;
    box-shadow: none;
`

export const Message = styled.h4`
    width: 100%;
    margin: 24px auto;
`