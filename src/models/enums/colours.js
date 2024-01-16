/* Colour ENUM */
const Colours = {
    NONE: "#7E8180",
    PINK: "#FF99D1",
    PURPLE: "#9966CC",
    BLUE: "#5A9BD5",
    TEAL: "#1CB1C3",
    GREEN: "#66FFB2",
    YELLOW: "#F9D471",
    ORANGE: "#FFA74F",
    RED: "#FF867C",
}


/* Default option */
const DefaultColour = Colours.NONE;

/* Checks whether the colour value is valid */
function isValidColour(colour) {
    return Object.values(Colours).includes(colour);
}

export { Colours, DefaultColour, isValidColour }