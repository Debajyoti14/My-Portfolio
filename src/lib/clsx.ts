type ClassValue = string | false | null | undefined;

/** Join truthy class names. Tiny local helper — avoids a dependency. */
export function clsx(...parts: ClassValue[]): string {
  return parts.filter(Boolean).join(' ');
}
