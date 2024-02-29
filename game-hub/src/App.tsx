import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.scss";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenraList from "./components/GenraList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery{
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    searchText: string;
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
            <NavBar onSearch={ (searchText) => setGameQuery({ ...game_query, searchText }) } />
        </GridItem>
        <Show above="lg">
            <GridItem area="aside" paddingX={ 5 }>
                <GenraList selectedGenreId={ game_query.genreId } onSelectGenre={ (genre) => setGameQuery({ ...game_query, genreId: genre.id }) } />
            </GridItem>
        </Show>
        <GridItem area="main">
            <Box paddingLeft={ 2 }>
                <GameHeading gameQuery={ game_query } />
                <Flex  marginBottom={ 5 }>
                    <Box marginRight={ 5 }>
                        <PlatformSelector  selectedPlatformId={ game_query.platformId } onSelectPlatform={ (platform) => setGameQuery({ ...game_query, platformId: platform.id }) } />
                    </Box>
                    <Box>
                        <SortSelector sortOrder={ game_query.sortOrder } onSelectSortOrder={ (sortOrder) => setGameQuery({ ...game_query, sortOrder }) } />
                    </Box>
                </Flex>
            </Box>
            <GameGrid gameQuery={ game_query } />
        </GridItem>
    </Grid>
}

export default App;