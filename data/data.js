/*
The original version of this file was taken from the MMPI-2 implementation
released by Kevin Timmerman under the GNU General Public License v3.0 in 2008.

Its contents are presumably copyrighted by the University of Minnesota and their
distribution rights owned by Pearson's Clinical Assessment Group.

It is herein used to the best of my conscience for a nonprofit, educational
purpose in the interest of the public.

As such, while the legal specifics of it may be questionable, it is incorporated
into this public domain work in good faith.
*/

export const questions=[
	"Me gustan las revistas de mecánica.",
	"Me gusta tener buen apetito.",
	"Me despierto fresco y descansado la mayoría de las mañanas.",
	"Creo que disfrutaría el trabajo de un bibliotecario.",
	"Me despierto fácilmente con el ruido.",
	"Mi padre es un buen hombre (o si tu padre está muerto) mi padre fue un buen hombre.",
	"Me gusta leer artículos de periódicos sobre crímenes.",
	"Mis manos y pies suelen estar lo suficientemente calientes.",
	"Mi vida diaria está llena de cosas que me mantienen interesado.",
	"Estoy tan capacitado para trabajar como siempre lo he estado.",
	"A veces parece que tengo un bulto en la garganta.",
	"Mi vida sexual es satisfactoria.",
	"Las personas deberían tratar de entender sus sueños y dejarse guiar por ellos o tomar advertencias de ellos.",
	"Disfruto de las historias de detectives o de misterio.",
	"Trabajo bajo una gran tensión.",
	"De vez en cuando pienso en cosas demasiado malas para hablar de ellas.",
	"Estoy seguro de que tengo un trato injusto de la vida.",
	"Me preocupan los ataques de náuseas y vómitos.",
	"Cuando empiezo un nuevo trabajo, me gusta averiguar a quién es importante ser amable.",
	"Rara vez me molesta el estreñimiento.",
	"A veces he querido mucho dejar mi hogar.",
	"Algunas personas parecen no entenderme.",
	"A veces tengo ataques de risa y llanto que no puedo controlar.",
	"Los espíritus malignos me poseen a veces.",
	"Me gustaría ser cantante.",
	"Siento que es mejor mantener la boca cerrada cuando estoy en problemas.",
	"Cuando las personas me hacen daño, siento que debería vengarme, solo por el principio de la cosa.",
	"Me molesta el estómago varias veces a la semana.",
	"A veces siento ganas de maldecir.",
	"Tengo pesadillas cada pocos noches.",
	"Me resulta difícil mantener mi mente en una tarea o trabajo.",
	"He tenido experiencias muy peculiares y extrañas.",
	"Rara vez me preocupo por mi salud.",
	"Nunca he tenido problemas debido a mi comportamiento sexual.",
	"A veces, cuando era joven, robé cosas.",
	"Tengo tos la mayor parte del tiempo.",
	"A veces siento ganas de romper cosas.",
	"He tenido períodos de días, semanas o meses en los que no podía ocuparme de las cosas porque no podía \"ponerme en marcha\".",
	"Mi sueño es inquieto y perturbado.",
	"Mucho del tiempo, parece que me duele la cabeza por todas partes.",
	"No siempre digo la verdad.",
	"Si las personas no me hubieran tenido en su contra, habría tenido mucho más éxito.",
	"Mi juicio es mejor de lo que nunca fue.",
	"Una vez a la semana (o más a menudo) de repente me siento caliente por todo el cuerpo, sin razón.",
	"Estoy en tan buena salud física como la mayoría de mis amigos.",
	"Prefiero pasar de largo a amigos de la escuela, o personas que conozco pero que no he visto en mucho tiempo, a menos que me hablen primero.",
	"Casi nunca me molestan los dolores en el corazón o en el pecho.",
	"En la mayoría de las ocasiones, preferiría sentarme y soñar despierto que hacer cualquier otra cosa.",
	"Soy una persona muy sociable.",
	"A menudo he tenido que recibir órdenes de alguien que no sabía tanto como yo.",
	"No leo todos los editoriales del periódico todos los días.",
	"No he vivido el tipo de vida correcto.",
	"Partes de mi cuerpo a menudo tienen sensaciones como ardor, hormigueo, picazón o como si se estuvieran \"durmiendo\".",
	"Mi familia no le gusta el trabajo que he elegido (o el trabajo que tengo la intención de elegir para mi trabajo de vida).",
	"A veces sigo insistiendo en algo hasta que los demás pierden la paciencia conmigo.",
	"Desearía poder ser tan feliz como los demás parecen ser.",
	"Casi nunca siento dolor en la parte posterior de mi cuello.",
	"Creo que muchas personas exageran sus desgracias para obtener la simpatía y ayuda de los demás.",
	"Me molesta el estómago cada pocos días.",
	"Cuando estoy con personas, me molesta escuchar cosas muy extrañas.",
	"Soy una persona importante.",
	"A menudo he deseado ser una chica. (o si eres una chica) Nunca me he arrepentido de ser una chica.",
	"Mis sentimientos no se hieren fácilmente.",
	"Disfruto leer historias de amor.",
	"Mucho del tiempo me siento triste.",
	"Sería mejor si casi todas las leyes se eliminaran.",
	"Me gusta la poesía.",
	"A veces hago bromas sobre los animales.",
	"Creo que me gustaría el tipo de trabajo que hace un guardabosques.",
	"Me resulta fácil ser derrotado en una discusión.",
	"Estos días me resulta difícil no perder la esperanza de llegar a algo.",
	"Mi alma a veces deja mi cuerpo.",
	"Ciertamente me falta confianza en mí mismo.",
	"Me gustaría ser florista.",
	"Normalmente siento que la vida vale la pena.",
	"Se necesita mucha discusión para convencer a la mayoría de las personas de la verdad.",
	"De vez en cuando pospongo hasta mañana lo que debería hacer hoy.",
	"Las personas que me conocen generalmente me quieren.",
	"No me importa que se burlen de mí.",
	"Me gustaría ser enfermera.",
	"Creo que la mayoría de las personas mentiría para salir adelante.",
	"Hago muchas cosas de las que me arrepiento después.  (Me arrepiento de las cosas más de lo que parece a los demás.)",
	"Tengo muy pocas peleas con los miembros de mi familia.",
	"Me suspendieron de la escuela una o más veces por mal comportamiento.",
	"A veces tengo un fuerte impulso de hacer algo dañino o impactante.",
	"Me gusta ir a fiestas y otros eventos donde hay mucha diversión ruidosa.",
	"He encontrado problemas tan llenos de posibilidades que no he podido decidirme sobre ellos.",
	"Creo que las mujeres deberían tener tanta libertad sexual como los hombres.",
	"Mis batallas más difíciles son conmigo mismo.",
	"Quiero a mi padre, o (si tu padre está muerto) quise a mi padre.",
	"Tengo pocos o ningún problema con mis músculos temblando o saltando.",
	"No parece importarme lo que me pase.",
	"A veces, cuando no me siento bien, soy irritable.",
	"Mucho del tiempo me siento como si hubiera hecho algo malo o malvado.",
	"Soy feliz la mayor parte del tiempo.",
	"Veo cosas o animales o personas a mi alrededor que otros no ven.",
	"Hay una sensación de plenitud en mi cabeza o nariz la mayor parte del tiempo.",
	"Algunas personas son tan mandonas que siento que debo hacer lo contrario de lo que piden, aunque sé que tienen razón.",
	"Alguien está en mi contra.",
	"Nunca he hecho nada peligroso solo por la emoción de hacerlo.",
	"A menudo siento como si hubiera una banda apretada alrededor de mi cabeza.",
	"A veces me enojo.",
	"Disfruto más de una carrera o juego cuando apuesto en él.",
	"La mayoría de las personas son honestas principalmente porque tienen miedo de ser atrapadas.",
	"En la escuela, a veces me enviaban a la oficina del director por mal comportamiento.",
	"Mi forma de hablar es la misma de siempre (no más rápida o más lenta, sin arrastrar las palabras ni ronquera).",
	"Mis modales en la mesa no son tan buenos en casa como cuando estoy en compañía.",
	"Quien sea capaz y esté dispuesto a trabajar duro tiene una buena oportunidad de tener éxito.",
	"Parece que soy tan capaz e inteligente como la mayoría de los demás a mi alrededor.",
	"La mayoría de las personas utilizarán medios algo injustos para obtener ganancias o ventajas en lugar de perderlas.",
	"Tengo muchos problemas estomacales.",
	"Me gusta el dramatismo.",
	"Yo sé quién es responsable de la mayoría de mis problemas.",
	"A veces me siento tan atraído por los artículos personales de otros, como zapatos, guantes, etc., que quiero manipularlos o robarlos, aunque no me sirvan de nada.",
	"Ver sangre no me asusta ni me enferma.",
	"A menudo no puedo entender por qué he estado tan irritable o de mal humor.",
	"Nunca he vomitado sangre ni he tosido sangre..",
	"No me preocupa contraer enfermedades.",
	"Me gusta coleccionar flores o cultivar plantas de interior.",
	"A menudo siento que es necesario defender lo que creo que es correcto.",
	"Nunca he participado en prácticas sexuales inusuales.",
	"A veces mis pensamientos han corrido más rápido de lo que podía expresarlos.",
	"Si pudiera entrar al cine sin pagar y estar seguro de que no me verían, probablemente lo haría.",
	"A menudo me pregunto qué razón oculta puede tener otra persona para hacer algo amable por mí.",
	"Creo que mi vida familiar es tan agradable como la de la mayoría de las personas que conozco.",
	"Creo en la aplicación de la ley.",
	"La crítica o el regaño me duelen terriblemente.",
	"Me gusta cocinar.",
	"Mi conducta está en gran medida controlada por el comportamiento de quienes me rodean.",
	"A veces me siento inútil.",
	"Cuando era niño, pertenecía a un grupo de amigos que intentaba ser leal a través de todo tipo de problemas.",
	"Creo en la vida después de la muerte.",
	"Me gustaría ser soldado.",
	"A veces siento ganas de pelear con alguien.",
	"A menudo he perdido oportunidades porque no podía decidirme lo suficientemente rápido.",
	"Me impacienta que la gente me pida consejo o me interrumpa de alguna manera cuando estoy trabajando en algo importante.",
	"Solía llevar un diario.",
	"Creo que están tramando algo en mi contra.",
	"Prefiero ganar que perder en un juego.",
	"La mayoría de las noches me voy a dormir sin pensamientos ni ideas que me molesten.",
	"Durante los últimos años he estado bien la mayor parte del tiempo.",
	"Nunca he tenido un ataque o convulsión.",
	"No estoy ganando ni perdiendo peso.",
	"Creo que me están siguiendo.",
	"Siento que a menudo he sido castigado sin motivo.",
	"Lloro fácilmente.",
	"No puedo entender lo que leo tan a menudo como solía hacerlo.",
	"Nunca me he sentido mejor en mi vida que ahora.",
	"La parte superior de mi cabeza a veces se siente sensible.",
	"A veces siento que debo hacerme daño a mí mismo o a alguien más.",
	"Me molesta que alguien me engañe tan inteligentemente que tenga que admitir que me engañaron.",
	"No me canso rápidamente.",
	"Me gusta conocer a personas importantes porque me hace sentir importante.",
	"Tengo miedo cuando miro hacia abajo desde un lugar alto.",
	"No me pondría nervioso si algún miembro de mi familia tuviera problemas con la ley.",
	"Nunca soy feliz a menos que esté vagando o viajando.",
	"Lo que otros piensan de mí no me molesta.",
	"Me incomoda hacer una broma en una fiesta incluso cuando otros están haciendo lo mismo.",
	"Nunca he tenido un desmayo.",
	"Me gustaba la escuela.",
	"A menudo tengo que luchar contra el mostrar que soy tímido.",
	"Alguien ha estado tratando de envenenarme.",
	"No tengo un gran miedo a las serpientes.",
	"Rara vez o nunca tengo mareos.",
	"Mi memoria parece estar bien.",
	"Me preocupa el sexo.",
	"Me cuesta hacer pequeñas charlas cuando conozco a gente nueva.",
	"He tenido períodos en los que he realizado actividades sin saber más tarde lo que había estado haciendo.",
	"Cuando me aburro, me gusta agitar un poco las cosas.",
	"Tengo miedo de perder la cabeza.",
	"Estoy en contra de dar dinero a los mendigos.",
	"A menudo noto que mi mano tiembla cuando trato de hacer algo.",
	"Puedo leer durante un buen rato sin cansar mis ojos.",
	"Me gusta estudiar y leer sobre cosas en las que estoy trabajando.",
	"Me siento débil en todo mi cuerpo la mayor parte del tiempo.",
	"Tengo muy pocos dolores de cabeza.",
	"Mis manos no se han vuelto torpes o torpes.",
	"A veces, cuando me siento avergonzado, empiezo a sudar, lo que me molesta mucho.",
	"No he tenido dificultades para mantener el equilibrio al caminar.",
	"Hay algo mal en mi mente.",
	"No tengo episodios de fiebre del heno o asma.",
	"He tenido ataques en los que no podía controlar mis movimientos o mi habla, pero en los que sabía lo que estaba sucediendo a mi alrededor.",
	"No me gusta todo el mundo que conozco.",
	"Rara vez o nunca tengo fantasías.",
	"Desearía no ser tan tímido.",
	"No tengo miedo de manejar dinero.",
	"Si fuera reportero, me gustaría mucho informar sobre noticias del teatro.",
	"Disfruto de muchos tipos diferentes de juegos y recreación.",
	"Me gusta coquetear.",
	"Muchas personas me tratan más como a un niño que como a un adulto.",
	"Me gustaría ser periodista.",
	"Mi madre es una buena mujer, o (si tu madre está muerta) mi madre fue una buena mujer.",
	"Al caminar, tengo mucho cuidado de no pisar las grietas de la acera.",
	"Nunca he tenido ningún brote en mi piel que me haya preocupado.",
	"Hay muy poco amor y compañerismo en mi familia en comparación con otros hogares.",
	"A menudo me encuentro preocupándome por algo.",
	"Creo que me gustaría el trabajo de un contratista de construcción.",
	"A menudo oigo voces sin saber de dónde vienen.",
	"Me gusta la ciencia.",
	"No me resulta difícil pedir ayuda a mis amigos, aunque no pueda devolver el favor.",
	"Me gusta mucho cazar.",
	"Mis padres a menudo se opusieron al tipo de personas con las que me relacionaba.",
	"A veces chismeo un poco.",
	"Mi audición es aparentemente tan buena como la de la mayoría de las personas.",
	"Algunos miembros de mi familia tienen hábitos que me molestan y me irritan mucho.",
	"A veces siento que puedo tomar decisiones con una facilidad inusualmente grande.",
	"Me gustaría pertenecer a varios clubes.",
	"Rara vez noto que mi corazón late con fuerza y rara vez tengo falta de aliento.",
	"Me gusta hablar sobre sexo.",
	"Me gusta visitar lugares donde nunca he estado antes.",
	"He estado inspirado por un programa de vida basado en el deber que he seguido cuidadosamente desde entonces.",
	"En ocasiones, me he interpuesto en el camino de personas que intentaban hacer algo, no porque importara mucho, sino por el principio de la cosa.",
	"Me enojó fácilmente y luego me recupero pronto.",
	"He sido bastante independiente y libre de las reglas familiares.",
	"A menudo medito mucho.",
	"Alguien ha estado tratando de robarme.",
	"Mis parientes están casi todos en simpatía conmigo.",
	"Tengo períodos de tal gran inquietud que no puedo sentarme mucho tiempo en una silla.",
	"He estado decepcionado en el amor.",
	"No me preocupo por mi apariencia.",
	"A menudo sueño con cosas que es mejor mantener en secreto.",
	"Los niños deben ser enseñados todos los hechos principales sobre el sexo.",
	"Creo que no soy más nervioso que la mayoría de los demás.",
	"No tengo o casi no tengo dolores.",
	"Mi forma de hacer las cosas tiende a ser malinterpretada por los demás.",
	"A veces, sin ninguna razón o incluso cuando las cosas van mal, me siento emocionadamente feliz o \"en la cima del mundo\".",
	"No culpo a las personas por intentar agarrar todo lo que pueden en este mundo.",
	"Hay personas que están tratando de robar mis pensamientos e ideas.",
	"He tenido períodos en blanco en los que mis actividades se interrumpieron y no sabía lo que estaba sucediendo a mi alrededor.",
	"Puedo ser amigable con personas que hacen cosas que considero incorrectas.",
	"Me gusta estar con un grupo que se hace bromas entre sí.",
	"A veces, en las elecciones, voto por personas sobre las que sé muy poco.",
	"Tengo dificultad para empezar a hacer cosas.",
	"Creo que soy una persona condenada.",
	"Fui un aprendiz lento en la escuela.",
	"Si fuera artista, me gustaría dibujar flores.",
	"No me molesta no ser más atractivo.",
	"Sudo con mucha facilidad, incluso en días frescos.",
	"Soy completamente seguro de mí mismo.",
	"A veces ha sido imposible para mí dejar de robar o hurtar algo.",
	"Es más seguro no confiar en nadie.",
	"Una vez a la semana o más, me emociono mucho.",
	"Cuando estoy en un grupo de personas, tengo problemas para pensar en la cosa correcta que decir.",
	"Algo emocionante casi siempre me sacará de eso cuando me sienta mal.",
	"Cuando salgo de casa, no me preocupo por si la puerta está cerrada y las ventanas están cerradas.",
	"Creo que mis pecados son imperdonables.",
	"Tengo entumecimiento en uno o más lugares de mi piel.",
	"No culpo a una persona por aprovecharse de las personas que se dejan llevar.",
	"Mi vista es tan buena como lo ha sido durante años.",
	"A veces me he sentido tan entretenido por la astucia de algunos criminales que he tenido esperanzas de que se salgan con la suya.",
	"A menudo he sentido que los extraños me miraban críticamente.",
	"Todo tiene el mismo sabor.",
	"Bebo una cantidad inusualmente grande de agua todos los días.",
	"La mayoría de las personas hacen amigos porque es probable que los amigos les sean útiles.",
	"No suelo notar mis oídos zumbando o pitando.",
	"De vez en cuando siento odio hacia miembros de mi familia a quienes normalmente amo.",
	"Si fuera reportero, me gustaría mucho informar sobre noticias deportivas.",
	"Puedo dormir durante el día, pero no por la noche.",
	"Estoy seguro de que están hablando de mí.",
	"De vez en cuando, me río de un chiste sucio.",
	"Tengo muy pocos miedos en comparación con mis amigos.",
	"En un grupo de personas, no me sentiría avergonzado si me pidieran que iniciara una discusión o diera una opinión sobre algo que conozco bien.",
	"Siempre me disgusta la ley cuando un criminal es liberado a través de los argumentos de un abogado inteligente.",
	"He utilizado alcohol en exceso.",
	"Es probable que no hable con las personas hasta que ellas hablen conmigo.",
	"Nunca he tenido problemas con la ley.",
	"Tengo períodos en los que me siento inusualmente alegre sin ninguna razón especial.",
	"Desearía no ser molestado por pensamientos sobre sexo.",
	"Si varias personas se encuentran en problemas, lo mejor que pueden hacer es acordar una historia y ceñirse a ella.",
	"No me molesta particularmente ver sufrir a los animales.",
	"Creo que siento más intensamente que la mayoría de las personas.",
	"Nunca hubo un momento en mi vida en el que me gustara jugar con muñecas.",
	"La vida es una carga para mí gran parte del tiempo.",
	"Soy tan sensible en algunos temas que no puedo hablar de ellos.",
	"En la escuela, me resultó muy difícil hablar frente a la clase.",
	"Quiero a mi madre, o (si tu madre está muerta) quise a mi madre.",
	"Aunque estoy con personas, a menudo me siento solo.",
	"Recibo toda la simpatía que debería.",
	"Me niego a jugar algunos juegos porque no soy bueno en ellos.",
	"Parece que hago amigos tan rápido como los demás.",
	"No me gusta tener gente alrededor.",
	"Me han dicho que camino durante el sueño.",
	"La persona que proporciona la tentación al dejar propiedades valiosas desprotegidas es tan culpable de su robo como el que las roba.",
	"Creo que casi cualquiera mentiría para evitar problemas.",
	"Soy más sensible que la mayoría de las personas.",
	"La mayoría de las personas, en su interior, desagradan de exponerse para ayudar a otros.",
	"Muchos de mis sueños son sobre sexo.",
	"Mis padres y mi familia encuentran más fallas en mí de las que deberían.",
	"Me sonrojo fácilmente.",
	"Me preocupo por el dinero y los negocios.",
	"Nunca he estado enamorado de nadie.",
	"Las cosas que algunos miembros de mi familia han hecho me han asustado.",
	"Casi nunca sueño.",
	"Mi cuello a menudo tiene manchas rojas.",
	"Nunca he estado paralizado ni he tenido debilidad inusual en ninguno de mis músculos.",
	"A veces mi voz me falla o cambia aunque no tenga un resfriado.",
	"Mi madre o padre a menudo me hacían obedecer incluso cuando pensaba que era irrazonable.",
	"Olores peculiares a veces llegan a mí.",
	"No puedo mantener mi mente en una sola cosa.",
	"Tengo razones para sentir celos de uno o más miembros de mi familia.",
	"Siento ansiedad por algo o alguien casi todo el tiempo.",
	"Me impaciento fácilmente con la gente.",
	"Gran parte del tiempo desearía estar no estar aquí.",
	"Tengo razones para sentir celos de uno o más miembros de mi familia.",
	"Siento ansiedad por algo o alguien casi todo el tiempo.",
	"Me impaciento fácilmente con la gente.",
	"Gran parte del tiempo desearía no estar aquí.",
	"A veces me emociono tanto que me cuesta dormir.",
	"Sin duda he tenido más de mi parte de cosas de las que preocuparme.",
	"A nadie le importa mucho lo que te suceda.",
	"A veces oigo tan bien que me molesta.",
	"Olvido de inmediato lo que la gente me dice.",
	"Generalmente tengo que detenerme y pensar antes de actuar, incluso en asuntos pequeños.",
	"A menudo cruzo la calle para no encontrarme con alguien que veo.",
	"A menudo siento como si las cosas no fueran reales.",
	"La única parte interesante de los periódicos son las tiras cómicas.",
	"Tengo el hábito de contar cosas que no son importantes, como bombillas en letreros eléctricos y demás.",
	"No tengo enemigos que realmente deseen hacerme daño.",
	"Tiendo a estar en guardia con personas que son algo más amigables de lo que esperaba.",
	"Tengo pensamientos extraños y peculiares.",
	"Me pongo ansioso y molesto cuando tengo que hacer un viaje corto lejos de casa.",
	"Generalmente espero tener éxito en las cosas que hago.",
	"Oigo cosas extrañas cuando estoy solo.",
	"He tenido miedo de cosas o personas que sabía que no podían hacerme daño.",
	"No tengo miedo de entrar en una habitación por mí mismo donde otras personas ya se han reunido y están hablando.",
	"Tengo miedo de un cuchillo o de cualquier cosa muy afilada o puntiaguda.",
	"A veces disfruto lastimar a las personas que amo.",
	"Soy capaz de hacer que otras personas tengan miedo de mí fácilmente, y a veces lo hago por diversión.",
	"Tengo más problemas para concentrarme de lo que parece tener otras personas.",
	"Varias veces he dejado de hacer algo porque pensé muy poco en mi capacidad.",
	"Palabras malas, a menudo palabras terribles, vienen a mi mente y no puedo deshacerme de ellas.",
	"A veces un pensamiento sin importancia pasa por mi mente y me molesta durante días.",
	"Casi todos los días sucede algo que me asusta.",
	"A veces estoy lleno de energía.",
	"Tiendo a tomar las cosas con seriedad.",
	"A veces he disfrutado ser lastimado por alguien a quien amaba.",
	"Las personas dicen cosas insultantes y vulgares sobre mí.",
	"Me siento incómodo en interiores.",
	"No suelo sentirme cohibido.",
	"Alguien tiene control sobre mi mente.",
	"En las fiestas, es más probable que me siente solo o con solo otra persona que unirme a la multitud.",
	"Las personas a menudo me decepcionan.",
	"A veces he sentido que las dificultades se acumulaban tanto que no podía superarlas.",
	"Me encanta ir a bailes.",
	"En ocasiones, mi mente parece funcionar más lentamente de lo habitual.",
	"Cuando estoy en trenes, autobuses, etc., a menudo hablo con extraños.",
	"Disfruto de los niños.",
	"Disfruto de las apuestas por pequeñas cantidades.",
	"Si se me da la oportunidad, podría hacer algunas cosas que serían de gran beneficio para el mundo.",
	"A menudo he conocido a personas que se suponía que eran expertas y que no eran mejores que yo.",
	"Me siento como un fracasado cuando oigo hablar del éxito de alguien que conozco bien.",
	"A menudo pienso: \"Ojalá fuera un niño otra vez.\"",
	"No soy más feliz que cuando estoy solo.",
	"Si se me da la oportunidad, podría ser un buen líder de personas.",
	"Me siento avergonzado por las historias sucias.",
	"Las personas generalmente exigen más respeto por sus propios derechos de lo que están dispuestas a permitir para los demás.",
	"Disfruto de las reuniones sociales solo para estar con la gente.",
	"Trato de recordar buenas historias para transmitirlas a otras personas.",
	"En una o más ocasiones en mi vida sentí que alguien me estaba haciendo hacer cosas al hipnotizarme.",
	"Me resulta difícil dejar de lado una tarea que he emprendido, incluso por un corto tiempo.",
	"A menudo no estoy al tanto de los chismes y conversaciones del grupo al que pertenezco.",
	"A menudo he encontrado personas celosas de mis buenas ideas, solo porque no las habían pensado primero.",
	"Disfruto de la emoción de una multitud.",
	"No me importa conocer extraños.",
	"Alguien ha estado tratando de influir en mi mente.",
	"Recuerdo haber \"fingido estar enfermo\" para salir de algo.",
	"Mis preocupaciones parecen desaparecer cuando estoy en una multitud de amigos animados.",
	"Me siento como si quisiera rendirme rápidamente cuando las cosas van mal.",
	"Me gusta hacer saber a las personas dónde estoy en las cosas.",
	"He tenido períodos en los que me sentí tan lleno de energía que dormir no parecía necesario durante días.",
	"Siempre que sea posible, evito estar en una multitud.",
	"Me encoge enfrentar una crisis o dificultad.",
	"Tiendo a dejar pasar algo que quiero hacer cuando otros sienten que no vale la pena hacerlo.",
	"Me gustan las fiestas y reuniones sociales.",
	"A menudo he deseado ser miembro del sexo opuesto.",
	"No me enfado fácilmente.",
	"He hecho algunas cosas malas en el pasado de las que nunca le cuento a nadie.",
	"La mayoría de las personas utilizarán medios algo injustos para salir adelante en la vida.",
	"Me pone nervioso cuando la gente me hace preguntas personales.",
	"No siento que pueda planificar mi propio futuro.",
	"No estoy contento conmigo mismo tal como soy.",
	"Me enfado cuando mis amigos o familiares me dan consejos sobre cómo vivir mi vida.",
	"Recibí muchas palizas cuando era niño.",
	"Me molesta cuando la gente dice cosas agradables sobre mí.",
	"No me gusta escuchar las opiniones de otras personas sobre la vida.",
	"A menudo tengo desacuerdos serios con personas cercanas a mí.",
	"Cuando las cosas se ponen realmente mal, sé que puedo contar con mi familia para ayudarme.",
	"Me gustaba jugar a \"la casita\" cuando era niño.",
	"No tengo miedo al fuego.",
	"A veces me he mantenido alejado de otra persona porque temía hacer o decir algo de lo que podría arrepentirme después.",
	"Solo puedo expresar mis verdaderos sentimientos cuando bebo.",
	"Rara vez tengo episodios de tristeza.",
	"A menudo se dice que soy irritable.",
	"Ojalá pudiera dejar de preocuparme por cosas que he dicho que pueden haber herido los sentimientos de otras personas.",
	"Me siento incapaz de contarle a nadie todo sobre mí.",
	"El rayo es uno de mis miedos.",
	"Me gusta mantener a la gente adivinando sobre lo que voy a hacer a continuación.",
	"Mis planes han parecido con frecuencia tan llenos de dificultades que he tenido que abandonarlos.",
	"Tengo miedo de estar solo en la oscuridad.",
	"A menudo me he sentido mal por ser malinterpretado al tratar de evitar que alguien cometa un error.",
	"Una tormenta de viento me asusta.",
	"A menudo pido consejo a las personas.",
	"El futuro es demasiado incierto para que una persona haga planes serios.",
	"A menudo, incluso cuando todo va bien para mí, siento que no me importa nada.",
	"No tengo miedo al agua.",
	"A menudo debo reflexionar sobre un asunto antes de decidir qué hacer.",
	"A menudo se han malinterpretado mis intenciones cuando intentaba corregir a alguien y ser útil.",
	"No tengo problemas para tragar.",
	"Normalmente soy tranquilo y no me altero fácilmente.",
	"Sin duda disfrutaría vencer a los criminales en su propio juego.",
	"Merezco un castigo severo por mis pecados.",
	"Tiendo a tomar las decepciones tan intensamente que no puedo sacarlas de mi mente.",
	"Me molesta que alguien me observe en el trabajo, aunque sé que puedo hacerlo bien.",
	"A menudo me molesta cuando alguien intenta adelantarse a mí en una fila de personas, y le hablo a esa persona al respecto.",
	"A veces pienso que no valgo nada.",
	"Cuando era joven, a menudo no iba a la escuela, incluso cuando debería haber ido.",
	"Uno o más miembros de mi familia son muy nerviosos.",
	"A veces he tenido que ser brusco con personas que eran groseras o molestas.",
	"Me preocupo bastante por posibles infortunios.",
	"Tengo opiniones políticas fuertes.",
	"Me gustaría ser piloto de automovilismo.",
	"Está bien eludir la ley si no la rompes realmente.",
	"Hay ciertas personas que me desagradan tanto que me alegra interiormente cuando les pasa algo por lo que han hecho.",
	"Me pone nervioso tener que esperar.",
	"Tiendo a dejar pasar algo que quiero hacer porque otros sienten que no lo estoy haciendo de la manera correcta.",
	"Me gustaba la emoción cuando era joven.",
	"A menudo estoy dispuesto a hacer un esfuerzo adicional para ganar un punto con alguien que se ha opuesto a mí.",
	"Me molesta que personas fuera de mi círculo, en las calles, en las tiendas, etc., me estén observando.",
	"El hombre que más tuvo que ver conmigo cuando era niño (como mi padre, padrastro, etc.) fue muy estricto conmigo.",
	"Solía disfrutar jugar a la rayuela y saltar la cuerda.",
	"Nunca he visto una visión.",
	"Varias veces he cambiado de opinión sobre mi trabajo en la vida.",
	"Excepto por orden del médico, nunca tomo drogas ni pastillas para dormir.",
	"A menudo me siento mal porque soy tan irritable y malhumorado.",
	"En la escuela, mis calificaciones en comportamiento en clase eran bastante malas con regularidad.",
	"Me fascina el fuego.",
	"Cuando estoy acorralado, digo esa parte de la verdad que no es probable que me haga daño.",
	"Si estuviera en problemas con varios amigos que eran tan culpables como yo, preferiría asumir toda la culpa que delatarlos.",
	"Tengo miedo a la oscuridad.",
	"Cuando un hombre está con una mujer, generalmente está pensando en cosas relacionadas con su sexo.",
	"Suelo ser muy directo con las personas que estoy tratando de corregir o mejorar.",
	"Temo la idea de un terremoto.",
	"Me convenzo fácilmente al cien por ciento de una buena idea.",
	"Normalmente trabajo las cosas por mi cuenta en lugar de hacer que alguien me muestre cómo.",
	"Tengo miedo de encontrarme en un armario o en un espacio cerrado pequeño.",
	"Debo admitir que en ocasiones me he preocupado más allá de lo razonable por algo que realmente no importaba.",
	"No trato de ocultar mi mala opinión o lástima por las personas para que no sepan cómo me siento.",
	"Soy una persona muy nerviosa.",
	"He trabajado con frecuencia bajo personas que parecen tener las cosas organizadas de tal manera que obtienen crédito por el buen trabajo, pero pueden pasar los errores a aquellos que están debajo de ellos.",
	"A veces me resulta difícil defender mis derechos porque soy tan reservado.",
	"La suciedad me asusta o me disgusta.",
	"Tengo una vida de ensueño sobre la cual no le cuento a otras personas.",
	"Algunos de los miembros de mi familia tienen temperamentos explosivos.",
	"No puedo hacer nada bien.",
	"A menudo me siento culpable porque pretendo sentir más lástima por algo de lo que realmente siento.",
	"Defiendo firmemente mis propias opiniones como regla.",
	"No tengo miedo a las arañas.",
	"El futuro me parece desesperanzador.",
	"Los miembros de mi familia y mis parientes cercanos se llevan bastante bien.",
	"Me gustaría usar ropa cara.",
	"Las personas pueden cambiar fácilmente de opinión, incluso cuando he tomado una decisión sobre algo.",
	"Me ponen nervioso ciertos animales.",
	"Puedo soportar tanto dolor como los demás.",
	"Varias veces he sido el último en rendirme al intentar hacer algo.",
	"Me enoja que la gente me apresure.",
	"No tengo miedo a los ratones.",
	"Varias veces a la semana siento como si algo terrible estuviera a punto de suceder.",
	"A menudo me siento cansado.",
	"Me gusta reparar el pestillo de una puerta.",
	"A veces estoy seguro de que otras personas pueden saber lo que estoy pensando.",
	"Me gusta leer sobre ciencia.",
	"Tengo miedo de estar solo en un lugar amplio y abierto.",
	"A veces siento que estoy a punto de desmoronarme.",
	"Un gran número de personas son culpables de mala conducta sexual.",
	"A menudo me he asustado en medio de la noche.",
	"Me molesta mucho olvidar dónde pongo las cosas.",
	"La persona a la que más me unía y a la que más admiraba de niño era una mujer (madre, hermana, tía u otra mujer).",
	"Me gustan más las historias de aventuras que las historias románticas.",
	"A menudo me confundo y olvido lo que quiero decir.",
	"Soy muy torpe y torpe.",
	"Me gusta mucho practicar deportes (como el fútbol o el fútbol americano).",
	"Odio a toda mi familia.",
	"Algunas personas piensan que es difícil conocerme.",
	"Paso la mayor parte de mi tiempo libre solo.",
	"Cuando la gente hace algo que me enoja, les hago saber cómo me siento al respecto.",
	"Normalmente tengo dificultades para decidir qué hacer.",
	"Las personas no me encuentran atractivo.",
	"Las personas no son muy amables conmigo.",
	"A menudo siento que no soy tan bueno como otras personas.",
	"Soy muy terco.",
	"Me ha gustado usar marihuana.",
	"La enfermedad mental es un signo de debilidad.",
	"Tengo un problema de drogas o alcohol.",
	"Los fantasmas o espíritus pueden influir en las personas para bien o para mal.",
	"Me siento impotente cuando tengo que tomar decisiones importantes.",
	"Siempre trato de ser agradable incluso cuando otros están molestos o son críticos.",
	"Cuando tengo un problema, me ayuda hablarlo con alguien.",
	"Mis principales objetivos en la vida están al alcance.",
	"Creo que las personas deberían mantener los problemas personales para sí mismas.",
	"No estoy sintiendo mucha presión o estrés en estos días.",
	"Me molesta mucho pensar en hacer cambios en mi vida.",
	"Mis mayores problemas son causados por el comportamiento de alguien cercano a mí.",
	"Odio ir al médico, incluso cuando estoy enfermo.",
	"Aunque no estoy feliz con mi vida, no hay nada que pueda hacer al respecto.",
	"Hablar sobre problemas y preocupaciones con alguien suele ser más útil que tomar drogas o medicinas.",
	"Tengo hábitos que son realmente dañinos.",
	"Cuando hay problemas que necesitan ser resueltos, generalmente dejo que otras personas se encarguen.",
	"Reconozco varios defectos en mí mismo que no podré cambiar.",
	"Estoy tan harto/a de lo que tengo que hacer todos los días que solo quiero salir de todo.",
	"Recientemente he considerado suicidarme..",
	"A menudo me pongo muy irritable cuando la gente interrumpe mi trabajo.",
	"A menudo siento que puedo leer la mente de otras personas.",
	"Tener que tomar decisiones importantes me pone nervioso.",
	"Otros me dicen que como demasiado rápido.",
	"Una vez a la semana o más me drogo o me emborracho.",
	"He tenido una pérdida trágica en mi vida de la que sé que nunca me recuperaré.",
	"A veces me enojo y me molesto tanto que no sé qué me pasa.",
	"Cuando la gente me pide que haga algo, me cuesta decir que no.",
	"No soy más feliz que cuando estoy solo/a.",
	"Mi vida es vacía y sin sentido.",
	"Me resulta difícil mantener un trabajo.",
	"He cometido muchos errores en mi vida.",
	"Me enojo conmigo mismo por ceder tanto a otras personas.",
	"Últimamente he pensado mucho en suicidarme.",
	"Me gusta tomar decisiones y asignar trabajos a otros.",
	"Incluso sin mi familia, sé que siempre habrá alguien allí para cuidarme.",
	"En el cine, restaurantes o eventos deportivos, odio hacer fila.",
	"Nadie lo sabe, pero he intentado suicidarme.",
	"Todo está sucediendo demasiado rápido a mi alrededor.",
	"Sé que soy una carga para los demás.",
	"Después de un mal día, necesito unas copas para relajarme.",
	"Gran parte de los problemas que tengo se deben a la mala suerte.",
	"A veces parece que no puedo dejar de hablar.",
	"A veces me corto o me lastimo a propósito sin saber por qué.",
	"Trabajo muchas horas, aunque mi trabajo no lo requiera.",
	"Generalmente me siento mejor después de un buen llanto.",
	"Olvido dónde dejo las cosas.",
	"Si pudiera vivir mi vida de nuevo, no cambiaría mucho.",
	"Me pongo muy irritable cuando las personas de las que dependo no hacen su trabajo a tiempo.",
	"Si me molesto, estoy seguro de que me dolerá la cabeza.",
	"Me gusta regatear.",
	"Los hombres son infieles a sus esposas de vez en cuando.",
	"Últimamente he perdido el deseo de resolver mis problemas.",
	"Me he enojado y he roto muebles o platos cuando he estado bebiendo.",
	"Trabajo mejor cuando tengo una fecha límite definida.",
	"Me he enojado tanto con alguien que he sentido que iba a explotar.",
	"Me vienen a la mente pensamientos terribles sobre mi familia en ocasiones.",
	"La gente me dice que tengo un problema con el alcohol, pero no estoy de acuerdo.",
	"Siempre tengo muy poco tiempo para hacer las cosas.",
	"Estos días mis pensamientos se dirigen cada vez más a la muerte y al más allá.",
	"A menudo guardo cosas que probablemente nunca usaré.",
	"A veces he estado tan enojado que he lastimado a alguien en una pelea física.",
	"En todo lo que hago últimamente, siento que estoy siendo puesto a prueba.",
	"Ahora tengo muy poco que ver con mis parientes.",
	"A veces parece que oigo mis pensamientos expresados en voz alta.",
	"Cuando estoy triste, visitar a amigos siempre puede sacarme de eso.",
	"Gran parte de lo que me está sucediendo ahora parece haberme sucedido antes.",
	"Cuando mi vida se vuelve difícil, me dan ganas de rendirme.",
	"No puedo entrar solo en una habitación oscura, ni siquiera en mi propia casa.",
	"Me preocupa mucho el dinero.",
	"El hombre debe ser la cabeza de la familia.",
	"El único lugar donde me siento relajado es en mi propia casa.",
	"La gente con la que trabajo no es comprensiva con mis problemas.",
	"Estoy satisfecha con la cantidad de dinero que gano.",
	"Normalmente tengo suficiente energía para hacer mi trabajo.",
	"Me cuesta aceptar cumplidos.",
	"En la mayoría de los matrimonios, uno o ambos cónyuges son infelices.",
	"Casi nunca pierdo el autocontrol.",
	"Me cuesta mucho recordar lo que la gente me dice en estos días.",
	"Cuando estoy triste o deprimida, es mi trabajo el que sufre.",
	"En la mayoría de los matrimonios, uno o ambos cónyuges son infelices."
];

