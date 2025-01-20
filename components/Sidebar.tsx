"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SidebarProps) => {
	const pathname = usePathname();
	return (
		<div className="sidebar">
			<nav className="flex flex-col gap-4">
				<Link
					href="/"
					className="mb-12 cursor-pointer items-center gap-2 flex justify-start"
				>
					<Image
						src="/icons/logo.svg"
						alt="Horizon Logo"
						width={34}
						height={34}
						className="size-[24px] max-xl:size-14"
					/>
					<h1 className="sidebar-logo">Horizon</h1>
				</Link>
				{sidebarLinks.map((link) => {
					const isActive =
						pathname === link.route ||
						pathname.startsWith(`${link.route}/`);
					return (
						<Link
							key={link.label}
							href={link.route}
							className={cn("sidebar-link", {
								"bg-bank-gradient": isActive,
							})}
						>
							<div className="relative size-6">
								<Image
									src={link.imgURL}
									alt={link.label}
									fill
									className={cn({
										"brightness-[3] invert-0": isActive,
									})}
								/>
							</div>
							<p
								className={cn("sidebar-label", {
									"!text-white": isActive,
								})}
							>
								{link.label}
							</p>
						</Link>
					);
				})}
				USER
			</nav>
			FOOTER
		</div>
	);
};

export default Sidebar;
