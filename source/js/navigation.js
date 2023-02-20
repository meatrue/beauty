const BODY_NAVIGATION_OPENED_CLASS = 'navigation-opened';
const HEADER_CLASS_NAME = 'header';
const HEADER_NOJS_CLASS_NAME = 'header--nojs';
const NAVIGATION_OPENED_CLASS_NAME = 'header--navigation-opened';
const NAVIGATION_CLOSED_CLASS_NAME = 'header--navigation-closed';
const NAVIGATION_TOGGLE_CLASS_NAME = 'header__navigation-toggle';
const MOBILE_NAV_BREAKPOINT = '767px';

const bodyElement = document.body;
const headerElement = document.querySelector(`.${HEADER_CLASS_NAME}`);
const navigationToggleElement = document.querySelector(`.${NAVIGATION_TOGGLE_CLASS_NAME}`);

const onHeaderClick = (e) => {
  if (headerElement.classList.contains(NAVIGATION_CLOSED_CLASS_NAME)) {
    return;
  }

  const target = e.target;
  if (target.classList.contains(HEADER_CLASS_NAME)) {
    closeNavigation();
  }
};

const openNavigation = () => {
  headerElement.classList.remove(NAVIGATION_CLOSED_CLASS_NAME);
  headerElement.classList.add(NAVIGATION_OPENED_CLASS_NAME);
  bodyElement.classList.add(BODY_NAVIGATION_OPENED_CLASS);
};

const closeNavigation = () => {
  headerElement.classList.remove(NAVIGATION_OPENED_CLASS_NAME);
  headerElement.classList.add(NAVIGATION_CLOSED_CLASS_NAME);
  bodyElement.classList.remove(BODY_NAVIGATION_OPENED_CLASS);
};

const onNavigationToggleClick = () => {
  if (headerElement.classList.contains(NAVIGATION_CLOSED_CLASS_NAME)) {
    openNavigation();
    return;
  }

  closeNavigation();
};

const setNavigation = () => {
  if (!headerElement || !navigationToggleElement) {
    rerturn;
  }

  headerElement.classList.remove(HEADER_NOJS_CLASS_NAME);
  headerElement.classList.add(NAVIGATION_CLOSED_CLASS_NAME);
  navigationToggleElement.addEventListener('click', onNavigationToggleClick);
  headerElement.addEventListener('click', onHeaderClick);
};

const initNavigation = () => {
  const breakpoint = window.matchMedia(`(max-width:${MOBILE_NAV_BREAKPOINT})`);

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      setNavigation();
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export { initNavigation };
