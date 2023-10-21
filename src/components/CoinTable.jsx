import styled from "styled-components";
import Coin from "./Coin";

const ColGroup = () => {
  return (
    <colgroup>
      <col width="5%" />
      <col width="8%" />
      <col width="37%" />
      <col width="20%" />
      <col width="15%" />
      <col width="20%" />
    </colgroup>
  );
};

const CoinTable = ({ coins, addBookmark }) => {
  return (
    <CoinTableBlock>
      <TableHead>
        <ColGroup />
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
      </TableHead>
      <TableBodyWrapper>
        <TableBody>
          <ColGroup />
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id}>
                <Coin coin={coin} addBookmark={addBookmark} />
              </tr>
            ))}
          </tbody>
        </TableBody>
      </TableBodyWrapper>
    </CoinTableBlock>
  );
};

export default CoinTable;

const CoinTableBlock = styled.div`
  height: calc(100% - 64px);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem 1rem 1rem 2rem;
`;

const TableHead = styled.table`
  font-weight: 700;
`;

const TableBodyWrapper = styled.div`
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #ddd;
  }
`;

const TableBody = styled.table`
  width: 100%;
`;
