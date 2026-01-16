import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

/* Existing */
import be from '../../public/locales/be/translation.json';
import bz from '../../public/locales/bz/translation.json';
import ca from '../../public/locales/ca/translation.json';
import cz from '../../public/locales/cz/translation.json';
import de from '../../public/locales/de/translation.json';
import en from '../../public/locales/en/translation.json';
import fr from '../../public/locales/fr/translation.json';
import ind from '../../public/locales/in/translation.json';
import it from '../../public/locales/it/translation.json';
import pk from '../../public/locales/pk/translation.json';
import us from '../../public/locales/us/translation.json';
import vn from '../../public/locales/vn/translation.json';
import jp from '../../public/locales/jp/translation.json';
import th from '../../public/locales/th/translation.json';
import tw from '../../public/locales/tw/translation.json';
import hk from '../../public/locales/hk/translation.json';
import ph from '../../public/locales/ph/translation.json';

/* Europe */
import es from '../../public/locales/es/translation.json';
import pt from '../../public/locales/pt/translation.json';
import br from '../../public/locales/br/translation.json';
import ru from '../../public/locales/ru/translation.json';
import pl from '../../public/locales/pl/translation.json';
import nl from '../../public/locales/nl/translation.json';
import ro from '../../public/locales/ro/translation.json';
import hu from '../../public/locales/hu/translation.json';
import se from '../../public/locales/se/translation.json';
import no from '../../public/locales/no/translation.json';
import fi from '../../public/locales/fi/translation.json';
import dk from '../../public/locales/dk/translation.json';
import gr from '../../public/locales/gr/translation.json';
import ua from '../../public/locales/ua/translation.json';

/* Asia */
import kr from '../../public/locales/kr/translation.json';
import cn from '../../public/locales/cn/translation.json';
import my from '../../public/locales/my/translation.json';
import kh from '../../public/locales/kh/translation.json';
import la from '../../public/locales/la/translation.json';
import id from '../../public/locales/id/translation.json';
import ms from '../../public/locales/ms/translation.json';
import bd from '../../public/locales/bd/translation.json';
import lk from '../../public/locales/lk/translation.json';

/* Middle East */
import ar from '../../public/locales/ar/translation.json';
import sa from '../../public/locales/sa/translation.json';
import ae from '../../public/locales/ae/translation.json';
import il from '../../public/locales/il/translation.json';
import ir from '../../public/locales/ir/translation.json';
import tr from '../../public/locales/tr/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      be: { translation: be },
      bz: { translation: bz },
      ca: { translation: ca },
      cz: { translation: cz },
      de: { translation: de },
      en: { translation: en },
      fr: { translation: fr },
      in: { translation: ind },
      it: { translation: it },
      pk: { translation: pk },
      us: { translation: us },
      vn: { translation: vn },
      jp: { translation: jp },
      th: { translation: th },
      tw: { translation: tw },
      hk: { translation: hk },
      ph: { translation: ph },

      es: { translation: es },
      pt: { translation: pt },
      br: { translation: br },
      ru: { translation: ru },
      pl: { translation: pl },
      nl: { translation: nl },
      ro: { translation: ro },
      hu: { translation: hu },
      se: { translation: se },
      no: { translation: no },
      fi: { translation: fi },
      dk: { translation: dk },
      gr: { translation: gr },
      ua: { translation: ua },

      kr: { translation: kr },
      cn: { translation: cn },
      my: { translation: my },
      kh: { translation: kh },
      la: { translation: la },
      id: { translation: id },
      ms: { translation: ms },
      bd: { translation: bd },
      lk: { translation: lk },

      ar: { translation: ar },
      sa: { translation: sa },
      ae: { translation: ae },
      il: { translation: il },
      ir: { translation: ir },
      tr: { translation: tr },
    },

    fallbackLng: 'en',

    supportedLngs: [
      'be','bz','ca','cz','de','en','fr','in','it','pk','us','vn','jp','th','tw','hk','ph',
      'es','pt','br','ru','pl','nl','ro','hu','se','no','fi','dk','gr','ua',
      'kr','cn','my','kh','la','id','ms','bd','lk',
      'ar','sa','ae','il','ir','tr',
    ],

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
