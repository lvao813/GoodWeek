import DeviceInfo from 'react-native-device-info'

export const ModelInfo = DeviceInfo.getModel();

export const DeviceName = DeviceInfo.getSystemName();

export const Version = DeviceInfo.getSystemVersion();

export const AppVersion = DeviceInfo.getVersion();

export const Imei = DeviceInfo.getUniqueID();