export function getButtonAppearance(button): string {
  const { theme, outline } = button
  let classes: string =
    "mt-4 shadow-xl rounded-md sm:mt-0 flex items-center justify-center w-full px-8 py-3 sm:m-4 text-base font-medium text-white border border-transparent bg-secondary-600 rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
  return classes
}
