import styled from "styled-components";
import starYellow from "../assets/icons/starYellow.png";
import starGray from "../assets/icons/starGray.png";

const Coin = ({ coin, addBookmark }) => {
  return (
    <>
      <Td align="center">
        <BookmarkBtn
          type="button"
          onClick={() => addBookmark(coin.id)}
          active={coin.bookmarked}
        />
      </Td>
      <Td align="center">{coin.rank}</Td>
      <Td align="left" className="flexbox">
        <p>{coin.name}</p>
        <p className="coin-symbol">{coin.symbol}/KRW</p>
      </Td>
      <Td align="right">
        {Number(coin.quotes.KRW.price.toFixed(2)).toLocaleString()}원
      </Td>
      <Td
        align="right"
        className={coin.quotes.KRW.percent_change_24h > 0 ? "plus" : "minus"}
      >
        {coin.quotes.KRW.percent_change_24h}%
      </Td>
      <Td align="right">
        {(coin.quotes.KRW.volume_24h / 1000000000000).toFixed(3)}T
      </Td>
    </>
  );
};

export default Coin;

const Td = styled.td`
  padding: 1rem 0;
  text-align: ${({ align }) => align};

  &:last-child {
    padding-right: 2rem;
  }

  &.plus {
    color: #c84a31; // red
  }

  &.minus {
    color: #1261c4; // blue
  }

  &.flexbox {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;

    .coin-symbol {
      font-size: 70%;
      color: #adb5bd;
    }
  }
`;

const BookmarkBtn = styled.button`
  width: 16px;
  height: 16px;
  background: ${({ active }) => `url(${active ? starYellow : starGray})`};
  transition: all 0.15s ease-in-out;

  &:hover {
    background: url(${starYellow});
  }
`;
