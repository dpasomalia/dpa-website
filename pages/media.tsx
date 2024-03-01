import Link from 'next/link';
import Head from 'next/head';
import Testimonial from '../components/Testimonial';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const media = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>Media | Data Protection Athourity</title>
            </Head>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                            <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
                                <h6>Meet Our Team</h6>
                                <h4 className="!text-white">Our News and Media</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-gradient-to-t from-white/60 to-transparent py-12 dark:bg-none lg:py-24">
                <div className="container">
                    <div className="flex flex-col items-center gap-5 lg:flex-row" data-aos="fade-up" data-aos-duration="1000">
                        <div className="lg:max-w-[790px]">
                            <div className="flex gap-3">
                                <div className="h-[30px] w-[5px] bg-secondary"></div>
                                <h5 className="text-2xl font-extrabold text-black dark:text-white">Latest Blogs</h5>
                            </div>
                            <div className="mt-5 flex flex-col gap-4 rounded-[10px] border border-[#BBBBBB]/50 p-4 dark:border-[#7780A1]/20 md:flex-row">
                                <div className="flex rounded-[10px]">
                                    <div>
                                        <div className="h-78 relative overflow-hidden rounded-[10px] md:max-w-[435px]">
                                            <img src="assets/images/news/Dpa Launch.jpg" alt="" />
                                        </div>
                                        <div className="mt-1 mb-4 flex gap-4"></div>
                                        <Link
                                            href="https://www.facebook.com/dpasomalia/posts/pfbid02dGvFuVL59z3MVBfy3vUqGqiqRFpMPw1TAfVYzEAbcT3gjKe324M9nWuS2ayPUmpil?__cft__[0]=AZVR75xqBJw2cN_vKPKQzoKPm6HCWiifCljRZm0XOOcOCgaKMrSG_V7rHQQyzrzBjJlfvp69eR0FoVhtrGJpObfAZ8Ili0gojBnJDANfC1sWdW6ugB4XNqceTiX0itGgVYshn-155JAIvei3dJF69tM6jW0IjPcjw8jsTWoHykpDDMgoPYK7w_rawltT49dSces&__tn__=%2CO%2CP-R"
                                            className="text-lg font-semibold text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                        >
                                            We are pleased to announce the official launch of Somalia Data Protection Authority tomorrow on the....
                                        </Link>
                                        {/* <div className="mt-[14px] flex gap-6">
                                            <div className="flex items-center gap-2">
                                                <Link href="#">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="9" cy="4.5" r="3" stroke="#7780A1" strokeWidth="1.5"></circle>
                                                        <path
                                                            d="M11.25 15.4613C10.5681 15.6464 9.8052 15.75 9 15.75C6.10051 15.75 3.75 14.4069 3.75 12.75C3.75 11.0931 6.10051 9.75 9 9.75C11.8995 9.75 14.25 11.0931 14.25 12.75C14.25 13.009 14.1926 13.2603 14.0846 13.5"
                                                            stroke="#7780A1"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        ></path>
                                                    </svg>
                                                </Link>
                                                <p className="text-sm font-semibold">Admin</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Link href="#">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M6.7213 14.1831L7.18561 13.5941L6.7213 14.1831ZM9 4.12541L8.45963 4.64551C8.60102 4.79241 8.79612 4.87541 9 4.87541C9.20388 4.87541 9.39898 4.79241 9.54037 4.64551L9 4.12541ZM11.2787 14.1831L11.743 14.7721L11.2787 14.1831ZM5.36961 12.1708C5.04978 11.9076 4.57713 11.9535 4.31391 12.2733C4.05069 12.5932 4.09658 13.0658 4.4164 13.329L5.36961 12.1708ZM1.59199 10.1485C1.79074 10.5119 2.24647 10.6454 2.60988 10.4466C2.9733 10.2479 3.10677 9.79216 2.90801 9.42875L1.59199 10.1485ZM2.25 6.85276C2.25 5.30976 3.12161 4.02553 4.29622 3.48861C5.42355 2.97331 6.96414 3.09175 8.45963 4.64551L9.54037 3.60531C7.66098 1.6527 5.45157 1.31122 3.67262 2.12438C1.94095 2.91593 0.75 4.74856 0.75 6.85276H2.25ZM6.25699 14.7721C6.63944 15.0736 7.06194 15.4049 7.49302 15.6568C7.92386 15.9085 8.4346 16.1249 9 16.1249V14.6249C8.8154 14.6249 8.57614 14.5524 8.24981 14.3617C7.92371 14.1711 7.58186 13.9065 7.18561 13.5941L6.25699 14.7721ZM11.743 14.7721C12.8019 13.9374 14.1903 12.9557 15.2777 11.7313C16.3907 10.478 17.25 8.91043 17.25 6.85276H15.75C15.75 8.4423 15.102 9.67014 14.1561 10.7353C13.1845 11.8293 11.9623 12.6892 10.8144 13.5941L11.743 14.7721ZM17.25 6.85276C17.25 4.74856 16.059 2.91593 14.3274 2.12438C12.5484 1.31122 10.339 1.6527 8.45963 3.60531L9.54037 4.64551C11.0359 3.09175 12.5765 2.97331 13.7038 3.48861C14.8784 4.02553 15.75 5.30976 15.75 6.85276H17.25ZM10.8144 13.5941C10.4181 13.9065 10.0763 14.1711 9.75019 14.3617C9.42386 14.5524 9.1846 14.6249 9 14.6249V16.1249C9.5654 16.1249 10.0761 15.9085 10.507 15.6568C10.9381 15.4049 11.3606 15.0736 11.743 14.7721L10.8144 13.5941ZM7.18561 13.5941C6.58203 13.1183 5.98392 12.6764 5.36961 12.1708L4.4164 13.329C5.04031 13.8425 5.70661 14.3382 6.25699 14.7721L7.18561 13.5941ZM2.90801 9.42875C2.50096 8.68449 2.25 7.84347 2.25 6.85276H0.75C0.75 8.11484 1.0741 9.20162 1.59199 10.1485L2.90801 9.42875Z"
                                                            fill="#7780A1"
                                                        ></path>
                                                    </svg>
                                                </Link>
                                                <p className="text-sm font-semibold">350</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Link href="#">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_1110_13575)">
                                                            <path
                                                                d="M9.81499 16.0408L10.4604 16.4228L10.4604 16.4228L9.81499 16.0408ZM10.2216 15.3539L9.57615 14.9719L10.2216 15.3539ZM7.7784 15.3539L7.13299 15.7359H7.13299L7.7784 15.3539ZM8.18498 16.0408L8.83039 15.6587L8.18498 16.0408ZM0.75 7.875C0.75 8.28921 1.08579 8.625 1.5 8.625C1.91421 8.625 2.25 8.28921 2.25 7.875H0.75ZM2.47836 11.6481C2.31985 11.2654 1.88112 11.0836 1.49844 11.2422C1.11576 11.4007 0.934029 11.8394 1.09254 12.2221L2.47836 11.6481ZM5.84218 14.2436L5.82926 14.9935H5.82926L5.84218 14.2436ZM3.81494 13.9645L3.52792 14.6575H3.52793L3.81494 13.9645ZM16.2145 11.9351L16.9075 12.2221L16.2145 11.9351ZM12.1578 14.2436L12.1449 13.4937L12.1578 14.2436ZM14.1851 13.9645L14.4721 14.6575H14.4721L14.1851 13.9645ZM14.7094 2.0526L14.3175 2.69208L14.7094 2.0526ZM15.9474 3.29063L16.5869 2.89876V2.89876L15.9474 3.29063ZM3.29063 2.0526L2.89876 1.41312V1.41312L3.29063 2.0526ZM2.0526 3.29063L1.41312 2.89876H1.41312L2.0526 3.29063ZM7.05209 14.4074L7.42917 13.7591L7.42916 13.7591L7.05209 14.4074ZM10.4604 16.4228L10.867 15.7359L9.57615 14.9719L9.16958 15.6587L10.4604 16.4228ZM7.13299 15.7359L7.53956 16.4228L8.83039 15.6587L8.42382 14.9719L7.13299 15.7359ZM9.16958 15.6587C9.13625 15.7151 9.0781 15.7499 8.99998 15.7499C8.92187 15.7499 8.86372 15.7151 8.83039 15.6587L7.53956 16.4228C8.19235 17.5257 9.80762 17.5257 10.4604 16.4228L9.16958 15.6587ZM7.875 2.25H10.125V0.75H7.875V2.25ZM15.75 7.875V8.625H17.25V7.875H15.75ZM5.85511 13.4937C4.91351 13.4775 4.45251 13.4168 4.10195 13.2716L3.52793 14.6575C4.16782 14.9225 4.88782 14.9773 5.82926 14.9935L5.85511 13.4937ZM1.09254 12.2221C1.54926 13.3247 2.4253 14.2007 3.52792 14.6575L4.10195 13.2716C3.36687 12.9672 2.78284 12.3831 2.47836 11.6481L1.09254 12.2221ZM15.75 8.625C15.75 9.5089 15.7496 10.1343 15.7161 10.6258C15.683 11.1106 15.6202 11.4101 15.5216 11.6481L16.9075 12.2221C17.0943 11.7709 17.1743 11.289 17.2126 10.7279C17.2504 10.1735 17.25 9.48838 17.25 8.625H15.75ZM12.1707 14.9935C13.1122 14.9773 13.8322 14.9225 14.4721 14.6575L13.8981 13.2716C13.5475 13.4168 13.0865 13.4775 12.1449 13.4937L12.1707 14.9935ZM15.5216 11.648C15.2172 12.3831 14.6331 12.9672 13.8981 13.2716L14.4721 14.6575C15.5747 14.2007 16.4507 13.3247 16.9075 12.2221L15.5216 11.648ZM10.125 2.25C11.3671 2.25 12.2459 2.25079 12.9287 2.31571C13.6003 2.37956 14.0043 2.50013 14.3175 2.69208L15.1012 1.41312C14.5127 1.05247 13.8521 0.896737 13.0707 0.822442C12.3004 0.749209 11.338 0.75 10.125 0.75V2.25ZM17.25 7.875C17.25 6.66199 17.2508 5.69956 17.1776 4.92933C17.1033 4.14795 16.9475 3.48728 16.5869 2.89876L15.3079 3.6825C15.4999 3.99574 15.6204 4.39972 15.6843 5.07131C15.7492 5.75406 15.75 6.63294 15.75 7.875H17.25ZM14.3175 2.69208C14.7212 2.93945 15.0606 3.27884 15.3079 3.6825L16.5869 2.89876C16.2158 2.29326 15.7067 1.78417 15.1012 1.41312L14.3175 2.69208ZM7.875 0.75C6.66199 0.75 5.69956 0.749209 4.92933 0.822442C4.14795 0.896737 3.48728 1.05247 2.89876 1.41312L3.6825 2.69208C3.99574 2.50013 4.39972 2.37956 5.07131 2.31571C5.75406 2.25079 6.63294 2.25 7.875 2.25V0.75ZM2.25 7.875C2.25 6.63294 2.25079 5.75406 2.31571 5.07131C2.37956 4.39972 2.50013 3.99574 2.69208 3.6825L1.41312 2.89876C1.05247 3.48728 0.896737 4.14795 0.822442 4.92933C0.749209 5.69956 0.75 6.66199 0.75 7.875H2.25ZM2.89876 1.41312C2.29326 1.78417 1.78417 2.29326 1.41312 2.89876L2.69208 3.6825C2.93945 3.27884 3.27884 2.93945 3.6825 2.69208L2.89876 1.41312ZM8.42382 14.9719C8.27335 14.7176 8.13454 14.4816 7.99807 14.2943C7.85237 14.0944 7.67724 13.9033 7.42917 13.7591L6.67502 15.0557C6.68022 15.0587 6.71056 15.0745 6.78586 15.1778C6.87039 15.2938 6.9681 15.4573 7.13299 15.7359L8.42382 14.9719ZM5.82926 14.9935C6.16207 14.9992 6.36046 15.0034 6.50878 15.0198C6.64318 15.0347 6.6723 15.0541 6.67502 15.0557L7.42916 13.7591C7.17862 13.6133 6.92166 13.5564 6.67386 13.5289C6.43998 13.503 6.16006 13.499 5.8551 13.4937L5.82926 14.9935ZM10.867 15.7359C11.0319 15.4573 11.1296 15.2938 11.2141 15.1778C11.2894 15.0745 11.3198 15.0587 11.3249 15.0557L10.5708 13.7591C10.3227 13.9033 10.1476 14.0944 10.0019 14.2943C9.86543 14.4816 9.72662 14.7176 9.57615 14.9719L10.867 15.7359ZM12.1449 13.4937C11.8399 13.499 11.56 13.503 11.3261 13.5289C11.0783 13.5564 10.8214 13.6133 10.5708 13.7591L11.3249 15.0557C11.3277 15.0541 11.3568 15.0347 11.4912 15.0198C11.6395 15.0034 11.8379 14.9992 12.1707 14.9935L12.1449 13.4937Z"
                                                                fill="#7780A1"
                                                            ></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1110_13575">
                                                                <rect width="18" height="18" fill="white"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                                <p className="text-sm font-semibold">30</p>
                                            </div>
                                        </div> */}
                                        {/* <p className="mt-2 text-sm font-medium">
                                            which is a newly established independent agency that focuses on protecting the data privacy of both citizens and the
                                            government.
                                        </p> */}
                                        <div className="mt-4 flex items-center gap-2">
                                            <span>
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 5.83325V8.49992L9.66667 10.1666"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </span>
                                            <p className="text-[13px] font-semibold">24 Feb 2024</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="group flex gap-[14px]">
                                        <div className="flex-none">
                                            <div className="relative h-[120px] w-[120px] overflow-hidden rounded-[10px]">
                                                <img src="/assets/images/news/new_2.jpeg" className="h-full w-full object-cover" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <Link
                                                href="https://twitter.com/DPASomalia/status/1638134353275305984"
                                                className="text-lf font-bold text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                            >
                                                Madaxweynaha Jamhuuriyadda Federaalka Soomaaliya Mudane Xasan Sheekh Maxamuud ayaa...
                                            </Link>
                                            <div className="mt-2.5 flex items-center gap-2">
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8 5.83325V8.49992L9.66667 10.1666"
                                                            stroke="#969AA9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                            stroke="#969AA9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <p className="text-[13px] font-semibold">20 March 2023</p>
                                            </div>
                                            {/* <p className="mt-2.5 text-sm font-medium">Emphasized the importance of knowledge sharing, technical assistance, and an information exchange platform..</p> */}
                                        </div>
                                    </div>
                                    <div className="border-b border-dashed border-gray opacity-50"></div>
                                    <div className="flex gap-[14px]">
                                        <div className="flex-none">
                                            <div className="relative h-[120px] w-[120px] overflow-hidden rounded-[10px]">
                                                <img src="/assets/images/news/new_3.jpeg" className="h-full w-full object-cover" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <Link
                                                href="https://twitter.com/DPASomalia/status/1734255846236844056"
                                                className="text-lf font-bold text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                            >
                                                🇸🇴 Today, team of our steamed Data Protection Authority had a fruitful discussion with Mr. Ilham Turus, Director
                                                of @Tika_Somalia....
                                            </Link>
                                            <div className="mt-2.5 flex items-center gap-2">
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8 5.83325V8.49992L9.66667 10.1666"
                                                            stroke="#969AA9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                            stroke="#969AA9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <p className="text-[13px] font-semibold">11 Dec 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b border-dashed border-gray opacity-50"></div>
                                    <div className="flex gap-[14px]">
                                        <div className="flex-none">
                                            <div className="relative h-[120px] w-[120px] overflow-hidden rounded-[10px]">
                                                <img src="/assets/images/news/news_4.jpeg" className="h-full w-full object-cover" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <Link
                                                href="https://www.facebook.com/dpasomalia/posts/pfbid0GiDad2d6vaLAbXcBUuAQvm54ZcHswxgjS4tSp72SMoYpypR3Xfpna9HKap3MqF2Rl"
                                                className="text-lf font-bold text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                            >
                                                Waxaa maanta xarunta cusub ee Hay’adda Dhowrista Xogta (Data Protection Authority) ka qabsoomay....
                                            </Link>
                                            <div className="mt-2.5 flex items-center gap-2">
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8 5.83325V8.49992L9.66667 10.1666"
                                                            stroke="#969AA9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                            stroke="#969AA9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <p className="text-[13px] font-semibold">28 Dec 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-4">
                                <div className="h-[30px] w-[5px] bg-primary"></div>
                                <h5 className="text-2xl font-extrabold text-black dark:text-white">Popular Posts</h5>
                            </div>
                            <div className="mt-5 space-y-5 rounded-[10px] border border-[#BBBBBB]/50 p-4 dark:border-[#7780A1]/20">
                                <div className="flex gap-3">
                                    <div className="flex-none">
                                        <div className="relative h-20 w-20 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/news/new_5.jpeg" className="h-full w-full object-cover" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <Link
                                            href="https://www.facebook.com/dpasomalia/posts/pfbid0hj5Gchv89i3PWLVTEPAv1a3FN1B7a33g9cPNcXKMQ6dHcAL8SipVAUxCVG24B5QZl"
                                            className="text-[15px] font-bold leading-5 text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                        >
                                            The Director of the Somali Data Protection Authority (DPA)....
                                        </Link>
                                        <div className="mt-2.5 flex items-center gap-2">
                                            <span>
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 5.83325V8.49992L9.66667 10.1666"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <p className="text-[13px] font-semibold">04 jan 2024</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-dashed border-gray opacity-50"></div>
                                <div className="flex gap-3">
                                    <div className="flex-none">
                                        <div className="relative h-20 w-20 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/news/new_6.jpeg" className="h-full w-full object-cover" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <Link
                                            href="#"
                                            className="text-[15px] font-bold leading-5 text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                        >
                                            Maareeyaha Hay’adda Dhowrista Xogta Soomaaliya....
                                        </Link>
                                        <div className="mt-2.5 flex items-center gap-2">
                                            <span>
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 5.83325V8.49992L9.66667 10.1666"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <p className="text-[13px] font-semibold">09 jan 2024</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-dashed border-gray opacity-50"></div>
                                <div className="flex gap-3">
                                    <div className="flex-none">
                                        <div className="relative h-20 w-20 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/news/new_7.jpeg" className="h-full w-full object-cover" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <Link
                                            href="https://www.facebook.com/dpasomalia/posts/pfbid0GiDad2d6vaLAbXcBUuAQvm54ZcHswxgjS4tSp72SMoYpypR3Xfpna9HKap3MqF2Rl"
                                            className="text-[15px] font-bold leading-5 text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                        >
                                            Kulankaan oo ay xigi doonaan dhawr....
                                        </Link>
                                        <div className="mt-2.5 flex items-center gap-2">
                                            <span>
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 5.83325V8.49992L9.66667 10.1666"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <p className="text-[13px] font-semibold">28 Dec 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-dashed border-gray opacity-50"></div>
                                <div className="flex gap-3">
                                    <div className="flex-none">
                                        <div className="relative h-20 w-20 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/news/new_8.jpeg" className="h-full w-full object-cover" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <Link
                                            href="https://twitter.com/DPASomalia/status/1636405367767719937"
                                            className="text-[15px] font-bold leading-5 text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                        >
                                            Sincere thanks to @AqalkaSare...
                                        </Link>
                                        <div className="mt-2.5 flex items-center gap-2">
                                            <span>
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 5.83325V8.49992L9.66667 10.1666"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <p className="text-[13px] font-semibold">16 Mar 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 lg:py-24">
                <div className="container">
                    <div className="flex flex-col gap-5 lg:flex-row">
                        <div className="space-y-5 lg:max-w-[650px] xl:max-w-[726px]">
                            <div className="item-center flex gap-2.5">
                                <div className="h-[30px] w-[5px] bg-secondary"></div>
                                <div>
                                    <h5 className="text-2xl font-extrabold text-black dark:text-white">Articles</h5>
                                </div>
                            </div>
                            <div className="mt-5 flex flex-col gap-6 sm:flex-row">
                                <div className="w-96 overflow-hidden rounded-[10px]">
                                    <img src="/assets/images/ATICLES/ARTICLE 1.jpg" alt="" />
                                </div>
                                <div>
                                    {/* <div className="mb-[14px]">
                                        <p className="inline-block rounded py-1 text-[20px] font-extrabold leading-4 text-black">Photographs</p>
                                    </div> */}
                                    <Link
                                        href="/services-detail"
                                        className="mt-3 text-xl font-bold text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                    >
                                        Muhiimadda Hay’adda Dhowrista Xogta Dadweynaha
                                    </Link>

                                    <p className="mt-3 text-sm font-medium">
                                        Soddankii sano ee ugu dambeeyey dunida waxaa ka dhacay isbadallo waaweyn oo dhaqan dhaqaale ah.
                                    </p>
                                    <div className="mt-3 flex items-center gap-2.5">
                                        {/* <span>
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 5.83333V8.49999L9.66667 10.1667"
                                                    stroke="#969AA9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M4.66668 2.72521C5.64725 2.15798 6.78572 1.83333 8.00001 1.83333C11.6819 1.83333 14.6667 4.8181 14.6667 8.49999C14.6667 12.1819 11.6819 15.1667 8.00001 15.1667C4.31811 15.1667 1.33334 12.1819 1.33334 8.49999C1.33334 7.2857 1.65799 6.14724 2.22522 5.16666"
                                                    stroke="#969AA9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                ></path>
                                            </svg>
                                        </span>
                                        <p className="text-[13px] font-semibold">10 Jan 2023</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 sm:flex-row">
                                <div className="h-40 w-96 overflow-hidden rounded-[12px]">
                                    <img src="/assets/images/ATICLES/ARTICLE-2.jpg" alt="" />
                                </div>
                                <div>
                                    {/* <div className="mb-[14px]">
                                        <p className="inline-block rounded py-1 text-[20px] font-extrabold leading-4 text-black">DESIGN</p>
                                    </div> */}
                                    <Link
                                        href="/service_2"
                                        className="mt-3 text-xl font-bold text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                    >
                                        Dhowrista Xogaha Caafimaad
                                    </Link>
                                    <p className="mt-3 text-sm font-medium">
                                        Kor-u-kaca adeegsiga teknaloojiyadda ee bahda caafimaadka iyo dhibaatooyinkii waaweynaa ee cudurada.
                                    </p>
                                    <div className="mt-3 flex items-center gap-2.5">
                                        {/* <span>
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 5.83333V8.49999L9.66667 10.1667"
                                                    stroke="#969AA9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M4.66668 2.72521C5.64725 2.15798 6.78572 1.83333 8.00001 1.83333C11.6819 1.83333 14.6667 4.8181 14.6667 8.49999C14.6667 12.1819 11.6819 15.1667 8.00001 15.1667C4.31811 15.1667 1.33334 12.1819 1.33334 8.49999C1.33334 7.2857 1.65799 6.14724 2.22522 5.16666"
                                                    stroke="#969AA9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                ></path>
                                            </svg>
                                        </span>
                                        <p className="text-[13px] font-semibold">12 Jan 2023</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item-center flex gap-2.5">
                                <div className="h-[30px] w-[5px]"></div>
                                <div>
                                    <p className="text-2xl font-extrabold text-black dark:text-white"></p>
                                </div>
                            </div>
                            <div className="mt-5 mb-5 flex gap-3">
                                <div className="relative h-40 w-96 max-w-[165px] overflow-hidden rounded-[10px]">
                                    <img src="/assets/images/ATICLES/ARTICLE-3.jpg" className="h-full w-full object-cover" alt="" />
                                </div>
                                <div>
                                    <Link
                                        href="/service_5"
                                        className="text-lg font-bold text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                    >
                                        Xuquuqda Asturnaanta Xogta Shakhsiga Ah
                                    </Link>
                                    <p className="mt-3 text-sm font-medium">
                                        Laga soo bilaabo 1960-naadkii, waxaa la sameeyay mabaadii’da jaangooya uruurinta iyo maareynta xogaha gaarka ah
                                    </p>
                                </div>
                            </div>
                            <div className="border-b border-dashed border-gray/50"></div>
                            <div className="mt-5 mb-5 flex gap-3">
                                <div className="relative h-40 w-[450px] overflow-hidden  rounded-[10px]">
                                    <img src="/assets/images/ATICLES/ARTICLE-4.jpg" className="h-full w-full object-cover" alt="" />
                                </div>
                                <div>
                                    <Link
                                        href="/service_3"
                                        className="text-lg font-bold text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                    >
                                        Doorka Sarakisha Xogta
                                    </Link>
                                    <p className="mt-3 text-sm font-medium">
                                        Saraakiisha Dhowrista Xogta waxay udub-dhexaad u yihiin sare-u-qaadiidda halbeegyada dhowrista xogta ee ka dhex jira
                                        hay’adaha ay ka hawlgalaan.
                                    </p>
                                </div>
                            </div>
                            <div className="border-b border-dashed border-gray/50"></div>
                            <div className="mt-5 mb-5 flex gap-3">
                                <div className="relative h-40 w-[450px] overflow-hidden rounded-[10px]">
                                    <img src="/assets/images/ATICLES/ARTICLE-5.jpg" className="h-full w-full object-cover" alt="" />
                                </div>
                                <div>
                                    <Link
                                        href="/service_4"
                                        className="mt-3 text-lg font-bold text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                    >
                                        Saameynta Dhaqaale iyo Ganacsi ee Xogta
                                    </Link>
                                    <p className="mt-3 text-sm font-medium">
                                        Guud ahaan dhaqaalaha iyo ganacsiga dunida ee xilligaan waxa uu ku tiirsan yahay xogta dadka, si uu u fududaado
                                        dhaqaalaha dhigitaalka ah.
                                    </p>
                                </div>
                            </div>
                            <div className="border-b border-dashed border-gray/50"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default media;
