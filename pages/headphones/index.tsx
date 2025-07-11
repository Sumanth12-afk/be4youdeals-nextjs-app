import { useEffect } from "react";
import { useRouter } from "next/router";

export default function HeadphonesIndex() {
  const router = useRouter();
  useEffect(() => {
    router.push("/headphones/page/1");
  }, [router]);
  return null;
}
