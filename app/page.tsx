import Link from "next/link";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AccountCard from "./components/AccountCard";
import StockCard from "./components/StockCard";
import CryptoCard from "./components/CryptoCard";
import NewsCard from "./components/NewsCard";
import RankingCard from "./components/RankingCard";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <section>
        <AccountCard />
      </section>

      <section>
        <h2 className="section-title">📈 실시간 시장</h2>
        <StockCard />
      </section>

      <section>
        <h2 className="section-title">🪙 암호화폐</h2>
        <CryptoCard />
      </section>

      <section>
        <h2 className="section-title">📰 금융 뉴스</h2>
        <NewsCard />
      </section>

      <section>
        <h2 className="section-title">🏆 투자 대회 랭킹</h2>
        <RankingCard />
      </section>

      <section>
        <h2 className="section-title">💰 모의투자</h2>

        <Link
          href="/trade"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <div className="card">
            <h3>가상 자산으로 투자하기</h3>
            <p>실제 주가 데이터로 매수와 매도를 연습하세요.</p>
          </div>
        </Link>
      </section>

      <section>
        <h2 className="section-title">💬 투자 게시판</h2>

        <Link
          href="/community"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <div className="card">
            <h3>종목 토론 참여하기</h3>
            <p>주식 · 코인 · ETF 투자자들과 의견을 나눠보세요.</p>
          </div>
        </Link>
      </section>
    </main>
  );
}