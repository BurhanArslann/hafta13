
const ilkYapilacaklarListesi = [
    {
      id: 0,
      title: "Yumurta alınacak (organik kırda gezen tavuk)",
      complete: false,
    },
  
    {
      id: 1,
      title: "Ekmek alınacak (ramazan pidesi)",
      complete: true,
    },
  ];
  
  const isKucultucu = (state, aksiyon) => {
    switch (aksiyon.type) {

      case "TAMAMLANDI":
        return state.map((todo) => {
          if (todo.id === aksiyon.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        });

        case "SİL":
            return state.filter((todo) => {
              if (todo.id !== aksiyon.id) { // eğer vekil fonksiyondan gelen id şu anki işe eşit değilse yeni arraye elemanı ekle..FİLTRELEME...
                return todo;
              }
            });

        case "EKLE":
            const enBuyukIs = state.reduce( 
              (max, is) => {
                return is.id > max.id ? is : max;
              }, 
              state[0] 
            )
               
            const yeniIs = {id: enBuyukIs.id + 1, title: aksiyon.title, completed: false}
            return [...state, yeniIs  ] //yei işi state ekle
    

      default:
        return state;
    }
  };

  export {ilkYapilacaklarListesi, isKucultucu}