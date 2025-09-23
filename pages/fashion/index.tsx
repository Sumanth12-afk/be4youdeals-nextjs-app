import { useEffect } from "react";
import { useRouter } from "next/router";

export default function FashionIndex() {
  const router = useRouter();
  useEffect(() => {
    router.push("/fashion/page/1");
  }, [router]);
  return null;
}
