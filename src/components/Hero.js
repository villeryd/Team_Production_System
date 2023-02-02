import yoda from '../mentor-yoda.jpeg';
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Hero() {
    return (
        <>
            <div className="hero">
                <img className="hero--yoda" src={yoda} alt="the best mentor he is"/>
            </div>

            <div className="Authentication">
                <ButtonGroup variant='outline'>
                    <Button>Log in</Button>
                    <Button>Sign up</Button>
                </ButtonGroup>
            </div>
        </>
    )
}