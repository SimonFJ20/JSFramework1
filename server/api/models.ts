
/* Auth models */

export interface User {
    username: string,
    token: string
}

export interface UserLoginRequest {
    username: string,
    password: string
}

export interface UserLoginResponse {
    authorized: boolean,
    username?: string,
    token?: string
}


/* Miscellaneous models */

export interface BackgroundImageResponse {
    url: string
}
