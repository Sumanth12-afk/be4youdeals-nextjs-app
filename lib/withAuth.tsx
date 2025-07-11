// lib/withAuth.tsx
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent: any) => {
  return function ProtectedPage(props: any) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          router.push("/login");
        } else {
          setLoading(false);
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (loading) return <p className="text-center p-10">Loading...</p>;

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
