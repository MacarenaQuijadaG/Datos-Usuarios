 // PUNTO 1 PROGRAMAR LA FUNCION IIFE PARA INVOCAR LA PAGINA AL CARGARLA
 (async () => {
    try {
      //CONSUME LA API CON EL RESULTADO DE 10 COMO TAMBIEN PUEDO PONERLO DIRECTAMENTE DESDE LA URL O EL FETCHDATA
      //TRAER DE A UNO Y AL RECARGAR PAGINA APARECE UNO POR UNO
      //const response = await fetch('https://randomuser.me/api/');
      // TRAE LOS 10 RESULTADOS DESDE LA URL
      // PUNTO 2 FUNCION AWAIT
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();

      // OBTENEMOS LA INFORMACION Y LA PASAMOS AL ID DEL HTML
      const container = document.getElementById('user-data');

      // MUESTRA LOS USUARIOS POR EL HTML
      data.results.forEach(user => {
        const userDiv = document.createElement('div');

          // Crear el elemento de imagen
          const userImage = document.createElement('img');
          // Establecer la URL de la imagen
          userImage.src = user.picture.large;
          // Añadir la imagen al contenedor
          userDiv.appendChild(userImage);

        const parrafo = document.createElement('p');
        //IMPIME LA URL DE LA FOTO CON SUS DATOS
        // parrafo.textContent = `${user.picture.large}${user.name.first} ${user.name.last}, ${user.email}`;
        //IMPRIME SOLO LOS DATOS
       // parrafo.textContent = `${user.name.first}${user.name.last}, ${user.email} ${user.cell}`;
                                         //ZORRY POR LOS <BR> :D
        parrafo.innerHTML = `${user.name.first} ${user.name.last}<br>${user.email}<br>${user.cell}`;
        // IMPRIME LA FOTO
        container.appendChild(userDiv);
        //IMMRPIME LA INFORMACION DEL PARRAFO
        container.appendChild(parrafo);
        

      });
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  })();