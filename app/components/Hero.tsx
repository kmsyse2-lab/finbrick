import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <h1>
        핀브릭
        <br />
        모의투자의 시작
      </h1>

      <p>
        실제 시장 데이터를 기반으로
        <br />
        투자 실력을 겨루는 공간
      </p>

      <Link
        href="/trade"
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <button>💰 투자 시작하기</button>
      </Link>
    </section>
  );
}