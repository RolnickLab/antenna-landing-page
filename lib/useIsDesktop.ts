import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [value, setValue] = useState<boolean>();

  useEffect(() => {
    const onChange = (event: MediaQueryListEvent) => {
      setValue(event.matches);
    };

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
};

export const useIsDesktop = () => useMediaQuery("(min-width: 1024px)");
