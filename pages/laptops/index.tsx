import { useEffect } from "react";
import { useRouter } from "next/router";

export default function LaptopsIndex() {
  const router = useRouter();
  useEffect(() => {
    router.push("/laptops/page/1");
  }, [router]);
  return null;
}
