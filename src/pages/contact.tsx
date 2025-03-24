import Head from 'next/head';
import Header from '@/components/Header';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Invertase</title>
        <meta name="description" content="Get in touch with Invertase. We're here to answer your questions about Firebase and app development services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
