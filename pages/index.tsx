import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/layouts';
import { UI } from '../components';
import faqData from 'constants/faq';
import WkoLogo from '../assets/images/wko-logo.svg';
import { contactData } from 'constants/contact';
import indexStrucutreData from 'utils/structure-data';
import {
  ArrowRightIcon,
  CheckIcon,
  CheckBadgeIcon,
  ClockIcon,
  KeyIcon,
  DevicePhoneMobileIcon,
  LockOpenIcon,
  UserIcon,
  PhoneIcon,
  CurrencyEuroIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import router from 'next/router';
import { priceData } from 'constants/price';

const IndexPage = () => {
  const [priceTableVisible, setPriceTabelVisible] = useState<boolean>(false);

  const hanldeClosePriceTable = () => {
    setPriceTabelVisible(false);
  };

  return (
    <Layout
      title="Schlüsseldienst und Aufsperrdienst in Wien | TÜREX"
      canonical="https://tuerex.at/"
      metaDescription="Schlüsseldienst Wien rund um die Uhr. Behördlich befähigter Aufsperrdienst mit klarer Preisgestaltung. Türöffnungen ohne Schaden. Jetzt anrufen."
      jsonLd={indexStrucutreData}
    >
      {/* Modal Price START */}
      {priceTableVisible && (
        <UI.ModalDialog onClick={hanldeClosePriceTable}>
          <UI.Typography
            variant="md"
            align="center"
            className="mt-4 font-bold h5"
          >
            Schlüsseldienst Preise
          </UI.Typography>
          <UI.PriceTable />
        </UI.ModalDialog>
      )}
      {/* Modal Price END */}
      {/* Hero Section START */}
      <header>
        <UI.Navigation isActiveHamburger={true} />
        <UI.Container className="flex flex-col items-center w-full gap-4 pb-8">
          <div className="pt-[40px] pb-4">
            <UI.AvailabilityCheck />
          </div>
          <UI.Button
            variant="contained"
            size="sm"
            light
            className="!rounded-full flex gap-2 items-center"
            onClick={() => setPriceTabelVisible(true)}
          >
            Preise ansehen <ArrowRightIcon className="w-4" />
          </UI.Button>
          <UI.Typography
            variant="h1"
            weight="bold"
            className="text-center pt-6 font-['Lexend'] md:text-[46px] md:!leading-[1.1]"
          >
            Schlüsseldienst Wien &<br></br>
            <span className="text-primary-500">Aufsperrdienst Wien</span>
          </UI.Typography>
          <UI.Typography variant="xs" className="text-center text-gray-800">
            Klare Preisgestaltung
          </UI.Typography>
          <ul className="flex items-center justify-between pt-8 w-full max-w-[480px]">
            <li className="flex items-center gap-1 text-[16px] md:text-[18px] font-['Lexend'] text-gray-800">
              <CheckIcon className="w-5" />
              24h/365 Tage
            </li>
            <li className="flex items-center gap-1 text-[16px] md:text-[18px] font-['Lexend'] text-gray-800">
              <CheckIcon className="w-5" /> Behördlich befähigt
            </li>
          </ul>
          <UI.Call />
          <div className="relative flex justify-center w-full h-8 mt-6">
            <Link href="https://firmen.wko.at/sead-hadrovi%C4%87/wien/?firmaid=281d167a-1201-460e-9c76-dabac353623b">
              <img src={WkoLogo.src} alt="wkö logo" />
            </Link>
          </div>
          <UI.Typography
            variant="sm"
            className="text-center font-['Lexend'] text-[10px] -mt-2"
          >
            Mitglied der Wirtschaftskammer Wien
          </UI.Typography>
        </UI.Container>
      </header>
      {/* Hero Section START */}
      {/* Content Section START */}
      <UI.Container element="main" widthMode="full" className="mt-[98px]">
        <UI.Container element="section">
          <UI.Typography variant="h2" weight="bold" align="center">
            Wenn dich dein Schlüssel im Stich lässt: <br></br>
            <span className="text-primary-500">
              unser 24h Schlüsseldienst hilft weiter
            </span>
            .
          </UI.Typography>
          <UI.Typography
            variant="md"
            align="center"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Wenn du plötzlich vor verschlossener Tür stehst und dein Schlüssel
            dich im Stich lässt, steht unser 24h Schlüsseldienst bereit. Wir
            sind ein professioneller Aufsperrdienst, ausgebildet dafür, dir in
            solchen Notfällen zu helfen.
          </UI.Typography>
          <ul className="flex flex-col lg:flex-row justify-start lg:justify-between gap-8 mt-[98px]">
            <li className="w-full lg:w1/3">
              <UI.Icon icon={ClockIcon} />
              <UI.Typography
                variant="h3"
                className="text-black mt-4 !text-h4 !leading-8"
              >
                24 Stunden erreichbar
              </UI.Typography>
              <UI.Typography
                variant="md"
                className="mt-6 !text-[16px] text-primary-900 leading-6"
              >
                Wir sind rund um die Uhr, 365 Tage im Jahr, für dich da. Wir
                helfen in Notfällen. Sowohl in der Nacht, als auch an Sonn- und
                Feiertagen.
              </UI.Typography>
            </li>
            <li className="w-full lg:w1/3">
              <UI.Icon icon={KeyIcon} />
              <UI.Typography
                variant="h3"
                className="text-black mt-4 !text-h4 !leading-8"
              >
                Schadenfreie Türöffnung
              </UI.Typography>
              <UI.Typography
                variant="md"
                className="mt-6 !text-[16px] text-primary-900 leading-6"
              >
                Unsere Profis öffnen Türen ohne Schäden. Ob ausgesperrt oder
                abgebrochener Schlüssel - eine schonende Türöffnung ist unser
                Ziel.
              </UI.Typography>
            </li>
            <li className="w-full lg:w1/3">
              <UI.Icon icon={CurrencyEuroIcon} />
              <UI.Typography
                variant="h3"
                className="text-black mt-4 !text-h4 !leading-8"
              >
                Faire & klare Fixpreise
              </UI.Typography>
              <UI.Typography
                variant="md"
                className="mt-6 !text-[16px] text-primary-900 leading-6"
              >
                Unsere{' '}
                <Link href="#prices" className="underline">
                  Fixpreise
                </Link>{' '}
                sind fair und klar, pro Leistung definiert. So kannst du
                jederzeit die Kosten im Überblick behalten.
              </UI.Typography>
            </li>
          </ul>
        </UI.Container>
        {/* Content Section END */}
        {/* Call Section START */}
        <div className="flex justify-center my-20">
          <a
            href={`tel:${contactData.phone}`}
            className="flex items-center justify-center gap-2 h-[40px] rounded-lg bg-primary-500 cursor-pointer text-white font-bold px-4"
          >
            0676/374 12 04
            <PhoneIcon className="w-6 h-6 text-white" />
          </a>
        </div>
        {/* Call Section END */}
        {/* Content Section START */}
        <UI.Container element="section" className="mt-[98px]">
          <UI.Typography variant="h2" weight="bold">
            Umfassender Service durch <br></br>
            <span className="text-primary-500">
              behördlich befähigten Aufsperrdienst
            </span>
            .
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Unsere Aufgabe ist es zwar für ordnungsgemäße, schadenfreie
            Türröffnungen zu sorgen. Unsere Expertise geht aber weit mehr
            hinaus. Als professioneller Schlüsseldienst sorgen wir auch dafür,
            dass du dich während des ganzen Prozesses sicher und wohl fühlst.
          </UI.Typography>
          <div className="grid md:grid-cols-2 gap-8 my-[98px]">
            <div className="order-2 md:order-1">
              <div>
                <UI.Icon icon={CheckBadgeIcon} />
                <UI.Typography
                  variant="h3"
                  className="text-black mt-4 !text-h4 !leading-8"
                >
                  Akzeptiert von Haushaltsversicherungen
                </UI.Typography>
                <UI.Typography
                  variant="md"
                  className="mt-6 !text-[16px] text-primary-900 leading-6"
                >
                  Nachdem wir deine Tür aufgesperrt haben, kannst du unsere
                  Rechnung bedenkenlos bei deiner Haushaltsversicherung
                  einreichen. Unsere Leistungen werden von allen Versicherungen
                  akzeptiert.
                </UI.Typography>
              </div>
              <div className="mt-[56px]">
                <UI.Icon icon={ShieldCheckIcon} />
                <UI.Typography
                  variant="h3"
                  className="text-black mt-4 !text-h4 !leading-8"
                >
                  Behördlich befähigt
                </UI.Typography>
                <UI.Typography
                  variant="md"
                  className="mt-6 !text-[16px] text-primary-900 leading-6"
                >
                  Wir sind behördlich befähigt und haben uns zu höchster
                  Seriosität und Transparenz verpflichtet. Dieser Verpflichtung
                  gehen wir auch sehr gerne nach.
                </UI.Typography>
              </div>
              <div className="mt-[56px]">
                <UI.Icon icon={PhoneIcon} />
                <UI.Typography
                  variant="h3"
                  className="text-black mt-4 !text-h4 !leading-8"
                >
                  Laufende Betreuung
                </UI.Typography>
                <UI.Typography
                  variant="md"
                  className="mt-6 !text-[16px] text-primary-900 leading-6"
                >
                  Wir verstehen, dass das Warten vor der verschlossenen Tür
                  anstregend sein kann. Unser Team steht dir auch während der
                  Wartezeit zur Verfügung, und betreut dich falls notwendig. Wir
                  haben dafür auch einige{' '}
                  <Link href="#tipps" className="underline">
                    Tipps
                  </Link>{' '}
                  für dich vorbereitet.
                </UI.Typography>
              </div>
            </div>
            <div className="relative mb-[56px] order-1 md:order-2">
              <Image
                width={1920}
                height={1280}
                priority
                src="/images/schluesseldienst-wien-aufsperrdienst.jpg"
                alt="Schlüsseldienst Wien Mitarbeiter öffnet eine Tür"
                className="overflow-hidden rounded-xl"
              />
            </div>
          </div>
        </UI.Container>
        {/* Content Section END */}
        {/* Payment Section START */}
        <div id="payment">
          <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
            <div className="px-4">
              <UI.Typography
                variant="h2"
                align="center"
                className="font-bold text-white"
              >
                Entscheide selbst, wie du gerne bezahlst.
              </UI.Typography>
              <UI.Typography
                variant="lg"
                align="center"
                className="!text-h5 mt-8 text-white"
              >
                Bequem & direkt vor Ort.
              </UI.Typography>
              <UI.Payment />
              <UI.Call mode="dark" />
            </div>
          </UI.Container>
        </div>
        {/* Payment Section END */}
        {/* Content Section START */}
        <UI.Container>
          <UI.Typography variant="h2" className="font-bold mt-[98px]">
            <span className="text-primary-500">Schlüsseldienst Wien</span>
            <br></br>
            so unkompliziert geht es.
          </UI.Typography>
          <div className="mt-[56px]">
            <UI.Icon icon={DevicePhoneMobileIcon} />
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              Schlüsseldienst anrufen
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Einfach anrufen und uns dein Problem schildern. Wir sind in
              kürzester Zeit bei dir, um beim Problem zu helfen.
            </UI.Typography>
          </div>
          <div className="mt-[56px]">
            <UI.Icon icon={ClockIcon} />
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              Kurz abwarten
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Nach deinem Anruf ist unser Team blitzschnell unterwegs, sodass du
              nicht lange im Notfall warten musst.
            </UI.Typography>
          </div>
          <div className="my-[56px]">
            <UI.Icon icon={LockOpenIcon} />
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              Aufsperren lassen
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Unsere Experten öffnen deine Tür schnell und ohne Schäden, damit
              du schnell wieder in deine Räumlichkeiten gelangen kannst.
            </UI.Typography>
          </div>
          <UI.Button
            variant="contained"
            onClick={() => router.push('/abwicklung')}
            iconVisible={true}
            iconPosition={'right'}
            icon={<ArrowRightIcon className="w-8" />}
            className="flex items-center py-4 my-8 font-bold mb-[98px]"
          >
            Mehr erfahren
          </UI.Button>
        </UI.Container>
        {/* Content Section END */}
        {/* Call Section START */}
        <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
          <UI.Typography
            variant="h2"
            align="center"
            className="font-bold text-white"
          >
            Rufe uns jetzt an.
          </UI.Typography>
          <UI.Typography
            variant="lg"
            align="center"
            className="!text-h5 mt-8 text-white !leading-8"
          >
            Wir sind rund um die Uhr erreichbar. Sowohl als Schlüsselnotdienst,
            als auch im Normaldienst.
          </UI.Typography>
          <UI.Call mode="dark" />
        </UI.Container>
        {/* Call Section END */}
        {/* Price Section START */}
        <div className="bg-[#f5f5f5] pt-16 pb-8" id="prices">
          <UI.Container>
            <UI.Typography
              variant="h2"
              align="center"
              className="mt-4 font-bold"
            >
              Schlüsseldienst<br></br>
              <span className="text-primary-500">Preise und Kosten</span>.
            </UI.Typography>
            <UI.Typography variant="lg" align="center" className="mt-8">
              Transparent und mit klarer Preisgestaltung. Hier findest du die
              Auflistung unserer Preise.
            </UI.Typography>
            <UI.TableNavigation
              filter={priceData[0].title}
              onClick={() => router.push(`/preise`)}
            />
            <UI.TableContent query={priceData[0].title} />
          </UI.Container>
        </div>
        {/* Price Section END */}
        {/* Content Section START */}
        <UI.Container className="py-[56px]">
          <div className="grid md:grid-cols-2 gap-8 mt-[56px]">
            <div className="relative order-1 md:order-2">
              <Image
                width={1920}
                height={1280}
                src="/images/serioeser-schluesseldienst.jpg"
                alt="Mitarbeiter des seriösen Schlüsseldienstes öffnen die Eingangstür"
                className="overflow-hidden rounded-xl"
              />
            </div>
            <div className="order-2 md:order-1">
              <UI.Typography variant="h2" weight="bold">
                <span className="text-primary-500">
                  Seriöser Schlüsseldienst
                </span>
                ?<br></br>
                Bei uns bist du richtig.
              </UI.Typography>
              <UI.Typography
                variant="md"
                className="mt-6 !text-[18px] text-primary-900 leading-8"
              >
                Wir haben 6 Tipps für dich vorbereitet, die dir zeigen sollen,
                worauf du bei einem Schlüsseldienst Unternehmen achten sollst.
                Erfahre jetzt mehr darüber, was du alles bezüglich Seriosität
                beachten musst.
              </UI.Typography>
              <UI.Button
                variant="contained"
                onClick={() => router.push('/serioeser-schluesseldienst')}
                iconVisible={true}
                iconPosition={'right'}
                icon={<ArrowRightIcon className="w-8" />}
                className="w-full mt-12 mb-8 font-bold flex items-center py-4 max-w-[300px]"
              >
                Mehr erfahren
              </UI.Button>
              <UI.Container className="flex items-center w-full gap-4 !px-0">
                <div className="relative w-24 h-8">
                  <img src={WkoLogo.src} alt="wkö logo" />
                </div>
                <UI.Typography
                  variant="sm"
                  className="font-['Lexend'] text-[10px]"
                >
                  Mitglied der Wirtschaftskammer Wien
                </UI.Typography>
              </UI.Container>
            </div>
          </div>
        </UI.Container>
        <div className="py-[56px] bg-[#f5f5f5]">
          <UI.Container>
            <UI.Typography variant="h2" className="font-bold mt-[56px]">
              <span className="text-primary-500">Aufsperrdienst Wien</span> -
              das ist bezüglich der{' '}
              <span className="text-primary-500">Türöffnung</span> deinerseits
              zu beachten.
            </UI.Typography>
            <div className="mt-[56px]">
              <UI.Typography
                variant="md"
                className="mt-6 !text-[18px] text-primary-900 leading-8"
              >
                Nachdem unser Schlüsselnotdienst die Tür erfolgreich entsperrt
                hat, benötigen wir kurz deine Kooperation. Du wirst gebeten,
                deinen Ausweis bereitzustellen, um deine Identität zu bestätigen
                und die rechtsverbindliche Erklärung zu unterzeichnen.
              </UI.Typography>
            </div>
            <div className="my-[56px]">
              <UI.Icon icon={UserIcon} />
              <UI.Typography
                variant="h3"
                className="text-black mt-4 !text-h4 !leading-8"
              >
                Ausweis und rechtsverbindliche Erklärung
              </UI.Typography>
              <UI.Typography
                variant="md"
                className="mt-6 !text-[18px] text-primary-900 leading-8"
              >
                Der Ausweis dient nur zur Überprüfung deiner Person. Diesen
                zeigst du einfach unserem Kollegen vor Ort. Zusätzlich wirst du
                von uns gebeten eine{' '}
                <a
                  href="/echtsverbindliche-erklaerung.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-primary-500"
                >
                  rechtsverbindliche Erklärung
                </a>{' '}
                unterzeichnen. Dadurch wird sichergestellt, dass auch alles
                gesetzeskonform abläuft.
              </UI.Typography>
            </div>
          </UI.Container>
        </div>
        <UI.Container>
          <div className="grid md:grid-cols-2 gap-8 mt-[56px]">
            <div>
              <UI.Typography variant="h2" weight="bold">
                Mehr als nur ein{' '}
                <span className="text-primary-500">Schlüsseldienst</span>.
              </UI.Typography>
              <div className="mt-[56px]">
                <UI.Typography
                  variant="md"
                  className="mt-6 !text-[18px] text-primary-900 leading-8"
                >
                  Wir bieten nicht nur den Schlüsseldienst an, sondern auch
                  professionelle Schlosserarbeiten für deine Sicherheit. Unsere
                  Expertise steht dir auch außerhelb der Notdienstzeiten, für
                  verschiedene Leistungen zur Verfügung.
                </UI.Typography>

                <UI.Button
                  variant="contained"
                  onClick={() => router.push('/leistungen')}
                  iconVisible={true}
                  iconPosition={'right'}
                  icon={<ArrowRightIcon className="w-8" />}
                  className="w-full my-8 font-bold flex items-center py-4 max-w-[300px]"
                >
                  Alle Leistungen ansehen
                </UI.Button>
              </div>
            </div>
            <div className="relative">
              <Image
                width={1920}
                height={1280}
                src="/images/mehr-als-ein-schluesseldienst.jpg"
                alt="Professioneller Schlosser in seiner Werkstatt"
                className="overflow-hidden rounded-xl"
              />
            </div>
          </div>
        </UI.Container>
        {/* Content Section END */}
        {/* Tipps Section START */}
        <UI.Container id="tipps">
          <div className="pt-[98px]">
            <UI.Typography variant="h2" className="font-bold mt-[98px]">
              <span className="text-primary-500">Tipps für die Wartezeit</span>
              <br></br>
              auf unseren Schlüsseldienst
            </UI.Typography>

            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Mit diesen Tipps kannst du die Zeit während des Wartens sinnvoll
              nutzen und die unangenehme Situation möglichst stressfrei
              gestalten. Wir hoffen, dass diese Tipps dir weiterhelfen.
            </UI.Typography>
          </div>
          <div className="mt-[56px]">
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              <span className="block text-primary-500">Tipp #1</span>
              Ruhe bewahren
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Es ist zwar leicht gesagt, und nicht immer einfach, aber versuche
              ruhig zu bleiben und dich zu entspannen. Zusätzlicher Stress in
              Notsituationen bringt nicht viel, und wir sind ja auch in Kürze
              bei dir.
            </UI.Typography>
          </div>
          <div className="mt-[56px]">
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              <span className="block text-primary-500">Tipp #2</span>
              Erreichbar bleiben
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Halte dein Telefon griffbereit und stelle sicher, dass du
              erreichbar bist. So können wir dich in der Zwischenzeit und bei
              unserer Ankunft erreichen.
            </UI.Typography>
          </div>
          <div className="mt-[56px]">
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              <span className="block text-primary-500">Tipp #3</span>
              Lesen, Podcasts oder Musik hören
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Lese ein E-Book, höre Podcasts oder Musik auf deinem Smartphone,
              um die Wartezeit wertvoll zu verbringen. Achte aber darauf, dass
              dein Akku nicht leer wird. Es ist wichtig, dass wir in Kontakt
              bleiben können.
            </UI.Typography>
          </div>
          <div className="mt-[56px]">
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              <span className="block text-primary-500">Tipp #4</span>
              Kontaktiere deine Nachbarn
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Informiere deine Nachbarn, dass du auf den Schlüsseldienst
              wartest. Oftmals sind sie bereit zu helfen und bieten dir
              womöglich an, mit einer warmen Tasse Kaffee oder Tee in ihrer
              Wohnung zu warten. Sehr hilfreich, vor allem im Winter oder mit
              Kindern.
            </UI.Typography>
          </div>
          <div className="mt-[56px]">
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              <span className="block text-primary-500">Tipp #5</span>
              Akku prüfen
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Überprüfe den Ladestand deines Handys. Eine volle Batterie sorgt
              dafür, dass du ständig erreichbar bist. Gegebenenfalls kannst du
              auch deine Nachbarn fragen, ob du kurz das Handy bei ihnen laden
              kannst.
            </UI.Typography>
          </div>
          <div className="my-[56px]">
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              <span className="block text-primary-500">Tipp #6</span>
              In der Nähe bleiben
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Bleibe in der Nähe deiner Wohnung, damit du den Schlüsseldienst
              sofort empfangen kannst, wenn er eintrifft, um weitere Wartezeiten
              zu vermeiden.
            </UI.Typography>
          </div>
        </UI.Container>

        {/* Tipps Section END */}
        {/* FAQ START */}
        <UI.Container className="pb-16">
          <UI.Typography variant="h2" className="font-bold mt-[168px] mb-8">
            Häufig gestellte Fragen
          </UI.Typography>
          <UI.Faq items={faqData} />
        </UI.Container>
        {/* FAQ END */}
        {/* Call Section START */}
        <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
          <UI.Typography
            variant="h2"
            align="center"
            className="font-bold text-white"
          >
            Rufe uns jetzt an.
          </UI.Typography>
          <UI.Typography
            variant="lg"
            align="center"
            className="!text-h5 mt-8 text-white !leading-8"
          >
            Wir sind rund um die Uhr erreichbar. Sowohl als Schlüsselnotdienst,
            als auch im Normaldienst.
          </UI.Typography>
          <UI.Call mode="dark" />
        </UI.Container>
        {/* Call Section END */}
      </UI.Container>
    </Layout>
  );
};

export default IndexPage;
