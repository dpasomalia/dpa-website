import Link from 'next/link';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay, Virtual } from 'swiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Testimonial from '../components/Testimonial';
import CountUp from 'react-countup';

const Eservices = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const feedbacks = [
        {
            id: 1,
            name: 'Jack danver',
            role: 'Patient of cancer',
            thumbnail: '/assets/images/testimonial3.png',
            message: 'I had a great experience with doctor ralph Edward. His surgery technique is very good. i satisfied with his team members. Thank you!!',
        },
    ];

    return (
        <div>
            <Head>
                <title>Services | Data Protection Athourity</title>
            </Head>
            <section className="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
                <section className="bg-gradient-to-r from-[#FCF1F4] to-[#EDFBF9] py-14 lg:py-[100px]">
                    <div className="container">
                        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                            <div
                                className="group flex flex-col rounded-3xl border-2 border-[#BBC0D0]/80 bg-[#F7F7F7] p-6  px-4 transition dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="mb-4">
                                    <h3 className="text-[22px] font-black text-black  dark:text-white">REGISTRATION FORM</h3>
                                </div>
                                <div className="border-t-2 border-[#BBC0D0]/50 pt-3"></div>
                                <ul className="mb-10 group-hover:text-white">
                                    <li className="flex">
                                        <p className="text-[18px] text-black">
                                            This registration form is for the data controllers and data processors, and this document is used by Data Protection
                                            Authority (DPA) to collect information from entities that handle personal data. <br /> The registration is part of
                                            compliance requirements under data protection Act of somalia.
                                        </p>
                                    </li>
                                </ul>

                                <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                    <a
                                        download
                                        href="/assets/forms /Data controller.pdf"
                                        className="btn text-md hover:bg-secondry bg-black text-white hover:text-black xl:w-44"
                                    >
                                        DOWNLOAD
                                    </a>
                                </div>
                            </div>
                            <div
                                className="group flex flex-col rounded-3xl border-2 border-[#BBC0D0]/80 bg-[#F7F7F7] p-6  px-4 transition dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="mb-4">
                                    <h3 className="text-[22px] font-black text-black  dark:text-white">COMPLAINT FORM</h3>
                                </div>
                                <div className="border-t-2 border-[#BBC0D0]/50 pt-3"></div>
                                <ul className="mb-10 group-hover:text-white">
                                    <li className="flex">
                                        <p className="text-[18px] text-black">
                                            The complaint handling form is a formal mechanism that allows individuals to report concerns or lodge complaints
                                            about how their personal data is being processed, handled, or protected by an organization. <br /> This is an
                                            essential aspect of data protection regulations of somalia.
                                        </p>
                                    </li>
                                </ul>

                                <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                    <a
                                        download
                                        href="/assets/forms /COMPLIANT HANDLING FORM.pdf"
                                        className="btn text-md hover:bg-secondry bg-black text-white hover:text-black xl:w-44"
                                    >
                                        DOWNLOAD
                                    </a>
                                </div>
                            </div>
                            <div
                                className="group flex flex-col rounded-3xl border-2 border-[#BBC0D0]/80 bg-[#F7F7F7] p-6  px-4 transition dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="mb-4">
                                    <h3 className="text-[22px] font-black text-black  dark:text-white">DATA BREACH REPORT</h3>
                                </div>
                                <div className="border-t-2 border-[#BBC0D0]/50 pt-3"></div>
                                <ul className="mb-10 group-hover:text-white">
                                    <li className="flex">
                                        <p className="text-[18px] text-black">
                                            This Data Breach Report Form is a standardized document used to notify the authority about a data breach incident.{' '}
                                            <br />
                                            Under regulations of the somalia data protection act, it is a mandatory requirement for data controllers and data
                                            processors in certain circumstances, to report personal data breaches to the DPA Somalia.
                                        </p>
                                    </li>
                                </ul>

                                <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                    <a
                                        download
                                        href="/assets/forms /Data breach.pdf"
                                        className="btn text-md hover:bg-secondry bg-black text-white hover:text-black xl:w-44"
                                    >
                                        DOWNLOAD
                                    </a>
                                </div>
                            </div>
                            <div
                                className="group flex flex-col rounded-3xl border-2 border-[#BBC0D0]/80 bg-[#F7F7F7] p-6  px-4 transition dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="mb-4">
                                    <h3 className="text-[22px] font-black text-black  dark:text-white">DATA PROTECTION OFFICER FORM</h3>
                                </div>
                                <div className="mt-auto border-t-2 border-[#BBC0D0]/50 pt-3"></div>
                                <ul className="mb-10 group-hover:text-white">
                                    <li className="flex">
                                        <p className="text-[18px] text-black">
                                            This Form is a formal application used by individuals who wish to be certified or recognized as Data Protection
                                            Officers. This form is part of the compliance process under data protection regulations of somalia.
                                        </p>
                                    </li>
                                </ul>

                                <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                    <a
                                        download
                                        href="/assets/forms /DPO.pdf"
                                        className="btn text-md hover:bg-secondry bg-black text-white hover:text-black xl:w-44"
                                    >
                                        DOWNLOAD
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Eservices;
