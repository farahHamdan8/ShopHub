import { createContext, useState } from "react";
import { Children } from "react";
export const AuthContext = createContext(null);


export default function AuthProvider({ children }) {
    
    const [user, setUser] = useState(localStorage.getItem("currenUserEmail") ? { email: localStorage.getItem("currenUserEmail") } : null);

    function signup(email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        if (users.find(u => u.email === email)) {
            return { success: false, error: "Email already exists" };
        }
        const newUser = { email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currenUserEmail", email);

        setUser({ email });
        return { success: true };
    }
    function login(email, password) {

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(u => u.email === email && u.password === password);


        if (!user) {
            return { success: false, error: "Invalid email or password" }
        }
        localStorage.setItem("currenUserEmail", email)

        setUser({ email });
        return { success: true };
    }
    function logOut() {

        localStorage.removeItem("currenUserEmail");

        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ user, login, signup, logOut }}>{children}</AuthContext.Provider>
    )

}