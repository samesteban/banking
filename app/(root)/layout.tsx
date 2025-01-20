import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const loggedIn = {
		firstName: "Sam",
		lastName: "Esteban",
		email: "hi@samesteban.com",
	};
	return (
		<main className="font-inter h-screen flex w-full">
			<Sidebar user={loggedIn} />
			<div className="flex size-full flex-col">
				<div className="root-layout">
					<Image
						src="/icons/logo.svg"
						alt="menu icon"
						width={30}
						height={30}
					/>
					<div>
						<MobileNavbar user={loggedIn} />
					</div>
				</div>
				{children}
			</div>
		</main>
	);
}
