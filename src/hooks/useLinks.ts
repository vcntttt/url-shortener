import { useEffect, useState } from "react";
import type { URL } from "@/types";
import { useUrlStore } from "@/store/urlStore";

export function useLinks(): URL[] {
  const [data, setData] = useState<URL[]>([]);
  const [loading, setLoading] = useState(true);
  const setUrls = useUrlStore((state) => state.setUrls);

  useEffect(() => {
    console.log("fetching links");
    async function fetchLinks() {
      const res = await fetch("/api/shortUrl");
      const result = await res.json();
      console.log("Resultado:", result);
      setUrls(result);
      setData(result);
      setLoading(false);
    }
    fetchLinks();
  }, [setUrls]);

  if (loading) {
    return [];
  }

  return data;
}
