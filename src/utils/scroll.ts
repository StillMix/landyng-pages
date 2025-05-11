/**
 * Прокручивает страницу к указанной секции
 * @param sectionId ID элемента секции
 * @param options Опции скроллинга
 */
export const scrollToSection = (
  sectionId: string,
  options: ScrollIntoViewOptions = { behavior: 'smooth' },
): void => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView(options)
  }
}
