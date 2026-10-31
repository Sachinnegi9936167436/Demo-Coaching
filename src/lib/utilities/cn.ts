/**
 * Class name joiner utility
 */

export function cn(...classes: Array<string | boolean | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

export default cn;
