 (async function () {
      try {
        // Funcion iiife para cargar la pagina
        const fetchData = async () => {
          //CONSUME LA API CON EL RESULTADO DE 10 COMO TAMBIEN PUEDO PONERLO DIRECTAMENTE DESDE LA URL O EL FETCHDATA
          //TRAER DE A UNO Y AL RECARGAR PAGINA APARECE UNO POR UNO
          const response = await fetch('https://randomuser.me/api/');
          //const response = await fetch('https://randomuser.me/api/?results=10');
          const data = await response.json();
          return data.results;
        };

      } catch (error) {
        console.error('Error en data:', error);
      }
    })();