function PageButton({ disabled, item, onClick, page }) {
  const isActiveStyle = page === item ? 'bg-black cursor-default' : 'bg-transparent';
  const isDisabledStyle = disabled
    ? 'bg-gray-300 border-gray-400 text-gray-400 cursor-default'
    : '';
  const normalStyle = 'text-lemonColor border-greenColor';
  return (
    <button
      type="button"
      className={`px-2 rounded font-bold border ${isActiveStyle} ${
        isDisabledStyle || normalStyle
      } ${
        !(page === item) && !disabled
          ? 'hover:bg-black/50 active:text-blueColor active:border-blueColor'
          : ''
      }`}
      onClick={() => onClick(item)}>
      {item}
    </button>
  );
}

export default function Paginator({ page, paginatorInfo, handleClick }) {
  const rows = [];
  for (let i = 1; i <= paginatorInfo; i += 1) {
    rows.push(<PageButton key={i} item={i} page={page} onClick={handleClick} />);
  }

  return (
    <div className="my-4 flex items-center justify-center flex-wrap gap-1">
      <PageButton key="back" item="🡰" onClick={handleClick} disabled={page === 1} />
      {rows.map((item) => item)}
      <PageButton key="next" item="🡲" onClick={handleClick} disabled={page === paginatorInfo} />
    </div>
  );
}
