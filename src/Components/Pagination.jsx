const Pagination = ({ totalPosts, postPerPage, setCurrentPage, currentPage }) => {
    const totalPages = Math.ceil(totalPosts / postPerPage)
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

    return (
        <div className="flex items-center justify-center">
            {pages.map((page) => (
                <button
                    className={`${page === currentPage ? 'bg-blue-500 w-[40px] h-[36px] rounded-lg text-white font-bold text-[16px]' : 'bg-transparent w-[40px] h-[36px] hover:border-blue-500 border-solid border-2 rounded-lg border-gray-300'
                        } px-2 py-1 mx-2`}
                    key={page}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    )
}
export default Pagination
