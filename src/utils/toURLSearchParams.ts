/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Returns a URLSearchParams init type save object
 */
export function toURLSearchParams(
  params: Record<string, any>
): Record<string, string> {
  return Object.entries(params)
    .map(([key, value]) => [key, value + ''])
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
}
