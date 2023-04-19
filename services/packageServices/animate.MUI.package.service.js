import { createStyles, makeStyles } from '@material-ui/core/styles'

/**
 * Helper function to generate an animation keyframe for a transition effect.
 * @param {string} name The name of the animation.
 * @param {object} options The options to customize the animation.
 * @returns {string} The generated keyframe for the animation.
 */
function generateKeyframe(name, options) {
    const {
        from = {},
        to = {},
        duration = '0.3s',
        timingFunction = 'ease-out',
        delay = '0s',
    } = options;

    const fromStyles = createStyles(from)()
    const toStyles = createStyles(to)()

    let keyframe = `@keyframes ${name} {`

    for (const [key, value] of Object.entries(fromStyles)) {
        keyframe += `from { ${key}: ${value}; }`
    }

    for (const [key, value] of Object.entries(toStyles)) {
        keyframe += `to { ${key}: ${value}; }`
    }

    keyframe += `}`

    const animation = `${name} ${duration} ${timingFunction} ${delay}`

    return {
        keyframe,
        animation,
    }
}

/**
 * Custom hook to generate CSS styles for a given animation.
 * @param {string} name The name of the animation.
 * @param {object} options The options to customize the animation.
 * @returns {object} The generated CSS styles for the animation.
 */
function useAnimate(name, options) {
    const { keyframe, animation } = generateKeyframe(name, options);

    const useStyles = makeStyles({
        [`@keyframes ${name}`]: {
            ...keyframe,
        },
        animate: {
            animation,
        },
    });

    return useStyles();
}

/**
 * Helper function to create a fade-in animation.
 * @param {object} options The options to customize the animation.
 * @returns {object} The generated CSS styles for the animation.
 */
function fadeIn(options = {}) {
    return useAnimate('fadeIn', {
        from: { opacity: 0 },
        to: { opacity: 1 },
        ...options,
    });
}

/**
 * Helper function to create a fade-out animation.
 * @param {object} options The options to customize the animation.
 * @returns {object} The generated CSS styles for the animation.
 */
function fadeOut(options = {}) {
    return useAnimate('fadeOut', {
        from: { opacity: 1 },
        to: { opacity: 0 },
        ...options,
    });
}

/**
 * Helper function to create a slide-in animation.
 * @param {object} options The options to customize the animation.
 * @returns {object} The generated CSS styles for the animation.
 */
function slideIn(options = {}) {
    return useAnimate('slideIn', {
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(0)' },
        ...options,
    });
}

/**
 * Helper function to create a slide-out animation.
 * @param {object} options The options to customize the animation.
 * @returns {object} The generated CSS styles for the animation.
 */
function slideOut(options = {}) {
    return useAnimate('slideOut', {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
        ...options,
    })
}

function pop(options = {}) {
    return useAnimate('pop', {
        from: {
            opacity: 0,
            transform: 'scale(0.5)',
        },
        to: {
            opacity: 1,
            transform: 'scale(1)',
        },
        ...options,
    })
}

export const MUIAnimate = {
    useAnimate,
    fadeIn,
    fadeOut,
    slideIn,
    slideOut,
    pop
}