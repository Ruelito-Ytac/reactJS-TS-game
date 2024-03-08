import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame';
import ExpandableText from '../components/ExpandableText';
import { Heading, Text } from '@chakra-ui/react';
import DefinitionItem from '../components/DefinitionItem';
import MetaCriticScore from '../components/MetaCriticScore';

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: game, isLoading } = useGame(slug!);

    return (
        <>
            { isLoading && <span>Loading...</span> }

            { (!isLoading && game) &&
                <div>
                    <Heading>{ game?.name }</Heading>
                    <ExpandableText>{ game.description_raw }</ExpandableText>
                    <DefinitionItem term="Platforms">
                        { game.parent_platforms?.map(({ platform }) => <Text key={ platform.id }>{ platform.name }</Text>) }
                    </DefinitionItem>
                    <DefinitionItem term="Metascore">
                        <MetaCriticScore score={ game.metacritic } />
                    </DefinitionItem>
                </div>
            }
        </>
    )
}

export default GameDetailPage