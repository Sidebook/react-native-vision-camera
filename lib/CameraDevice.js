/**
 * Parses an array of physical device types into a single {@linkcode PhysicalCameraDeviceType} or {@linkcode LogicalCameraDeviceType}, depending what matches.
 * @method
 */
export const parsePhysicalDeviceTypes = (physicalDeviceTypes) => {
    if (physicalDeviceTypes.length === 1) {
        // @ts-expect-error for very obvious reasons
        return physicalDeviceTypes[0];
    }
    const hasWide = physicalDeviceTypes.includes('wide-angle-camera');
    const hasUltra = physicalDeviceTypes.includes('ultra-wide-angle-camera');
    const hasTele = physicalDeviceTypes.includes('telephoto-camera');
    if (hasTele && hasWide && hasUltra)
        return 'triple-camera';
    if (hasWide && hasUltra)
        return 'dual-wide-camera';
    if (hasWide && hasTele)
        return 'dual-camera';
    throw new Error(`Invalid physical device type combination! ${physicalDeviceTypes.join(' + ')}`);
};
