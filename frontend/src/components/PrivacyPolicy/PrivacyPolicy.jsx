import { useLocation } from "react-router-dom";
import MetaData from "../Layout/MetaData"
import React from "react";

const PrivacyPolicy = () => {

    const location = useLocation();

    return (
        <>
            <MetaData title={"The Clotya Aspire | Privacy Policy - Protecting Your Information"}
                description={"At The Clotya Aspire, we value your privacy. Learn how we collect, use, and protect your personal information."}
                keywords={"The Clotya Aspire, privacy policy, data protection, personal information, data security, Zirakpur"} 
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            <section className="max-w-5xl m-auto py-14 px-2.5 text-left flex flex-col gap-5">
                <h3 className="text-3xl uppercase font-semibold text-primary-brown pt-1 text-center">Privacy Policy</h3>
                <div className="w-20 h-1 bg-black m-auto"></div>
                <p>This website is not the official one; it is only meant to be used for informative purposes. In our commitment to safeguarding your personal information, we have formulated this comprehensive privacy policy to protect your interests and data on our website.</p>

                <h5 className="text-xl text-primary-brown font-semibold">Update of Privacy Policy</h5>
                <p>This privacy policy is open to revision and review at any time, without notification or consent. Therefore, please re-visit the website and regularly go through the terms and conditions of this privacy policy to stay informed about the modifications that have been made.</p>


                <h5 className="text-xl text-primary-brown font-semibold">User Information</h5>
                <p>By accessing our website, you accept our terms and give permission for us to collect and use any information you voluntarily submit. While certain visits might not require personal information, others could in order to provide access to particular links or websites. We use the information you have given us to deliver information and updates, confirm receipt of your message, and offer pertinent goods and services. We do not share personal information with outside parties, and you have the option to unsubscribe from our email list.</p>


                <h5 className="text-xl text-primary-brown font-semibold">Security</h5>
                <p>Sensitive information is encrypted during transmission between the client and server. We restrict employee access to your personal information and hold them to high levels of confidentiality. We may use cookies for security, session continuity, and customization purposes. Rejecting cookies may limit your access to certain services or features.</p>

                <p>This website is not the official one; it is only meant to be used for informative purposes.</p>

            </section>
        </>
    )
}

export default PrivacyPolicy