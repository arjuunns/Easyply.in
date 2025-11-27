import { useState } from "react";
import { User, Bell, Shield, Palette, Code, Database, LogOut, Save } from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    company: "Tech Corp",
    role: "Software Engineer",
    experience: "intermediate",
    theme: "dark",
    notifications: {
      email: true,
      push: true,
      interviews: true,
      updates: false,
    },
    privacy: {
      profileVisible: true,
      showActivity: false,
      allowMessages: true,
    },
    preferences: {
      defaultLanguage: "javascript",
      autoSave: true,
      codeTheme: "vs-dark",
    },
  });

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "privacy", label: "Privacy & Security", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "preferences", label: "Preferences", icon: Code },
  ];

  const themes = [
    { id: "dark", name: "Dark", color: "bg-gray-900" },
    { id: "red", name: "Red", color: "bg-red-600" },
    { id: "green", name: "Green", color: "bg-green-600" },
    { id: "blue", name: "Blue", color: "bg-blue-600" },
    { id: "lemon", name: "Lemon", color: "bg-yellow-400" },
    { id: "magenta", name: "Magenta", color: "bg-pink-600" },
  ];

  const handleThemeChange = (themeId: string) => {
    setFormData({ ...formData, theme: themeId });
    document.documentElement.classList.remove("dark", "red-theme", "green-theme", "blue-theme", "lemon-theme", "magenta-theme");
    if (themeId === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add(`${themeId}-theme`);
    }
  };

  const handleSave = () => {
    console.log("Settings saved:", formData);
    // Add save logic here
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-4 space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
              <div className="pt-4 border-t border-border">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-lg p-6">
              {/* Profile Settings */}
              {activeTab === "profile" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Profile Information
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Update your personal information and professional details
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Current Role
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Experience Level
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) =>
                          setFormData({ ...formData, experience: e.target.value })
                        }
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="beginner">Beginner (0-2 years)</option>
                        <option value="intermediate">Intermediate (2-5 years)</option>
                        <option value="advanced">Advanced (5+ years)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Settings */}
              {activeTab === "notifications" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Notification Preferences
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Choose what notifications you want to receive
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { key: "email", label: "Email Notifications", desc: "Receive updates via email" },
                      { key: "push", label: "Push Notifications", desc: "Browser push notifications" },
                      { key: "interviews", label: "Interview Reminders", desc: "Get reminded about upcoming interviews" },
                      { key: "updates", label: "Product Updates", desc: "New features and improvements" },
                    ].map((item) => (
                      <div
                        key={item.key}
                        className="flex items-center justify-between p-4 bg-accent/30 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-foreground">{item.label}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.notifications[item.key as keyof typeof formData.notifications]}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                notifications: {
                                  ...formData.notifications,
                                  [item.key]: e.target.checked,
                                },
                              })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Privacy Settings */}
              {activeTab === "privacy" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Privacy & Security
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Control your privacy and security settings
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { key: "profileVisible", label: "Public Profile", desc: "Make your profile visible to others" },
                      { key: "showActivity", label: "Show Activity", desc: "Display your recent activity" },
                      { key: "allowMessages", label: "Allow Messages", desc: "Receive messages from other users" },
                    ].map((item) => (
                      <div
                        key={item.key}
                        className="flex items-center justify-between p-4 bg-accent/30 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-foreground">{item.label}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.privacy[item.key as keyof typeof formData.privacy]}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                privacy: {
                                  ...formData.privacy,
                                  [item.key]: e.target.checked,
                                },
                              })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Account Actions
                    </h3>
                    <div className="space-y-3">
                      <button className="w-full px-4 py-3 bg-accent hover:bg-accent/80 text-accent-foreground rounded-lg transition-colors text-left">
                        <p className="font-medium">Change Password</p>
                        <p className="text-sm text-muted-foreground">Update your account password</p>
                      </button>
                      <button className="w-full px-4 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors text-left">
                        <p className="font-medium">Delete Account</p>
                        <p className="text-sm">Permanently delete your account and data</p>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Appearance Settings */}
              {activeTab === "appearance" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Appearance
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Customize how the application looks
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-4">
                      Theme
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {themes.map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => handleThemeChange(theme.id)}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            formData.theme === theme.id
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className={`w-full h-20 ${theme.color} rounded-md mb-3`}></div>
                          <p className="text-foreground font-medium">{theme.name}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <label className="block text-sm font-medium text-foreground mb-4">
                      Code Editor Theme
                    </label>
                    <select
                      value={formData.preferences.codeTheme}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferences: { ...formData.preferences, codeTheme: e.target.value },
                        })
                      }
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="vs-dark">VS Dark</option>
                      <option value="vs-light">VS Light</option>
                      <option value="hc-black">High Contrast</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Preferences Settings */}
              {activeTab === "preferences" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Coding Preferences
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Set your default coding preferences
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Default Programming Language
                      </label>
                      <select
                        value={formData.preferences.defaultLanguage}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferences: { ...formData.preferences, defaultLanguage: e.target.value },
                          })
                        }
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="cpp">C++</option>
                        <option value="csharp">C#</option>
                        <option value="go">Go</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">Auto-save Code</p>
                        <p className="text-sm text-muted-foreground">
                          Automatically save your code while typing
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.preferences.autoSave}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              preferences: { ...formData.preferences, autoSave: e.target.checked },
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      Data & Storage
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                        <div>
                          <p className="font-medium text-foreground">Cache Size</p>
                          <p className="text-sm text-muted-foreground">24.5 MB used</p>
                        </div>
                        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                          Clear Cache
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                        <div>
                          <p className="font-medium text-foreground">Interview History</p>
                          <p className="text-sm text-muted-foreground">15 sessions stored</p>
                        </div>
                        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                          Export Data
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Save Button */}
              <div className="mt-8 pt-6 border-t border-border flex justify-end gap-4">
                <button className="px-6 py-2 border border-border text-foreground rounded-lg hover:bg-accent transition-colors">
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
