import { createContext, useContext } from "react";


export const UserContext = createContext({
    userName : "",
    userPassword :"",
    AddUser: ()=>{}
})

export const UserProvider = UserContext.Provider


export const useUserContext = () => {
    return useContext(UserContext)
}

export default UserProvider