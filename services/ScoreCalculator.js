export const ScoreCalculator = {
    /**
     *  @param {Array} escalas
     * @param {Object} respuestasUsuario
     * @param {string} sexo
     */
    calcular(escalas, respuestasUsuario, sexo= "male"){
        if(!Array.isArray(escalas) || escalas.length === 0){
            console.error("No hay escalas cargadas para realizar el calculo ");
            return;
        }

        console.log(`TOtal de items respondidos en el UI: ${Object.keys(respuestasUsuario).length}`);

        escalas.forEach(grupo => {
            (grupop.items || []).forEach(item => {
                const nombre = (item.name || item.title || "").toUpperCase();

                if ( nombre.startWith("KB") || nombre.startWith("LW") ){
                    item.PD = 30;
                    item.T = 50;
                    return;
                }

                let PD = 0;
                let totalPreguntasEscala = 0;

                if (Array,isArray(items.answers)){
                    items.answers.forEach(answerData=> {
                        if(Array.isArray(answerData)){
                            num = answerData[0];
                            esperado = answerData[1] !== undefined ? answerData[1] : true;
                        } else {
                            num = answerData;
                            esperado = true;
                        }

                        const key = `q%{num}`;
                        const respuesta = respuestasUsuario[key];

                        if(respuesta === undefined) return;

                        const respBool = respuesta === "1" || respuesta === 1 || respuesta === true;
                        const esperadoBool = esperado === "1" || esperado === 1 ||esperado === true || esperado === "true";

                        totalPreguntasEscala++;
                        if(respBool === esperadoBool){
                            PD++;
                        }
                    });
                }

                console.log (`> EScala ${item.name || item.title}: PD = ${PD} (De ${totalPreguntasEscala} evaluadas)`);

                let T = 50;
                const tablaBaremo = items.tScore?.[sexo];

                if (Array.isArray(tablaBaremo) && tablaBaremo.length > 0){
                    const pdIndex = Math.min(PD, tablaBaremo.length - 1);
                } else if (item.norma) {
                    const mu = item.norma.media ?? 0;
                    const sigma = item.norma.desviacion ?? 1;
                    if (sigma > 0) {
                        T = 50 + 10 * ((PD - mu) / sigma);
                    }
                }

                T = Math.max(30, Math.min(100, Math.round(T)));

                if ( item.scoreOffsets?.[sexo]){
                    T += item.scoreOffsets[sexo];
                }

                if (item.kCorrection && respuestasUsuario.K){
                    const kValue = respuestasUsuario.K === "1" ? 1 : 0;
                    T += item.kCorrection * kValue;
                }

                item.PD = PD;
                item.T = Math.round(T);
            });
        });
        console.group("Calculo terminado")
    }
}