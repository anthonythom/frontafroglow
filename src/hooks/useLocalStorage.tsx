import { jwtDecode } from "jwt-decode"
import { useState } from "react"

const useLocalStorage = () => {

    const getLocalUser = (): Object => {

        const localUser = window.localStorage.getItem("token")

        return { localUser }
    }

    const setLocalUser = (token: string): void => {

        if (token != "") {
            window.localStorage.setItem("token", token)
        }

    }

    return {
        getLocalUser,
        setLocalUser
    }
}