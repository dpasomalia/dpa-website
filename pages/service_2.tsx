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
                    <div className="heading mx-auto w-7/12 text-left lg:w-7/12">
                        <h4>Dhowrista Xogaha Caafimaad</h4>
                        <p className="mt-4 text-lg font-semibold">
                            Kor-u-kaca adeegsiga teknaloojiyadda ee bahda caafimaadka iyo dhibaatooyinkii waaweynaa ee cudurada, sida Covid-19 waxa ay sababeen
                            in bahda caafimaadka ay heli karaan xog badan oo dadweynaha ah, iyo in xogta lagu keydiyo hab dhijitaal ah oo helitaankeedu fudud
                            yahay.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Waxaa batay isku halleynta hababka keydinta elektarooniga ah, taas oo keentay cabsi daran oo laga qabo in bukaannada xogtooda si
                            khaldan ama si aan sharciga waafaqsaneen loo isticmaalo ayada oo banaanka la keenayo xogaha xasaasiga ee bukaanka u gaarka ah, taas
                            oo bukaanka iyo si guud qoysaska u wax-yeeleyn karta. Xogta caafimaad ee bukaanka waxa ay ka koobnaan kartaa xogaha gaarka ah sida;
                            magaca, da’da, dhirirka iyo culeyska, si la mid ah xogta hiddaside (genetic) ee qofka, xogta dhalyada (biometric) iyo natiijada
                            baarista caafimaad.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Waxaa sidoo kale ay xogta noqon kartaa xogaha caafimaad ee la xiriira shakhsiyaadka, sida xaaladda maskaxeed iyo tan muuqaal ee
                            qofka, iyo xiriirka bukaanka iyo dhaqtarka. Dhammaan xogta caafimaad ee waraaqaha ku qoran, iyo kuwa diiwaanka caafimaad ee qaab
                            elektaroonika ah loo keydiya waxa ay noqonayaan xogo xasaasi ah, si waafaqsan sharciga Hay’adda dhowrista xogta dadweynaha ee
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Dunida waxaa ka dhacday in tiro badan oo xogo caafimaad ah la jabsaday, kuwaas oo malaayiin bukaanno siyaabo kala duwan u saameeyay.
                            Sannadkii 2015, shirkadda labaad ee ceymiska caafimaadka ugu weyn Mareykanka ee Anthem ayaa waxaa laga jabsaday xogta caafimaad ee
                            macaamiisheeda oo gaareysa 79 malyan oo qof, xogahaas oo isagu jiro magacyada, lambarada, iyo natiijooyin baaritaan. Waxa ay
                            dhacdadan noqotay mid si weyn loogu baraarugo taas oo ay aad u tebiyeen warbaahinta waaweyn sida CNN.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Sidoo kale, sannadkii 2020-ka waxaa shirkadda ceymiska ee Primera laga jabsaday xogta macaamiisheeda oo dhan 11 malyan oo oo qof,
                            falkaas oo sababay in shirkadda lagu ganaaxo lacag dhan $6.6 malyan oo doolar. Si lamid ah, warbixin soo baxday billowgii sannadkan
                            2023 ayaa hay’adda ENISA ee Midowga Yurub u qaabilsan nabadgeliyada Internetka (Cybersecurity) waxa ay ku sheegtay in 53% xogahii
                            sannadkan la jabsaday ay ku saabsanaayeen caafimaadka, waana caddeyn muujinaysaa in xogaha caafimaadku ay yihiin bartilmaameedyada
                            ugu nugul ee halisaha xog-jabsiga.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Khatarahani kuma koobno oo kaliya Mareykanka iyo Yurub ee waxa ay saameeyaan meel waliba. Soomaaliya waxa ay ka mid tahay dalalka
                            nuglaashahoodu ay sii daran tahay, maadaama uu aad u fududyahay nidaamka difaaca xogaha, taas oo keeni karta in la helo xogaha badan
                            ee bukaannada Soomaaliyeed.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Haddaba, si xogahaasi ay uga badbaadaan gacan-saddexaad (Third party) oo sifa aan sharci ahayn u adeegsata, waxa ay Hay’adda
                            Dhowrista Xogta Dadweynahu u taagan tahay ilaalinta guud ahaan xogaha dadweynaha oo ay ku jiraan xogaha caafimaad ee xasaasiga ah,
                            si waafaqsan Sharciga Dhowrista Xogta Dadweynaha oo la ansixiyay Maarso 2023.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Ugu danbeyn, si loo dhowro xogaha caafimaad ee dadweynaha waxa ay hay’addu xarumaha caafimaad ku kor-joogteynaysaa dhaqangelinta
                            xeer-nidaamyada iyo in ay adkeeyaan ammaanka barnaamijyada ay ku keydiyaan xogta bukaanka taas oo fure u noqon karto badqabka xogta.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Servicesdetail;
