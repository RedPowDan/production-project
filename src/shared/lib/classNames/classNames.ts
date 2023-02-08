type Mods = Record<string, boolean | string>;

/**
 * Генерация имен класса
 * @param cls Имя класса
 * @param mods Дополнительные моды, которые можно передавать через true/false
 * @param additional Дополнительные классы, передаются через массив строк
 * @returns Возвращает строку всех сформированных классов
 */
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([cls, _]) => cls),
    ].join(' ');
}
