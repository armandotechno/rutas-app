import { createContext } from "react";
import { PermissionStatus } from "react-native-permissions";


export interface PermissionState {
    locationStatus: PermissionStatus
}

export const permissionInitState: PermissionState = {
    locationStatus: 'unavailable',
}

export const PermissionsContext = createContext({});

export const PermissionsProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    

    return (
        <PermissionsContext.Provider value={{}}>
            { children }
        </PermissionsContext.Provider>
    )
}