import React from "react";

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChangeFilter(target.value)}
    />
  );
};

export default Filter;
