import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import GenraList from "../components/GenraList"
import GameHeading from "../components/GameHeading"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"
import GameGrid from "../components/GameGrid"

const HomePage = () => {
    return (
        <>
            <Grid 
                templateAreas={{
                    base: `"main"`,
                    lg: `"aside main"`
                }}
                templateColumns={{
                    base: "1fr",
                    lg: "200px 1fr"
                }}
            >
                <Show above="lg">
                    <GridItem area="aside" paddingX={ 5 }>
                        <GenraList />
                    </GridItem>
                </Show>
                <GridItem area="main">
                    <Box paddingLeft={ 2 }>
                        <GameHeading />
                        <Flex  marginBottom={ 5 }>
                            <Box marginRight={ 5 }>
                                <PlatformSelector />
                            </Box>
                            <Box>
                                <SortSelector />
                            </Box>
                        </Flex>
                    </Box>
                    <GameGrid />
                </GridItem>
            </Grid>
        </>
    )
}

export default HomePage