import styled from "styled-components";
import CoinBackground from "../assets/images/coin.jpg";

const Aside = () => {
  return (
    <Wrapper>
      <Gradient />
      <Text>
        <Title>Show me the Coin !</Title>
        <Desc>
          Coinpaprika API를 이용하여
          <br />
          최신 암호화폐 정보를 조회합니다.
        </Desc>
      </Text>
    </Wrapper>
  );
};

export default Aside;

const Wrapper = styled.aside`
  width: 32%;
  height: 100%;
  background-image: url(${CoinBackground});
  background-size: cover;
  position: relative;
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

const Text = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 3.6rem;
`;

const Title = styled.h1`
  margin-bottom: 1.6rem;
  font-size: 3.2rem;
  font-weight: 700;
  color: rgba(201, 166, 102, 0.7);
`;

const Desc = styled.p`
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: rgba(255, 255, 255, 0.5);
`;
