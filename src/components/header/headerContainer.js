import headerLogo from "./headerLogo";

function headerContainer () {
    const headerContainer = document.createElement('div')
    headerContainer.classList.add('header__container')
    headerContainer.append(headerLogo())
    return headerContainer
}

export default headerContainer