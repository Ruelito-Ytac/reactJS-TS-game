import { HStack, Skeleton, SkeletonCircle } from "@chakra-ui/react";

const GenreListSkeleton = () => {
    return (
        <>
            <HStack marginY={2}>
                <SkeletonCircle minWidth="32px" size="32px" />
                <Skeleton height="27px" width="100%" borderRadius={ 5 } />
            </HStack>
        </>
    )
}

export default GenreListSkeleton;