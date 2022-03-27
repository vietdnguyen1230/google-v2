import React from "react";
import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import { API_KEY, CONTEXT_KEY } from "../keys";
import { useRouter } from "next/router";
import Response from "../Response";
import SearchResults from "../components/SearchResults";

export default function Search({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <SearchHeader />
        <SearchResults results={results} />
      </header>
    </div>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  // Pass back the results
  return {
    props: {
      results: data,
    },
  };
}
