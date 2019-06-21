export const submit = async (data) => {
    let response = fetch('/feedback', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return await response.status;

};
