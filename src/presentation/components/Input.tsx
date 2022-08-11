/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { InputHTMLAttributes, useEffect, useState } from "react";
import styled from "styled-components";
import { IconClose, IconSearch } from "./Icons";

type Props = {
  value: string;
  onClear: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ value, onClear, ...rest }: Props) {
  const [isFocused, setFocused] = useState(false);
  const [isFilled, setFilled] = useState(false);

  useEffect(() => {
    if (value === "") {
      setFilled(false);
    } else {
      setFilled(true);
    }
  }, [value]);

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      <IconSearch size={20} />
      <input
        placeholder="Procurar"
        type="text"
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        value={value}
        {...rest}
      />
      {isFilled && (
        <IconClose data-testid="icon-close" size={20} onClick={onClear} />
      )}
    </Container>
  );
}

type ContainerProps = {
  isFocused: boolean;
  isFilled: boolean;
};

const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;
  height: 4.2rem;
  padding: 0.4rem;
  background: ${({ theme }) => theme.colors.black.white};
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.black.lightGray};
  display: flex;
  align-items: center;

  > svg {
    fill: ${({ theme }) => theme.colors.black.mediumGray};
    position: absolute;
    left: ${({ isFocused, isFilled }) =>
      isFocused || isFilled ? "4px" : "calc(50% - 58px)"};
    transition: all 0.4s;
  }

  svg:last-child {
    position: absolute;
    left: calc(100% - 24px);
    cursor: pointer;
  }

  input {
    flex: 1;
    width: 100%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.black.mediumGray};
    outline: none;
    border: none;
    background: transparent;
    text-align: ${({ isFocused, isFilled }) =>
      isFocused || isFilled ? "left" : "center"};
    padding-left: ${({ isFocused, isFilled }) =>
      isFocused || isFilled ? "24px" : "0"};
    transition: all 0.2s;
  }
`;
