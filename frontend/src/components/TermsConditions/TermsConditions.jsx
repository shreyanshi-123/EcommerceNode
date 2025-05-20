import { useLocation } from "react-router-dom";
import MetaData from "../Layout/MetaData"
import React from "react";

const TermsConsitions = () => {

    const location = useLocation();

    return (
        <>
            <MetaData title={"The Clotya Aspire | Terms & Conditions"}
                description={"Review our Terms & Conditions before exploring The Clotya Aspire's luxurious 3 & 4 BHK flats in Zirakpur. Understand the framework for using our website and services."}
                keywords={"The Clotya Aspire, terms and conditions, user agreement, website usage, legal disclaimers, Zirakpur, 3 BHK flats, 4 BHK flats, luxury apartments"} 
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
                

            <section className="max-w-5xl m-auto py-14 px-2.5 text-left flex flex-col gap-5">
                <h3 className="text-3xl uppercase font-semibold text-primary-brown pt-1 text-center">Terms & Conditions</h3>
                <div className="w-20 h-1 bg-black m-auto"></div>

                <p>Please be advised that accessing or utilizing the landing page implies the user's consent to abide by the following terms and conditions:</p>

                <h5 className="text-xl text-primary-brown font-semibold">Intellectual Property</h5>
                <p>All content, images, logos, and other materials on this landing page are the property of respective project developer or its licensors. These properties are safeguarded by intellectual property laws, and users are expressly prohibited from copying, altering, distributing, or utilizing any content without obtaining prior written permission.</p>


                <h5 className="text-xl text-primary-brown font-semibold">Property Information</h5>
                <p>This landing page’s content, which includes details of the properties, costs, and availability, is subject to change at any time. The Company is not responsible for any inaccuracies or omissions in the information provided.</p>

                <h5 className="text-xl text-primary-brown font-semibold">User Obligations</h5>
                <p>Users are obligated to furnish accurate and current information when submitting inquiries or requests via the landing page. Additionally, users must commit to refraining from engaging in any unlawful or harmful activities, such as hacking, spamming, or transmitting malicious software.</p>


                <h5 className="text-xl text-primary-brown font-semibold">Disclaimer of Liability</h5>
                <p>The Company explicitly disclaims liability for any damages, losses, or injuries arising from the use of the landing page or reliance on the provided information. This disclaimer extends to encompass, but is not limited to, financial losses, property damage, or any other direct or indirect damages.</p>


                <h5 className="text-xl text-primary-brown font-semibold">Links to Third-Party Websites</h5>
                <p>This landing page may contain links to external websites or resources. We do not endorse or assume responsibility for the content, privacy practices, or availability of those third-party sites.</p>


                <h5 className="text-xl text-primary-brown font-semibold">Modifications to the Terms</h5>
                <p>The Company may update or modify these terms and conditions at any time without prior notice. We encourage you to review these terms periodically to stay informed about any changes.</p>

                <h5 className="text-xl text-primary-brown font-semibold">Governing Law and Jurisdiction</h5>
                <p>Any legal disputes arising from your use of this landing page will be governed by the laws of the State of Maharashtra and will be resolved in the courts of Mumbai.</p>


            </section>
        </>
    )
}

export default TermsConsitions