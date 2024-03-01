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
                        {' '}
                        <h4>Saameynta Dhaqaale iyo Ganacsi ee Xogta</h4>
                        <p className="mt-4 text-lg font-semibold">
                            Guud ahaan dhaqaalaha iyo ganacsiga dunida ee xilligaan waxa uu ku tiirsan yahay xogta dadka, si uu u fududaado dhaqaalaha
                            dhigitaalka ah; sida bangiyada, shirkadaha is-gaarsiinta iyo suuqyada caalamiga ah. Kacdoonka dhigitaalku (Digital Revolution) waxa
                            uu sababay in ay shirkadahu gacanta ku dhigaan xog aad u badan. Tusaale ahaan, shirkadda Walmart ayaa sannadkii 2004-tii waxa ay
                            aruurisay 460T(terebyte) oo ah xogta macaamiisheeda, taas oo ka badatay xog kasta oo waqtigaas ku jirtay webseetyada xogta lagu
                            keydiyo.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Dhanka kale, ururada warbixinnada ka diyaariya lacagaha kaararka lagu bixiyo ayaa waxa ay aruuriyeen 500 malyan oo qof, in ka badan
                            xogta kaararkooda lacagaha, taas oo keentay in xog la xaday ama si qaldan loo adeegsadady darteed ay dhaqaalaha Mareykanka in
                            kabadan 50$ biyan uga lunto si sanadle ah.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Xogahaasi aadka u badan ee shirkadaha aruuriyaan waxaa ka dhashay dhibaatooyin badan oo isagu jiro; in la jabsado, iyo in ay lumaan
                            malaayin xog oo muhiim ah, waxaana halkaas ka dhalanaysa waxyeello dhaqaale oo aad u xooggan.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Shirkadda Yahoo ayaa intii u dhexeysay 2013-2016 waxaa laga jabsaday xogta akoonada 3 bilyan oo qof, kuwaas oo dhibbane u noqday
                            xog-jabsadayaal Ruushiyaan ah. Sababtaas darteed ayaana shirkadda loogu ganaaxay lacag dhan $35 milyan.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Si lamid ah, sannadkii 2019 ayay shirkadda First American Financial Corp lumisay 885 malyan oo fayl, kuwaas oo isagu jiray akoonno
                            bangiyo iyo dhaqdhaqaaqa bangiyada. Dhacdadaas xatooyada ahna waxa loo aaneeyay qaab-dhismeedka hannaanka xog-dhowrista shirkadda oo
                            liitay (Weak Data security System).
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Dhankeedana, shirkadda Facebook waxaa 2021 laga jabsaday 530 malyan oo ciwaanno ah, kuwaas oo ay ku keydsanaayeen xogaha macaamiisha
                            sida magacyada, lambarrada iyo baasaweerradooda.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Xogahaasi ganacsi ee la jabsanayo kuma koobna oo keliya Maraykanka iyo Yurub, ee waxa ay ka dhacayaan guud ahaan dunida. Soomaaliya
                            waxa ay ka mid tahay dowladaha ay dadkoodu si weyn ula fal-galeen ganacsiga.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Sidaas darteed, shirkadaha ganacsi waxa ay xog badani ka hayaan macaamiisha, waxa ayna qaar ka mid ah shirkaduhu xogta u adeegsadaan
                            si aan waafaqsaneen sharciga Dhowrista Xogta dadweynaha. Tusaalooyinka adeegsiga qaldan ee xogta Muwaaddinka Soomaaliyeed waxaa ka
                            mid ah: in ogolaansho-la’aan xogta qofka loo isticmaalo xayaysiin, iyo in uusan qofku helin xuquuqaha khusuusiyaadka (Privacy
                            Rights); sida xuquuqda tirtiridda (Right to Erusal), iyo wax-ka-badelidda (Right to Ractifiction).
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Iyada oo arrintaas laga duulayo, waxa ay Hay’addu ka shaqeynaysaa sidii ay u abuuri lahayd dhaqan Xog-dhowriseed oo dammaanadqaadaya
                            inay ganacsiyada si sharci ah u maareeyaan xogta ay dadka ka aruuriyaan.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Servicesdetail;
