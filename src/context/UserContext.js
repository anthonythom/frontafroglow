import { createContext } from "react";


export const AuthContext = createContext({});


export function UserProvider() {
    return (
        <AuthContext.Provider values={{}}>
        </AuthContext.Provider>
    )
}  