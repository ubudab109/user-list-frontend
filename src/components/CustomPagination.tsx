import * as React from "react";

interface CustomPaginationPropsI {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    onPageChange: (newPage: number) => void;
}

const CustomPagination: React.FC<CustomPaginationPropsI> = ({
    currentPage,
    itemsPerPage,
    totalItems,
    onPageChange,
}) => {
  
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
        <div className="col-12 custom-pagination">
            <span>{`${startItem}-${endItem} of ${totalItems}`}</span>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <img
                    src={`${process.env.PUBLIC_URL}/arrow-left.svg`}
                    width={15}
                    alt="arrow icon"
                />
            </button>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <img
                    src={`${process.env.PUBLIC_URL}/arrow-right.svg`}
                    width={15}
                    alt="arrow icon"
                />
            </button>
        </div>
    );
};

export default CustomPagination;
