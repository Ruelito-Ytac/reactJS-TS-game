import { SimpleGrid } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface GameGridProps {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform } : GameGridProps) => {
    const { data, error, is_loading } = useGames(selectedGenre, selectedPlatform);
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