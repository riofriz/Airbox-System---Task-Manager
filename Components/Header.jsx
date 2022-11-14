import React from 'react';
import { PropTypes } from 'prop-types';
import Link from 'next/link';
import Head from 'next/head';

export default function Header({ title }) {
  return (
    <>
      <Head>
        <title>
          Airbox Systems -
          {' '}
          {title}
        </title>
        <meta name="description" content="Airbox Systems Tasks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <Link href="/" passHref>
          <img src="/logo.svg" alt="logo" />
        </Link>
      </header>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};
