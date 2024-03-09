import { Image, SimpleGrid, Text } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface GameScreenshotsProps{
    gameId: number;
}

const GameScreenshots = ({ gameId } : GameScreenshotsProps) => {
    const { data, isLoading, error } = useScreenshots(gameId);
    
    return (
        <>
            { isLoading && <Text>Loading...</Text> }
            { error && <Text>{ error.message }</Text> }

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={ 2 }>
                { data?.results.map(file => <Image key={ file.id } src={ file.image } />) }
            </SimpleGrid>
        </>
    )
}

export default GameScreenshots
