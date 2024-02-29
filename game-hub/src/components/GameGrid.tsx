import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface GameGridProps {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery } : GameGridProps) => {
    const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];
    
    if(error) return <p>{ error.message }</p>

    const fetchedGameCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

    return (
        <InfiniteScroll dataLength={ fetchedGameCount } hasMore={ !!hasNextPage } next={() => fetchNextPage() } loader={ <Spinner /> }>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" spacing={ 6 }>
                { (isLoading) && skeletons.map((skeleton) => <GameCardContainer key={ skeleton }><GameCardSkeleton/></GameCardContainer>) }
                { data?.pages.map((game_list, game_index) => (
                    <React.Fragment key={ game_index + 1 }>
                        {
                            game_list?.results.map((game) => 
                                <GameCardContainer key={ game.id }>
                                    <GameCard game={ game } />
                                </GameCardContainer>
                            )
                        }
                    </React.Fragment>
                )) }
            </SimpleGrid>
        </InfiniteScroll>
    )
}

export default GameGrid;