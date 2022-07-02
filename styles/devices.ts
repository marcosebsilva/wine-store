import sizes from './sizes';

const devices = {
  mobileSmall: `(max-width: ${sizes.mobileSmall}px)`,
  tablet: `(min-width: ${sizes.tablet}px)`,
  desktopSmall: `(min-width: ${sizes.desktopSmall}px)`,
  desktopMedium: `(min-width: ${sizes.desktopMedium}px)`,
}

export default devices;