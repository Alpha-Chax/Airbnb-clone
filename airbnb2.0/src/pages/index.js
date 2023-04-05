import Head from "next/head";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb 2.0</title>
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {exploreData.map((item) => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://api.jsonserve.com/DSEOzM").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData: exploreData,
    },
  };
}
