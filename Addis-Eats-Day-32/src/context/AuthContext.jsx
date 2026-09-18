import {
    createContext,
    useContext,
    useState
} from "react";


const AuthContext =
    createContext(null);


export function AuthProvider({
    children
}) {

    const [user, setUser] =
        useState(null);


    const login = (userData) => {

        setUser(userData);

    };


    const logout = () => {

        setUser(null);

    };


    const value = {

        user,

        login,

        logout,

        isAuthenticated:
            Boolean(user)

    };


    return (
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>
    );
}


export function useAuth() {

    const context =
        useContext(AuthContext);


    if (context === null) {

        throw new Error(
            "useAuth must be used inside an AuthProvider"
        );

    }


    return context;
}