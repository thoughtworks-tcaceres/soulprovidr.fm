import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

import Head from './head';
import Header from '@/header/Header';

import '@/static/fonts/hk-grotesk/hk-grotesk.css';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: hk-grotesk, sans-serif;
  }

  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: hk-grotesk;
  }

  button {
    font-family: hk-grotesk;
    text-transform: uppercase;
    font-weight: 700 !important;
  }
`;

export default function Layout({ children }) {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
      
  return (
    <>
      <GlobalStyle />
      <Head
        description={siteMetadata.description}
        title={siteMetadata.title}
      />
      <Header />
      {children}
    </>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;