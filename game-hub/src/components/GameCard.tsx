import Game from "../entities/Game";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import MetaCriticScore from "./MetaCriticScore";
import getCropIMGURL from "../services/img-url";
import { Link } from "react-router-dom";

interface GameCardProps{
    game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
    return (
        <Card>
            <Image src={ getCropIMGURL(game.background_image) }></Image>
            <CardBody>
                <HStack justifyContent={ "space-between" } marginBottom={ 3 }>
                    <PlatformIconList platforms={ game.parent_platforms.map(platform => platform.platform) } />
                    <MetaCriticScore score={ game.metacritic } />
                </HStack>
                <Heading fontSize="2xl"><Link to={ `/game/${ game.slug }` }>{ game.name }</Link></Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard;