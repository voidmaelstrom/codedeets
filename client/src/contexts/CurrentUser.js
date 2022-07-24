import { createContext, useState, useEffect } from "react";
export const CurrentUser = createContext()

function CurrentUserProvider({ children }) {
    const [currentUser, setCurrentUser ] = useState(null)

    useEffect(() => {

        const getLoggedInUser = async () => {
            let response = await fetch(`${process.env.REACT_APP_SERVER_URL}auth/profile`, {
                headers: {
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                }
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        if(localStorage.getItem('token')){
            getLoggedInUser()
        }
        
    }, [currentUser])


    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider