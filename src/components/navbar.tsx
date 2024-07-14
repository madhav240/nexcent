"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";

function ToggleThemeButton() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none ">
          <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all text-yellow-400 dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-6 w-6 xl:top-0 top-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Navbar() {
  return (
    <>
      <div className="justify-center items-center relative h-20 hidden xl:flex bg-primary-silver dark:bg-slate-900">
        <div className="absolute left-16">
          <Image
            src="/nexcent-logo.svg"
            alt="Nexcent Logo"
            width={154}
            height={24}
            priority
            className="dark:hidden"
          />
          <Image
            src="/white-nexcent-logo.svg"
            alt="Nexcent Logo"
            width={154}
            height={24}
            priority
            className="hidden dark:block"
          />
        </div>
        <div className="absolute">
          <div className="flex gap-x-12">
            <a href="#" className="font-semibold">
              Home
            </a>
            <a href="#">Service</a>
            <a href="#">Feature</a>
            <a href="#">Product</a>
            <a href="#">Testimonial</a>
            <a href="#">FAQ</a>
          </div>
        </div>
        <div className="absolute right-28 space-x-3">
          <Button
            variant="link"
            className="text-primary-brand h-10 hover:text-primary-brand/80 hover:no-underline"
          >
            Login
          </Button>
          <Button className="bg-primary-brand h-10 hover:bg-primary-brand/80 dark:text-foreground">
            Sign up
          </Button>
        </div>
        <div className="absolute right-10 mt-1">
          <ToggleThemeButton />
        </div>
      </div>

      {/* mobile-navbar */}
      <div className="flex xl:hidden  justify-center items-center relative h-20 bg-primary-silver dark:bg-slate-900">
        <div className="absolute left-3 sm:left-5">
          <Image
            src="/nexcent-logo.svg"
            alt="Nexcent Logo"
            width={154}
            height={24}
            priority
            className="dark:hidden"
          />
          <Image
            src="/white-nexcent-logo.svg"
            alt="Nexcent Logo"
            width={154}
            height={24}
            priority
            className="hidden dark:block"
          />
        </div>
        <div className="absolute right-4 sm:right-6 flex gap-x-12 items-center justify-center">
          <span className="mt-2 ">
            <ToggleThemeButton />
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="w-12 dark:bg-foreground"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(-1, 0, 0, 1, 0, 0)"
                  fill="none"
                  className="w-8 h-8"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M4 12H20M4 8H20M4 16H12"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="stroke-primary-brand"
                    ></path>
                  </g>
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36 mr-5">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <a href="#" className="font-semibold">
                    Home
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#">Service</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#">Feature</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#">Product</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#">Testimonial</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#">FAQ</a>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="">
                  <button className="text-primary-brand hover:text-primary-brand/80 text-left w-full">
                    Login
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-0">
                  <button className="bg-primary-brand p-2 rounded-sm hover:bg-primary-brand/80 text-left w-full text-white">
                    Signup
                  </button>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
