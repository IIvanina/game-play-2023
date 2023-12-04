export const request = async (method, url, data) => {
    const responce = await fetch(url, {
        method,
    })

    // if(!responce.ok){
    //     throw new Error('Error')
    // }

    const result = await responce.json();
    return result;
}