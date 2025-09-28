import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndiaHeadphonesIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to page 1
    router.replace('/in/headphones/page/1');
  }, [router]);

  return null;
}
