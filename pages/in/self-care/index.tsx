import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndiaSelfCareIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to page 1
    router.replace('/in/self-care/page/1');
  }, [router]);

  return null;
}
