/* Colour ENUM */
const Colours = {
    NONE: "#ffffff", // Muted gray
    PINK: "hsl(320, 60%, 85%)", // Muted pink
    PURPLE: "hsl(270, 60%, 75%)", // Muted purple
    BLUE: "hsl(210, 60%, 75%)", // Muted blue
    TEAL: "hsl(190, 60%, 75%)", // Muted teal
    GREEN: "hsl(120, 60%, 85%)", // Muted green
    YELLOW: "hsl(50, 60%, 85%)", // Muted yellow
    ORANGE: "hsl(30, 60%, 85%)", // Muted orange
    RED: "hsl(0, 60%, 85%)" // Muted red
}

/* Default option */
const DefaultColour = Colours.NONE;

/* Checks whether the colour value is valid */
function isValidColour(colour) {
    return Object.values(Colours).includes(colour);
}

export { Colours, DefaultColour, isValidColour }