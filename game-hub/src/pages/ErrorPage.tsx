import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div>
            <Heading>OOPS</Heading>
            <Text>{ isRouteErrorResponse(error) ? "This page does not exist." : "Unexpected error occured." }</Text>
        </div>
    )
}

export default ErrorPage