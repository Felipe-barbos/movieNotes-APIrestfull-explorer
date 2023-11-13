import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`

width: 100%;


  > header {
  width: 100%;
  height: 14.4rem;

  background-color: ${({ theme }) => theme.COLORS.PINK_300};
  display: flex;

  align-items: center;

  padding: 0 12.4rem;

    svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2.4rem;
  }
}
`;


export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  > div:nth-child(4){

  margin-top: 2.4rem;

  }
`;


export const Avatar = styled.div`

position: relative;
margin: -12.4rem auto 3.2rem;
width: 18.6rem;
height: 18.6rem;
 

  > img {
  width: 18.6rem;
  height: 18.6rem;
  border-radius: 50%;
  }

  > label {
  width: 4.8rem;
  height: 4.8rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  bottom: .7rem;
  right: .7rem;

  cursor: pointer;
}

    input{
    display: none;
  }

    svg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`;

export const GoHome = styled(Link)`
  display: flex;
  align-items: center;
  gap: .3rem;
  color: ${({ theme }) => theme.COLORS.PINK};
  cursor: pointer;

  
`;