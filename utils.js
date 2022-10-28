export const formatDate = (date) =>
  new Date(date)
    .toDateString()
    .split(" ")
    .map((elm, index) => (index === 1 ? null : index === 3 ? `,${elm}` : elm)).join(' ')
