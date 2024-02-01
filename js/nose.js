caracter.forEach((element,index) => {
    if (vocales.includes(element)) {
            switch(element) {
                    case vocales[0]:
                            caracter[index] = vocalesEncriptadas[0];
                            break;
                    case vocales[1]:
                            caracter[index] = vocalesEncriptadas[1]
                            break;
                    case vocales[2]:
                            caracter[index] = vocalesEncriptadas[2]
                            break;
                    case vocales[3]:
                            caracter[index] = vocalesEncriptadas[3]
                            break;
                    case vocales[4]:
                            caracter[index] = vocalesEncriptadas[4]
                            break;
                    default:
                            console.log("No hay vocales"+ element);
            }   
    }
})