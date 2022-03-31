import styled from 'styled-components'

const S = {
    Container: styled.div`
      padding: 0 2rem;
    `,
    Main: styled.div`
      min-height: 100vh;
      padding: 4rem 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    Grid: styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 800px;
    `,
    Card: styled.div`
      margin: 1rem;
      padding: 1.5rem;
      text-align: left;
      color: inherit;
      text-decoration: none;
      border: 1px solid #eaeaea;
      border-radius: 10px;
      transition: color 0.15s ease, border-color 0.15s ease;
      max-width: 300px;
      cursor: pointer;
    `,

    Input: styled.input`
      padding: 1rem;
    `
}

export default S