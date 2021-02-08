import { html } from "../framework";

export const Loginform = () => {
    return html(/*html*/`
    <div id="loginform">
        <input id="username" type="text" placeholder="Username">
        <br>
        <input id="password" type="text" placeholder="Password">
        <br>
        <input id="login" type="button" value="Login">
    </div>
    `);
}
