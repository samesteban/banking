import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
	const loggedIn = {
		firstName: "Sam",
		lastName: "Esteban",
		email: "hi@samesteban.com",
	};
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn?.firstName || "Guest"}
						subtext="Access and manage your account and transactions"
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1250.36}
					/>
				</header>
			</div>
			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[
					{ currentBalance: 1233.18 },
					{ currentBalance: 456.18 },
				]}
			/>
		</section>
	);
};

export default Home;
