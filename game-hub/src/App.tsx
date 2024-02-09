import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.scss";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenraList from "./components/GenraList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

const App = () => {
    const [selected_genre, setSelectedGenre] = useState<Genre | null>(null);
    const [selected_platform, setSelectPlatform] = useState<Platform | null>(null);

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
                <GenraList selectedGenre={ selected_genre } onSelectGenre={ (genre) => setSelectedGenre(genre) } />
            </GridItem>
        </Show>
        <GridItem area="main">
            <PlatformSelector  selectedPlatform={ selected_platform } onSelectPlatform={ (platform) => setSelectPlatform(platform) } />
            <GameGrid selectedPlatform={ selected_platform } selectedGenre={ selected_genre }/>
        </GridItem>
    </Grid>
}

export default App;