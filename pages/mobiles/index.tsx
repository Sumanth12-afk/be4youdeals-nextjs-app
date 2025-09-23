import { useEffect } from "react";
import { useRouter } from "next/router";

export default function MobilesIndex() {
  const router = useRouter();
  useEffect(() => {
    router.push("/mobiles/page/1");
  }, [router]);
  return null;
}
