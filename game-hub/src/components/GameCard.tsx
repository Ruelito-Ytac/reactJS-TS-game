import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import MetaCriticScore from "./MetaCriticScore";
import getCropIMGURL from "../services/img-url";

interface GameCardProps{
    game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
    return (
        <Card>
            <Image src={ getCropIMGURL(game.background_image) }></Image>
            <CardBody>
                <Heading fontSize="2xl">{ game.name }</Heading>
                <HStack justifyContent={ "space-between" }>
                    <PlatformIconList platforms={ game.parent_platforms.map(platform => platform.platform) } />
                    <MetaCriticScore score={ game.metacritic } />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard;