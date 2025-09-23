import { useEffect } from "react";
import { useRouter } from "next/router";

export default function SelfCareIndex() {
  const router = useRouter();
  useEffect(() => {
    router.push("/self-care/page/1");
  }, [router]);
  return null;
}
