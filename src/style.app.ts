import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 450px;
    width: 300px;
    padding: 26px;

    gap: 26px;

    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
    border-radius: 12px;

    background-color: transparent;
    color: white;

    input {
      width: 90%;
      height: 64px;
      padding: 12px;

      outline: none;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      border-radius: 12px;

      text-align: center;
      color: black;
    }

    button {
      display: flex;
      justify-content: center;

      background-color: #23c438;

      padding: 18px;
      width: 90%;

      cursor: pointer;
      color: white;

      border-radius: 12px;
    }
  }
`
