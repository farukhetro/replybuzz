"use client";

import { useEffect, useState } from "react";
import { User, GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const signInWithGoogle = async () => {
        setLoading(true);
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);

            // Get the ID token to pass to our server cookie
            const idToken = await result.user.getIdToken();

            const res = await fetch("/api/auth/session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ idToken }),
            });

            if (!res.ok) {
                throw new Error("Failed to create server session");
            }
        } catch (error) {
            console.error("Error signing in with Google", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logOut = async () => {
        try {
            await firebaseSignOut(auth);
            await fetch("/api/auth/session", { method: "DELETE" });
        } catch (error) {
            console.error("Error signing out:", error);
        } finally {
            window.location.href = "/login";
        }
    };

    return {
        user,
        loading,
        signInWithGoogle,
        logOut,
    };
}
