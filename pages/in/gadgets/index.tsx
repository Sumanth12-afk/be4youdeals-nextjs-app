import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndiaGadgetsIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to page 1
    router.replace('/in/gadgets/page/1');
  }, [router]);

  return null;
}
