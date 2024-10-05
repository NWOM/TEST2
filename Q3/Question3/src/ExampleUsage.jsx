import React from 'react';
import useFetch from './useFetch';

const ExampleUsage = () => {
  const { data, error, loading } = useFetch('https://in.tradingview.com/chart/?symbol=BITSTAMP%3ABTCUSD', {
    mode: 'no-cors',
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Data: {data}</div>;
};

export default ExampleUsage;