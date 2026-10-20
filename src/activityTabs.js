// Lets the navbar open a tab of the SB Overview section (Events / Spotlights / Upcoming).
const SELECT_EVENT = 'sb-select-tab';

export const selectActivityTab = (tab) => {
    window.dispatchEvent(new CustomEvent(SELECT_EVENT, { detail: tab }));
};

export const onActivityTabSelect = (handler) => {
    const listener = (e) => handler(e.detail);
    window.addEventListener(SELECT_EVENT, listener);
    return () => window.removeEventListener(SELECT_EVENT, listener);
};
