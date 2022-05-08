import { useState } from "react";
export const useSearch = () => {
  const [language, setLanguage] = useState("en");
  const [timeFilter, setTimeFilter] = useState("m5");
  const [mediaType, setMediaType] = useState("mp,op,r");

  const searchNews = async (
    keyType: string | null | undefined,
    paramValue: string | null | undefined,
    exchange?: string | null | undefined,
    orderBy = "top"
  ) => {
    const searchPayload = {
      orderBy,
      keyType,
      paramValue,
      language,
      timeFilter,
      mediaType,
      ...(exchange && { exchange }),
    };
    console.log("searchPayload", searchPayload);
    // dispatch(fetchNewList(searchPayload));
  };

  return {
    setLanguage,
    setTimeFilter,
    setMediaType,
    searchNews,
    language,
    timeFilter,
    mediaType,
  };
};
