import useGenres from "./useGenres";

const useGenre = (id?: number) => {
    const { data: genres } = useGenres();
    return genres?.results.find(genre_item => genre_item.id === id);
}

export default useGenre;