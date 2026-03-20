export function applyGarageBranding() {
  const root = document.documentElement;

  root.style.removeProperty("--brand-primary");
  root.style.removeProperty("--brand-secondary");
  root.style.removeProperty("--brand-primary-rgb");
  root.style.removeProperty("--brand-secondary-rgb");
}
