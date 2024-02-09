import { Badge } from '@chakra-ui/react';
import React from 'react'

interface MetaCriticScoreProps {
    score: number;
}

const MetaCriticScore = ({ score } : MetaCriticScoreProps) => {
    const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

    return (
        <Badge fontSize="14px" paddingX={ 2 } borderRadius="4px" colorScheme={ color }>{ score }</Badge>
    )
}

export default MetaCriticScore