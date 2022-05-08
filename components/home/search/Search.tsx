import styled from "@emotion/styled";
import { languageCode } from "../../../utils/keyword/languageCode";
import { timeFilter } from "../../../utils/keyword/timeFilter";
import { categories } from "../../../utils/keyword/categories";
import { SearchFilterItem } from "./SearchFilterItem";
import { useState } from "react";

type Props = {
  // setIsOpendKeywordList: (arg: boolean) => void;
  // isOpendKeywordList: boolean;
  setLanguageCode: (arg: string) => void;
  setTimeFilterCode: (arg: string) => void;
  setMediaTypeCode: (arg: string) => void;
  searchNews: (
    keyType: string,
    paramValue: string,
    exchange?: string,
    orderBy?: "top" | "latest" | "popular"
  ) => void;
};

const Search = ({
  // setIsOpendKeywordList,
  // isOpendKeywordList,
  setLanguageCode,
  setTimeFilterCode,
  setMediaTypeCode,
}: Props) => {
  const filterListArr: Array<FilterItemType> = FILTER_ITEM_LABEL;
  const [openIndex, setOpen] = useState<null | number>(null);
  const openFilterList = (
    index: number,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    setOpen(index);
  };

  const setLanguage = (langName: string) => {
    const langItem = languageCode.find((item) => item.name === langName);
    if (!langItem) {
      return;
    }
    setLanguageCode(langItem.code);
  };

  const setTimeFilter = (timeName: string) => {
    const timeFilterItem = timeFilter.find((item) => item.name === timeName);
    if (!timeFilterItem) {
      return;
    }
    setTimeFilterCode(timeFilterItem.time_code);
  };

  const setMediaType = (categorieName: string) => {
    const categoriesItem = categories.find(
      (item) => item.name === categorieName
    );
    if (!categoriesItem) {
      return;
    }
    setMediaTypeCode(categoriesItem.code);
  };
  return (
    <SearchArea>
      <SearchWarp>
        <form>
          <SearchFormInnerWrap>
            <Legend>뉴스 키워드 검색</Legend>
            {filterListArr.map((item, index) => (
              <SearchFilterItem
                key={item.label}
                filterItem={item}
                index={index}
                isOpen={openIndex === index}
                openFilterList={openFilterList}
                filterList={item.list}
                setLanguage={setLanguage}
                setTimeFilter={setTimeFilter}
                setMediaType={setMediaType}
              />
            ))}
            <SearchBox
            // focused={focused}
            // onFocus={() => {
            //   setFocused(true);
            // }}
            >
              <input
                type="text"
                //   onFocus={() => {
                //     setIsOpendKeywordList(!isOpendKeywordList);
                //   }}
                //   onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                //     changeInputText(e.target.value)
                //   }
                //   onKeyUp={instanseSearch}
                placeholder="AAPL, MSFT, 005930, Gold, Oil, DJIA, Nikkei eg... "
              />
            </SearchBox>
          </SearchFormInnerWrap>
        </form>
      </SearchWarp>
    </SearchArea>
  );
};

export default Search;

const languageName = languageCode.map((obj) => obj.name);
const timeFilterName = timeFilter.map((obj) => obj.name);
const categoriesName = categories.map((obj) => obj.name);

const FILTER_ITEM_LABEL = [
  {
    label: "언론사",
    defaultValue: "ALL",
    list: categoriesName,
  },
  {
    label: "발행일",
    defaultValue: "mth1",
    list: timeFilterName,
  },
  {
    label: "언어",
    defaultValue: "영어",
    list: languageName,
  },
  {
    label: "새로고침 속도",
    defaultValue: "10초",
    list: ["10초", "30초", "1분", "5분", "10분", "새로고침 없음"],
  },
];

export const SearchArea = styled.div`
  position: relative;
  & > div:nth-of-type(1) {
    display: flex;
    justify-content: start;
  }
  z-index: 20;
`;

const SearchWarp = styled.div`
  box-sizing: border-box;
  width: 1240px;
  height: 120px;
  margin: 32px 0 0;
  padding: 26px 26px 24px 0;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgba(196, 195, 195, 0.25);
  border: 1px solid #d5d5d5;
`;

const SearchFormInnerWrap = styled.fieldset`
  display: flex;
`;

const Legend = styled.legend`
  visibility: hidden;
  font-size: 0;
`;

const SearchBox = styled.div<SearchBoxProps>`
  display: flex;
  align-items: center;
  width: 41%;
  background: ${({ focused }) =>
      focused ? "url(/images/search-focused.svg)" : "url(/images/search.svg)"}
    no-repeat 4.5%;
  transition: background 0.3s ease;
  input {
    height: 50px;
    font-size: 18px;
    margin-left: 50px;
    width: 100%;
    border: none;
    outline: none;
  }
`;
