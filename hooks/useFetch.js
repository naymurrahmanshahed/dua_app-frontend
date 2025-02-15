"use client";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useFetch = (endpoint) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`,
    fetcher
  );

  const isLoading = !data && !error;

  return { data, error, isLoading };
};

export default useFetch;
