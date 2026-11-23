export function exportCvToPdf(fullName) {
  const originalTitle = document.title;
  const sanitizedName = (fullName || 'Resume')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9_-]/g, '');

  document.title = `${sanitizedName}_CV`;
  window.print();

  setTimeout(() => {
    document.title = originalTitle;
  }, 500);
}