import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Kategori() {
  const router = useRouter();
  // Redirect to /artikel
  useEffect(() => {
    router.push("/artikel");
  }, [router]);
}