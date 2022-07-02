import { ReactElement, useEffect, useMemo, useState, useCallback } from "react";
import * as Styled from './style';
import {v4 as generateId} from 'uuid';

interface PaginationControllerProps {
  handlePageClick: (number: number) => void,
  currentPage: number,
  pageCount: number,
  maxAmountOfButtons: number,
  minAmountOfButtons: number
}

const PaginationController: React.FC<PaginationControllerProps> = ({ currentPage, handlePageClick, pageCount, maxAmountOfButtons, minAmountOfButtons }) => {
  const [pages, setPages] = useState<ReactElement[]>([]);
  const shouldRenderLeftDots = useMemo(() => Math.max(currentPage - 1, 1) >= maxAmountOfButtons, [maxAmountOfButtons, currentPage]);
  const shouldRenderRightDots = useMemo(() =>  currentPage + minAmountOfButtons <= pageCount, [pageCount, minAmountOfButtons, currentPage]);

  const generateDotsButton = useCallback((value: number) => {
    return (
      <Styled.Dots
        key={generateId()}
        onClick={() => handlePageClick(value)}
      >
      ...
      </Styled.Dots>);
  }, [handlePageClick])

  const pagesToRender = useMemo(() => {
    if(shouldRenderRightDots && shouldRenderLeftDots){
      return [
        generateDotsButton(currentPage - 1),
        ...pages.slice(currentPage - 1, (currentPage  - 1) + (minAmountOfButtons + 1)),
        generateDotsButton(currentPage + maxAmountOfButtons)
      ]
    }

    if(shouldRenderLeftDots) {
     return [
        generateDotsButton(maxAmountOfButtons + 1),
        ...pages.slice(-maxAmountOfButtons),
      ]
    }

    if(shouldRenderRightDots){
     return [
        ...pages.slice(0, maxAmountOfButtons),
       generateDotsButton(maxAmountOfButtons + 1)
      ]
    }

    return pages;

  }, [currentPage, shouldRenderLeftDots, shouldRenderRightDots, maxAmountOfButtons, minAmountOfButtons, pages, generateDotsButton]);
 
  useEffect(() => {
    const newPages = [];

    for (let pageNumber = 1; pageNumber <= pageCount; pageNumber++){
      newPages.push((
        <Styled.PageButton
          selected={currentPage === pageNumber}
          key={generateId()}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </Styled.PageButton>
      ));
    }

    setPages(newPages);
  }, [currentPage, pageCount, handlePageClick]);

  return (
    <Styled.Wrapper>
      {currentPage > 1 && (
        <Styled.Button
          onClick={() => handlePageClick(currentPage - 1)}
        >
          Anterior
        </Styled.Button>
      )}
      {pagesToRender}
      {currentPage < pageCount && (
        <Styled.Button
          onClick={() => handlePageClick(currentPage + 1)}
        >
          Próximo
        </Styled.Button>
      )}
    </Styled.Wrapper>
  );
}


export default PaginationController;