// VRIN and TRIN
export const rin=[
	[
		// Name, Description, Base score
		["VRIN","Variable Response Inconsistency",0],
		// Question pairs and score
		[
			[3,"T",39,"T",1],
			[6,"T",90,"F",1],
			[6,"F",90,"T",1],
			[9,"F",56,"F",1],
			[28,"T",59,"F",1],
			[31,"T",299,"F",1],
			[32,"F",316,"T",1],
			[40,"T",176,"T",1],
			[46,"T",265,"F",1],
			[48,"T",184,"T",1],
			[49,"T",280,"F",1],
			[73,"T",377,"F",1],
			[81,"T",284,"F",1],
			[81,"F",284,"T",1],
			[83,"T",288,"T",1],
			[84,"T",105,"F",1],
			[86,"T",359,"F",1],
			[95,"F",388,"T",1],
			[99,"F",138,"T",1],
			[103,"T",344,"F",1],
			[110,"T",374,"F",1],
			[125,"F",195,"F",1],
			[135,"F",482,"T",1],
			[136,"T",507,"F",1],
			[136,"F",507,"T",1],
			[152,"F",464,"F",1],
			[161,"T",185,"F",1],
			[161,"F",185,"T",1],
			[165,"F",565,"F",1],
			[166,"T",268,"F",1],
			[166,"F",268,"T",1],
			[167,"T",243,"F",1],
			[167,"F",243,"T",1],
			[196,"F",415,"T",1],
			[199,"T",467,"F",1],
			[199,"F",467,"T",1],
			[226,"T",267,"F",1],
			[259,"F",333,"T",1],
			[262,"F",275,"F",1],
			[290,"T",556,"F",1],
			[290,"F",556,"T",1],
			[339,"F",394,"T",1],
			[349,"T",515,"F",1],
			[349,"F",515,"T",1],
			[350,"F",521,"T",1],
			[353,"T",370,"F",1],
			[353,"F",370,"T",1],
			[364,"F",554,"T",1],
			[369,"F",421,"T",1],
			[372,"T",405,"F",1],
			[372,"F",405,"T",1],
			[380,"T",562,"F",1],
			[395,"T",435,"F",1],
			[395,"F",435,"T",1],
			[396,"T",403,"F",1],
			[396,"F",403,"T",1],
			[411,"T",485,"F",1],
			[414,"F",485,"T",1],
			[472,"T",533,"F",1],
			[472,"F",533,"T",1],
			[491,"T",509,"F",1],
			[506,"T",520,"F",1],
			[506,"F",520,"T",1],
			[513,"T",542,"F",1]
		],
		// Male T scale
		[31,34,38,42,46,50,54,57,61,65,69,73,76,80,84,88,92,96,99,103,107,111,115,118,120],
		// Female T scale
		[30,34,38,42,46,50,54,58,62,66,70,74,78,82,86,90,94,98,102,106,110,114,118,120]
	],[
		["TRIN","True Reponse Inconsistency",9],
		[
			[3,"T",39,"T",1],
			[12,"T",166,"T",1],
			[40,"T",176,"T",1],
			[48,"T",184,"T",1],
			[63,"T",27,"T",1],
			[65,"T",95,"T",1],
			[73,"T",239,"T",1],
			[83,"T",288,"T",1],
			[99,"T",314,"T",1],
			[125,"T",195,"T",1],
			[209,"T",351,"T",1],
			[359,"T",367,"T",1],
			[377,"T",534,"T",1],
			[556,"T",560,"T",1],
			[9,"F",56,"F",-1],
			[65,"F",95,"F",-1],
			[125,"F",195,"F",-1],
			[140,"F",196,"F",-1],
			[152,"F",464,"F",-1],
			[265,"F",360,"F",-1],
			[359,"F",367,"F",-1]
		],
		["114F","107F","99F","92F","85F","78F","71F","64F","57F","50","57T","65T","72T","79T","86T","93T","100T","107T","114T","120T"],
		["118F","111F","103F","95F","88F","80F","73F","65F","58F","50","58T","65T","73T","80T","88T","95T","103T","111T","118T","120T"]
	]
];

