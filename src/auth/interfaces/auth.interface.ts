export interface Msg {
    message: string;
}

export interface Csrf {
    csrfToken: String;
}

export interface Jwt {
    accessToken: string;
}