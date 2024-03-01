import Link from 'next/link';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import BlogSlider from '../components/BlogSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const Servicesdetail = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>Articales | Data Protection Athourity</title>
            </Head>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="relative items-center py-14 lg:flex lg:py-[100px]">
                            <div
                                className="top-[100px] mt-10 h-96 w-auto ltr:right-0 rtl:left-0 lg:absolute lg:mt-0 lg:h-auto lg:w-2/5"
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-14 lg:py-[60px]">
                <div className="container">
                    <div className="heading   text-left ">
                        {' '}
                        <h4>Muhiimadda Hay’adda Dhowrista Xogta Dadweynaha</h4>
                        <p className="mt-4 text-lg font-semibold">
                            Soddankii sano ee ugu dambeeyey dunida waxaa ka dhacay isbadallo waaweyn oo dhaqan dhaqaale ah, kuwaas oo si toos ah u saameynayey
                            qaab-dhismeedka bulshooyinka adduunka. Sanadahaasi waxaa si xooggan u soo baxay isticmaalka taknoolajiyadda, taas oo loo
                            adeegsanaayey fudadeynta nolasha, isla mar-kaana ay ka dhasheen xeerar cusub oo arrimahaasi soo ifbaxay lagu kala nidaamiyo, si loo
                            ilaaliyo badqabka dadka.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Soomaalidu sannadahaas waxa ay xoogga saareen dhanka dhaqaalaha dhigitaalka ah (Digital Economics), maadama dalka uu ka burburay
                            kaabayasha dhaqaalaha, Soomaalidu waxa ay xooggan saareen adeegyada dhijitaalka ah (digital services) gaar ahaan shirkadaha
                            Isgaarsiinta, Xawaaladaha iyo Bangiyada, kuwaas oo inta badan saameyn weyn ku leh dalka oo dhan, sidoo kale sanadihii burburka waxaa
                            dalka si xooggan uga shaqeynayey hay'ado caalami ah oo samafalka ka shaqeeya.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Shirkadaha gaarka loo leeyahay iyo hay’adaha caalamiga ah ee ka shaqeeya arrimaha samafalka waxa ay gacanta ku hayaan xogo, qaarkood
                            ayaa xogahaas u adeegsada siyaabo aan habbooneyn, si aan loogu takrifalin, looguna xadgudbin xuquuqda xogta shaqsiyaadka ayey lagama
                            maarmaan u noqotay in Dowladda Federaalka Soomaaliya ay hirgaliso Hay’adda Dhowrista Xogta Dadweynaha, Sidoo kale Baarlamaanka
                            Jamhuuriyadda Federaalka Soomaaliya ayaa ansixiyey March 2023, sharciga Dhowrista Xogta Dadweynaha (Data Protection Act) kaas oo
                            dhowraya xaquuqda xog ay leeyihiin Muwaadiniintu.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Hay’addu waxa ay wax ka badali doontaa hababka loo uruuriyo xogaha ayada oo dhammaan Xoghayeyaasha, xog adeegsadeyaaasha iyo
                            saraakiisha xogaha siineeysa wacyigelin, iyo tababaro ku saleeysan sida ugu habboon ee xogaha loo keydiyo ayadoo aan loo adeegsaneyn
                            wax ka duwan wixii ujeedkii loo uruuriyey.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Ayadoo Hay’adda Dhowrista Xogta Dadweynaha ay mudnaanta koowaad siineyso ilaalinta Xogta Muwaadiniinta ayey waxa ay sameysay shuruuc
                            iyo xeerar ay ku dhaqmayamayaan Hay’adaha Dowliga ah, Hay’adaha Caalamiga ah, Shirkadaha Isgaarsiinta, Bankiyada Iyo Goobaha
                            Caafimaaadka kuwaas oo bud-dhig u ah ilaalinta xogta shaqsiyadeed.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Waxay Hay’addu ka shaqeyneysaa hirgelinta Xarun dhexe oo lagu keydiyo Xogta ( National Data Centre) taas oo lagu keydin doono
                            dhammaan xogaha ay hayaan Hay’adaha aan dowliga ahayn.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Servicesdetail;
