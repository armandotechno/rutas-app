import { createContext, useState } from "react";
import { PermissionStatus } from "react-native-permissions";


export interface PermissionState {
    locationStatus: PermissionStatus
}

export const permissionInitState: PermissionState = {
    locationStatus: 'unavailable',
}

type PermissionsContextProps = {
    permissions: PermissionState;
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}

export const PermissionsContext = createContext({} as PermissionsContextProps);

export const PermissionsProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

    const askLocationPermission = () => {

    }
    const checkLocationPermission = () => {

    }
    
    const [ permissions, setPermissions ] = useState( permissionInitState )

    return (
        <PermissionsContext.Provider value={{
            permissions,
            askLocationPermission,
            checkLocationPermission
        }}>
            { children }
        </PermissionsContext.Provider>
    )
}