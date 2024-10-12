export default function setFontSize(fontSize: number): void {
  const boxElement = document.querySelector('.container') as HTMLElement;
  if (boxElement) {
    boxElement.style.fontSize = `${fontSize.toFixed(1)}em`;
  }
}
