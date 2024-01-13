import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic('50d76557-75c8-4288-b036-e3b2ee1b77a1', 
    props.user.username, 
    props.user.secret
    );
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    )
}

export default ChatsPage