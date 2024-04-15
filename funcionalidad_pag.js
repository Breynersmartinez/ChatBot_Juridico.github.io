/* MANEJO DE OBJETOS EN JS */

   /*Mapeo de palabras clave*/

  /* ( El metodo de soluciones comunes, 
   contiene pares de clave y valor,
   la clave representa un palabra que
    la persona podria ingresar y 
    el valor es la respuesta que esta
     predeterinada en el objeto )*/

     /* LIBRERIAS LENGUAJE NATURA PARA JS */
/* (INSTALADA) TensorFlow.js para tareas de procesamiento de lenguaje 
natural
npm install @tensorflow/tfjs*/
/*Natural Language Toolkit (NLTK) comúnmente utilizado 
en Python pero también puede ser utilizado 
en JavaScript a través de Node.js
 npm install nltk*/
 /* COMPROMISE:
 librería de procesamiento de lenguaje natural en JavaScript
 npm install compromise */


   

     const Soluciones_Comunes = {
        /*Saludos e interaccion*/

        'hola': 'Hola, ¿en qué puedo asesorarte legalmente?',
        'mi caso es sobre': 'Entiendo que quieres hablar sobre un caso específico. Por favor, proporciona más detalles para que pueda asesorarte mejor.',
        'si': ' ¿ De acuerdo, cual es tu consulta juridica puntualmente, gracias?',
        'okey': ' ¿ De acuerdo, cual es tu consulta juridica puntualmente, gracias?',
        'ok': ' ¿ De acuerdo, cual es tu consulta juridica puntualmente, gracias?',
        'okay': ' ¿ De acuerdo, cual es tu consulta juridica puntualmente, gracias?',
        'buenas': 'Hola, ¿en qué puedo asesorarte legalmente?',
        'bien': 'Me alegra escuchar eso. ¿Tienes alguna consulta legal específica?',
        'mal': 'Lo siento por escuchar eso. ¿Puedo ayudarte con algo legal?',
        'gracias': '¡De nada! Si tienes más preguntas, no dudes en hacerlas.',
        'todo bien': '¡De nada! Si tienes más preguntas, no dudes en hacerlas.',
        'melo': '¡De nada! Si tienes más preguntas, no dudes en hacerlas.',
        'la buena': '¡De nada! Si tienes más preguntas, no dudes en hacerlas.',
    'adios': '¡Adiós! No dudes en volver si tienes más preguntas.',
        'buenos dias': '¡Buenos días! ¿Cómo puedo ayudarte hoy?',
        'buenas tardes': '¡Buenas tardes! ¿En qué puedo asistirte en este momento?',
        'buenas noches': '¡Buenas noches! ¿Hay algo con lo que pueda ayudarte antes de que termine el día?',
        '¿cómo estás?': '¡Gracias por preguntar! Como chatbot, no tengo emociones, pero estoy listo para ayudarte. ¿Qué necesitas?',
        'gracias por tu ayuda': '¡De nada! Siempre estoy aquí para ayudarte. ¿Hay algo más que necesites?',
        'no entiendo': 'Lo siento si algo no fue claro. ¿Podrías especificar tu pregunta o problema?',
        'necesito un abogado': 'Entiendo que estás buscando asesoramiento legal. Aunque soy un chatbot y no puedo reemplazar a un abogado humano, puedo proporcionarte información general. ¿Qué te gustaría saber?',
        'no sé qué hacer': 'Entiendo que estás confundido. Si me das más detalles sobre tu situación, podría ser capaz de proporcionarte alguna información que te ayude.',
        'estoy asustado': 'Lo siento que te sientas así. Aunque soy un chatbot, estoy aquí para proporcionarte información legal. ¿Cómo puedo ayudarte?',
        'estoy enojado': 'Lamento que te sientas así. ¿Hay algo específico que te gustaría discutir o alguna pregunta legal que te gustaría hacer?',
        '¿qué más?': '¡Hola! ¿En qué puedo asesorarte hoy?',
        '¿bien o qué?': '¡Hola! Estoy aquí para ayudarte. ¿Tienes alguna consulta legal?',
        'chao': '¡Chao! No dudes en volver si tienes más preguntas.',
        'muchas gracias': '¡Con gusto! Si tienes más preguntas, aquí estaré.',
        'no cacho': 'Lo siento si algo no fue claro. ¿Podrías especificar tu pregunta o problema?',
        'estoy aburrido': '¡Vaya! ¿Sabías que el derecho puede ser muy interesante? ¿Quieres saber algo en particular?',
        'estoy preocupado': 'Entiendo que estás preocupado. ¿Hay algo específico que te gustaría discutir o alguna pregunta legal que te gustaría hacer?',
        'necesito un consejo': 'Claro, estoy aquí para ayudarte. ¿Sobre qué tema necesitas un consejo?',
        'estoy perdido': 'Entiendo que te sientes perdido. Si me das más detalles sobre tu situación, podría ser capaz de proporcionarte alguna información que te ayude.',
        'estoy triste': 'Lamento que te sientas así. ¿Hay algo específico que te gustaría discutir o alguna pregunta legal que te gustaría hacer?',
        'estoy feliz': '¡Qué bueno que te sientas feliz! ¿Hay algo más con lo que pueda ayudarte hoy?',
        'plata': 'Entiendo que estás hablando de dinero. ¿Tienes alguna pregunta legal relacionada con ello?',
        'estar en las nubes': 'Parece que estás un poco distraído. ¿Cómo puedo ayudarte con tus consultas legales?',
        '¿qué más?': '¡Hola! ¿En qué puedo asesorarte hoy?',
        'chao': '¡Chao! No dudes en volver si tienes más preguntas.',
        'parce': '¡Hola, parce! ¿Cómo puedo ayudarte hoy?',
        'chamba': 'Entiendo que estás hablando de trabajo. ¿Tienes alguna pregunta legal relacionada con ello?',
        'nada': '¡De acuerdo! Estoy aquí si necesitas algo. No dudes en hacerme cualquier pregunta legal que tengas.',
        '': 'Parece que no has escrito nada. ¿Puedes reformular tu pregunta o consulta?',
        'asdf': 'Lo siento, no entiendo lo que estás tratando de decir. ¿Puedes reformular tu pregunta o consulta?',
        '¿?': 'Parece que tienes una pregunta, pero no está clara. ¿Puedes proporcionar más detalles?',
        '!!!': 'Parece que estás emocionado o molesto. ¿Cómo puedo ayudarte hoy?',


        /*Casos */
        

        'pensión': 'La pensión es un tema importante en el derecho laboral y de seguridad social. ¿Tienes alguna pregunta específica sobre ello?',
    'accidente laboral': 'Los accidentes laborales pueden dar lugar a diversas cuestiones legales. ¿Necesitas asesoramiento sobre algún incidente en el trabajo?',
    'desalojo': 'El desalojo es un proceso legal que puede ser confuso. ¿Necesitas ayuda con ello?',
    'infracción': 'Las infracciones pueden ser confusas. ¿Necesitas ayuda para entender una infracción?',
    'derechos del consumidor': 'Los derechos del consumidor son fundamentales en las transacciones comerciales. ¿Tienes alguna pregunta específica sobre ello?',
    'derechos humanos': 'Los derechos humanos son fundamentales. ¿Tienes alguna pregunta específica sobre ello?',
    'protección de datos': 'La protección de datos es un tema importante en la era digital. ¿Tienes alguna pregunta específica sobre ello?',
    'propiedad intelectual': 'Los asuntos de propiedad intelectual pueden ser complejos. ¿Tienes alguna pregunta específica sobre ello?',
    'sociedad': 'Las sociedades comerciales implican varios aspectos legales. ¿Tienes alguna pregunta sobre la formación o gestión de una sociedad?',
    'quiebra': 'La quiebra es un proceso legal que puede ser confuso. ¿Necesitas ayuda con ello?',
    'derecho penal': 'El derecho penal abarca los delitos y sus consecuencias. ¿Tienes alguna pregunta específica sobre ello?',
    'derecho civil': 'El derecho civil abarca una amplia gama de temas, desde contratos hasta propiedad. ¿Tienes alguna pregunta específica sobre ello?',
    'derecho administrativo': 'El derecho administrativo se ocupa de las acciones del gobierno. ¿Tienes alguna pregunta específica sobre ello?',
    'derecho constitucional': 'El derecho constitucional se ocupa de los principios fundamentales de la ley de un país. ¿Tienes alguna pregunta específica sobre ello?',
        'divorcio': 'El proceso de divorcio puede ser complicado. ¿Tienes alguna pregunta específica sobre ello?',
        'contrato de alquiler': 'Los contratos de alquiler son importantes. ¿Qué necesitas saber?',
        'laboral': 'Entiendo, las cuestiones laborales pueden ser confusas. ¿Cómo puedo ayudarte?',
        'indemnización laboral': 'Entiendo, las cuestiones laborales pueden ser confusas. ¿Cómo puedo ayudarte?',
        'indemnizacion laboral': 'Entiendo, las cuestiones laborales pueden ser confusas. ¿Cómo puedo ayudarte?',
        'salud': 'El derecho a la salud es fundamental. ¿Tienes alguna pregunta específica sobre ello?',
        'contrato': 'Los contratos son acuerdos legales entre dos o más partes. ¿Necesitas ayuda con algún contrato en particular?',
        'negligencia': 'La negligencia es una falta de cuidado o diligencia debida. ¿Tienes alguna pregunta específica sobre un caso de negligencia?',
        'daños': 'Los daños y perjuicios se refieren a la compensación que se debe pagar a una persona que ha sufrido una pérdida o daño. ¿Tienes alguna pregunta específica sobre ello?',
        'seguros': 'Los reclamos de seguros pueden ser complicados. ¿Necesitas ayuda con un reclamo de seguro?',
        'custodia': 'La custodia de los hijos es un tema delicado. ¿Tienes alguna pregunta específica sobre ello?',
        'manutención': 'La manutención de menores es un deber legal de los padres. ¿Tienes alguna pregunta específica sobre ello?',
        'restricción': 'Las órdenes de restricción se utilizan para proteger a una persona de otra. ¿Tienes alguna pregunta específica sobre ello?',
        'despido': 'Los despidos injustificados pueden dar lugar a reclamaciones legales. ¿Tienes alguna pregunta específica sobre ello?',
        'discriminación': 'La discriminación es ilegal y puede dar lugar a reclamaciones legales. ¿Tienes alguna pregunta específica sobre ello?',
        'comercial': 'Las disputas comerciales pueden ser complejas. ¿Necesitas ayuda con una disputa comercial?',
        'propiedad': 'Los asuntos de propiedad pueden ser complejos. ¿Tienes alguna pregunta específica sobre ello?',
        'herencia': 'Las cuestiones de herencia pueden ser delicadas. ¿Necesitas ayuda con algún asunto de herencia?',
        'testamento': 'Elaborar un testamento es un paso importante. ¿Tienes alguna pregunta sobre cómo hacerlo?',
        'accidente': 'Los accidentes pueden dar lugar a diversas cuestiones legales. ¿Necesitas asesoramiento sobre algún incidente?',
        'multa': 'Las multas pueden ser confusas. ¿Necesitas ayuda para entender una multa?',
        'inmigración': 'Los asuntos de inmigración pueden ser complicados. ¿Tienes alguna pregunta específica sobre ello?',
        'matrimonio': 'El matrimonio implica varios aspectos legales. ¿Tienes alguna pregunta sobre el matrimonio?',
        'adopción': 'La adopción es un proceso legal importante. ¿Tienes alguna pregunta sobre ello?',
        'bancarrota': 'La bancarrota es un proceso legal que puede ser confuso. ¿Necesitas ayuda con ello?',
        'impuestos': 'Los asuntos fiscales pueden ser complejos. ¿Tienes alguna pregunta sobre impuestos?'
       
    };
    
        /* función sirve para enviar el mensaje
         del usuario al chatbot y mostrar la respuesta 
         correspondiente. Crea elementos HTML para mostrar 
         el mensaje del usuario y la respuesta del chatbot 
         en la ventana del chat.*/
    
        var isPaused = false;
    
        function sendMessage() {
            var userInput = document.getElementById('userInput').value;
            var chatWindow = document.getElementById('chatWindow');
        
            var userMessage = document.createElement('div');
            userMessage.classList.add('message', 'user-message');
            userMessage.textContent = userInput;
            chatWindow.appendChild(userMessage);
        
            var time = new Date().toLocaleTimeString();
            var timeSpan = document.createElement('span');
            timeSpan.classList.add('message-time');
            timeSpan.textContent = time;
            userMessage.appendChild(timeSpan);
        
            var botMessage = document.createElement('div');
            botMessage.classList.add('message', 'bot-message');
            chatWindow.appendChild(botMessage);
        
            var botResponse = Soluciones_Comunes.hasOwnProperty(userInput.toLowerCase()) ? Soluciones_Comunes[userInput.toLowerCase()] : 'Lo siento, mi función es brindar asesoría legal. ¿Tienes alguna pregunta relacionada con el derecho, puntualmente cual es tu consulta?';
            
            var i = 0;
            var intervalId = setInterval(function() {
                if (!isPaused) {
                    if (i < botResponse.length) {
                        botMessage.textContent += botResponse[i];
                        i++;
                    } else {
                        clearInterval(intervalId);
                        var botTimeSpan = document.createElement('span');
                        botTimeSpan.classList.add('message-time');
                        botTimeSpan.textContent = new Date().toLocaleTimeString();
                        botMessage.appendChild(botTimeSpan);
                    }
                }
            }, 20);
        
            document.getElementById('userInput').value = '';
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }
    
    function pauseBot() {
        isPaused = true;
    }
    
    function resumeBot() {
        isPaused = false;
    }
    
    function toggleDarkMode() {
        document.body.classList.toggle('modo_oscuro');
    }
        /* se utiliza para abrir un enlace
         en una nueva pestaña del navegador. 
         En este caso, abre un documento compartido 
         en SharePoint.*/
    
        function openDocument() {
            window.open('https://campusuccedu-my.sharepoint.com/:w:/g/personal/breiner_martinez_campusucc_edu_co/EV9j7QzGVzJNnKDSR7nTqAYBQykzAWR3-TmlwBVbl1qb8A?e=2x2n20', '_blank');
        }
        
        /* La  función se llama cuando 
        se cambia el interruptor de tema
         (modo claro / oscuro).
          Dependiendo del estado del interruptor,
           llama a toggleDarkMode() para cambiar
            entre los modos claro y oscuro.*/
    
        function toggleTheme() {
            var themeSwitch = document.getElementById("themeSwitch");
            if (themeSwitch.checked) {
                toggleDarkMode();
            } else {
                toggleDarkMode();
            }
        }
        
        document.addEventListener("DOMContentLoaded", function() {
            const inputField = document.getElementById("userInput");
        
            // Escuchar el evento "keypress" en el campo de entrada
            inputField.addEventListener("keypress", function(event) {
                // Verificar si la tecla presionada es "Enter"
                if (event.key === "Enter") {
                    // Evitar que se envíe un salto de línea al presionar "Enter"
                    event.preventDefault();
                    
                    // Llamar a la función para enviar el mensaje
                    sendMessage();
                }
            });
        });
        
        /* _______________Menu__________*/
    /*
        muestra u ocultar el menú desplegable cuando
         se hace clic en el botón correspondiente. 
         pone o quita la clase "show" al elemento 
         que contiene el menú desplegable.
        */
        function toggleDropdown() {
            var dropdownContent = document.getElementById("dropdownContent");
            dropdownContent.classList.toggle("show");
        }
    
        /* un evento que se activa cuando se hace clic
         en cualquier parte de la ventana del navegador. 
         Se utiliza aquí para cerrar el menú desplegable
          si se hace clic fuera de él. Si el clic no es 
          en el botón del menú desplegable, se cierra el
           menú desplegable.*/
    
        window.onclick = function(event) {
          if (!event.target.matches('.dropdown-btn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        }

        /*INTALAR LIBRERIA:
        npm install botpress
        biblioteca Botpress en tu proyecto,
         y npm gestionará automáticamente las 
         dependencias necesarias.
 */

         /*letra 8421: conversion binaria, binario a decimal */



         /*USO DE LA LIBRERIA  TensorFlow.js */
         // Importa TensorFlow.js

