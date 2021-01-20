import React from "react";
import s from "./filter.module.css";

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <input
      className={s.input}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChangeFilter(target.value)}
    />
  );
};

export default Filter;
