import { Dimmer, Loader } from "semantic-ui-react";

interface LoadingProps {
    inverted?: boolean;
    content?: string;
}

const LoadingComponent: React.FC<LoadingProps> = ({inverted = true, content= 'Loading...'}) => {
    return (
        <Dimmer active inverted={inverted}>
            <Loader content={content}/>
        </Dimmer>
    );
};

export default LoadingComponent;