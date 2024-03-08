import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../game_store";

const PlatformSelector = () => {
    const { data } = usePlatforms();
    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
    const setPlatformId = useGameQueryStore(s => s.setPlatformId);

    const platform = usePlatform(selectedPlatformId);

    return (
        <Menu>
            <MenuButton as={ Button } rightIcon={<BsChevronDown/>}>{ platform?.name || "Platforms" }</MenuButton>

            <MenuList>
                { data?.results.map(platform =>
                    <MenuItem key={ platform.id } onClick={ () => setPlatformId(platform.id) }>{ platform.name }</MenuItem>
                ) }
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector