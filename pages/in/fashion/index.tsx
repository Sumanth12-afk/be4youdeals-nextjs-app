import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndiaFashionIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to page 1
    router.replace('/in/fashion/page/1');
  }, [router]);

  return null;
}
