import React, { useContext, useRef, useEffect } from 'react'
import AddMessage from './AddMessage'

import { ChatContext } from '../Context/ChatProvider'

const Chat = () => {

    const { mensajes, usuario } = useContext(ChatContext)
    const refZonaChat = useRef(null)

    useEffect(() => {
        refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight
    }, [mensajes])

    return (
        <div 
            className="mt-3 px-2"
            style={{height: '75vh', overflowY: 'scroll'}}
            ref={refZonaChat}
        >
            {
                mensajes.map((item, index) => (
                    usuario.uid === item.uid ? (
                        <div className="d-flex justify-content-end mb-2" key={index}>
                            <span className="badge badge-pill badge-primary">
                                {item.text}
                            </span>
                        </div>
                    ) : (
                            <div className="d-flex justify-content-start mb-2" key={index}>
                                <span className="badge badge-pill badge-secondary">
                                    {item.text}
                                </span>
                            </div>
                        )
                ))
            }

            <AddMessage />
        </div>
    )
}

export default Chat
