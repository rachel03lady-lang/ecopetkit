// lib/normalizeNavigation.ts

export type NavItem = {
  id: string;
  label: string;
  href?: string;
  children?: NavItem[];
};

// FIX: Access .uri directly (One-to-One)
const extractUri = (href: any): string | undefined => {
  return href?.uri ?? undefined;
};

export function normalizeNavigation(cmsNav: any[]): NavItem[] {
  if (!Array.isArray(cmsNav)) return [];

  return cmsNav.map((item) => ({
    id: item.id,
    label: item.label,
    href: extractUri(item.href),
    children:
      item.hasChildren && item.children
        ? item.children.map((child: any) => ({
            id: child.id,
            label: child.label,
            href: extractUri(child.href),
          }))
        : undefined,
  }));
}
