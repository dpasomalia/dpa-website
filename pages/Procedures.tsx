import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import LogoSlider from '../components/LogoSlider';
import Testimonial from '../components/Testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';
import CountUp from 'react-countup';
import Modal from '../components/Modal';
import { useState, useRef } from 'react';
import AnimateHeight from 'react-animate-height';
import Head from 'next/head';
import Link from 'next/link';
import { BiSolidFilePdf } from 'react-icons/bi';

const Procedures = () => {
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

    const queries = [
        {
            id: 1,
            question: 'Are your service easy to use?',
            answer: 'mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table.',
        },
        {
            id: 2,
            question: 'Will i receive future updates?',
            answer: 'mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
        },
        {
            id: 3,
            question: 'Is this services work in my country?',
            answer: ' mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.',
        },
        {
            id: 4,
            question: 'How much I will pay?',
            answer: 'mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod',
        },
    ];
    const [accordians, setAccordians] = useState<any>(0);

    const css = `[data-height-collapsible] {
        transition: height 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }`;

    return (
        <div className="overflow-hidden">
            <Head>
                <title>Procedures | Data Protection Authority</title>
            </Head>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                            <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
                                <h6>DPA Procedures</h6>
                                <h4 className="!text-white">Legal Frame Work</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-t from-white/50 to-transparent py-14 pt-10 dark:bg-none md:py-20">
                <div className="container">
                    <h3 className="mb-10 text-4xl font-extrabold text-black dark:text-white">The Data Protection Authority Procedures</h3>
                    <p className="text-justify text-lg font-semibold leading-[30px] text-black">
                        ADR in the context of data protection refers to Alternative Dispute Resolution. It involves mechanisms and processes used by data
                        protection authorities or relevant entities to resolve disputes, conflicts, or disagreements arising from issues related to the
                        processing, handling, or protection of personal data, without resorting to formal legal proceedings.
                    </p>
                </div>
                <div className="container">
                    <div className="mt-20 flex flex-col items-center space-y-4 rounded-3xl border-2 border-[#BBC0D0]/50 p-5 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                        <div className="flex items-center space-x-4">
                            <div>
                                <BiSolidFilePdf className="text-6xl" />
                            </div>
                            <div className="text-2xl font-semibold text-black">
                                <h3>ADR PROCEDURE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                            </div>
                        </div>
                        <div>
                            <a href="/assets/legal/procedures/ADR PROCEDURE .pdf" download className="btn py-5 px-9 text-white">
                                {' '}
                                Download
                            </a>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col items-center space-y-4 rounded-3xl border-2 border-[#BBC0D0]/50 p-5 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                        <div className="flex items-center space-x-4">
                            <div>
                                <BiSolidFilePdf className="text-6xl" />
                            </div>
                            <div className="text-2xl font-semibold text-black">
                                <h3 className=" uppercase">xalinta khilaafaadyada</h3>
                            </div>
                        </div>
                        <div>
                            <a href="/assets/legal/procedures/xalinta khilaafaadyada.pdf" download className="btn py-5 px-9 text-white">
                                {' '}
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Procedures;
