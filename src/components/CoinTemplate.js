import styled from "styled-components";
import Bg from "../coin.jpg";

const CoinTemplateBlock = styled.div`
  overflow: hidden;
  display: flex;
  width: 1280px;
  height: 648px;
  margin: 0 auto;
  margin-top: 96px;
  background-color: white;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  aside {
    position: relative; // 그라디언트 적용을 위해
    width: 32%;
    height: 100%;
    background-image: url(${Bg});
    background-size: contain;
    background-position-y: -100%;
    .gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
      z-index: 1;
    }
    .textWrap {
      position: absolute;
      bottom: 4rem;
      left: 3.6rem;
      z-index: 1;
      h1 {
        margin-bottom: 1.6rem;
        font-size: 3.2rem;
        font-weight: bold;
        color: rgba(201, 166, 102, 0.7);
      }
      p {
        font-size: 1.8rem;
        line-height: 2.4rem;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
  main {
    width: 68%;
    height: 100%;
  }
`;

function CoinTemplate({ children }) {
  return (
    <CoinTemplateBlock>
      <aside>
        <div className="gradient"></div>
        <div className="textWrap">
          <h1>Show me the Coin !</h1>
          <p>
            Coinpaprika 의 API를 이용하여<br></br>최신 암호화폐의 가격을 조회합니다.
          </p>
        </div>
      </aside>
      <main>{children}</main>
    </CoinTemplateBlock>
  );
}

export default CoinTemplate;
