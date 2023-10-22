export const customApi = async (
    URL,
    body = null,
    method = "GET",
    headers = {
        "Content-Type": "application/json",
    }
) => {
    const asyncData = await useFetch(URL, {
        method: method,
        body: body,
        headers: headers,
    });
    return asyncData;
};
