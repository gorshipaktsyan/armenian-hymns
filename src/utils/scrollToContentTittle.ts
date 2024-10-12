export default function scrollToContentTittle(id: number): void {
  const element = document.getElementById(`${id}`) as HTMLElement;
  setTimeout(
    () =>
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      }),
    100
  );
}
