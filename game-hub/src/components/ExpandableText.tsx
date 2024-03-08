import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react'

interface ExpandableTextProps{
    children: string;
}

const ExpandableText = ({ children } : ExpandableTextProps) => {
    const [expanded, setExpanded] = useState(false);
    const limit = 300;

    if(children.length <= limit){
        return <Text>{ children }</Text>
    }

    const summary = expanded ? children : children.substring(0, limit) + "...";

    return (
        <div>{ summary }<Button onClick={ () => setExpanded(!expanded) }>{ expanded ? "Show Less" : "Read More" }</Button></div>
    )
}

export default ExpandableText;