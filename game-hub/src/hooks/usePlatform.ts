import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
    const { data: platforms } = usePlatforms();
    return platforms?.results.find(platform_item => platform_item.id === id);
}

export default usePlatform;