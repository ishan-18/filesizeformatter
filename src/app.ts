export function fileSizeFormat(size: number, useBinaryUnits: boolean = false) {
    const units: string[] = useBinaryUnits
        ? ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
        : ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    let value: number = size;

    for (let i: number = 0; i < units.length; i++) {
        const unit: string = units[i];
        const nextUnit: string | undefined = units[i + 1];
        const divisor: number = useBinaryUnits ? 1024 : 1000;

        if (value < divisor || nextUnit === undefined) {
            return `${value.toFixed(2)} ${unit}`;
        }

        value /= divisor;
    };
};