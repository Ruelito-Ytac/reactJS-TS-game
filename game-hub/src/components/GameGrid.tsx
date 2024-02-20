import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface GameGridProps {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery } : GameGridProps) => {
    const { data, error, is_loading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];
    
    return (
        <>
            { error && <p>{ error }</p> }
            
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding="10px" spacing={ 3 }>
                { (is_loading) && skeletons.map((skeleton) => <GameCardContainer key={ skeleton }><GameCardSkeleton/></GameCardContainer>) }
                { (!is_loading) && data.map((game) => 
                    <GameCardContainer key={ game.id }>
                        <GameCard game={ game } />
                    </GameCardContainer>
                ) }
            </SimpleGrid>
        </>
    )
}

export default GameGrid;