// Scales and Critical Items
 export const scales=[
	{
  name: "F",
  description: "Infrequency",
  answers: [
    // Verdadero
    [18,true], [24,true], [30,true], [36,true], [42,true], [48,true],
    [54,true], [60,true], [66,true], [72,true], [84,true], [96,true],
    [114,true], [138,true], [144,true], [150,true], [156,true], [162,true],
    [168,true], [180,true], [198,true], [216,true], [228,true], [234,true],
    [240,true], [246,true], [252,true], [258,true], [264,true], [270,true],
    [282,true], [288,true], [294,true], [300,true], [306,true], [312,true],
    [324,true], [336,true], [349,true], [355,true], [361,true],

    // Falso
    [6,false], [12,false], [78,false], [90,false], [102,false], [108,false],
    [120,false], [126,false], [132,false], [174,false], [186,false], [192,false],
    [204,false], [210,false], [222,false], [276,false], [318,false], [330,false],
    [343,false]
  ],
  tScores: {
    male: [36,39,42,45,48,51,55,58,61,64,67,70,73,76,79,82,85,89,92,95,98,101,104,107,110,113,116,119,120],
    female: [37,41,44,48,51,55,58,61,65,68,72,75,79,82,85,89,92,96,99,103,106,109,113,116,120]
  }
}
,{
  name: "Fb",
  description: "Backside F",
  answers: [
    // Verdadero
    [281,true], [291,true], [303,true], [311,true], [317,true], [319,true],
    [322,true], [323,true], [329,true], [332,true], [333,true], [334,true],
    [387,true], [395,true], [407,true], [431,true], [450,true], [454,true],
    [463,true], [468,true], [476,true], [478,true], [484,true], [489,true],
    [506,true], [516,true], [517,true], [520,true], [524,true], [525,true],
    [526,true], [528,true], [530,true], [539,true], [540,true], [544,true],
    [555,true],

    // Falso
    [383,false], [404,false], [501,false]
  ],
  tScores: {
    male: [42,46,51,55,59,63,67,71,75,79,83,87,92,96,100,104,108,112,116,120],
    female: [42,46,50,54,58,62,66,70,74,77,81,85,89,93,97,101,105,108,112,116,120]
  }
}
,{
  name: "Fp",
  description: "Infrequency Psychopathology",
  answers: [
    // Verdadero
    [66,true], [114,true], [162,true], [193,true], [216,true], [228,true],
    [252,true], [270,true], [282,true], [291,true], [294,true], [322,true],
    [323,true], [336,true], [371,true], [387,true], [478,true], [555,true],

    // Falso
    [51,false], [77,false], [90,false], [93,false], [102,false], [126,false],
    [192,false], [276,false], [501,false]
  ],
  tScores: {
    male: [41,48,56,63,70,77,80,94,99,106,113,120],
    female: [41,49,57,65,73,81,89,97,105,113,120]
  }
}
,{
  name: "L",
  description: "Lie",
  answers: [
    // Verdadero
    [2,true], [8,true], [11,true], [17,true], [20,true], [23,true],
    [28,true], [33,true], [36,true], [39,true], [44,true], [47,true],
    [53,true], [56,true], [59,true], [64,true],

    // Falso
    [16,false], [29,false], [41,false], [51,false], [77,false], [93,false],
    [102,false], [107,false], [123,false], [139,false], [153,false],
    [183,false], [203,false], [232,false], [260,false]
  ],
  tScores: {
    male: [35,39,43,48,52,56,61,65,70,74,78,83,87,91,96,100],
    female: [33,38,42,47,52,57,62,66,71,76,81,86,90,95,100,105]
  }
}
,{
  name: "K",
  description: "Correction",
  answers: [
    // Verdadero
    [2,true], [5,true], [8,true], [11,true], [14,true], [17,true], [20,true], [23,true],
    [26,true], [29,true], [32,true], [35,true], [38,true], [41,true], [44,true], [47,true],
    [50,true], [53,true], [56,true], [59,true], [62,true], [65,true], [68,true], [71,true],
    [74,true], [77,true], [80,true], [83,true], [86,true], [89,true],

    // Falso
    [29,false], [37,false], [58,false], [76,false], [110,false], [116,false], [122,false],
    [127,false], [130,false], [136,false], [148,false], [157,false], [158,false], [167,false],
    [171,false], [196,false], [213,false], [243,false], [267,false], [284,false], [290,false],
    [330,false], [338,false], [339,false], [341,false], [346,false], [348,false], [356,false],
    [365,false]
  ],
  tScores: {
    male: [30,33,35,37,39,41,43,45,47,49,51,54,56,58,60,62,64,66,68,70,72,75,77,79,81],
    female: [30,32,35,37,39,41,43,46,48,50,52,54,56,59,61,63,65,67,70,72,74,76,78,81,83]
  }
}
,{
  name: "S",
  description: "Superlative Self-Presentation",
  answers: [
    // Verdadero
    [5,true],[12,true],[18,true],[23,true],[29,true],[34,true],[41,true],[47,true],
    [53,true],[59,true],[64,true],[70,true],[76,true],[82,true],[88,true],[94,true],
    [100,true],[106,true],[112,true],[118,true],[124,true],[130,true],[136,true],[142,true],
    [148,true],[154,true],[160,true],[166,true],[172,true],[178,true],

    // Falso
    [15,false],[50,false],[58,false],[76,false],[81,false],[87,false],[89,false],[104,false],
    [110,false],[120,false],[123,false],[154,false],[196,false],[205,false],[213,false],[225,false],
    [264,false],[279,false],[284,false],[290,false],[302,false],[337,false],[341,false],[346,false],
    [352,false],[373,false],[374,false],[403,false],[420,false],[423,false],[428,false],[430,false],
    [433,false],[442,false],[445,false],[449,false],[461,false],[486,false],[487,false],[523,false],
    [538,false],[542,false],[545,false],[547,false]
  ],
  tScores: {
    male: [30,32,33,34,35,36,37,38,40,41,42,43,44,45,47,48,49,50,51,52,53,55,56,57,58,59,60,61,63,64,65,66,67,68,70,71,72,73,74,75,76,78,79],
    female: [30,31,33,34,35,36,37,39,40,41,42,43,45,46,47,48,49,51,52,53,54,55,57,58,59,60,61,63,64,65,66,68,69,70,71,72,74,75,76,77,78,80]
  }
}
,{
  name: "Hs",
  description: "Hypochondriasis",
  answers: [
    // Verdadero
    [18,true],[28,true],[39,true],[53,true],[59,true],[97,true],[101,true],[111,true],
    [149,true],[175,true],[247,true],

    // Falso
    [2,false],[3,false],[8,false],[10,false],[20,false],[45,false],[47,false],[57,false],
    [91,false],[117,false],[141,false],[143,false],[152,false],[164,false],[173,false],[176,false],
    [179,false],[208,false],[224,false],[249,false],[255,false]
  ],
  tScores: {
    male: [30,33,35,38,40,43,46,49,51,54,56,59,61,63,65,67,69,71,73,76,78,80,82,84,86,88,90,92,94,97,99,101,103,105,108,110,112,114,116,119,120],
    female: [30,33,35,38,40,43,46,49,51,54,56,59,61,63,65,67,69,71,73,76,78,80,82,84,86,88,90,92,94,97,99,101,103,105,108,110,112,114,116,119,120]
  }
}

,{
  name: "D",
  description: "Depression",
  answers: [
    // Verdadero
    [5,true],[15,true],[18,true],[31,true],[38,true],[39,true],[46,true],[56,true],
    [73,true],[92,true],[117,true],[127,true],[130,true],[146,true],[147,true],[170,true],
    [175,true],[181,true],[215,true],[233,true],

    // Falso
    [2,false],[9,false],[10,false],[20,false],[29,false],[33,false],[37,false],[43,false],
    [45,false],[49,false],[55,false],[68,false],[75,false],[76,false],[95,false],[109,false],
    [118,false],[134,false],[140,false],[141,false],[142,false],[143,false],[148,false],[165,false],
    [178,false],[188,false],[189,false],[212,false],[221,false],[223,false],[226,false],[238,false],
    [245,false],[248,false],[260,false],[267,false],[330,false]
  ],
  tScores: {
    male: [30,32,34,36,38,40,42,45,47,50,52,54,57,59,61,62,64,66,68,70,72,74,76,78,80,81,83,85,87,89,91,93,95,97,98,100,102,104,106,108,110,112,114,115,117,119,120],
    female: [30,32,34,36,38,40,42,44,46,47,49,51,53,55,57,59,62,64,66,68,70,72,75,77,79,81,83,86,88,90,92,94,96,99,101,103,105,107,109,112,114,116,118,120]
  }
}

,{
  name: "Hy",
  description: "Hysteria",
  answers: [
    // Verdadero
    [11,true],[18,true],[31,true],[39,true],[40,true],[44,true],[65,true],
    [101,true],[166,true],[172,true],[175,true],[218,true],[230,true],

    // Falso
    [2,false],[3,false],[7,false],[8,false],[9,false],[10,false],[14,false],
    [26,false],[29,false],[45,false],[47,false],[58,false],[76,false],[81,false],
    [91,false],[95,false],[98,false],[110,false],[115,false],[116,false],[124,false],
    [125,false],[129,false],[135,false],[141,false],[148,false],[151,false],[152,false],
    [157,false],[159,false],[161,false],[164,false],[167,false],[173,false],[176,false],
    [179,false],[185,false],[193,false],[208,false],[213,false],[224,false],[241,false],
    [243,false],[249,false],[253,false],[263,false],[265,false]
  ],
  tScores: {
    male: [30,31,32,33,34,35,37,39,40,42,43,45,47,50,52,54,57,59,61,64,66,69,71,74,76,79,81,84,86,89,91,94,96,99,101,104,106,109,111,114,116,119,120],
    female: [30,31,32,34,35,36,38,39,41,43,45,47,49,51,54,56,58,61,63,65,68,70,73,75,77,80,82,84,87,89,90,92,94,96,99,101,104,106,108,111,113,115,118,120]
  }
}

,{
  name: "Pd",
  description: "Psychopathic Deviate",
  answers: [
    // Verdadero
    [17,true],[21,true],[22,true],[31,true],[32,true],[35,true],[42,true],
    [52,true],[54,true],[56,true],[71,true],[82,true],[89,true],[94,true],
    [99,true],[105,true],[113,true],[195,true],[202,true],[219,true],[225,true],
    [259,true],[264,true],[288,true],

    // Falso
    [9,false],[12,false],[34,false],[70,false],[79,false],[83,false],[95,false],
    [122,false],[125,false],[129,false],[143,false],[157,false],[158,false],[160,false],
    [167,false],[171,false],[185,false],[209,false],[214,false],[217,false],[226,false],
    [243,false],[261,false],[263,false],[266,false],[267,false]
  ],
  tScores: {
    male: [30,31,33,34,35,37,39,40,42,44,46,48,50,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,90,92,95,97,100,102,105,107,110,112,115,117,120],
    female: [30,32,34,36,37,39,41,43,45,47,49,51,53,55,58,60,63,66,68,71,73,76,79,81,84,87,89,92,94,97,100,102,105,107,110,113,115,118,120]
  }
}

,{
  name: "Mf",
  description: "Masculinity-Femininity - Male",
  answers: [
    // Verdadero
    [4,true],[25,true],[62,true],[64,true],[67,true],[74,true],[80,true],[112,true],
    [119,true],[122,true],[128,true],[137,true],[166,true],[177,true],[187,true],[191,true],
    [196,true],[205,true],[209,true],[219,true],[236,true],[251,true],[256,true],[268,true],[271,true],

    // Falso
    [1,false],[19,false],[26,false],[27,false],[63,false],[68,false],[69,false],[76,false],
    [86,false],[103,false],[104,false],[107,false],[120,false],[121,false],[132,false],[133,false],
    [163,false],[184,false],[193,false],[194,false],[197,false],[199,false],[201,false],[207,false],
    [231,false],[235,false],[237,false],[239,false],[254,false],[257,false],[272,false]
  ],
  tScores: {
    male: [30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109],
    female: [30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110]
  }
}

,{
  name: "Mf",
  description: "Masculinity-Femininity - Female",
  answers: [
    // Verdadero
    [4,true],[25,true],[62,true],[64,true],[67,true],[74,true],[80,true],[112,true],
    [119,true],[121,true],[122,true],[128,true],[137,true],[177,true],[187,true],[191,true],
    [196,true],[205,true],[219,true],[236,true],[251,true],[256,true],[271,true],

    // Falso
    [1,false],[19,false],[26,false],[27,false],[63,false],[68,false],[69,false],[76,false],
    [86,false],[103,false],[104,false],[107,false],[120,false],[132,false],[133,false],[163,false],
    [166,false],[184,false],[193,false],[194,false],[197,false],[199,false],[201,false],[207,false],
    [209,false],[231,false],[235,false],[237,false],[239,false],[254,false],[257,false],[268,false],[272,false]
  ],
  tScores: {
    male: [30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120],
    female: [30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99,102,105,108,111,114,117,120]
  }
}
,
{
  name: "Pa",
  description: "Paranoia",
  answers: [
    // Verdadero
    [16,true],[17,true],[22,true],[23,true],[24,true],[42,true],[99,true],[113,true],
    [138,true],[144,true],[145,true],[146,true],[162,true],[234,true],[259,true],[271,true],
    [277,true],[285,true],[305,true],[307,true],[333,true],[334,true],[336,true],[355,true],[361,true],

    // Falso
    [81,false],[95,false],[98,false],[100,false],[104,false],[110,false],[244,false],[255,false],
    [266,false],[283,false],[284,false],[286,false],[297,false],[314,false],[315,false]
  ],
  tScores: {
    male: [30,31,32,34,37,39,42,46,49,53,57,61,64,68,72,75,79,83,86,90,94,97,101,105,108,112,116,119,120],
    female: [30,31,32,34,37,39,42,45,49,52,56,59,63,67,70,74,78,81,85,89,92,96,100,103,107,111,114,118,120]
  }
}
,
{
  name: "Pt",
  description: "Psychasthenia",
  answers: [
    // Verdadero
    [11,true],[16,true],[23,true],[31,true],[38,true],[56,true],[65,true],[73,true],
    [82,true],[89,true],[94,true],[130,true],[147,true],[170,true],[175,true],[196,true],
    [218,true],[242,true],[273,true],[275,true],[277,true],[285,true],[289,true],[301,true],
    [302,true],[304,true],[308,true],[309,true],[310,true],[313,true],[316,true],[317,true],
    [320,true],[325,true],[326,true],[327,true],[328,true],[329,true],[331,true],

    // Falso
    [3,false],[9,false],[33,false],[109,false],[140,false],[165,false],[174,false],[293,false],[321,false]
  ],
  tScores: {
    male: [30,31,32,33,34,36,37,39,41,43,44,47,49,51,53,55,57,59,62,64,66,68,70,72,74,77,79,81,83,85,87,89,91,94,96,98,100,102,104,106,109,111,113,115,117,119,120],
    female: [30,31,32,33,35,37,38,40,42,44,47,49,51,53,55,57,59,61,62,64,66,68,70,72,73,75,77,79,81,83,84,86,88,90,92,94,95,97,99,101,103,105,106,108,110,112,114,116,117,119,120]
  }
}
,
{
  name: "Sc",
  description: "Schizophrenia",
  answers: [
    // Verdadero
    [16,true],[17,true],[21,true],[22,true],[23,true],[31,true],[32,true],[35,true],
    [38,true],[42,true],[44,true],[46,true],[48,true],[65,true],[85,true],[92,true],
    [138,true],[145,true],[147,true],[166,true],[168,true],[170,true],[180,true],[182,true],
    [190,true],[218,true],[221,true],[229,true],[233,true],[234,true],[242,true],[247,true],
    [252,true],[256,true],[268,true],[273,true],[274,true],[277,true],[279,true],[281,true],
    [287,true],[291,true],[292,true],[296,true],[298,true],[299,true],[303,true],[307,true],
    [311,true],[316,true],[319,true],[320,true],[322,true],[323,true],[325,true],[329,true],
    [332,true],[333,true],[355,true],

    // Falso
    [6,false],[9,false],[12,false],[34,false],[90,false],[91,false],[106,false],[165,false],
    [177,false],[179,false],[192,false],[210,false],[255,false],[276,false],[278,false],[280,false],
    [290,false],[295,false],[343,false]
  ],
  tScores: {
    male: [30,31,32,33,34,35,36,37,39,41,42,44,45,47,49,51,53,55,56,58,60,62,63,65,67,69,70,72,74,75,77,79,81,82,84,86,87,89,91,93,94,96,98,99,101,103,105,106,108,110,111,113,115,117,118,120],
    female: [30,31,32,33,34,36,37,39,41,42,44,46,48,50,52,53,55,57,59,60,62,63,65,66,67,69,70,72,73,75,76,78,79,81,82,84,85,87,88,90,91,93,94,96,97,99,100,102,103,105,106,108,109,111,112,114,115,116,118,119,120]
  }
}
,
{
  name: "Ma",
  description: "Hypomania",
  answers: [
    // Verdadero
    [13,true],[15,true],[21,true],[23,true],[50,true],[55,true],[61,true],[85,true],
    [87,true],[98,true],[113,true],[122,true],[131,true],[145,true],[155,true],[168,true],
    [169,true],[182,true],[190,true],[200,true],[205,true],[206,true],[211,true],[212,true],
    [218,true],[220,true],[227,true],[229,true],[238,true],[242,true],[244,true],[248,true],
    [250,true],[253,true],[269,true],

    // Falso
    [88,false],[93,false],[100,false],[106,false],[107,false],[136,false],[154,false],
    [158,false],[167,false],[243,false],[263,false]
  ],
  tScores: {
    male: [30,31,33,35,36,38,39,41,43,45,47,49,51,53,56,59,62,65,68,71,74,77,80,83,86,89,92,95,98,101,104,107,110,114,117,120],
    female: [30,31,33,35,37,39,41,43,45,47,49,51,53,56,59,62,65,68,71,74,76,79,82,85,88,91,94,97,100,103,106,109,112,115,118,120]
  }
}
,
{
  name: "Si",
  description: "Social Introversion",
  answers: [
    // Verdadero
    [31,true],[56,true],[70,true],[100,true],[104,true],[110,true],[127,true],[135,true],
    [158,true],[161,true],[167,true],[185,true],[215,true],[243,true],[251,true],[265,true],
    [275,true],[284,true],[289,true],[296,true],[302,true],[308,true],[326,true],[337,true],
    [338,true],[347,true],[348,true],[351,true],[352,true],[357,true],[364,true],[367,true],
    [368,true],[369,true],

    // Falso
    [25,false],[32,false],[49,false],[79,false],[86,false],[106,false],[112,false],[131,false],
    [181,false],[189,false],[207,false],[209,false],[231,false],[237,false],[255,false],[262,false],
    [267,false],[280,false],[321,false],[328,false],[335,false],[340,false],[342,false],[344,false],
    [345,false],[350,false],[353,false],[354,false],[358,false],[359,false],[360,false],[362,false],
    [363,false],[366,false],[370,false]
  ],
  tScores: {
    male: [30,31,33,34,35,36,37,38,40,41,42,43,44,45,47,48,49,50,51,52,54,55,56,57,58,59,61,62,63,64,65,66,68,69,70,71,72,73,75,76,77,78,79,80,82,83,84,85,86,87,89,90,91,92,93,94,96,97,98,99,100],
    female: [30,31,32,33,34,35,36,37,38,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,95]
  }
}
,
{
  name: "D1",
  description: "Subjective Depression",
  answers: [
    // Verdadero
    [31,true],[38,true],[39,true],[46,true],[56,true],[73,true],[92,true],[127,true],
    [130,true],[146,true],[147,true],[170,true],[175,true],[215,true],[223,true],

    // Falso
    [2,false],[9,false],[43,false],[49,false],[75,false],[95,false],[109,false],[118,false],
    [140,false],[148,false],[178,false],[188,false],[189,false],[223,false],[260,false],[267,false],[330,false]
  ],
  tScores: {
    male: [32,35,37,40,42,45,48,50,53,56,58,61,64,66,69,71,74,77,79,82,85,87,90,93,95,98,100,103,106,108,111,114,116],
    female: [32,34,37,39,41,44,46,48,51,53,56,58,60,63,65,67,70,72,75,77,79,82,84,86,89,91,94,96,98,101,103,105,108]
  }
}
,
[
  {
    name: "D2",
    description: "Psychomotor Retardation",
    answers: [
      // Verdadero
      [38,true],[46,true],[170,true],[233,true],
      // Falso
      [9,false],[29,false],[37,false],[49,false],[55,false],[76,false],[134,false],[188,false],[189,false],[212,false]
    ],
    tScores: {
      male: [30,32,37,43,48,54,59,65,70,76,81,87,92,98],
      female: [30,35,41,46,51,57,62,68,73,79,84,90,95]
    }
  },
  {
    name: "D3",
    description: "Physical Malfunctioning",
    answers: [
      // Verdadero
      [18,true],[117,true],[175,true],[181,true],
      // Falso
      [2,false],[20,false],[45,false],[141,false],[142,false],[143,false],[148,false]
    ],
    tScores: {
      male: [30,35,43,51,59,67,75,83,91,100,108,116],
      female: [30,34,41,48,56,63,70,78,85,93,100,107]
    }
  },
  {
    name: "D4",
    description: "Mental Dullness",
    answers: [
      // Verdadero
      [15,true],[31,true],[38,true],[73,true],[92,true],[147,true],[170,true],[233,true],
      // Falso
      [9,false],[10,false],[43,false],[75,false],[109,false],[165,false],[188,false]
    ],
    tScores: {
      male: [38,43,48,53,58,62,67,72,77,82,86,91,96,101,105,110],
      female: [38,43,48,52,57,61,66,70,75,79,84,88,93,97,102,106]
    }
  },
  {
    name: "D5",
    description: "Brooding",
    answers: [
      // Verdadero
      [38,true],[56,true],[92,true],[127,true],[130,true],[146,true],[170,true],[215,true],
      // Falso
      [75,false],[95,false]
    ],
    tScores: {
      male: [40,45,51,57,62,68,74,79,85,91,96],
      female: [37,42,47,53,58,63,68,73,78,83,89]
    }
  }
]

, {
    name: "Hy1",
    description: "Denial of Social Anxiety",
    answers: [
      // Verdadero
      // Ninguno
      // Falso
      [129,false],[161,false],[167,false],[185,false],[243,false],[265,false]
    ],
    tScores: {
      male: [30,34,40,45,51,56,61],
      female: [30,35,40,45,51,56,61]
    }
  },
  {
    name: "Hy2",
    description: "Need for Affection",
    answers: [
      // Verdadero
      [230,true],
      // Falso
      [26,false],[58,false],[76,false],[81,false],[98,false],[110,false],[124,false],[151,false],[213,false],[241,false],[263,false]
    ],
    tScores: {
      male: [30,32,36,40,43,47,51,55,59,63,67,71],
      female: [30,34,38,42,46,50,55,59,63,67,71]
    }
  },
  {
    name: "Hy3",
    description: "Lassitude-malaise",
    answers: [
      // Verdadero
      [31,true],[39,true],[65,true],[175,true],[218,true],
      // Falso
      [2,false],[3,false],[9,false],[10,false],[45,false],[95,false],[125,false],[141,false],[148,false],[152,false]
    ],
    tScores: {
      male: [38,43,48,52,57,61,66,70,75,79,84,88,93,97,102,106],
      female: [39,43,47,51,55,59,63,67,71,75,79,83,87,91,95,99]
    }
  },
  {
    name: "Hy4",
    description: "Somatic Complaints",
    answers: [
      // Verdadero
      [11,true],[18,true],[40,true],[44,true],[101,true],[172,true],
      // Falso
      [8,false],[47,false],[91,false],[159,false],[164,false],[173,false],[176,false],[179,false],[208,false],[224,false],[249,false]
    ],
    tScores: {
      male: [38,43,48,52,57,62,67,72,77,82,86,91,96,101,106,111,115,120],
      female: [37,41,45,49,53,57,61,65,69,73,77,81,85,89,93,97,101,105]
    }
  },
  {
    name: "Hy5",
    description: "Inhibition of Aggression",
    answers: [
      // Verdadero
      // Ninguno
      // Falso
      [7,false],[14,false],[29,false],[115,false],[116,false],[135,false],[157,false]
    ],
    tScores: {
      male: [30,33,40,48,55,63,71,78],
      female: [30,31,39,46,54,62,70,77]
    }
  },
{
  name: "Pd1",
  description: "Familial Discord",
  answers: [
    // Verdadero
    [21,true],[54,true],[195,true],[202,true],[288,true],
    // Falso
    [83,false],[125,false],[214,false],[217,false]
  ],
  tScores: {
    male: [38,45,51,58,65,71,78,84,91,98],
    female: [38,44,50,56,62,68,74,80,86,92]
  }
}
,
{
  name: "Pd2",
  description: "Authority Problems",
  answers: [
    // Verdadero
    [35, true], [105, true],
    // Falso
    [34, false], [70, false], [129, false], [160, false], [263, false], [266, false]
  ],
  tScores: {
    male: [30,35,42,48,55,61,68,74,81],
    female: [30,38,46,53,61,69,77,84,92]
  }
}
,
{
  name: "Pd3",
  description: "Social Imperturbability",
  answers: [
    // Verdadero
    // (no hay preguntas verdaderas)
    // Falso
    [70, false], [129, false], [158, false], [167, false], [185, false], [243, false]
  ],
  tScores: {
    male: [30,35,40,46,52,58,64],
    female: [30,35,41,47,52,58,64]
  }
}
,
{
  name: "Pd4",
  description: "Social Alienation",
  answers: [
    // Verdadero
    [17, true], [22, true], [42, true], [56, true], [82, true], [99, true], [113, true], [219, true], [225, true], [259, true],
    // Falso
    [12, false], [129, false], [157, false]
  ],
  tScores: {
    male: [30,36,41,46,51,57,62,67,73,78,83,88,94,99],
    female: [30,33,38,44,49,54,60,65,70,75,81,86,91,97]
  }
}
,
{
  name: "Pd5",
  description: "Self-alienation",
  answers: [
    // Verdadero
    [31, true], [32, true], [52, true], [56, true], [71, true], [82, true], [89, true], [94, true], [113, true], [264, true],
    // Falso
    [9, false], [95, false]
  ],
  tScores: {
    male: [34,38,43,48,53,58,63,67,72,77,82,87,91],
    female: [34,39,43,48,53,58,63,68,72,77,82,87,92]
  }
}
,
{
  name: "Pa1",
  description: "Persecutory Ideas",
  answers: [
    // Verdadero
    [17, true], [22, true], [42, true], [99, true], [113, true], [138, true], [144, true],
    [145, true], [162, true], [234, true], [259, true], [305, true], [333, true], [336, true],
    [355, true], [361, true],
    // Falso
    [314, false]
  ],
  tScores: {
    male: [40,46,52,58,64,70,76,82,88,94,100,106,112,118,120],
    female: [39,45,51,57,63,69,75,81,87,93,99,105,111,117,120]
  }
}
,
{
  name: "Pa2",
  description: "Poignancy",
  answers: [
    // Verdadero
    [22, true], [146, true], [271, true], [277, true], [285, true], [307, true], [334, true],
    // Falso
    [100, false], [244, false]
  ],
  tScores: {
    male: [34,41,48,55,62,69,76,82,89,96],
    female: [34,40,46,53,59,65,72,78,84,91]
  }
}
,
{
  name: "Pa3",
  description: "Naivete",
  answers: [
    // Verdadero
    [16, true],
    // Falso
    [81, false], [98, false], [104, false], [110, false], [283, false], [284, false], [286, false], [315, false]
  ],
  tScores: {
    male: [30,32,36,41,46,51,56,60,65,70],
    female: [30,31,36,41,45,50,55,60,65,69]
  }
}
,
{
  name: "Sc1",
  description: "Social Alienation",
  answers: [
    // Verdadero
    [17, true], [21, true], [22, true], [42, true], [46, true], [138, true], [145, true], [190, true],
    [221, true], [256, true], [277, true], [281, true], [291, true], [292, true], [320, true], [333, true],
    // Falso
    [90, false], [276, false], [278, false], [280, false], [343, false]
  ],
  tScores: {
    male: [39,43,47,51,55,59,64,68,72,76,80,84,88,92,97,101,105,109,113,117,120],
    female: [38,42,46,50,53,57,61,65,69,73,77,81,84,88,92,96,100,104,108,111,115,119]
  }
}
,
{
  name: "Sc2",
  description: "Emotional Alienation",
  answers: [
    // Verdadero
    [65, true], [92, true], [234, true], [273, true], [303, true], [323, true], [329, true], [332, true],
    // Falso
    [9, false], [210, false], [290, false]
  ],
  tScores: {
    male: [40,50,59,69,78,88,98,107,117,120],
    female: [40,49,58,67,76,86,95,104,113,120]
  }
}
,
{
  name: "Sc3",
  description: "Lack of Ego Mastery, Cognitive",
  answers: [
    // Verdadero
    [31, true], [32, true], [147, true], [170, true], [180, true], [299, true], [311, true], [316, true], [325, true],
    // Falso
    [165, false]
  ],
  tScores: {
    male: [42,48,54,60,66,72,78,84,90,96,103],
    female: [43,49,55,61,67,74,80,86,92,98,104]
  }
}
,
{
  name: "Sc4",
  description: "Lack of Ego Mastery, Conative",
  answers: [
    // Verdadero
    [31, true], [38, true], [48, true], [65, true], [92, true], [233, true], [234, true], [273, true], [299, true], [303, true], [325, true],
    // Falso
    [9, false], [210, false], [290, false]
  ],
  tScores: {
    male: [39,44,49,55,60,65,71,76,82,87,92,98,103,109,114],
    female: [39,44,49,54,59,65,70,75,80,85,90,95,100,106,111]
  }
}
,
{
  name: "Sc5",
  description: "Lack of Ego Mastery, Defective Inhibition",
  answers: [
    // Verdadero
    [23, true], [85, true], [168, true], [182, true], [218, true], [242, true], [274, true], [320, true], [322, true], [329, true], [355, true],
    // Falso
    // Ninguna
  ],
  tScores: {
    male: [40,47,54,61,68,75,82,89,96,103,110,117],
    female: [40,46,53,59,65,72,78,85,91,97,104,110]
  }
}
,
{
  name: "Sc6",
  description: "Bizarre Sensory Experiences",
  answers: [
    // Verdadero
    [23, true], [32, true], [44, true], [168, true], [182, true], [229, true], [247, true], [252, true], [296, true], [298, true], [307, true], [311, true], [319, true], [355, true],
    // Falso
    [91, false], [106, false], [177, false], [179, false], [255, false], [295, false]
  ],
  tScores: {
    male: [41,46,51,55,60,65,70,75,80,85,90,95,99,104,109,114,119,120],
    female: [41,45,50,54,59,63,68,72,77,81,86,91,95,100,104,109,113,118,120]
  }
}
,
{
  name: "Ma1",
  description: "Amorality",
  answers: [
    // Verdadero
    [131, true], [227, true], [248, true], [250, true], [269, true],
    // Falso
    [263, false]
  ],
  tScores: {
    male: [35,42,50,58,66,74,81],
    female: [37,45,54,62,70,79,87]
  }
}
,
{
  name: "Ma2",
  description: "Psychomotor Acceleration",
  answers: [
    // Verdadero
    [15, true], [85, true], [87, true], [122, true], [169, true],
    [206, true], [218, true], [242, true], [244, true],
    // Falso
    [100, false], [106, false]
  ],
  tScores: {
    male: [30,34,39,44,49,53,58,63,68,73,78],
    female: [30,35,40,45,50,55,60,65,70,75,80]
  }
}
,
{
  name: "Ma3",
  description: "Imperturbability",
  answers: [
    // Verdadero
    [155, true], [200, true], [220, true],
    // Falso
    [93, false], [136, false], [158, false], [167, false], [243, false]
  ],
  tScores: {
    male: [30,35,41,47,53,59,65,71,77],
    female: [30,37,43,50,56,62,69,75,82]
  }
}
,
{
  name: "Ma4",
  description: "Ego Inflation",
  answers: [
    // Verdadero
    [13, true], [50, true], [55, true], [61, true], [98, true], 
    [145, true], [190, true], [211, true], [212, true],
    // Falso
    // No hay preguntas de falso
  ],
  tScores: {
    male: [30,37,43,50,56,63,69,76,82,89],
    female: [31,37,43,49,56,62,68,74,80,86]
  }
}
,
{
  name: "Si1",
  description: "Shyness/Self-Consciousness",
  answers: [
    // Verdadero
    [158, true], [161, true], [167, true], [185, true], [243, true],
    [265, true], [275, true], [289, true],
    // Falso
    [49, false], [262, false], [280, false], [321, false], [342, false], [360, false]
  ],
  tScores: {
    male: [36,39,42,45,48,51,53,56,59,62,65,68,71,74,77],
    female: [36,38,41,44,46,49,52,55,57,60,63,65,68,71,74]
  }
}
,
{
  name: "Si2",
  description: "Social Avoidance",
  answers: [
    // Verdadero
    [337, true], [367, true],
    // Falso
    [86, false], [340, false], [353, false], [359, false], [363, false], [370, false]
  ],
  tScores: {
    male: [37,41,45,49,54,58,62,67,71],
    female: [37,42,47,51,56,60,65,69,74]
  }
}
,
{
  name: "Si3",
  description: "Self/Other Alienation",
  answers: [
    // Verdadero
    [31, true], [56, true], [104, true], [110, true], [135, true], [284, true],
    [302, true], [308, true], [326, true], [328, true], [338, true], [347, true],
    [348, true], [358, true], [364, true], [368, true], [369, true],
    // Falso
    // Ninguno
  ],
  tScores: {
    male: [35,38,41,44,47,50,53,56,59,62,65,68,71,74,77,80,83,86],
    female: [35,38,41,44,47,49,52,55,58,61,63,66,69,72,74,77,80,83]
  }
}
,
{
  name: "ANX",
  description: "Anxiety",
  answers: [
    // Verdadero
    [15, true], [30, true], [31, true], [39, true], [170, true], [196, true],
    [273, true], [290, true], [299, true], [301, true], [305, true], [339, true],
    [408, true], [415, true], [463, true], [469, true], [509, true], [556, true],
    // Falso
    [140, false], [208, false], [223, false], [405, false], [496, false]
  ],
  tScores: {
    male: [35,39,42,45,47,50,52,53,55,57,60,62,65,67,70,72,75,77,80,82,85,87,90,92],
    female: [34,37,40,43,45,47,49,51,53,55,56,59,61,64,66,69,71,74,76,79,81,84,86,89]
  }
}
,
{
  name: "FRS",
  description: "Fears",
  answers: [
    // Verdadero
    [154, true], [317, true], [322, true], [329, true], [334, true],
    [392, true], [395, true], [397, true], [435, true], [438, true],
    [441, true], [447, true], [458, true], [468, true], [471, true],
    [555, true],
    // Falso
    [115, false], [163, false], [186, false], [385, false],
    [401, false], [453, false], [462, false]
  ],
  tScores: {
    male: [35,41,45,48,51,54,57,60,64,67,70,74,77,80,84,87,90,93,97,100,103,107,110,113],
    female: [31,35,38,41,43,46,48,51,53,56,59,62,65,68,72,75,78,81,85,88,91,94,98,101]
  }
}
,
{
  name: "OBS",
  description: "Obsessiveness",
  answers: [
    // Verdadero
    [55, true], [87, true], [135, true], [196, true], [309, true],
    [313, true], [327, true], [328, true], [394, true], [442, true],
    [482, true], [491, true], [497, true], [509, true], [547, true], [553, true]
    // No hay respuestas falsas
  ],
  tScores: {
    male: [33,37,41,44,47,50,53,56,59,63,66,70,73,77,80,84,87],
    female: [32,37,41,44,46,48,50,53,56,59,63,67,71,75,79,83,87]
  }
}
,
{
  name: "DEP",
  description: "Depression",
  answers: [
    // Verdadero
    [38, true], [52, true], [56, true], [65, true], [71, true], [82, true],
    [92, true], [130, true], [146, true], [215, true], [234, true], [246, true],
    [277, true], [303, true], [306, true], [331, true], [377, true], [399, true],
    [400, true], [411, true], [454, true], [506, true], [512, true], [516, true],
    [520, true], [539, true], [546, true], [554, true],

    // Falso
    [3, false], [9, false], [75, false], [95, false], [388, false]
  ],
  tScores: {
    male: [36,41,45,48,51,53,55,56,58,59,61,63,65,66,68,70,71,73,75,77,78,80,82,83,85,87,88,90,92,94,95,97,99,100],
    female: [34,39,42,45,48,50,52,54,55,57,58,60,62,63,65,67,68,70,72,73,75,77,78,80,82,83,85,87,88,90,92,93,95,97]
  }
}
,
{
  name: "HEA",
  description: "Health Concerns",
  answers: [
    // Verdadero
    [11, true], [18, true], [28, true], [36, true], [40, true], [44, true],
    [53, true], [59, true], [97, true], [101, true], [111, true], [149, true],
    [175, true], [247, true],

    // Falso
    [20, false], [33, false], [45, false], [47, false], [57, false],
    [91, false], [117, false], [118, false], [141, false], [142, false],
    [159, false], [164, false], [176, false], [179, false], [181, false],
    [194, false], [204, false], [224, false], [249, false], [255, false],
    [295, false], [404, false]
  ],
  tScores: {
    male: [33,37,41,44,48,51,53,56,58,60,62,64,66,68,70,72,74,76,78,80,81,83,85,87,89,91,93,95,97,99,101,103,105,106,108,110,112],
    female: [32,36,40,43,46,49,51,53,55,57,59,61,63,64,66,68,70,72,74,76,77,79,81,83,85,87,89,90,92,94,96,98,100,101,103,105,107]
  }
}
,
{
  name: "BIZ",
  description: "Bizarre Mentation",
  answers: [
    // Verdadero
    [24, true], [32, true], [60, true], [96, true], [138, true], [162, true],
    [198, true], [228, true], [259, true], [298, true], [311, true], [316, true],
    [319, true], [333, true], [336, true], [355, true], [361, true], [466, true],
    [490, true], [508, true], [543, true], [551, true],

    // Falso
    [427, false]
  ],
  tScores: {
    male: [39,46,51,54,57,60,63,67,70,74,77,81,84,88,91,94,98,101,105,108,112,115,119,120],
    female: [39,47,52,56,58,61,64,67,70,73,76,79,81,84,87,90,93,96,99,102,105,108,110,113]
  }
}
,
{
  name: "ANG",
  description: "Anger",
  answers: [
    // Verdadero
    [29, true], [37, true], [116, true], [134, true], [302, true], [389, true],
    [410, true], [414, true], [430, true], [461, true], [486, true], [513, true],
    [540, true], [542, true], [548, true],

    // Falso
    [564, false]
  ],
  tScores: {
    male: [32,36,40,43,46,48,50,53,56,59,63,67,70,74,78,82,86],
    female: [31,36,39,42,45,47,50,53,56,60,64,68,72,76,80,84,88]
  }
}
,
{
  name: "CYN",
  description: "Cynicism",
  answers: [
    // Verdadero
    [50, true], [58, true], [76, true], [81, true], [104, true], [110, true],
    [124, true], [225, true], [241, true], [254, true], [283, true], [284, true],
    [286, true], [315, true], [346, true], [352, true], [358, true], [374, true],
    [399, true], [403, true], [445, true], [470, true], [538, true]

    // No hay ítems falsos
  ],
  tScores: {
    male: [32,35,38,40,41,43,44,46,47,48,49,51,52,54,56,59,62,65,68,71,74,77,80,83],
    female: [32,35,38,40,42,44,46,47,48,50,51,53,54,56,58,61,64,67,69,72,75,77,80,83]
  }
}
,
{
  name: "ASP",
  description: "Antisocial Practices",
  answers: [
    // Verdadero (esperado = true)
    [26, true],[35, true],[66, true],[81, true],[84, true],[104, true],[105, true],[110, true],
    [123, true],[227, true],[240, true],[248, true],[250, true],[254, true],[269, true],[283, true],
    [284, true],[374, true],[412, true],[418, true],[419, true],

    // Falso (esperado = false)
    [266, false]
  ],
  tScores: {
    male:  [30,34,37,40,42,44,46,47,49,51,53,55,58,62,65,69,72,76,79,83,87,90,94],
    female:[33,36,39,42,45,47,49,52,54,56,59,63,66,69,72,75,79,82,85,88,91,94,98]
  }
}

,{
  name: "Hy1",
  description: "Denial of Social Anxiety",
  answers: [
    // Verdadero
    [18, true],[31, true],[39, true],[40, true],[44, true],[65, true],[101, true],[172, true],
    [175, true],[218, true],[230, true],

    // Falso
    [129, false],[161, false],[167, false],[185, false],[243, false],[265, false]
  ],
  tScores: {
    male:   [30,34,38,42,46,50,54,58,62,66,70,74,78,82,86,90,94,98,102,106,110,114,118,120],
    female: [30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120]
  }
}
,
{
  name: "Hy2",
  description: "Need for Affection",
  answers: [
    // Verdadero
    [230, true],

    // Falso
    [26, false],[58, false],[76, false],[81, false],[98, false],
    [110, false],[124, false],[151, false],[213, false],[241, false],[263, false]
  ],
  tScores: {
    male:   [30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99,102,105,108,111,114,117,120],
    female: [30,34,38,42,46,50,54,58,62,66,70,74,78,82,86,90,94,98,102,106,110,114,118,120]
  }
}
,
{
  name: "Hy3",
  description: "Lassitude-Malaise",
  answers: [
    // Verdadero
    [31, true],[39, true],[65, true],[175, true],[218, true],

    // Falso
    [2, false],[3, false],[9, false],[10, false],[45, false],
    [95, false],[125, false],[141, false],[148, false],[152, false]
  ],
  tScores: {
    male:   [38,43,48,53,58,63,68,73,78,83,88,93,98,103,108,113,118,120],
    female: [39,43,47,51,55,59,63,67,71,75,79,83,87,91,95,99,103,107,111,115,119]
  }
}
,
{
  name: "Hy4",
  description: "Somatic Complaints",
  answers: [
    // Verdadero
    [11, true],[18, true],[40, true],[44, true],[101, true],[172, true],

    // Falso
    [8, false],[47, false],[91, false],[159, false],[164, false],
    [173, false],[176, false],[179, false],[208, false],[224, false],
    [249, false]
  ],
  tScores: {
    male:   [38,43,48,53,58,63,68,73,78,83,88,93,98,103,108,113,118,120],
    female: [37,41,45,49,53,57,61,65,69,73,77,81,85,89,93,97,101,105,109,113,117]
  }
},
{
  name: "Hy5",
  description: "Inhibition of Aggression",
  answers: [
    // Verdadero
    [44, true],[172, true],[230, true],

    // Falso
    [7, false],[14, false],[29, false],[115, false],[116, false],
    [135, false],[157, false]
  ],
  tScores: {
    male:   [30,34,38,42,46,50,54,58,62,66,70,74,78,82,86,90,94,98,102,106,110,114,118,120],
    female: [30,32,36,40,44,48,52,56,60,64,68,72,76,80,84,88,92,96,100,104,108,112,116,120]
  }
}
,
{
  name: "Pd1",
  description: "Familial Discord",
  answers: [
    // Verdadero
    [21, true],[54, true],[195, true],[202, true],[288, true],

    // Falso
    [83, false],[125, false],[214, false],[217, false]
  ],
  tScores: {
    male:   [38,43,48,53,58,63,68,73,78,83,88,93,98,103,108,113,118,120],
    female: [38,44,50,56,62,68,74,80,86,92,98,104,110,116,120]
  }
}
,
{
  name: "Pd2",
  description: "Authority Problems",
  answers: [
    // Verdadero
    [35, true],[105, true],

    // Falso
    [34, false],[70, false],[129, false],[160, false],[263, false],[266, false]
  ],
  tScores: {
    male:   [30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120],
    female: [30,38,46,53,61,69,77,84,92,100,108,116,120]
  }
}
,
{
  name: "Pd3",
  description: "Social Imperturbability",
  answers: [
    // Verdadero
    [82, true],[99, true],[113, true],

    // Falso
    [70, false],[129, false],[158, false],[167, false],[185, false],[243, false]
  ],
  tScores: {
    male:   [30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120],
    female: [30,35,41,47,52,58,64,70,76,82,88,94,100,106,112,118,120]
  }
}
,
{
  name: "Pd4",
  description: "Social Alienation",
  answers: [
    // Verdadero
    [17, true],[22, true],[42, true],[56, true],[82, true],[99, true],[113, true],[219, true],[225, true],[259, true],

    // Falso
    [12, false],[129, false],[157, false]
  ],
  tScores: {
    male:   [30,36,41,46,51,57,62,67,73,78,83,88,94,99,104,109,114,119,120],
    female: [30,33,38,44,49,54,60,65,70,75,81,86,91,97,102,107,112,117,120]
  }
}
,
{
  name: "Pd5",
  description: "Self-Alienation",
  answers: [
    // Verdadero
    [31, true],[32, true],[52, true],[56, true],[71, true],[82, true],[89, true],[94, true],[113, true],[264, true],

    // Falso
    [9, false],[95, false]
  ],
  tScores: {
    male:   [34,38,43,48,53,58,63,68,73,78,83,88,93,98,103,108,113,118,120],
    female: [34,39,43,48,53,58,63,68,73,78,83,88,93,98,103,108,113,118,120]
  }
}

,{
  name: "D-O",
  description: "Depression, Obvious",
  answers: [
    // Verdadero
    [15, true],[18, true],[31, true],[38, true],[39, true],[46, true],[56, true],[73, true],[92, true],
    [127, true],[130, true],[146, true],[147, true],[170, true],[175, true],[215, true],[233, true],

    // Falso
    [2, false],[9, false],[10, false],[20, false],[33, false],[43, false],[45, false],[49, false],[75, false],
    [95, false],[109, false],[118, false],[140, false],[141, false],[142, false],[165, false],[188, false],
    [223, false],[245, false],[248, false],[260, false],[330, false]
  ],
  tScores: {
    male:   [32,34,37,39,41,44,46,48,51,53,55,58,60,62,65,67,69,72,74,76,79,81,83,86,88,90,93,95,97,100,102,104,107,109,111,114,116,118,120],
    female: [32,34,36,38,40,42,44,46,48,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,92,94,96,98,100,102,104,106,108,110,112]
  }
}
,
	{
  name: "D-S",
  description: "Depression, Subtle",
  answers: [
    // Verdadero
    [5, true],[117, true],[282, true],

    // Falso
    [29, false],[37, false],[55, false],[68, false],[76, false],[134, false],[143, false],[148, false],
    [178, false],[189, false],[212, false],[221, false],[226, false],[238, false],[267, false]
  ],
  tScores: {
    male:   [32,36,40,44,48,52,55,59,63,67,71,75,78],
    female: [32,36,40,44,48,53,57,61,65,69,73,77]
  }
}
,
	{
  name: "Hy-O",
  description: "Hysteria, Obvious",
  answers: [
    // Verdadero
    [11, true],[18, true],[31, true],[39, true],[40, true],[44, true],[65, true],
    [101, true],[166, true],[172, true],[175, true],[218, true],

    // Falso
    [2, false],[3, false],[8, false],[9, false],[10, false],[45, false],[47, false],
    [91, false],[95, false],[115, false],[125, false],[141, false],[152, false],
    [159, false],[164, false],[173, false],[179, false],[208, false],[224, false],
    [249, false]
  ],
  tScores: {
    male:   [37,40,42,45,48,51,53,56,59,62,64,67,70,73,76,78,81,84,87,89,92,95,98,100,103,106,109,111,114,117,120],
    female: [37,39,41,44,46,48,51,53,56,58,60,63,65,67,70,72,75,77,79,82,84,86,89,91,93,96,98,101,103,105,108,110,112]
  }
}
,
	{
  name: "Hy-S",
  description: "Hysteria, Subtle",
  answers: [
    // Verdadero
    [230, true],

    // Falso
    [7, false],[14, false],[26, false],[29, false],[58, false],[76, false],[81, false],
    [98, false],[110, false],[116, false],[124, false],[129, false],[135, false],[148, false],
    [151, false],[157, false],[161, false],[167, false],[176, false],[185, false],[193, false],
    [213, false],[241, false],[243, false],[253, false],[263, false],[265, false]
  ],
  tScores: {
    male:   [31,34,36,38,41,43,45,47,50,52,54,57,59,61,64,66,68,71,73,75,78],
    female: [32,34,37,39,42,44,47,49,51,54,56,59,61,64,66,69,71,73,76,78]
  }
}
,
	{
  name: "Pd-O",
  description: "Psychopathic Deviate, Obvious",
  answers: [
    // Verdadero
    [17, true],[22, true],[31, true],[32, true],[35, true],[42, true],[52, true],
    [54, true],[56, true],[71, true],[82, true],[94, true],[99, true],[105, true],
    [195, true],[202, true],[225, true],[259, true],[264, true],[288, true],

    // Falso
    [9, false],[12, false],[34, false],[79, false],[95, false],[125, false],[261, false],[266, false]
  ],
  tScores: {
    male:   [34,36,39,42,44,47,50,52,55,58,60,63,66,68,71,74,76,79,82,84,87,90,92,95,98,100,103,106,108],
    female: [35,38,41,44,46,49,52,54,57,60,62,65,68,70,73,76,79,81,84,87,89,92,95,97,100,103,105,108,111]
  }
}
,
	{
  name: "Pd-S",
  description: "Psychopathic Deviate, Subtle",
  answers: [
    // Verdadero
    [21, true],[89, true],[113, true],[219, true],

    // Falso
    [70, false],[83, false],[122, false],[129, false],[143, false],[157, false],
    [158, false],[160, false],[167, false],[171, false],[185, false],[209, false],
    [214, false],[217, false],[226, false],[243, false],[263, false],[267, false]
  ],
  tScores: {
    male:   [33,37,41,45,48,52,56,60,64,68,72,76,79,83,87,91,95],
    female: [31,35,39,43,47,51,55,59,63,67,71,75,79,83,87,91,95]
  }
}
,
	{
  name: "Pa-O",
  description: "Paranoia, Obvious",
  answers: [
    // Verdadero
    [17, true],[22, true],[23, true],[24, true],[42, true],[99, true],[138, true],[144, true],
    [146, true],[162, true],[234, true],[259, true],[277, true],[285, true],[305, true],[307, true],
    [333, true],[336, true],[355, true],[361, true],

    // Falso
    [255, false],[266, false],[314, false]
  ],
  tScores: {
    male:   [38,43,47,52,57,61,66,70,75,80,84,89,93,98,102,107,112,116],
    female: [38,42,47,51,55,60,64,68,72,77,81,85,90,94,98,103,107,111,115,120]
  }
}
,
{
  name: "Pa-S",
  description: "Paranoia, Subtle",
  answers: [
    // Verdadero
    [16, true],[113, true],[145, true],[271, true],[334, true],

    // Falso
    [81, false],[95, false],[98, false],[100, false],[104, false],[110, false],
    [244, false],[283, false],[284, false],[286, false],[297, false],[315, false]
  ],
  tScores: {
    male:   [31,35,39,43,48,52,56,60,65,69,73,77,82,86,90],
    female: [31,35,39,44,48,52,57,61,65,69,74,78,82,87,91]
  }
}
,
	{
  name: "Ma-O",
  description: "Hypomania, Obvious",
  answers: [
    // Verdadero
    [15, true],[23, true],[50, true],[61, true],[85, true],[87, true],
    [145, true],[155, true],[168, true],[182, true],[190, true],[205, true],
    [218, true],[227, true],[229, true],[238, true],[242, true],[250, true],[253, true],[269, true],

    // Falso
    [100, false],[106, false],[107, false]
  ],
  tScores: {
    male:   [30,34,37,40,44,47,51,54,57,61,64,67,71,74,78,81,84,88,91,95,98,101,105],
    female: [32,35,39,42,45,49,52,55,59,62,66,69,72,76,79,82,86,89,92,96,99,103,106]
  }
}
,
	{
  name: "Ma-S",
  description: "Hypomania, Subtle",
  answers: [
    // Verdadero
    [13, true],[21, true],[55, true],[98, true],[113, true],[122, true],[131, true],
    [169, true],[200, true],[206, true],[211, true],[212, true],[220, true],[244, true],[248, true],

    // Falso
    [88, false],[93, false],[136, false],[154, false],[158, false],[167, false],[243, false],[263, false]
  ],
  tScores: {
    male:   [31,35,39,42,46,50,54,57,61,65,69,72,76,80,83,87,91,95,98],
    female: [32,36,40,44,47,51,55,59,63,67,70,74,78,82,86,90,93,97,101]
  }
}
,{
  name: "FRS1",
  description: "Generalized Fearfulness",
  answers: [
    // Verdadero
    [317, true],[322, true],[329, true],[334, true],[395, true],[435, true],[441, true],
    [447, true],[468, true],[471, true],[555, true],

    // Falso
    [186, false]
  ],
  tScores: {
    male:   [44,53,62,71,80,89,98,107,113,120,127,134],
    female: [42,48,55,61,68,74,81,88,94,101,107,114]
  }
}
,
{
  name: "FRS2",
  description: "Multiple Fears",
  answers: [
    // Verdadero
    [154, true],[392, true],[438, true],[458, true],

    // Falso
    [115, false],[163, false],[385, false],[401, false],[453, false],[462, false]
  ],
  tScores: {
    male:   [37,41,45,50,54,59,63,67,72,76,81,86],
    female: [30,33,37,41,45,49,53,58,62,66,70,75]
  }
}
,
{
  name: "DEP1",
  description: "Lack of Drive",
  answers: [
    // Verdadero
    [38, true], [71, true], [92, true], [399, true], [400, true],
    [512, true], [516, true], [539, true], [554, true],

    // Falso
    [3, false], [9, false], [75, false]
  ],
  tScores: {
    male:   [40,46,51,57,62,68,73,79,84,89,95,100,106],
    female: [40,45,50,55,60,65,70,75,80,85,90,95,100]
  }
}
,
{
  name: "DEP2",
  description: "Dysphoria",
  answers: [
    // Verdadero
    [56, true], [65, true], [146, true], [215, true],

    // Falso
    [95, false], [388, false]
  ],
  tScores: {
    male:   [42,50,58,66,74,82,90],
    female: [40,47,53,60,66,73,79]
  }
}
,
{
  name: "DEP3",
  description: "Self-Depreciation",
  answers: [
    // Verdadero
    [52, true], [82, true], [130, true], [234, true], [246, true], [377, true], [411, true]
    // No hay ítems falsos
  ],
  tScores: {
    male:   [41,48,55,62,69,76,83,91],
    female: [40,47,54,61,68,75,82,89]
  }
}
,
{
  name: "DEP4",
  description: "Suicidal Ideation",
  answers: [
    // Verdadero
    [303, true],
    [454, true],
    [506, true],
    [520, true],
    [546, true]
    // No hay ítems falsos
  ],
  tScores: {
    male:   [45,50,55,62,69,76,79,85,95,100,105,110,120],
    female: [45,50,55,61,67,73,77,83,93,100,105,110,120]
  }
}
,
{
  name: "HEA1",
  description: "Gastrointestinal Symptoms",
  answers: [
    // Verdadero
    [18, true],
    [59, true],
    [111, true],

    // Falso
    [20, false],
    [47, false]
  ],
  tScores: {
    male:   [44,49,53,57,62,66,70,74,79,83,88,96,109],
    female: [43,48,50,54,58,61,64,68,72,75,79,86,97]
  }
}
,
{
  name: "HEA2",
  description: "Neurological Symptoms",
  answers: [
    // Verdadero
    [44, true],
    [53, true],
    [101, true],
    [149, true],
    [247, true],

    // Falso
    [91, false],
    [142, false],
    [159, false],
    [164, false],
    [179, false],
    [255, false],
    [295, false]
  ],
  tScores: {
    male:   [40,44,47,50,54,57,60,63,67,70,74,77,80,84,87,91,94,100,107,114,120],
    female: [39,43,45,50,54,57,61,64,67,72,75,78,82,85,89,94,99,105]
  }
}
,
{
  name: "HEA3",
  description: "General Health Concerns",
  answers: [
    // Verdadero
    [175, true],

    // Falso
    [33, false],
    [45, false],
    [118, false],
    [141, false],
    [224, false]
  ],
  tScores: {
    male:   [40,44,48,52,56,60,64,68,72,76,81,85,89],
    female: [40,44,48,52,56,60,64,68,71,75,79,83,87]
  }
}
,
{
  name: "BIZ1",
  description: "Psychotic Symptomatology",
  answers: [
    // Verdadero
    [24, true],[60, true],[96, true],[138, true],[162, true],
    [228, true],[336, true],[355, true],[361, true],[508, true],[551, true],

    // Falso
    // No hay ítems falsos
  ],
  tScores: {
    male:   [44,48,52,56,60,64,68,72,76,80,84,88,92,96,100,104,108,112,114,120],
    female: [44,48,52,56,60,64,68,72,76,80,84,88,92,96,100,104,108,112,114,120]
  }
}
,
{
  name: "BIZ2",
  description: "Schizotypal Characteristics",
  answers: [
    // Verdadero
    [32, true],[259, true],[298, true],[311, true],[316, true],
    [319, true],[333, true],[466, true],[543, true]

    // No hay ítems falsos
  ],
  tScores: {
    male:   [41,44,47,50,54,57,60,64,67,73,80,86,93,99],
    female: [41,44,47,50,54,57,60,64,66,72,79,85,91,97]
  }
}
,
{
  name: "ANG1",
  description: "Explosive Behavior",
  answers: [
    // Verdadero
    [37, true],[134, true],[389, true],[414, true],[540, true],[548, true],

    // Falso
    [564, false]
  ],
  tScores: {
    male:   [39,42,45,48,52,55,58,61,64,68,71,74,77,80,83],
    female: [39,42,45,48,52,55,58,61,64,69,73,76,79,84,91]
  }
}
,
{
  name: "ANG2",
  description: "Irritability",
  answers: [
    // Verdadero
    [116, true],[302, true],[430, true],[461, true],[486, true],[513, true],[542, true]
    // No hay ítems falsos
  ],
  tScores: {
    male:   [35,38,41,44,46,49,51,54,56,59,61,64,67,70,72],
    female: [33,36,39,42,44,47,49,52,54,57,59,62,65,68,70]
  }
}
,
{
  name: "CYN1",
  description: "Misanthropic Beliefs",
  answers: [
    // Verdadero
    [58, true],[76, true],[81, true],[104, true],[110, true],[241, true],[254, true],
    [283, true],[284, true],[286, true],[352, true],[374, true],[399, true],[470, true],[538, true]
    // No hay ítems falsos
  ],
  tScores: {
    male:   [33,36,39,41,44,47,50,52,55,58,60,63,66,69,71,74],
    female: [34,37,40,42,45,48,51,54,56,59,62,65,68,70,73,76]
  }
}
,
{
  name: "CYN2",
  description: "Interpersonal Suspiciousness",
  answers: [
    [50, true],
    [124, true],
    [225, true],
    [315, true],
    [346, true],
    [358, true],
    [403, true],
    [445, true]
  ],
  tScores: {
    male:   [34,37,39,41,43,45,48,50,52,55,57,60,62,66,68,71],
    female: [35,38,40,42,45,47,49,52,54,57,59,62,64,68,70,73]
  }
}

,
{
  name: "ASP1",
  description: "Antisocial Attitudes",
  answers: [
    [26, true],
    [66, true],
    [81, true],
    [104, true],
    [110, true],
    [123, true],
    [227, true],
    [248, true],
    [250, true],
    [254, true],
    [269, true],
    [283, true],
    [284, true],
    [374, true],
    [418, true],
    [419, true]
    // No hay ítems falsos
  ],
  tScores: {
    male:   [32,34,36,38,40,42,44,46,49,51,53,55,57,60,63,66,69,72,75,79],
    female: [33,35,37,39,41,43,46,49,52,55,58,61,64,67,70,73,76,79,82]
  }
}
,
{
  name: "ASP2",
  description: "Antisocial Behavior",
  answers: [
    // Verdadero
    [35, true],
    [84, true],
    [105, true],
    [412, true],

    // Falso
    [266, false]
  ],
  tScores: {
    male:   [38,41,45,48,52,55,59,62,67,70,74],
    female: [42,45,50,55,61,66,71,76,81,85,90]
  }
}
,
{
  name: "TPA1",
  description: "Impatience",
  answers: [
    // Verdadero
    [302, true],
    [420, true],
    [430, true],
    [507, true],
    [523, true],
    [535, true]
    // No hay ítems falsos
  ],
  tScores: {
    male:   [34,37,39,41,44,46,49,51,54,57,60,63,65,68],
    female: [34,37,40,43,46,49,52,55,58,61,64,67,70]
  }
}
,
{
  name: "TPA2",
  description: "Competitive Drive",
  answers: [
    // Verdadero
    [27, true],
    [151, true],
    [212, true],
    [358, true],
    [419, true],
    [423, true],
    [510, true],
    [531, true],
    [545, true]
    // No hay ítems falsos
  ],
  tScores: {
    male:   [33,36,39,42,44,47,50,53,55,58,61,64,66,69,71,74,77,82],
    female: [34,37,40,43,46,49,52,55,58,61,64,67,70,73,76,79,82,85,89]
  }
}
,
{
  name: "LSE1",
  description: "Self-Doubt",
  answers: [
    // Verdadero
    [73, true],
    [130, true],
    [326, true],
    [411, true],
    [450, true],
    [483, true],
    [485, true],
    [504, true],

    // Falso
    [61, false],
    [78, false],
    [109, false]
  ],
  tScores: {
    male:   [39,42,44,46,49,51,54,57,59,62,64,67,70,75,80,85,90,95],
    female: [39,42,44,46,48,51,53,57,60,62,66,69,71,75,80,85,89]
  }
}
,
{
  name: "LSE2",
  description: "Submissiveness",
  answers: [
    // Verdadero
    [70, true],
    [369, true],
    [421, true],
    [457, true],
    [503, true],
    [519, true]

    // No hay ítems falsos
  ],
  tScores: {
    male:   [41,44,46,48,51,53,55,58,60,62,65,67,70,73,76,79,83],
    female: [39,42,44,46,49,51,53,57,60,62,66,69,71,75]
  }
}
,
{
  name: "SOD1",
  description: "Introversion",
  answers: [
    // Verdadero
    [46, true],[265, true],[281, true],[337, true],[349, true],[367, true],[480, true],[515, true],

    // Falso
    [49, false],[86, false],[280, false],[340, false],[353, false],[359, false],[363, false],[370, false]
  ],
  tScores: {
    male:   [36,38,39,41,43,45,47,50,52,54,56,59,61,64,66,68,71,73,76,79,82],
    female: [37,39,40,42,44,46,49,51,53,55,58,61,63,66,68,70,73,76,79,82,85]
  }
}
,
{
  name: "SOD2",
  description: "Shyness",
  answers: [
    // Verdadero
    [158, true],[167, true],[185, true],[275, true],

    // Falso
    [262, false],[321, false],[360, false]
  ],
  tScores: {
    male:   [36,38,41,43,46,48,50,53,56,58,61,63,66,68,71,74],
    female: [35,37,40,42,45,47,49,52,55,57,60,63,65,69]
  }
}
,
{
  name: "FAM1",
  description: "Family Discord",
  answers: [
    // Verdadero
    [21, true],[54, true],[190, true],[205, true],[256, true],[323, true],[378, true],[382, true],[449, true],[478, true],[563, true],

    // Falso
    [83, false]
  ],
  tScores: {
    male:   [35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,75,80,85,90,95],
    female: [33,36,38,41,43,46,48,51,53,57,60,62,65,68,71,76,81,86,91]
  }
}
,
{
  name: "FAM2",
  description: "Familial Alienation",
  answers: [
    // Verdadero
    [195, true],[550, true],

    // Falso
    [217, false],[383, false],[455, false]
  ],
  tScores: {
    male:   [40,43,46,49,52,55,58,61,64,67,70,73,76,79,82,84],
    female: [41,44,47,50,53,56,59,62,65,68,71,74,77,80,83,86]
  }
}
,
{
  name: "TRT1",
  description: "Low Motivation",
  answers: [
    // Verdadero
    [92, true],[364, true],[368, true],[376, true],[491, true],[497, true],[500, true],[528, true],[539, true],[554, true],

    // Falso
    [494, false]
  ],
  tScores: {
    male:   [42,45,48,51,54,57,60,63,66,69,71,74,77,80,83,86,89,91,95,101,107],
    female: [41,44,46,49,51,54,56,61,63,66,69,71,74,76,81,86,91,96]
  }
}
,
{
  name: "TRT2",
  description: "Inability to Disclose",
  answers: [
    // Verdadero
    [274, true],[373, true],[375, true],[391, true],[495, true]

    // No hay ítems falsos
  ],
  tScores: {
    male:   [37,40,43,45,48,51,53,56,60,63,66,68,71,75],
    female: [38,41,44,46,49,52,55,58,60,63,66,68,71,75]
  }
}
,
{
  name: "KB1",
  description: "Koss-Butcher Critical Items - Acute Anxiety Scale",
  answers: [
    // Verdadero
    [5, true],[15, true],[28, true],[39, true],[59, true],[172, true],[218, true],[301, true],[444, true],[463, true],[469, true],

    // Falso
    [2, false],[3, false],[10, false],[140, false],[208, false],[223, false]
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85,90,95,100],
    female: [50,55,60,65,70,75,80,85,90,95,100]
  }
}
,
{
  name: "KB2",
  description: "Koss-Butcher Critical Items - Depressed Suicidal Ideation",
  answers: [
    // Verdadero
    [38, true],[65, true],[71, true],[92, true],[130, true],[146, true],[215, true],[233, true],[273, true],[303, true],
    [306, true],[411, true],[454, true],[485, true],[506, true],[518, true],[520, true],[524, true],

    // Falso
    [9, false],[75, false],[95, false],[388, false]
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85,90,95,100,105,110,115],
    female: [50,55,60,65,70,75,80,85,90,95,100,105,110,115]
  }
}
,
{
  name: "KB3",
  description: "Koss-Butcher Critical Items - Threatened Assault",
  answers: [
    // Verdadero
    [37, true],[85, true],[134, true],[213, true],[389, true]
    // No hay ítems falsos
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85,90,95],
    female: [50,55,60,65,70,75,80,85,90,95]
  }
}
,
{
  name: "KB4",
  description: "Koss-Butcher Critical Items - Situational Stress Due to Alcoholism",
  answers: [
    // Verdadero
    [264, true],[487, true],[489, true],[502, true],[511, true],[518, true],

    // Falso
    [125, false]
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85,90,95],
    female: [50,55,60,65,70,75,80,85,90,95]
  }
}
,
{
  name: "KB5",
  description: "Koss-Butcher Critical Items - Mental Confusion",
  answers: [
    // Verdadero
    [24, true],[31, true],[32, true],[72, true],[96, true],[180, true],
    [198, true],[299, true],[311, true],[316, true],[325, true]
    // No hay ítems falsos
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85,90,95],
    female: [50,55,60,65,70,75,80,85,90,95]
  }
}

