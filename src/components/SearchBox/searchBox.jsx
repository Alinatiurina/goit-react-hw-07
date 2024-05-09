import css from "./serchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { changeNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
    const dispatch = useDispatch();
    const nameFilter = useSelector(state => state.filters.nameFilter); 

    const handleNameFilterChange = (event) => {
        dispatch(changeNameFilter(event.target.value)); 
    };

    return (
        <>
            <p className={css.text}>Find contacts by name</p>
            <input 
                className={css.input}
                type="text"
                value={nameFilter}
                onChange={handleNameFilterChange}
                 placeholder="Enter searching name"
            />
        </>
    );
}

export default SearchBox;
