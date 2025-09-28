import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndiaHomeEssentialsIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to page 1
    router.replace('/in/home-essentials/page/1');
  }, [router]);

  return null;
}
