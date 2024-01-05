import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const AnalysisPagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: {
  currentPage: any;
  setCurrentPage: any;
  totalPages: any;
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevPage} />
        </PaginationItem>

        {pageNumbers.map((page, idx) => (
          <PaginationItem
            key={idx}
            className={
              currentPage === page ? "bg-[#495582] rounded-md text-white" : ""
            }
          >
            <PaginationLink onClick={() => setCurrentPage(page)}>
              {" "}
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={handleNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default AnalysisPagination;
