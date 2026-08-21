"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Pause, Play } from "lucide-react";

export function AutomationToggle() {
    const { user } = useAuth();
    const [paused, setPaused] = useState(false);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!user) return;
        getDoc(doc(db, "users", user.uid)).then(snap => {
            if (snap.exists()) {
                const d = snap.data();
                setPaused(d.automationPaused === true);
            }
        });
    }, [user]);

    const toggle = async () => {
        if (!user) return;
        setSaving(true);
        const next = !paused;
        try {
            await setDoc(doc(db, "users", user.uid), { automationPaused: next }, { merge: true });
            setPaused(next);
        } catch (e) {
            console.error("Failed to toggle automation", e);
        } finally {
            setSaving(false);
        }
    };

    return (
        <Button
            onClick={toggle}
            disabled={saving}
            variant={paused ? "default" : "outline"}
            className={paused ? "bg-primary text-black hover:bg-primary/90" : ""}
        >
            {paused ? (
                <><Play className="w-4 h-4 mr-2" /> Resume Automation</>
            ) : (
                <><Pause className="w-4 h-4 mr-2" /> Pause All Automation</>
            )}
        </Button>
    );
}
