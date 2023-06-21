import "./Paginate.css";

export const Paginate = ({ pageNumber, currentPage, setCurrentPage }) => {

  let pageNumbers = [];
  let maxPage = currentPage + 5;
  let minPage = currentPage - 5;
  if (maxPage >= pageNumber) {
    minPage = pageNumber - 10
    maxPage = pageNumber
  }
  if (minPage <= 0) {
    minPage = 1
    maxPage = 10
  }

  for (let i = minPage; i <= maxPage; i++) {
    pageNumbers.push(i);
  }

  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSelectedPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <ul className="paginate">
      <button
        className={currentPage === 1 ? "buttonDisabled" : "button"}
        href=""
        onClick={() => onSelectedPage(1)}
      >
        Primera
      </button>
      <button
        className={currentPage === 1 ? "buttonDisabled" : "button"}
        onClick={onPreviusPage}
        disabled={currentPage === 1 ? true : false}
      >
        Anterior
      </button>
      {pageNumbers.map((numberPage) => {
        return (
          <li key={numberPage}>
            <button
              className={`button ${numberPage === currentPage ? "buttonSelected" : ""}`}
              href=""
              onClick={() => onSelectedPage(numberPage)}
            >
              {numberPage}
            </button>
          </li>
        );
      })}
      <button
        className={currentPage === pageNumber ? "buttonDisabled" : "button"}
        onClick={onNextPage}
        disabled={currentPage === pageNumber ? true : false}
      >
        Siguiente
      </button>
      <button
        className={currentPage === pageNumber ? "buttonDisabled" : "button"}
        href=""
        onClick={() => onSelectedPage(pageNumber)}
      >
        Ultima
      </button>
    </ul>
  );
};
