import useTrailers from '../hooks/useTrailers'
import { Text } from '@chakra-ui/react';

interface GameTrailerProps {
    gameId: number;
}

const GameTrailer = ({ gameId } : GameTrailerProps) => {
    const { data, error, isLoading } = useTrailers(gameId);
    const first_video = data?.results[0];

    if(!first_video) return null;

    return (
        <>
            { isLoading && <Text>Loading...</Text> }
            { error && <Text>{ error.message }</Text> }

            <video src={ first_video?.data[480] } poster={ first_video?.preview } controls></video>
        </>
    )
}

export default GameTrailer
