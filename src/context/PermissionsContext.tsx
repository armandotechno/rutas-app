import { createContext, useState } from "react";
import { Platform } from "react-native";
import { PERMISSIONS, PermissionStatus, request } from "react-native-permissions";


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

    const [ permissions, setPermissions ] = useState( permissionInitState )

    const askLocationPermission = async() => {

        let permissionStatus: PermissionStatus
        
        if ( Platform.OS === 'android' ) {
          permissionStatus = await request( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION )
        } else {
          permissionStatus = await request( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE )
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        });
    }
    const checkLocationPermission = () => {

    }
    
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