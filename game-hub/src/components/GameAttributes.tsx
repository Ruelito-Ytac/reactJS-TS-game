import Game from '../entities/Game';
import { SimpleGrid, Text } from '@chakra-ui/react';
import DefinitionItem from './DefinitionItem';
import MetaCriticScore from './MetaCriticScore';

interface GameAttributesProps {
    game: Game;
}

const GameAttributes = ({ game } : GameAttributesProps) => {
    return (
        <SimpleGrid columns={ 2 } as="dl">
            <DefinitionItem term="Platforms">
                { game.parent_platforms?.map(({ platform }) => <Text key={ platform.id }>{ platform.name }</Text>) }
            </DefinitionItem>
            <DefinitionItem term="Metascore">
                <MetaCriticScore score={ game.metacritic } />
            </DefinitionItem>
            <DefinitionItem term="Genres">
                { game.genres?.map((genre) => <Text key={ genre.id }>{ genre.name }</Text>) }
            </DefinitionItem>
            <DefinitionItem term="Genres">
                { game.publishers?.map((publisher) => <Text key={ publisher.id }>{ publisher.name }</Text>) }
            </DefinitionItem>
        </SimpleGrid>
    )
}

export default GameAttributes
