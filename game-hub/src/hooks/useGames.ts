import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import Game from "../entities/Game";
import { GameQuery } from "../game_store";

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
    const fetchGameList = async ({ pageParam = 1 }) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId, 
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam
                }
            });

    return useInfiniteQuery({
        queryKey: ["games", gameQuery],
        queryFn: fetchGameList,
        initialPageParam: 1,
        staleTime: ms("24h"),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        }
    });
}

export default useGames;