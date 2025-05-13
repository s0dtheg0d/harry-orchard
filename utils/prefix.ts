export function prefix(path: string): string{
    return process.env.NODE_ENV === 'production' ? `/harry-orchard${path}` : path;;
}