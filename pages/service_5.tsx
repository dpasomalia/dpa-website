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
                        <h4>Xuquuqda Asturnaanta Xogta Shakhsiga Ah</h4>
                        <p className="mt-4 text-lg font-semibold">
                            Laga soo bilaabo 1960-naadkii, waxaa la sameeyay mabaadii’da jaangooya uruurinta iyo maareynta xogaha gaarka ah, kuwaas oo ay
                            meelmariyeen dowlado kala duwan iyo hay’ado caalami ah. Sidoo kale, 2013 ayay Golaha Guud ee Qaramada Midoobay iyo Golaha Xuquuqul
                            Insaanka wadajir u gaareen go’aanno ku saabsan xaqa xogta qarsoodiga ah ee dhigitaalka ah (The Right to Privacy in the digital Age).
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Dhanka kale, ilaalinta xuquuqda xogta shakhsiga ah waxaa lagu tixgeliyay dastuur kasta oo qaran iyo Sharciga Guud ee Ilaalinta Xogta
                            (GDPR). Si lamid ah, Dastuurka Federaalka Soomaaliya, Sharciga Dhowrista Xogta Dadweynaha, iyo Sharciga Isgaarsiinta Qaranka ayaa
                            dhammaantood jideynaya in ay lagama-maarmaan tahay “Ilaalinta iyo Xafididda Xogta Shakhsiga ah”.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Xaquuqda Asturnaanta Xogta Shakhsiga ah waa mid la xiriirta xogaha xasaasiga ah. Siyaasadaha waddamadu waa ay ku kala duwan yihiin
                            sida loola tacaamulayo Macluumaadka shakhsiyadeed ee xasaasiga ah, waxaana kala-duwanantaas ay salka ku heysaa waaya-aragnimo hore,
                            faham- dhaqameed iyo la-fal-galidda casrigan tiknoolajiyadda. Marka lasoo koobo, xogtu waxa ay muhiin u tahay ilaalinta macluumaadka
                            xasaasiga ah, dhisidda kalsoonida, u-hoggaansanaanta qawaaniinta, ilaalinta dhaqannada iyo anshaxa, kobcinta hal-abuurka iyo
                            ilaalinta madax- bannaanida shakhsiyaadka.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Haddii xogta shakhsiga ah ay lunto, loo isticmaalo si aan habbooneyn ama ay si ulakac ah bannaanka ugu baxdo; waxaa ka dhalanaya
                            takoorid shakhsiyadeed, dhibaateyn, hanjabaad iyo saameyn nololeed oo taban. Sidaas awgeed, Hay’adda Dhowrista Xogta Dadweynahu
                            waxay xoogga saareysaa bedka-qabka nololeed, midka sharafeed iyo caafimaadka shakhsiga. Waxayna tababbar iyo wacyigelin joogta ah
                            siineynsaa saraakiisha qaabilsan xogaha ee ka shaqeeya hey’adaha dowliga ah, hey’adaha caalamiga ah, shirkadaha bangiyada, goobaha
                            caafimaadka si sare loogu qaado aqoontooda ku saabsan dhowrista xogaha iyo ka-hortagga halisaha ka imaan karo adeegsiga qaldan ee
                            xogaha shakhsiyaadka.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Muwaadiniinta Soomaaliyeed waxa ay xaq u leeyihiin in loo ilaaliyo xogahooda si sharci ah oo waafaqsan xeerarka u degsan Hay’adda
                            iyo guud ahaan dalka. Waxaana xaqiijinta arrintaas uu waajib ka saaranyahay cid kasta oo u xilsaaran, gaar ahaanna saraakiisha
                            xogheynta, sida ku cad Qodobka 15-aad ee Sharciga Hay’adda oo si faahfahsan u qeexayay hababka Faafinta Ujeedka, Yareynta Xogta,
                            Keydinta iyo Saxnaanta.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Servicesdetail;
