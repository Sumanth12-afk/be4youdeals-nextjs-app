import { useEffect } from "react";
import { useRouter } from "next/router";

export default function HomeEssentialsIndex() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home-essentials/page/1");
  }, [router]);
  return null;
}
