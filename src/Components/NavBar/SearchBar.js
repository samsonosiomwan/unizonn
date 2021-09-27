import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    
   
    // const handleClick = (e) => e.preventDefault
    
  return (
    <>
      <div
        className="border nav-item rounded  border-1 "
      >
        <div className="input-group input-group-sm m-0">
          <input
            type="text"
            className="form-control p-0 px-2 "
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            size="50"
            placeholder="Search Unizonn"
            style={{ border: "none", background: "#F4F6F5" }}
          />
          <span
            className="input-group-text "
            id="inputGroup-sizing-sm"
            style={{ border: "none", background: "#F4F6F5" }}
          >
            <FaSearch />
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
