import { useEffect } from "react";
import { useRouter } from "next/router";

export default function StationeryIndex() {
  const router = useRouter();
  useEffect(() => {
    router.push("/stationery/page/1");
  }, [router]);
  return null;
}
