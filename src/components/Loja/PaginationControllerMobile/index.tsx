import * as Styled from './style';


interface PaginationControllerMobileProps {
  showMore: () => void,
  totalCount: number,
  itemsPerPage: number,
}
const PaginationControllerMobile: React.FC<PaginationControllerMobileProps> = ({ showMore, totalCount, itemsPerPage }) => {
  return (
    <Styled.Wrapper>
      {totalCount > 0 && (
        <>
          <Styled.Button
            disabled={itemsPerPage === totalCount}
            onClick={showMore}
          >
            Mostrar mais
          </Styled.Button>
          <Styled.ResultCount>
            Exibindo <b>{itemsPerPage} </b>de <b>{totalCount}</b> produtos no total
          </Styled.ResultCount>
        </>
      )}
    </Styled.Wrapper>
  );
}

export default PaginationControllerMobile;