//keeps only the fields we need. No "serializable" check (but these fields should be okay)
export function filterAxiosError(rawAxiosError) {
  if (rawAxiosError.name === "AxiosError") {
    //console.log(rawAxiosError)
    const { name, code, message } = rawAxiosError;
    const serializedError = {name, code, message};
    //status, statusText, data
    if (rawAxiosError.response) {
      serializedError.status = rawAxiosError.response.status;
      serializedError.statusText = rawAxiosError.response.statusText;
      serializedError.data = rawAxiosError.response.data;
    }
    return serializedError;
  }
  else {
    return rawAxiosError;
  }
}