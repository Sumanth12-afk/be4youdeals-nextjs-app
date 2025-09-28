import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndiaLaptopsIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to page 1
    router.replace('/in/laptops/page/1');
  }, [router]);

  return null;
}
