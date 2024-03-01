import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import 'swiper/css';
import 'swiper/css/navigation';
import Modal from '../components/Modal';
import { useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Consulting = () => {
    const dialog: any = useRef();
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    const feedbacks = [
        {
            id: 1,
            name: 'Allan Branch',
            role: 'CEO of Lifted',
            thumbnail: '/assets/images/testimonial.png',
            message:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
    ];

    const [accordians, setAccordians] = useState<any>(0);

    const css = `[data-height-collapsible] {
        transition: height 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }`;
    return (
        <div>
            <Head>
                <title>DPA | Data Protection Authority - Somalia</title>
                <meta
                    name="DPA"
                    content="DPA Somalia - Ensuring Data Protection and Privacy for Individuals and Organizations. Learn more about our data protection policies and services."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="hotel-resort-banner relative">
                <div className="lg:h-[828px]">
                    <img src="/assets/images/Home-Page 3-01.jpg" className="h-auto w-full object-cover lg:h-full" alt="Data Protection Authority - Somalia" />
                </div>
                <div
                    className="absolute inset-0 z-[1] opacity-70"
                    style={{ background: 'linear-gradient(90deg, rgba(58, 67, 81, 0.85) 57.29%, rgba(58, 67, 81, 0.3) 100%)' }}
                ></div>
                {/* <div className="absolute inset-x-0 top-1/3 z-[1] mr-96 -translate-y-1/2 text-white sm:top-1/2">
                    <div className="container">
                        <div className="max-w-[624px] text-center ltr:md:text-left rtl:md:text-right">
                            <h2 className="text-4xl font-black sm:text-5xl md:text-[70px] md:leading-[88px]">
                                <span className="">Your Right,</span> <br />
                                <span className="text-secondary">Your privacy,</span> <br />
                                <span className="text-5xl text-primary ">Our Responsibility</span>
                            </h2>
                            <p className="mr-40 text-lg font-semibold">
                                <span className="ml mt-4 text-2xl font-semibold">The Somalia Data Protection Authority (DPA),</span>
                                <br /> Founded in 2023 under Law 005, is an independent nationwide authority dedicated to safeguarding individual privacy.
                                Aligned with international privacy principles, DPA focuses on responsible data management and the protection of personal
                                information of Somali people in the digital age.
                            </p>
                        </div>
                    </div>
                </div> */}
                <div className="absolute inset-x-0 bottom-0 z-[1] bg-black/50">
                    <div className="container"></div>
                </div>
            </section>
            <section className="py-12 dark:bg-black lg:py-24">
                <div className="container">
                    <div className="flex flex-col items-center gap-5 lg:flex-row" data-aos="fade-up" data-aos-duration="1000">
                        <div className="flex-none lg:max-w-[130px]">
                            <div className="grid grid-cols-3 gap-3 sm:gap-5 lg:grid-cols-1"></div>
                        </div>
                        <div className="grid flex-1 grid-cols-1 items-center gap-10 md:grid-cols-2">
                            <div className="space-y-4 ltr:md:text-left rtl:md:text-right">
                                <h3 className="text-3xl font-black uppercase text-black dark:text-white sm:text-[40px] sm:leading-[60px]">
                                    Data Protection Authority - <span className="text-secondary"> Somalia </span>
                                </h3>
                                <p className="text-left text-lg font-bold text-[#191919] rtl:text-right md:text-left">
                                    (DPA) is the national independent authority responsible for protecting personal privacy and monitoring that all
                                    organizations are compliant with the Data Protection Act (no.005 which was passed in March 2023). <br /> The role of DPA is
                                    to implement the Data Protection Act, as well as providing services that facilitate protection of personal data, such as;
                                    awareness campaigns, registration, trainings, creating and passing regulations specific to storing and processing data.
                                </p>
                            </div>
                            <div className="">
                                <img src="/assets/images/about us.jpg" className="mx-auto rounded-3xl" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-black bg-[url(/assets/images/insurance/why-bg.svg)] bg-left-top bg-no-repeat py-10 dark:bg-gray-dark lg:py-20">
                <div className="container">
                    {/* <div className="heading text-center">
                        <h6>Pricing Plan</h6>
                        <h4>Choose Affordable Prices</h4>
                    </div> */}
                    <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                        <div
                            className="group flex flex-col rounded-3xl border-2 border-[#BBC0D0]/50 bg-black p-6 px-4 transition dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="mb-4">
                                <h3 className="text-[22px] font-black text-white dark:text-white">DATA CONTROLLERS AND DATA PROCCESORS</h3>
                            </div>
                            <ul className=" mb-6 group-hover:text-white">
                                <li className="flex">
                                    <p className="text-[18px] text-white">
                                        In data protection, a data controller is an entity that decides why and how personal data is processed, bearing the main
                                        responsibility for compliance with data protection laws. They set the purpose and methods for data processing, ensuring
                                        legality and security, and handling individual data rights. <br /> A data processor, on the other hand, is an entity
                                        that processes data on behalf of the controller. They act under the controller's instructions and have specific
                                        obligations, particularly regarding data security.
                                    </p>
                                </li>
                            </ul>
                            <div className="mt-auto border-t-2 border-[#BBC0D0]/50 pt-7">
                                <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                    <Link href="#" className="btn text-md hover:bg-secondry bg-white text-black hover:text-black xl:w-44">
                                        More...
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className="group flex flex-col rounded-3xl border-2 border-[#BBC0D0]/50 bg-black p-6  px-4 transition dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="mb-4">
                                <h3 className="text-[22px] font-black text-white  dark:text-white">DATA SUBJECTS</h3>
                            </div>
                            <ul className="group-hover:text-white">
                                <li className="flex">
                                    <p className="text-[18px] text-white">
                                        People whose personal information are collected, stored and processed are called data subjects. <br /> Know your rights
                                        and learn how to protect your data privacy, online and offline.
                                    </p>
                                </li>
                            </ul>
                            <div className="mt-auto border-t-2 border-[#BBC0D0]/50 pt-7">
                                <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                    <a href="" className="btn text-md hover:bg-secondry bg-white text-black hover:text-black xl:w-44">
                                        More...
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="group flex flex-col rounded-3xl border-2 border-[#BBC0D0]/50 bg-black p-6 px-4 transition dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="mb-8">
                                <h3 className="text-[22px] font-black text-white dark:text-white">TAKE ACTION</h3>
                            </div>
                            <ul className="text-md space-y-7 pb-7 font-bold">
                                <li className="flex items-center justify-between rounded-2xl bg-white transition hover:scale-105 hover:bg-secondary hover:text-white">
                                    <a href="/E-Services" className="flex h-full w-full items-center justify-between p-3">
                                        <p className="text-black">REGISTER</p>
                                        <div className="pr-3">
                                            <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.3">
                                                    <circle cx="8" cy="8" r="8" fill="white" />
                                                </g>
                                                <path
                                                    d="M5 8H11M11 8L8 5M11 8L8 11"
                                                    stroke="black"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                </li>

                                <li className="flex items-center justify-between rounded-2xl bg-white transition hover:scale-105 hover:bg-secondary hover:text-white">
                                    <a href="/E-Services" className="flex h-full w-full items-center justify-between p-3">
                                        <p className="text-black">FILE A COMPLAINT</p>
                                        <div className="pr-3">
                                            <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.3">
                                                    <circle cx="8" cy="8" r="8" fill="white" />
                                                </g>
                                                <path
                                                    d="M5 8H11M11 8L8 5M11 8L8 11"
                                                    stroke="black"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                </li>

                                <li className="flex items-center justify-between rounded-2xl bg-white transition hover:scale-105 hover:bg-secondary hover:text-white">
                                    <a href="/E-Services" className="flex h-full w-full items-center justify-between p-3">
                                        <p className="text-black">REPORT A DATA BREACH</p>
                                        <div className="pr-3">
                                            <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.3">
                                                    <circle cx="8" cy="8" r="8" fill="white" />
                                                </g>
                                                <path
                                                    d="M5 8H11M11 8L8 5M11 8L8 11"
                                                    stroke="black"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                </li>

                                <li className="flex items-center justify-between rounded-2xl bg-white transition hover:scale-105 hover:bg-secondary hover:text-white">
                                    <a href="/faq" className="flex h-full w-full items-center justify-between p-3">
                                        <p className="text-black">FAQ's</p>
                                        <div className="pr-3">
                                            <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.3">
                                                    <circle cx="8" cy="8" r="8" fill="white" />
                                                </g>
                                                <path
                                                    d="M5 8H11M11 8L8 5M11 8L8 11"
                                                    stroke="black"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-white/[55%] to-transparent py-14 dark:from-white/5 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-left">
                        <div className="heading text-left">
                            <h4 className=" inline-block border-b-2 text-3xl font-bold text-black">How We Can Help</h4>
                        </div>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="cursor-pointer text-center">
                            <div className="group cursor-pointer text-center">
                                <div className="relative flex h-auto flex-col items-center justify-start rounded-3xl bg-black bg-[url(/assets/images/world-map.png)] bg-cover bg-top bg-no-repeat pb-8 transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                    <img className="h-[120px] w-auto p-2 transition-all duration-500" src="/assets/images/icons/Policy.png" alt="" />
                                    <h4 className="mt-5 mb-2 text-[24px] font-extrabold text-white transition duration-500 group-hover:text-secondary dark:text-white">
                                        Policy
                                    </h4>
                                    <h6 className="px-4 pt-2 text-[16px] text-white">
                                        DPA establishes a robust privacy and security framework by drafting clear policies and procedures, setting high data
                                        protection standards, and maintaining meticulous records to ensure compliance and safeguard sensitive information.
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer text-center">
                            <div className="group cursor-pointer text-center">
                                <div className="relative flex h-auto flex-col  items-center justify-start rounded-3xl bg-black bg-[url(/assets/images/world-map.png)] bg-cover bg-top bg-no-repeat pb-8 transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                    <img className="h-[120px] w-auto p-2 transition-all duration-500" src="/assets/images/icons/Audit.png" alt="" />
                                    <h4 className="mt-5 mb-2 text-[24px] font-extrabold text-white transition duration-500 group-hover:text-secondary dark:text-white">
                                        Audit
                                    </h4>
                                    <h6 className="px-4 pt-2 text-[16px] text-white">
                                        DPA conducts internal audits on Data protection Act, ISO 27001, and information security compliance to identify gaps and
                                        enhance data protection practices, ensuring organisations meet legal and best practice standards.
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer text-center">
                            <div className="group cursor-pointer text-center">
                                <div className="relative flex h-auto flex-col  items-center justify-start rounded-3xl bg-black bg-[url(/assets/images/world-map.png)] bg-cover bg-top bg-no-repeat pb-8 transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                    <img className="h-[120px] w-auto p-2 transition-all duration-500" src="/assets/images/icons/Training.png" alt="" />
                                    <h4 className="mt-5 mb-2 text-[24px] font-extrabold text-white transition duration-500 group-hover:text-secondary dark:text-white">
                                        Training
                                    </h4>
                                    <h6 className="px-4 pt-2 text-[16px] text-white">
                                        DPA enhances organisational compliance and data protection awareness through tailored onsite training and continuous
                                        awareness programs, delivered by DPA and data security experts to meet specific needs.
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer text-center">
                            <div className="group cursor-pointer text-center">
                                <div className="relative flex h-[380px] flex-col  items-center justify-start rounded-3xl bg-black bg-[url(/assets/images/world-map.png)] bg-cover bg-top bg-no-repeat pb-8 transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                    <img className="h-[120px] w-auto p-2 transition-all duration-500" src="/assets/images/icons/Due Diligence.png" alt="" />
                                    <h4 className="mt-5 mb-2 text-[24px] font-extrabold text-white transition duration-500 group-hover:text-secondary dark:text-white">
                                        Due Diligence
                                    </h4>
                                    <h6 className="px-4 pt-2 text-[16px] text-white">
                                        DPA ensures organisational compliance and data security through rigorous due diligence reviews in supply chain,
                                        technology, procurement, and M&A activities, emphasising robust data protection practices and risk mitigation.
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer text-center">
                            <div className="group cursor-pointer text-center">
                                <div className="relative flex h-auto flex-col  items-center justify-start rounded-3xl bg-black bg-[url(/assets/images/world-map.png)] bg-cover bg-top bg-no-repeat pb-8 transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                    <img className="h-[120px] w-auto p-2 transition-all duration-500" src="/assets/images/icons/Advisory.png" alt="" />
                                    <h4 className="mt-5 mb-2 text-[24px] font-extrabold text-white transition duration-500 group-hover:text-secondary dark:text-white">
                                        Advisory
                                    </h4>
                                    <h6 className="px-4 pt-2 text-[16px] text-white">
                                        DPA offers comprehensive advisory services, including strategic planning, policy development, impact assessments, and
                                        risk management, to guide organisations in establishing robust governance and ensuring compliance with data protection
                                        laws.
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer text-center">
                            <div className="group cursor-pointer text-center">
                                <div className="relative flex h-auto flex-col  items-center justify-start rounded-3xl bg-black bg-[url(/assets/images/world-map.png)] bg-cover bg-top bg-no-repeat pb-8 transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                    <img className="h-[120px] w-auto p-2 transition-all duration-500" src="/assets/images/icons/Support.png" alt="" />
                                    <h4 className="mt-5 mb-2 text-[24px] font-extrabold text-white transition duration-500 group-hover:text-secondary dark:text-white">
                                        Support
                                    </h4>
                                    <h6 className="px-4 pt-2 text-[16px] text-white">
                                        DPA provides essential support for Data protection Act compliance and cybersecurity through a helpline, expert
                                        management services, and DPO-as-a-Service, helping organisations safeguard sensitive data and navigate regulatory
                                        complexities.
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"></div>
                </div>
            </section>
            <Modal
                ref={dialog}
                width="960"
                closeByOverlay={true}
                closeBtn={true}
                closeStyle="floating"
                contentClass="pt-8 px-0 pb-0 !bg-transparent"
                closeBtnClass="!top-0 ltr:!right-0 rtl:!right-auto rtl:!left-0 !text-white !text-3xl"
                modal={false}
            >
                <div className="bg-black !p-4 dark:bg-gray-dark">
                    <div className="relative">
                        <div className="aspect-video">
                            <iframe
                                className="absolute top-0 left-0 h-full w-full"
                                src="https://www.youtube.com/embed/D0UnqGm_miA"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Modal>
            <style>{css}</style>
        </div>
    );
};

export default Consulting;
