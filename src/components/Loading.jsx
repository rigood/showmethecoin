import styled from "styled-components";
import Spinner from "../assets/images/spinner.gif";

const Loading = () => {
  return <Loader src={Spinner} alt="로딩중" />;
};

export default Loading;

const Loader = styled.img`
  display: block;
  margin: 200px auto 0;
`;
