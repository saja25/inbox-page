export async function fetchMail() {
    try {
        const response = await fetch('http://15.184.165.181:3000/inbox', {
            method: "GET",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ZTVlZDc3ZS1mNWUyLTRiYzgtOTllYS1jZWNlMDJmZDdjNmQiLCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjI4NzQ1MzU1LCJleHAiOjE2MjkxNzczNTV9.B7rU9kMl8lUesJPK7oZhpCVO3OlT4yiCoz8btBErBG0',

            }
        })
        const messages = await response.json()
        return messages;

    } catch (err) {
        console.error(err);
    }
}
export async function deleteMail(id) {
    try {
        const response = await fetch('http://15.184.165.181:3000/inbox/delete', {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ZTVlZDc3ZS1mNWUyLTRiYzgtOTllYS1jZWNlMDJmZDdjNmQiLCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjI4NzQ1MzU1LCJleHAiOjE2MjkxNzczNTV9.B7rU9kMl8lUesJPK7oZhpCVO3OlT4yiCoz8btBErBG0',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                inboxIdList: [id],
            }),
        })
        return response;
    } catch (err) {
        console.error(err);
    }
}

