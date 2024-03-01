import Testimonial from '../components/Testimonial';
import Faq from '../components/Faq';
import CountUp from 'react-countup';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import Link from 'next/link';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { BiSolidFilePdf } from 'react-icons/bi';

const Guidelines = (props: any) => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    // success chart
    const successChartOptions: any = {
        chart: {
            height: 55,
            type: 'area',
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        markers: {
            size: 0,
        },
        colors: ['#12AF97'],
        fill: {
            opacity: 1,
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0.3,
                opacityTo: 0.05,
                stops: [50, 100],
            },
        },
        grid: {
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
            },
        },
        tooltip: {
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: () => {
                        return '';
                    },
                },
            },
        },
        responsive: [
            {
                breakPoint: 576,
                options: {
                    chart: {
                        height: 95,
                    },
                    grid: {
                        padding: {
                            top: 45,
                            bottom: 0,
                            left: 0,
                        },
                    },
                },
            },
        ],
    };

    const successChartSeries = [
        {
            data: [9, 36, 12, 59, 41, 66],
        },
    ];

    // danger chart
    const dangerChartOptions: any = {
        chart: {
            height: 55,
            type: 'area',
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        markers: {
            size: 0,
        },
        colors: ['#FF0000'],
        fill: {
            opacity: 1,
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0.3,
                opacityTo: 0.05,
                stops: [50, 100],
            },
        },
        grid: {
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
            },
        },
        tooltip: {
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: () => {
                        return '';
                    },
                },
            },
        },
        responsive: [
            {
                breakPoint: 576,
                options: {
                    chart: {
                        height: 95,
                    },
                    grid: {
                        padding: {
                            top: 45,
                            bottom: 0,
                            left: 0,
                        },
                    },
                },
            },
        ],
    };

    const dangerChartSeries = [
        {
            data: [55, 41, 69, 20, 44, 19],
        },
    ];

    return (
        <div>
            <Head>
                <title>Guidlines | Data Protection Authority</title>
            </Head>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                            <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
                                <h6>Guidlines</h6>
                                <h4 className="!text-white">Legal Frame Work</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-t from-white/50 to-transparent py-14 pt-10 dark:bg-none md:py-20">
                <div className="container">
                    <h3 className="mb-10 text-4xl font-extrabold text-black dark:text-white">Data Protection Authority Guidlines</h3>
                    <p className="text-justify text-lg font-semibold leading-[30px] text-black">
                        In Somalia, data protection is founded on the constitutional rights, basic personal liberties and limitations under article 13 of the
                        Constitution of the Federal Republic of Somalia 2012 ('the Constitution'). The Somali Data Protection Act 2023 ('DPA') is Somalia's main
                        data protection legislation. The DPA was enacted on March 23, 2023, and has been in effect since then.
                    </p>
                </div>
                <div className="container">
                    <div className="mt-20 flex flex-col items-center space-y-4 rounded-3xl border-2 border-[#BBC0D0]/50 p-5 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                        <div className="flex items-center space-x-4">
                            <div>
                                <BiSolidFilePdf className="text-6xl" />
                            </div>
                            <div className="text-2xl font-semibold text-black">
                                <h3>Data Protection Authority Guidlines</h3>
                            </div>
                        </div>
                        <div>
                            <a href="/assets/legal/guidlines/DPA Guidance.pdf" download className="btn py-5 px-9 text-white">
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
                                <h3>Data Protection Authority Guidlines af-somali</h3>
                            </div>
                        </div>
                        <div>
                            <a href="/assets/legal/guidlines/Guidlines Af Soomaali.pdf" download className="btn py-5 px-9 text-white">
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

export default Guidelines;
