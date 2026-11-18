"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Bell,
  Sun,
  Moon,
  Monitor,
  LogOut,
  User,
  Settings,
  ChevronDown,
  Globe,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface HeaderProps {
  onMenuClick: () => void;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    role: string;
  } | null;
  onLogout: () => void;
}

export function Header({ onMenuClick, user, onLogout }: HeaderProps) {
  const pathname = usePathname();
  const [theme, setTheme] = React.useState<"light" | "dark" | "system">("system");
  const [language, setLanguage] = React.useState<"en" | "bn">("en");

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const themes: ("light" | "dark" | "system")[] = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  const themeIcons = {
    light: Sun,
    dark: Moon,
    system: Monitor,
  };

  const themeLabels = {
    light: "Light",
    dark: "Dark",
    system: "System",
  };

  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-navy-200 lg:hidden">
      <div className="flex h-16 items-center justify-between px-4">
        <button
          onClick={onMenuClick}
          className="btn-ghost p-2 -ml-2"
          aria-label="Open menu"
          aria-expanded="false"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>

        <Link href="/" className="flex items-center gap-2 flex-1 justify-center">
          <div className="h-8 w-8 rounded-lg bg-navy-900 flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-white" aria-hidden="true" />
          </div>
          <span className="font-bold text-navy-900 text-lg">JOBPREP BD</span>
        </Link>

        <div className="flex items-center gap-1 ml-auto">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={toggleTheme}
                className="btn-ghost p-2 h-10 w-10"
                aria-label={`Current theme: ${themeLabels[theme]}. Click to change.`}
              >
                {(() => {
                  const ThemeIcon = themeIcons[theme];
                  return <ThemeIcon className="h-5 w-5" aria-hidden="true" />;
                })()}
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="center">
              <p className="text-sm">Current: {themeLabels[theme]}. Click to cycle.</p>
            </TooltipContent>
          </Tooltip>

          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="btn-ghost p-2 h-10 w-10 relative" aria-label="User menu">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback name={user.name} />
                      </Avatar>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="end">
                    <p className="text-sm">{user.name}</p>
                  </TooltipContent>
                </Tooltip>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium text-navy-900">{user.name}</p>
                    <p className="text-xs text-navy-500">{user.email}</p>
                    <p className="text-xs badge-primary">{user.role}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/student/profile" className="flex w-full items-center justify-start gap-2">
                    <User className="h-4 w-4" aria-hidden="true" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/student/settings" className="flex w-full items-center justify-start gap-2">
                    <Settings className="h-4 w-4" aria-hidden="true" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout} className="text-red-600 focus:text-red-600">
                  <LogOut className="h-4 w-4 mr-2" aria-hidden="true" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {!user && (
            <div className="flex items-center gap-2">
              <Link href="/auth/login" className="btn-ghost text-sm px-3">
                Login
              </Link>
              <Link href="/auth/register" className="btn-primary text-sm px-4">
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
