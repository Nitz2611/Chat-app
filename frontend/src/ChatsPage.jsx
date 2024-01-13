import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {

   
    
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='50d76557-75c8-4288-b036-e3b2ee1b77a1'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage