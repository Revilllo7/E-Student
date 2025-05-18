const keycloakUrl = "http://localhost:8080/realms/edziennik/protocol/openid-connect/auth";
const clientId = "frontend";

const redirectUri = "http://localhost:5173/dashboard";

export default function Login() {
    const login = () => {
    window.location.href = `${keycloakUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;
    };

    return <button onClick={login}>Zaloguj się przez Keycloak</button>;
}
