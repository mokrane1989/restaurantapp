export const fetchUser = () => {
    const userInfo = localStorage.getItem('user') !== "undefined" ? localStorage.getItem('user') : localStorage.clear()
    console.log("---------------------------->", userInfo);
    return userInfo;
}