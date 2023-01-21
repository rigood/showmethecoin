import styled from "styled-components";

const LoadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  h1 {
    margin-bottom: 2.4rem;
    font-size: 4.8rem;
    font-weight: bold;
  }
  p {
    font-size: 2.4rem;
  }
`;
function Loading() {
  return (
    <LoadingBlock>
      <h1>로딩중...</h1>
      <p>잠시만 기다려주세요.</p>
    </LoadingBlock>
  );
}

export default Loading;
