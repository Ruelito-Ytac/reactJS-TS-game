import { Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropIMGURL from "../services/img-url";
import GenreListSkeleton from "./genreListSkeleton";
import { Genre } from "../hooks/useGenres";

interface GenraListProps {
    onSelectGenre: (genre: Genre) => void;
    selectedGenreId?: number;
}

const GenraList = ({ onSelectGenre, selectedGenreId } : GenraListProps) => {
    const { data, isLoading } = useGenres();
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
 
    return (
        <>
            <Heading fontSize="2xl" marginBottom={ 3 }>Genres</Heading>
            <List>
                <ListItem>
                    { (isLoading) && skeleton.map(item => <GenreListSkeleton key={ item } />) }
                    { data?.results.map((genre, index) =>
                        <HStack key={ index } marginY={2}>
                            <Image boxSize="32px" borderRadius={ 8 } objectFit="cover" src={ getCropIMGURL(genre.image_background) } />
                            <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenreId ? "bold" : "normal" } fontSize="lg" variant="link" onClick={ () => onSelectGenre(genre) }>{ genre.name }</Button>
                        </HStack>
                    ) }
                </ListItem>
            </List>
        </>
    )
}

export default GenraList