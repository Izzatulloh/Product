import CookieProvider from "js-cookie"

export const cookies = CookieProvider
export const cookieConfig = () => {
    return {
        path: "/",
        domain: "localhost",
    }
}