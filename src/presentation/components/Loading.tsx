/* eslint-disable no-use-before-define */
import styled from "styled-components";
import media from "styled-media-query";
import podkeball from "../assets/pokeball-loading.svg";

export function Loading() {
  return (
    <Container>
      <Pokeball src={podkeball} alt="loading" />
      <Base />
    </Container>
  );
}

export function LoadingMore() {
  return <LoaderMore />;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  span {
    position: absolute;
    left: 51.5%;
    top: 74.5%;
  }
`;

const Base = styled.div`
  width: 10rem;
  height: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  filter: blur(3px);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 72%;

  ${media.lessThan("medium")`
    width: 6rem;
    left: 42%;
    top: 88%;
  `}
`;

const Pokeball = styled.img`
  width: 10rem;
  height: 10rem;
  position: absolute;
  left: 50%;
  top: 50%;
  animation: ldio-18euhb50d7g 0.8s linear infinite;
  box-sizing: content-box;
  ${media.lessThan("medium")`
    width: 6rem;
    left: 42%;
    top: 52%;
  `}
  @keyframes ldio-18euhb50d7g {
    0%,
    100% {
      animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);
    }
    0% {
      transform: translate(0, 0);
    }
    20% {
      transform: translate(-10px, 0) rotate(-30deg);
    }
    30% {
      transform: translate(10px, 0) rotate(30deg);
    }
    50% {
      transform: translate(0, 108px);
      animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);
    }

    100% {
      transform: translate(0, 0);
    }
  }
`;

const LoaderMore = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #fff;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  ::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-left: 4px solid #ff3d00;
    border-bottom: 4px solid transparent;
    animation: rotation 0.5s linear infinite reverse;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
