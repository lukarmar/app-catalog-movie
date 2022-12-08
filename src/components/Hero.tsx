import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { CardMovie } from "./CardMovie";
import { PropsCardActionsData } from "../types/cardMovieProps";

import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';


import ListEmpty from "./ListEmpty";
import { useCatalogData } from '../hooks/getDataMovies';

import Spinner from "./Spinner";

import '../styles/styles-paginate.css';


interface PropsHero {
  dataCard: PropsCardActionsData[];
}

const Hero = ({ dataCard }:PropsHero) => {

  const { loading } = useCatalogData()  


  console.log(loading)
  return (
    <Flex
      h="full"
      w="full"
      py={16}
      px={8}
      pos="relative"
    >
      <Flex
        direction="column"
        justify="space-around"
        w="full"
        h="full"
        mx="auto"
        pt={5}
      >
        <Flex w="full" h="full">

          { loading ?  <Spinner type="spokes" color="#fff"/> :

           <>
            {dataCard.length === 0 ? <ListEmpty /> :

                <Grid
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    // sm: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={6}
                  rowGap={14}
                >
                {
                dataCard.map((data, index) => (
                  <GridItem key={(Math.random() * 30).toString()}>
                    <CardMovie {...data}  />
                </GridItem>
                ))
              }
            </Grid>
            }
          </>
          }
        </Flex>
      </Flex>
    </Flex>
  );
};


const HeroPaginate = ({itemsPerPage = 10}) => {
  const [itemOffset, setItemOffset] = useState(0);

  const { getData, dataCardCatalog, loading } = useCatalogData()

  useEffect(() => {
    getData()
  },[getData])

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = dataCardCatalog.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dataCardCatalog.length / itemsPerPage);


  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % dataCardCatalog.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (

    <>
    { loading ? <h1>Loading...</h1> :(
      <>
        <Hero dataCard={currentItems} />
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          pageClassName="page-item"
          pageLinkClassName="pagination__link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="pagination__link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="pagination__link--active"
          disabledClassName="pagination__link--disabled"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          // renderOnZeroPageCount={() => null}
        />
      </>
      )
}
    </>

  )
}







export default HeroPaginate;