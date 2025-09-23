import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function GadgetsIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to page 1
    router.replace('/gadgets/page/1');
  }, [router]);

  return (
    <Head>
      <title>Gadgets - Vibrics Deals</title>
      <meta name="description" content="Discover amazing gadgets and tech accessories at great prices" />
    </Head>
  );
}
