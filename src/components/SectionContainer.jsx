import { useContext } from 'react';
import Paginator from './Paginator';

export default function SectionContainer({ children, context, title = undefined }) {
  const { page, handleClick, info } = useContext(context);
  const paginatorInfo = info?.pages;

  return (
    <div className="my-4 flex flex-col gap-4">
      {paginatorInfo && (
        <Paginator handleClick={handleClick} page={page} paginatorInfo={paginatorInfo} />
      )}
      {title && (
        <h2 className="text-center tracking-widest text-4xl font-semibold underline">
          List of {title}
        </h2>
      )}
      <div className="flex flex-wrap justify-evenly gap-6">{children}</div>
    </div>
  );
}
