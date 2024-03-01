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
                        <h4>Doorka Sarakisha Xogta</h4>
                        <p className="mt-4 text-lg font-semibold">
                            Saraakiisha Dhowrista Xogta waxay udub-dhexaad u yihiin sare-u-qaadiidda halbeegyada dhowrista xogta ee ka dhex jira hay’adaha ay ka
                            hawlgalaan. Hay’adda Dhawrista Xogta Dadweynaha waxay Saraakiishu u buuxiyaan kaalintii u horreysa ee isku-xirka iyo xoojinta
                            wadashaqaynta xarumaha ay ka hawlgalaan iyo Hay’adda (DPA), si loo xaqiijiyo u hoggaansanaanta sharciga dhawrista xogta.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Saraakiishu waxay masuuliyad gaar ah ka saarantahay ilaalinta xuquuqda khusuusiyaadka shakhsiyaadka, iyaga oo tallo iyo tusaalayn ku
                            aaddan bixinaya, sidoo kalena korjoogteyn iyo qiimeyn ku sameynaya saameynta shaqada xog-dhowrista. Qiimayntaas waxaa ka qayb ah in
                            ay si qoto-dheer uga taxaddaraan halista iyo saamaynta ay yeelan karto tallaabo kasta oo ku saabsan adeegsiga xogta shakhsiga,
                            iyagoo aad uga caawinaya hay’adaha ay ka hawlgalaan habka ugu habboon ay ku xallin karaan xaaladaha la xiriira khusuusiyaadka.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Sidoo kale Saraakiishu waxay korjoogteeyaan u hoggaansannaanta sharciga, iyagoo ka dhigan u doodayaal gudaha ah oo u taagan
                            adeegsiga hagaagsan ee khusuusiyaadka. Waxay kaalin ka qaataan horumarinta iyo hirgelinta siyaasado iyo habraacyo xog-dhowrista ah
                            oo sal adag, iyaga oo xaqiijinaya u-hoggaansanaanta sharciga ee hey’adaha.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Xilliyada kormeerada iyo baarisyada sharciga ah, Saraakiisha Xog-dhowrista ayaa Hay’adda uga wakiil ah xiriirka iyo fududeynta
                            hawsha. Doorkoodu wuu ka ballaaranayaa keliya hoggaansanaan, oo waxay si toos ah ula falgalaan Hay’adda si loo xaqiijiyo daahfurnaan
                            iyo wadashaqayn, loona dhiso kalsooni iyo sumcadda hay’adda.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Saraakiishu waxay sidoo kale door waxbarasho ka qaataan goobta ay ka hawlgalaan, iyaga oo kor u qaada wacyiga shaqaalaha ee ku
                            saabsan mabaadii’da iyo xeerarka dhawrista xogta. Habkan firfircoon ayaa caawinaya yareynta halisaha, iyo suurtogelinta in hay’adaha
                            dhexdooda laga abuuro dhaqan tixgelinaya khusuusiyaadka.
                        </p>
                        <p className="mt-4 text-lg font-semibold">
                            Nuxur ahaan, xiriirka ka dhexeeya Saraakiisha iyo Hay’adda Dhawrista Xogta Dadweynaha waa xiriir laba geesood ah, iyadoo ay
                            Saraakiishu u ololaynayaan u-hoggaansanaanta khusuusiyaadka, halka ay Hay’adduna saraakiisha uga tashaneyso inay difaacayaal safka
                            hore taagan u noqdaan xuquuqda khusuusiyaadka muwaadiniinta. Wada-shaqayntaan waxay muhiim u tahay in lagu dhex shaqeeyo saaxadda
                            isbedbeddelka badan ee shuruucda xog-dhowrista, iyo in la xaqiijiyo isku-dheelitirnaan ka dhexeysa hal-abuurka iyo khusuusiyaadka.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Servicesdetail;
