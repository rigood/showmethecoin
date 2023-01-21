import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import CoinTemplate from "./components/CoinTemplate";
import CoinList from "./components/CoinList";
import Loading from "./components/Loading";
import searchIcon from "./search.png";

const GlobalStyle = createGlobalStyle`
 ${reset};

 *{
   box-sizing: border-box;
 }

 html{
  font-size: 62.5%; // 1rem = 10px;
 }

 body{
  background-color: #dee2e6;
  font-size: 1.6rem;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
 }

 form{
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  height: 64px;
  padding: 20px 20px 10px 20px;
  text-align: right;
 };
 input{
  width: 300px;
  height: 100%;
  margin-left: 1rem;
  padding: 0rem 12px;
  border: none;
  border-radius: 1rem;
  background-color: #f1f3f5;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-size: 1.5rem;
}

 ::placeholder{
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  color: #adb5bd;
 }

 .searchBtn{
  width: 16px;
  height: 16px;
  margin-left: 16px;
  padding: 0;
  border: none;
  background: url(${searchIcon});
}

.starFill{
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.4rem;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  color:  #1261c4;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
 }

 .starFillSelected{
  background-color: #ffd43b;
  color: black;
 }
 .starFill:hover{
  background-color: #ffd43b;
  color: black;
 }
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isBookmark, setIsBookmark] = useState(false);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW&limit=100")
      .then((response) => response.json())
      .then((data) => {
        setCoins(
          data.map((coin) => ({
            ...coin,
            bookmark: false,
          }))
        );
        setIsLoading(false);
      });
  }, []);

  const handleSearchInput = (e) => {
    setKeyword(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(keyword.toLowerCase()));

  const addBookmark = (id) => setCoins(coins.map((coin) => (coin.id === id ? { ...coin, bookmark: !coin.bookmark } : coin)));

  const handleBookmark = (e) => {
    e.preventDefault();
    setIsBookmark(!isBookmark);
  };

  const bookmarkedCoins = coins.filter((coin) => coin.bookmark === true);

  return (
    <>
      <GlobalStyle />
      <CoinTemplate>
        <form>
          {isBookmark ? (
            <button className="starFill starFillSelected" onClick={handleBookmark}>
              관심코인
            </button>
          ) : (
            <button className="starFill" onClick={handleBookmark}>
              관심코인
            </button>
          )}
          <button className="searchBtn"></button>
          <input type="text" placeholder="코인명 검색" value={keyword} onChange={handleSearchInput} />
        </form>
        {isLoading ? <Loading /> : isBookmark ? <CoinList coins={bookmarkedCoins} addBookmark={addBookmark} /> : <CoinList coins={filteredCoins} addBookmark={addBookmark} />}
      </CoinTemplate>
    </>
  );
}

export default App;
