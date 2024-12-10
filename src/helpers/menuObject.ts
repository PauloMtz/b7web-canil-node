type menuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const menuObject = (activeMenu: menuOptions) => {
    let menuOption = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if (activeMenu !== '') {
        menuOption[activeMenu] = true;
    }

    return menuOption;
}