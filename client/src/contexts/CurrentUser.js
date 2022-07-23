import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const CurrentUser = createContext()

function CurrentUserProvider({ children }) {
    const [currentUser, setCurrentUser ] = useState(null)

    useEffect(() => {

        // const getNewUser = async () => {
        //     try{
        //         await axios({
        //             method: "post",
        //             url: "http://localhost:5000/auth",
        //             data: currentUser
        //         })
        //         .then(response => {
        //             setCurrentUser(response.data.user)
        //             localStorage.setItem('token', response.data.token)
        //         })
        //     }catch(err){
        //         console.log(err)
        //     }
        // }

        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:5000/auth/profile', {
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
        // }else{
        //     getNewUser()
        // }

    }, [currentUser])


    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider