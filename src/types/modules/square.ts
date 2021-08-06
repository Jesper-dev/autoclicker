export const createSquare = (color: string, width: number) => {
  return `<div style={{backgroundColor: ${color}, width: ${width}px}}></div>`
}

//contextual typing. This helps cut down on the amount of effort to keep your program typed.
export const addScore: (number: number) => number = function (number) {
  return (number += 1)
}
