import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Invertase - Firebase & App Development Experts</title>
        <meta name="description" content="Invertase is a team of Firebase & app development experts helping companies build better apps with Flutter, React Native and web technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </>
  );
}
