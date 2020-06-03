import React, { createContext, useState, useEffect } from 'react'
import { db, auth, provider } from '../Backend/firebase'

export const ChatContext = createContext()

const ChatProvider = (props) => {

    const dataUsuario = {
        uid: null, 
        email: null, 
        estado: null
    }

    const [usuario, setUsuario] = useState(dataUsuario)

    useEffect(() => {
        detectarUsuario()
    }, [])

    const detectarUsuario = () => {
        auth.onAuthStateChanged(user => {
            if(user){
                setUsuario({ uid: user.id, email: user.email, estado: true })

            }else{
                setUsuario({ uid: null, email: null, estado: false })
            }
        })
    }

    const ingresoUsuario = async() => {
        try {
            await auth.signInWithPopup(provider)
        } catch (error) {
            console.log(error);
        }
    }

    const cerrarSesion = () => {
        auth.signOut()
    }


    return (
        <ChatContext.Provider value={{usuario, ingresoUsuario, cerrarSesion}}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider
