import Link from "next/link";
import { useState } from "react";
import Disclaimer from "./LegalDocuments/Disclaimer";
import PrivacyPolicy from "./LegalDocuments/PrivacyPolicy";
import TermsAndConditions from "./LegalDocuments/TermsAndConditions";
import Modal from "@/components/Modal";

const legalDocuments = {
	disclaimer: <Disclaimer />,
	privacyPolicy: <PrivacyPolicy />,
	termsAndConditions: <TermsAndConditions />,
};

const Footer = () => {
	const [selectedLegalDocument, setSelectedLegalDocument] = useState(false);

	const handleClose = () => {
		setSelectedLegalDocument(false);
	};
	return (
		<ul className="w-3/4 mx-auto flex gap-10 items-center justify-center text-slate-300">
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>
				<button onClick={() => setSelectedLegalDocument("disclaimer")}>
					Disclaimer
				</button>
			</li>
			<li>
				<button onClick={() => setSelectedLegalDocument("privacyPolicy")}>
					Privacy Policy
				</button>
			</li>
			<li>
				<button onClick={() => setSelectedLegalDocument("termsAndConditions")}>
					Terms and Conditions
				</button>
			</li>
			{selectedLegalDocument && (
				<Modal onClose={handleClose}>
					<div className="overflow-y-auto h-full">
						{legalDocuments[selectedLegalDocument]}
					</div>
				</Modal>
			)}
		</ul>
	);
};

export default Footer;
