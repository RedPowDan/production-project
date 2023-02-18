export function booleanConvert(value: string): boolean | null {
    if (!value) {
        return null;
    }

    const truthy: string[] = [
        'true',
        'True',
        '1',
    ];

    return truthy.includes(value);
}
