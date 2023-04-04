import Head from "next/head";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb 2.0</title>
      </Head>

      <Header />
      {/* Banner */}
      <Banner />
    </div>
  );
}
