"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useAuth } from "@/hooks/use-auth";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

export default function SettingsPage() {
    const { user } = useAuth();
    const [name, setName] = useState("");
    const [saving, setSaving] = useState(false);
    const [autoReply, setAutoReply] = useState(true);
    const [autoPublish, setAutoPublish] = useState(true);
    const [settingsSaved, setSettingsSaved] = useState(false);

    // Load settings from Firestore
    useEffect(() => {
        if (!user) return;
        if (user.displayName) setName(user.displayName);
        getDoc(doc(db, "users", user.uid)).then(snap => {
            if (snap.exists()) {
                const d = snap.data();
                if (d.autoReply !== undefined) setAutoReply(d.autoReply);
                if (d.autoPublish !== undefined) setAutoPublish(d.autoPublish);
            }
        });
    }, [user]);

    const saveProfile = async () => {
        if (!user) return;
        setSaving(true);
        try {
            await updateProfile(user, { displayName: name });
            await setDoc(doc(db, "users", user.uid), { displayName: name }, { merge: true });
            setSettingsSaved(true);
            setTimeout(() => setSettingsSaved(false), 3000);
        } catch (e) {
            console.error("Failed to save profile", e);
        } finally {
            setSaving(false);
        }
    };

    const saveAutomationSetting = async (key: string, value: boolean) => {
        if (!user) return;
        await setDoc(doc(db, "users", user.uid), { [key]: value }, { merge: true });
    };

    return (
        <div className="space-y-8 max-w-3xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground mt-1">Manage your account and preferences.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Profile Details</CardTitle>
                    <CardDescription>Update your personal information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label>Full Name</Label>
                        <Input
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Email Address</Label>
                        <Input
                            placeholder="your.email@example.com"
                            value={user?.email || ""}
                            disabled
                        />
                        <p className="text-xs text-muted-foreground">Email is handled by Google OAuth and cannot be changed here.</p>
                    </div>
                    <Button className="bg-primary text-black hover:bg-primary/90" onClick={saveProfile} disabled={saving}>
                        {saving ? "Saving..." : settingsSaved ? "Saved ✓" : "Save Changes"}
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Global Automation Settings</CardTitle>
                    <CardDescription>Configure AI behavior across all locations.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="auto-reply">Auto-reply to 5-star reviews</Label>
                            <p className="text-sm text-muted-foreground">Automatically send thank you notes to positive reviews.</p>
                        </div>
                        <Switch id="auto-reply" checked={autoReply} onCheckedChange={v => { setAutoReply(v); saveAutomationSetting("autoReply", v); }} />
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                        <div className="space-y-0.5">
                            <Label htmlFor="auto-publish">Auto-publish GBP Posts</Label>
                            <p className="text-sm text-muted-foreground">Generate and post articles directly to your profile.</p>
                        </div>
                        <Switch id="auto-publish" checked={autoPublish} onCheckedChange={v => { setAutoPublish(v); saveAutomationSetting("autoPublish", v); }} />
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                        <div className="space-y-0.5">
                            <Label htmlFor="smart-delay">Smart Delay System</Label>
                            <p className="text-sm text-muted-foreground">Randomize reply times (10-60s) for spam safety.</p>
                        </div>
                        <Switch id="smart-delay" defaultChecked disabled />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
