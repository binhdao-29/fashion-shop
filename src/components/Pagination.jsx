import React from "react";

export default function Pagination({
  productsPerPage,
  totalProducts,
  paginate,
  nextPage,
  prevPage,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <ul className="page__list">
        <li className="page__item">
          <div className="page__link" onClick={() => prevPage()}>
            «
          </div>
        </li>
        {pageNumbers.map((num) => (
          <li className="page__item" key={num}>
            <div
              className={`page__link ${currentPage === num ? `active` : ""}`}
              onClick={() => paginate(num)}
            >
              {num}
            </div>
          </li>
        ))}
        <li>
          <div className="page__link" onClick={() => nextPage()}>
            »
          </div>
        </li>
      </ul>
    </div>
  );
}
