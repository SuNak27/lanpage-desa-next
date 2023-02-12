type PaginationProps = {
  page: number;
  total_pages: number;
  onClickNext: () => void;
  onClickPrev: () => void;
  onClickPage: (page: number) => void;
};

export default function Pagination(props: PaginationProps) {
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" aria-label="Previous" onClick={() => props.onClickPrev()}>
              <span aria-hidden="true">&laquo;</span>
              <span className="visually-hidden">Previous</span>
            </button>
          </li>

          {props.total_pages > 0 && Array.from(Array(props.total_pages).keys()).map((page) => {
            return (
              <li className={`page-item ${props.page === page + 1 ? 'active' : ''}`} key={page}>
                <button className="page-link" onClick={() => props.onClickPage(page + 1)}>{page + 1}</button>
              </li>
            )
          })}

          <li className="page-item">
            <button className="page-link" aria-label="Next" onClick={() => props.onClickNext()}>
              <span aria-hidden="true">&raquo;</span>
              <span className="visually-hidden">Next</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}