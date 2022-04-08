import React, {
    createContext, useContext, ReactNode, useState, useEffect
} from 'react';
import { Alert } from "react-native";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Users = {
    id: string;
    name: string;
    isAdmin: boolean;
}

type AuthContextData = {
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    isLogging: boolean;
    user: Users | null;
}

type authProviderProps = {
    children: ReactNode
}

const USER_COLLECTION = '@gopizza:users '

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: authProviderProps) {
    const [user, setUser] = useState<Users | null>(null);
    const [isLogging, setIslogging] = useState(false);

    async function signIn(email: string, password: string) {
        if (!email || !password) {
            return Alert.alert('Login', 'Informe o e-mail e a senha');
        }
        setIslogging(true);

        auth()
            .signInWithEmailAndPassword(email, password)
            .then(account => {
                firestore()
                    .collection('users')
                    .doc(account.user.uid)
                    .get()
                    .then(async (profile) => {
                        const { name, isAdmin } = profile.data() as Users;

                        if (profile.exists) {
                            const userData = {
                                id: account.user.uid,
                                name,
                                isAdmin
                            };

                            await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(userData));
                            setUser(userData)
                        }
                    })
                    .catch(() => Alert.alert('Login', 'Não foi possível buscar os dados de perfil do usuário.'));
            })
            .catch(error => {
                const { code } = error;

                if (code === 'auth/user-not-found' || code === 'auth/wrong-password') {
                    return Alert.alert('Login', 'E-mail e/ou senha inválida.')
                }
                else {
                    return Alert.alert('Login', 'Não foi possível realizar o login.');
                }
            })
            .finally(() => setIslogging(false));
    }

    async function loudUserStorageData() {
        setIslogging(true);

        const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

        if (storedUser) {
            const userData = JSON.parse(storedUser) as Users;
            console.log(userData);
            setUser(userData);
        }

        setIslogging(false);
    }

    // Fórmula de desautenticação: LogOut
    // Fórmula de desautenticação: LogOut

    async function signOut() {
        await auth().signOut();
        await AsyncStorage.removeItem(USER_COLLECTION);
        setUser(null);
    }


    // Redefinição de senha
    // Redefinição de senha
    async function forgotPassword(email: string) {
        if (!email) {
            return Alert.alert('Redefinir senha', 'Informe o e-mail.');
        }

        auth()
            .sendPasswordResetEmail(email)
            .then(() => Alert.alert('Redefinir senha', 'Enviamos um link no seu e-mail para redefinir sua senha.'))
            .catch(() => Alert.alert('Redefinir senha', 'Não foi possível enviar o e-mail para redefinir senha.'))
    }

    useEffect(() => {
        loudUserStorageData();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            signIn,
            signOut,
            isLogging,
            forgotPassword
        }}>
            {children}

        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth }