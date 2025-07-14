"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google"
import Link from "next/link";
import { usePathname } from "next/navigation";


const poppins = Poppins({
	weight: ["700"],
	subsets: ["latin"],
});

interface NavbarItemProps {
	href: string;
	children: React.ReactNode;
	isActive?: boolean;
};

const NavbarItem = ({
	href,
	children,
	isActive,
}: NavbarItemProps) => {
	return (
		<Button variant="outline" className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg" , isActive && "bg-black text-white hover:bg-black hover:text-white")} asChild>
			<Link href={href }>
				{children}
			</Link>
		</Button>
	)
}

const navbarItems = [
	{
		href: "/",
		children: "Home",
	},
	{
		href: "/about",
		children: "About",
	},
	{
		href: "/contact",
		children: "Contact",
	},
]

export const Navbar = () => {
	const pathName = usePathname();
	return (
		<nav className="h-20 text-white  justify-between flex font-medium bg-transparent dark:bg-gray-900">
			<Link href="/" className="flex items-center pl-6">
				<span className={cn("text-4xl font-semibold", poppins.className)}>
					Bánh Cáy
				</span>
			</Link>
			<div className="items-center gap-4 hidden lg:flex">
				{navbarItems.map((item) => (
					<NavbarItem
						key={item.href}
						href={item.href}
						isActive={pathName === item.href}
					>
						{item.children}
					</NavbarItem>
				))}
			</div>
		</nav>
	)
}