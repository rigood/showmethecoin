import styled, { css } from "styled-components";
import starFill from "../starFill.png";
import starNotFill from "../starNotFill.png";

const CoinTableBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 64px);
  padding: 2rem 1rem 1rem 2rem;
  .head-table {
    margin-bottom: 1rem;
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 10px 24px; */
    thead {
      background-color: white;
      font-weight: bold;
      th {
        padding-bottom: 1rem;
      }
    }
  }
  .data-table-wrapper {
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #ddd;
    }
    .data-table {
      width: 100%;
      td {
        padding: 1rem 0;
      }
      td:last-child {
        padding-right: 2rem;
      }
      button {
        padding: 0;
        border: none;
        background: transparent;
        cursor: pointer;
      }
      .symbol {
        margin-top: 0.5rem;
        font-size: 70%;
        color: #adb5bd; // lightgray
      }
      .plus {
        color: #c84a31; // red
      }
      .minus {
        color: #1261c4; // blue
      }
    }
  }
`;

function CoinTable({ coins, addBookmark }) {
  return (
    <CoinTableBlock>
      <table className="head-table">
        <colgroup>
          <col width="5%" />
          <col width="8%" />
          <col width="37%" />
          <col width="20%" />
          <col width="15%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th>관심</th>
            <th>순위</th>
            <th>코인명</th>
            <th>현재가</th>
            <th>변동률(24h)</th>
            <th>거래대금</th>
          </tr>
        </thead>
      </table>
      <div className="data-table-wrapper">
        <table className="data-table">
          <colgroup>
            <col width="5%" />
            <col width="8%" />
            <col width="37%" />
            <col width="20%" />
            <col width="15%" />
            <col width="20%" />
          </colgroup>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id}>
                {/* 즐겨찾기 */}
                <td align="center">
                  <button onClick={() => addBookmark(coin.id)}>{coin.bookmark ? <img src={starFill} /> : <img src={starNotFill} />}</button>
                </td>
                {/* 순위 */}
                <td align="center">{coin.rank}</td>
                {/* 이름 */}
                <td align="left">
                  <p>{coin.name}</p>
                  <p className="symbol">{coin.symbol}/KRW</p>
                </td>
                {/* 가격 */}
                <td align="right">{Number(coin.quotes.KRW.price.toFixed(2)).toLocaleString()}원</td>
                {/* 변동률 (+, - 색상 적용) */}
                {coin.quotes.KRW.percent_change_24h > 0 ? (
                  <td align="right" className="plus">
                    {coin.quotes.KRW.percent_change_24h}%
                  </td>
                ) : (
                  <td align="right" className="minus">
                    {coin.quotes.KRW.percent_change_24h}%
                  </td>
                )}
                <td align="right"> {(coin.quotes.KRW.volume_24h / 1000000000000).toFixed(3)}T</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CoinTableBlock>
  );
}

export default CoinTable;
// coin.quotes.KRW.percent_change_24h
