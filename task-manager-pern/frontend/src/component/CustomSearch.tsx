import { useState } from "react";

const CustomSearch = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div>
      <input
        className="form-input"
        type="text"
        placeholder="search"
        onChange={(e) => {
          console.log(e.target.value);
          const value = e.target.value;
          setSearchValue(value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log("searching for ", searchValue);
            setSearchValue("");
          }
        }}
      />
    </div>
  );
};

export default CustomSearch;
