import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const POSTS_API_URL = process.env.REACT_APP_POSTS_API_URL;

const FetchForm = () => {
  const [url, setUrl] = useState(POSTS_API_URL || "");
  const [fetchUrl, setFetchUrl] = useState(null);
  const { data, error, loading } = useFetch(fetchUrl);

  const onChangeUrl = (e) => {
    e.preventDefault();
    setFetchUrl(e.target.value);
    setUrl(e.target.value)
  };

  return (
    <>
      <input
        type="text"
        value={url}
        onChange={(e)=>onChangeUrl(e)}
        placeholder="Enter URL"
      />
      <br />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
};

export default FetchForm;
