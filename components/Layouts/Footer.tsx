import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="mt-auto bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent">
            <div className="container">
                <div className="grid gap-y-10 gap-x-4 py-14 sm:grid-cols-3 lg:grid-cols-5 lg:py-[100px]">
                    <div className="relative">
                        <img src="/assets/logo/DPA LOGO-02.png" alt="plurk" className="footer_logo" />
                        <img src="/assets/images/footer-shape.png" alt="footer-shape" className="absolute bottom-[-30px] right-0 sm:left-0" />
                        <img
                            src="/assets/images/footer-shape-dark.png"
                            alt="footer-shape-dark"
                            className="absolute bottom-0 right-0 hidden dark:block sm:left-0"
                        />
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-bold">
                            <li className="mb-3 text-lg font-extrabold text-black dark:text-white">Quick Menu</li>
                            <li>
                                <Link href="/" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Home
                                </Link>
                            </li>
                            {/* <li>
                                    <Link href="/portfolio" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        Portfolio
                                    </Link>
                                </li> */}
                            <li>
                                <Link href="/media" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Media
                                </Link>
                            </li>
                            {/* <li>
                                    <Link href="/team" className="inline-block transition hover:scale-110 hover:text-secondary">
                                        Team
                                    </Link>
                                </li> */}
                            <li>
                                <Link href="/about-us" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-bold">
                            <li className="mb-3 text-lg font-extrabold text-black dark:text-white">Services</li>
                            <li>
                                <Link href="/E-Services" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Registration
                                </Link>
                            </li>
                            <li>
                                <Link href="/E-Services" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Complaint
                                </Link>
                            </li>
                            <li>
                                <Link href="/E-Services" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    DPO license
                                </Link>
                            </li>

                            <li>
                                <Link href="/E-Services" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Data Breach Report
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-bold">
                            <li className="mb-3 text-lg font-extrabold text-black dark:text-white">Legal</li>
                            <li>
                                <Link href="/terms-conditions" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/act" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Legal Frame-Work
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-bold">
                            <li className="mb-3 text-lg font-extrabold text-black dark:text-white">Information</li>
                            <li>Aden Adde Airport Road</li>
                            <li>
                                <a href="tel:+(252) 617-535337" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    (452)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-[#FCF1F4] to-[#EDFBF9] py-5 dark:border-t-2 dark:border-white/5 dark:bg-none">
                <div className="container">
                    <div className="items-center justify-between text-center font-bold dark:text-white md:flex">
                        <div>
                            Copyright© {new Date().getFullYear() + ' '}
                            <Link href="/" className="text-primary transition hover:text-secondary">
                                Data_Protection_Authoraties.
                            </Link>
                        </div>
                        <div>
                            Need help? Visit the{' '}
                            <Link href="/contact-us" className="text-secondary transition hover:text-primary">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
