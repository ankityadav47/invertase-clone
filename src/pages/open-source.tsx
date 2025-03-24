import Head from 'next/head';
import Header from '@/components/Header';
import OpenSourceHero from '@/components/OpenSourceHero';
import OpenSourceProjects from '@/components/OpenSourceProjects';
import Footer from '@/components/Footer';

export default function OpenSource() {
  return (
    <>
      <Head>
        <title>Open Source - Invertase</title>
        <meta name="description" content="Empowering developers through open source. Explore our open source projects for Firebase, Flutter, React Native and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <OpenSourceHero />
        <OpenSourceProjects />
      </main>
      <Footer />
    </>
  );
}
