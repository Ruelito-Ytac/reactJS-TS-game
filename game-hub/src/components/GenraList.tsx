import { Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCropIMGURL from "../services/img-url";
import GenreListSkeleton from "./genreListSkeleton";
import { Genre } from "../hooks/useGenre";

interface GenraListProps {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenraList = ({ onSelectGenre, selectedGenre } : GenraListProps) => {
    const { data, is_loading } = useGenre();
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];  

    return (
        <>
            <Heading fontSize="2xl" marginBottom={ 3 }>Genres</Heading>
            <List>
                <ListItem>
                    { (is_loading) && skeleton.map(item => <GenreListSkeleton key={ item } />) }
                    { data.map((genre, index) =>
                        <HStack key={ index } marginY={2}>
                            <Image boxSize="32px" borderRadius={ 8 } objectFit="cover" src={ getCropIMGURL(genre.image_background) } />
                            <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal" } fontSize="lg" variant="link" onClick={ () => onSelectGenre(genre) }>{ genre.name }</Button>
                        </HStack>
                    ) }
                </ListItem>
            </List>
        </>
    )
}

export default GenraList