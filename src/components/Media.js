import { createMedia } from "@artsy/fresnel"

const RPAppMedia = createMedia({
  breakpoints: {
    mobile: 0,
    mobileLandscape: 600,
    tablet: 780,
    computer: 992,
    largeScreen: 1200,
    wideScreen: 1920,
  },
})

// Make styles for injection into the header of the page
export const mediaStyles = RPAppMedia.createMediaStyle()

export const { Media, MediaContextProvider } = RPAppMedia
