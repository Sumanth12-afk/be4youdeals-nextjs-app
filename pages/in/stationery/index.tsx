import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndiaStationeryIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to page 1
    router.replace('/in/stationery/page/1');
  }, [router]);

  return null;
}
