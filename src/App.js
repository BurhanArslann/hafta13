import { useReducer } from "react";
import {
  ilkYapilacaklarListesi,
  isKucultucu,
} from "./kucultuculer/isKucultucu";
import IsListe from "./IsListe";
import IsEkleForm from "./IsEkleForm";

function App() {
  const [yapilacaklar, vekilFonksiyon] = useReducer(
    isKucultucu,
    ilkYapilacaklarListesi
  );



  return (
    <>
      <section className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
              <h1 className="h3">Yapılacaklar Listesi</h1>
              <IsEkleForm vekilFonksiyon={vekilFonksiyon} />
              <IsListe yapilacaklar={yapilacaklar} vekilFonksiyon={vekilFonksiyon} />
          </div>

        </div>
      </section>
    </>
  );
}

export default App;
