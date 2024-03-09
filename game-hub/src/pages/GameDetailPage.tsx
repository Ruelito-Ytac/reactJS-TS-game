import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame';
import ExpandableText from '../components/ExpandableText';
import { GridItem, Heading, SimpleGrid } from '@chakra-ui/react';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import GameScreenshots from '../components/GameScreenshots';

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: game, isLoading } = useGame(slug!);

    return (
        <>
            { isLoading && <span>Loading...</span> }

            { (!isLoading && game) &&
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={ 5 }>
                    <GridItem>
                        <Heading>{ game?.name }</Heading>
                        <ExpandableText>{ game.description_raw }</ExpandableText>
                        <GameAttributes game={ game } />
                    </GridItem>
                    <GridItem>
                        <GameTrailer gameId={ game.id } />
                        <GameScreenshots gameId={ game.id } />
                    </GridItem>
                </SimpleGrid>
            }
        </>
    )
}

export default GameDetailPage;