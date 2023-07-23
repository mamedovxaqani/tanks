function headerLogo () {
    const headerLogo = document.createElement('div')
    const headerLink = document.createElement('span')
    headerLink.classList.add('header__link')
    headerLink.innerHTML = 'Tanks'

    headerLogo.append(headerLink)
    return headerLogo
}

export default headerLogo