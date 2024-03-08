import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../game_store";

const SearchInput = () => {
    const input_search_ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(selector => selector.setSearchText);

    const submitSearch = (event: React.FormEvent) => {
        event.preventDefault();

        if(input_search_ref.current){
            setSearchText(input_search_ref.current.value);
        }
    }

    return (
        <form onSubmit={ (event) => { submitSearch(event) } }>
            <InputGroup>
                <InputLeftElement children={ <BsSearch /> } />
                <Input ref={ input_search_ref } borderRadius={ 20 } placeholder="Searh games..." variant="filled" />
            </InputGroup>
        </form>
    )
}

export default SearchInput;