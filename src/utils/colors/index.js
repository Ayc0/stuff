import './theme.scss';

export const getColor = color => `var(--${color})`;

export const getRawColor = color => getComputedStyle(document.body).getPropertyValue(`--${color}`);

export const verify = color => Boolean(getRawColor(color));
