import Head from "next/head";
import LandingPage from "@/components/LandingPage";
import { roboto } from "@/util/getFont";

export default function Home() {
	return (
		<>
			<Head>
				<title>Paul McNamara</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Explore Paul's portfolio and discover his creative and innovative approach to design. With a keen eye for detail and a passion for delivering exceptional results, Paul's portfolio showcases his diverse range of skills in graphic design, web development, and branding. Browse through his work and be inspired by his talent and expertise."
				/>
				<meta
					property="og:title"
					content="Paul's Portfolio: Creative Designs & Web Development Journey"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content="Explore Paul's portfolio and discover his creative and innovative approach to design. With a keen eye for detail and a passion for delivering exceptional results, Paul's portfolio showcases his diverse range of skills in graphic design, web development, and branding. Browse through his work and be inspired by his talent and expertise."
				/>
				<meta property="og:image" content="/images/og-image.jpg" />
				<meta property="og:url" content="https://paulmcnamarasoftware.com" />
				<link rel="icon" href="/favicon/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest" />
			</Head>
			<div className={roboto.variable}>
				<LandingPage />
			</div>
		</>
	);
}
