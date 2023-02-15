export default {
    async registringUser(context, data) {
        const response = await fetch("http://127.0.0.1:8000/users", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name: data.userName,
                surname: data.userSurname,
                password: data.userPassword,
                email: data.userEmail,
            }),
        })
        const responseData = await response.json();
        if (!responseData) {
            throw new Error(responseData.message || 'Failed to send request.');
        }
    }
}