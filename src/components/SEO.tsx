import * as React from "react";
import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      <title>Art Monkey Creative Studio | Projektowanie wnętrz i mebli</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Art Monkey Creative Studio, to pracownia projektowa działająca w obszarze projektowania wnętrz oraz mebli i małej architektury."
      />
      <meta name="author" content="Art Monkey Creative Studio" />
      <meta
        property="og:image"
        content="https://images.ctfassets.net/1ebvt041pe6t/1fAOPWNDsd2oayrxcjObFg/229f41a7d7f634a7a431c58782f335b2/logo_1.png"
      />
      <meta
        name="facebook-domain-verification"
        content="6yjwr3a9q2q4l5hpqe9v6ras7dwae2"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href="https://assets.ctfassets.net/1ebvt041pe6t/4qJ2O0DUgzxyiIe5FJjSKj/edb3ee5ca9f5272f97bcfb79dd42cc71/favicon.ico"
      />
    </Head>
  );
}
