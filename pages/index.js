import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport"
              content="width=device-width, initial-scale=1.0"
        />

        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <meta name="description"
              content={process.env.NEXT_PUBLIC_DESCRIPTION}
        />

        <meta name="description"
              content={process.env.NEXT_PUBLIC_DESCRIPTION}
        />

        <meta property="og:url"
              content={process.env.NEXT_PUBLIC_URL}
        />
        <meta property="og:type"
              content="website"
        />
        <meta property="og:title"
              content={process.env.NEXT_PUBLIC_TITLE}
        />
        <meta property="og:description"
              content={process.env.NEXT_PUBLIC_DESCRIPTION}
        />
        <meta property="og:image"
              content={process.env.NEXT_PUBLIC_OG_IMAGE}
        />

        <meta name="twitter:card"
              content="summary_large_image"
        />
        <meta property="twitter:url"
              content={process.env.NEXT_PUBLIC_URL}
        />
        <meta name="twitter:title"
              content={process.env.NEXT_PUBLIC_TITLE}
        />
        <meta name="twitter:description"
              content={process.env.NEXT_PUBLIC_DESCRIPTION}
        />
        <meta name="twitter:image"
              content={process.env.NEXT_PUBLIC_OG_IMAGE}
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>

      <main>
      </main>
    </>
  )
}
