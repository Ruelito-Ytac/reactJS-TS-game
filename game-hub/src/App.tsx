import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.scss";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenraList from "./components/GenraList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery{
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
}

const App = () => {
    const [game_query, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return <Grid 
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr"
            }}
        >
        <GridItem area="nav">
            <NavBar />
        </GridItem>
        <Show above="lg">
            <GridItem area="aside" paddingX={ 5 }>
                <GenraList selectedGenre={ game_query.genre } onSelectGenre={ (genre) => setGameQuery({ ...game_query, genre }) } />
            </GridItem>
        </Show>
        <GridItem area="main">
            <Flex paddingLeft={ 2 } marginBottom={ 5 }>
                <Box marginRight={ 5 }>
                    <PlatformSelector  selectedPlatform={ game_query.platform } onSelectPlatform={ (platform) => setGameQuery({ ...game_query, platform }) } />
                </Box>
                <Box>
                    <SortSelector sortOrder={ game_query.sortOrder } onSelectSortOrder={ (sortOrder) => setGameQuery({ ...game_query, sortOrder }) } />
                </Box>
            </Flex>
            <GameGrid gameQuery={ game_query } />
        </GridItem>
    </Grid>
}

export default App;