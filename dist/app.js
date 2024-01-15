"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFileSize = void 0;
function formatFileSize(size, useBinaryUnits = false) {
    const units = useBinaryUnits
        ? ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
        : ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let value = size;
    for (let i = 0; i < units.length; i++) {
        const unit = units[i];
        const nextUnit = units[i + 1];
        const divisor = useBinaryUnits ? 1024 : 1000;
        if (value < divisor || nextUnit === undefined) {
            return `${value.toFixed(2)} ${unit}`;
        }
        value /= divisor;
    }
    ;
}
exports.formatFileSize = formatFileSize;
;
