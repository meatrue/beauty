const HEADER_CLASS_NAME = 'header';
const HEADER_NOJS_CLASS_NAME = 'header--nojs';
const NAVIGATION_OPENED_CLASS_NAME = 'header--navigation-opened';
const NAVIGATION_CLOSED_CLASS_NAME = 'header--navigation-closed';
const NAVIGATION_TOGGLE_CLASS_NAME = 'header__navigation-toggle';

const headerElement = document.querySelector(`.${HEADER_CLASS_NAME}`);
const navigationToggleElement = document.querySelector(`.${NAVIGATION_TOGGLE_CLASS_NAME}`);



const openNavigation = () => {
  headerElement.classList.remove(NAVIGATION_CLOSED_CLASS_NAME);
  headerElement.classList.add(NAVIGATION_OPENED_CLASS_NAME);


};

const closeNavigation = () => {
  headerElement.classList.remove(NAVIGATION_OPENED_CLASS_NAME);
  headerElement.classList.add(NAVIGATION_CLOSED_CLASS_NAME);
};

const handleNavigationToggleClick = (e) => {
  if (headerElement.classList.contains(NAVIGATION_CLOSED_CLASS_NAME)) {
    openNavigation();
    return;
  }

  closeNavigation();
};

const navigationInit = () => {
  if (!headerElement || !navigationToggleElement) {
    rerturn;
  }

  headerElement.classList.remove(HEADER_NOJS_CLASS_NAME);
  headerElement.classList.add(NAVIGATION_CLOSED_CLASS_NAME);
  navigationToggleElement.addEventListener('click', handleNavigationToggleClick);
};

export { navigationInit };
