import { useState, useEffect } from "react";
import styled from "styled-components";
import Aside from "./components/Aside";
import Loading from "./components/Loading";
import SearchBar from "./components/SearchBar";
import CoinTable from "./components/CoinTable";
import starYellow from "./assets/icons/starYellow.png";
import starGray from "./assets/icons/starGray.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW&limit=100")
      .then((response) => response.json())
      .then((data) => {
        setCoins(
          data.map((coin) => ({
            ...coin,
            bookmarked: false,
          }))
        );
        setIsLoading(false);
      });
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(keyword.toLowerCase())
  );

  const bookmarkedCoins = coins.filter((coin) => coin.bookmarked === true);

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const toggleBookmark = (e) => {
    e.preventDefault();
    setBookmarked(!bookmarked);
  };

  const addBookmark = (id) =>
    setCoins(
      coins.map((coin) =>
        coin.id === id ? { ...coin, bookmarked: !coin.bookmarked } : coin
      )
    );

  return (
    <>
      <Layout>
        <Aside />
        <Main>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <CoinHeader>
                <ToggleBookmarkBtn
                  type="button"
                  onClick={toggleBookmark}
                  active={bookmarked}
                  title="관심코인 모아보기"
                />
                <SearchBar keyword={keyword} handleKeyword={handleKeyword} />
              </CoinHeader>
              <CoinTable
                coins={bookmarked ? bookmarkedCoins : filteredCoins}
                addBookmark={addBookmark}
              />
            </>
          )}
        </Main>
      </Layout>
    </>
  );
}

export default App;

const Layout = styled.div`
  width: 1280px;
  height: 648px;
  margin: 6rem auto 0;
  display: flex;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  overflow: hidden;
`;

const Main = styled.main`
  width: 68%;
  background-color: white;
`;

const CoinHeader = styled.header`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
`;

const ToggleBookmarkBtn = styled.button`
  width: 16px;
  height: 16px;
  background: ${({ active }) => `url(${active ? starYellow : starGray})`};
  transition: all 0.15s ease-in-out;
  position: relative;

  &:hover {
    background: url(${starYellow});
  }

  &::before {
    position: absolute;
    top: -8px;
    right: -8px;
    left: -8px;
    bottom: -8px;
    content: "";
  }
`;
