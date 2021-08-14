const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmZmEzMjA4Yy1hMDc5LTRjMDgtOTNiZi1lNmViYTNjYjAxOGQiLCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjI4ODg1NjQ5LCJleHAiOjE2MjkzMTc2NDl9.25oXnodTUghRz1P_66efmdV9tbnuSzNtIrdBN5D3ODo'
export async function fetchMail(count) {
    try {
        const response = await fetch(`http://15.184.165.181:3000/inbox?skip=${count}&take=5`, {
            method: "GET",
            headers: {
                'Authorization': TOKEN,

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
                'Authorization': TOKEN,
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
export async function retriveMessage(id) {
    try {
        const response = await fetch(`http://15.184.165.181:3000/inbox/${id}`, {
            method: "GET",
            headers: {
                'Authorization': TOKEN,
                "Content-Type": "application/json",
            },
        })
        return response;
    } catch (err) {
        console.error(err);
    }
}

