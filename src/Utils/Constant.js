export const baseUrl = ""

export const getToken = () => {
    return  localStorage.getItem("token") || ""
}