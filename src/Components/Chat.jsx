import React from 'react'
import AddMessage from './AddMessage'

const Chat = () => {
    return (
        <div className="mt-3 px-2">
            <div className="d-flex justify-content-end mb-2">
                <span className="badge badge-pill badge-primary">
                    mensaje del usuario activo
                </span>
            </div>

            <div className="d-flex justify-content-start mb-2">
                <span className="badge badge-pill badge-secondary">
                    mensaje del usuario externo
                </span>
            </div>

            <AddMessage />
        </div>
    )
}

export default Chat
