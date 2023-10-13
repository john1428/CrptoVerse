import "../../css/index.css";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
const Pagination = ({ totalPosts, postsperpage, paginate }) => {
  const pageNumbers = ["<"];

  const {darker} = useContext(AppContext);

  for (let i = 1; i <= Math.ceil(totalPosts / postsperpage); i++) {
    pageNumbers.push(i);
  }

  pageNumbers.push(">");

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((num) => (
          <li key={num} className="page-item">
            <a style = {darker ? {color:'white'} : {color:'black'}} onClick={() => paginate(num)} className="page-link">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
