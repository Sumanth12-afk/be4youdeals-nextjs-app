import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndiaMobilesIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to page 1
    router.replace('/in/mobiles/page/1');
  }, [router]);

  return null;
}
