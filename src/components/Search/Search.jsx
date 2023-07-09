import { useState } from "react";
import { useDispatch } from "react-redux";
import { getLocation } from "../../utils/utils";
import style from './Search.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getLocation(location))
  };

  return (
    <div className={style.search}>
      <input type="text" onChange={(e) => setLocation(e.target.value)} />
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default Search;
