const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        console.warn(url);
        console.warn(optionsObj);
        const response = await fetch(url, optionsObj);
        if (!response.ok) {
            console.warn(response);
            throw Error('Please reload the app');
        }
    } catch (err) {
        errMsg = err.message;
    } finally {
        return errMsg;
    }

}

export default apiRequest;