,{
  name: "KB6",
  description: "Koss-Butcher Critical Items - Persecutory Ideas",
  answers: [
    // Verdadero
    [17, true],[42, true],[99, true],[124, true],[138, true],[144, true],
    [145, true],[162, true],[216, true],[228, true],[241, true],[251, true],
    [259, true],[333, true],[361, true],

    // Falso
    [314, false]
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85,90,95,100],
    female: [50,55,60,65,70,75,80,85,90,95,100]
  }
}
,
{
  name: "LW1",
  description: "Lachar-Wrobel Critical Items - Anxiety and Tension",
  answers: [
    // Verdadero
    [15, true],[17, true],[172, true],[218, true],[299, true],[301, true],[320, true],[463, true],

    // Falso
    [223, false],[261, false],[405, false]
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85,90,95,100],
    female: [50,55,60,65,70,75,80,85,90,95,100]
  }
}
,
{
  name: "LW2",
  description: "Lachar-Wrobel Critical Items - Depression and Worry",
  answers: [
    // Verdadero
    [65, true],[73, true],[130, true],[150, true],[180, true],[273, true],[303, true],[339, true],[411, true],[415, true],[454, true],

    // Falso
    [2, false],[3, false],[10, false],[75, false],[165, false]
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85,90,95,100],
    female: [50,55,60,65,70,75,80,85,90,95,100]
  }
}
,
{
  name: "LW3",
  description: "Lachar-Wrobel Critical Items - Sleep Disturbance",
  answers: [
    // Verdadero
    [5, true],[30, true],[39, true],[328, true],[471, true],

    // Falso
    [140, false]
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85,90,95],
    female: [50,55,60,65,70,75,80,85,90,95]
  }
}
,
{
  name: "LW4",
  description: "Lachar-Wrobel Critical Items - Deviant Beliefs",
  answers: [
    // Verdadero
    [42, true],[99, true],[138, true],[144, true],[162, true],[216, true],
    [228, true],[259, true],[333, true],[336, true],[355, true],[466, true],

    // Falso
    [106, false],[314, false]
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85,90,95,100],
    female: [50,55,60,65,70,75,80,85,90,95,100]
  }
}
,
{
  name: "LW5",
  description: "Lachar-Wrobel Critical Items - Deviant Thinking and Experiences",
  answers: [
    // Verdadero
    [32, true],[60, true],[96, true],[122, true],[198, true],
    [298, true],[307, true],[316, true],[319, true],[427, true]
    // No hay ítems falsos
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85,90,95],
    female: [50,55,60,65,70,75,80,85,90,95]
  }
}
,
{
  name: "LW6",
  description: "Lachar-Wrobel Critical Items - Substance Abuse",
  answers: [
    // Verdadero
    [168, true],[264, true],
    // Falso
    [429, false]
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85,90],
    female: [50,55,60,65,70,75,80,85,90]
  }
}
,
{
  name: "LW7",
  description: "Lachar-Wrobel Critical Items - Antisocial Attitude",
  answers: [
    // Verdadero
    [27, true],[35, true],[84, true],[105, true],[227, true],[240, true],[254, true],[324, true],
    // Falso
    [266, false]
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85,90,95],
    female: [50,55,60,65,70,75,80,85,90,95]
  }
}
,
{
  name: "LW8",
  description: "Lachar-Wrobel Critical Items - Family Conflict",
  answers: [
    // Verdadero
    [21, true],[288, true],
    // Falso
    [83, false],[125, false]
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85],
    female: [50,55,60,65,70,75,80,85]
  }
}
,
{
  name: "LW9",
  description: "Lachar-Wrobel Critical Items - Problematic Anger",
  answers: [
    // Verdadero
    [85, true],[134, true],[213, true],[389, true]
    // No hay ítems falsos
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85,90,95],
    female: [50,55,60,65,70,75,80,85,90,95]
  }
}
,
{
  name: "LW10",
  description: "Lachar-Wrobel Critical Items - Sexual Concern and Deviation",
  answers: [
    // Verdadero
    [62, true],[166, true],[268, true],

    // Falso
    [12, false],[34, false],[121, false]
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85,90],
    female: [50,55,60,65,70,75,80,85,90]
  }
}
,
{
  name: "LW11",
  description: "Lachar-Wrobel Critical Items - Somatic Symptoms",
  answers: [
    // Verdadero
    [18, true],[28, true],[40, true],[44, true],[53, true],[57, true],[59, true],
    [101, true],[111, true],[175, true],[182, true],[229, true],[247, true],[464, true],

    // Falso
    [33, false],[47, false],[142, false],[159, false],[164, false],[176, false],
    [224, false],[255, false],[295, false]
  ],
  tScores: {
    male:   [50,55,60,65,70,75,80,85,90,95,100],
    female: [50,55,60,65,70,75,80,85,90,95,100]
  }
}

];
