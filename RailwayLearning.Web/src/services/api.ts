const API_URL = import.meta.env.VITE_API_URL;

export async function getHello() {
    const response = await fetch(`${API_URL}/api/hello`);

    if (!response.ok) {
        throw new Error("Failed to call hello API.");
    }

    return response.json();
}

export async function getStatus() {
    const response = await fetch(`${API_URL}/api/status`);

    if (!response.ok) {
        throw new Error("Failed to call status API.");
    }

    return response.json();
}