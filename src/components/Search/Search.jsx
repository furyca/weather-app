import { useState } from "react";
import { useDispatch } from "react-redux";
import { getLocation } from "../../utils/utils";
import style from './Search.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault()
    location.length > 1 && dispatch(getLocation(location))
  };

  return (
    <form className={style.search}>
      <input type="text" onChange={(e) => setLocation(e.target.value)} />
      <button onClick={e => handleClick(e)}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default Search;
