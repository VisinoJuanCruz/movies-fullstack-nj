import "./Paginate.css";

export const Paginate = ({ pageNumber, currentPage, setCurrentPage }) => {
  let pageNumbers = [];

  let pagesToShow = [];
  switch (currentPage) {
    case 1:
      pagesToShow = [1, 2, 3, 4, 5];
      break;
    case 2:
      pagesToShow = [2, 3, 4, 5, 6];
      break;
    default:
      break;
  }

  for (let i = 1; i <= pageNumber; i++) {
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
        onClick={onPreviusPage}
        disabled={currentPage === 1 ? true : false}
      >
        Anterior
      </button>
      {pageNumbers.map((numberPage) => {
        return (
          <li key={numberPage}>
            <button
              className={`button ${
                numberPage === currentPage ? "buttonSelected" : ""
              }`}
              href=""
              onClick={() => onSelectedPage(numberPage)}
            >
              {numberPage}
            </button>
          </li>
        );
      })}
      <button
        className={
          currentPage === pageNumber ? "buttonDisabled" : "button"
        }
        onClick={onNextPage}
        disabled={currentPage === pageNumber ? true : false}
      >
        Siguiente
      </button>
    </ul>
  );
};
