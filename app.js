(() => {
  'use strict';
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const pages = ['inicio', 'evidencia', 'colombia', 'enfoque', 'compromiso'];
  const progressKey = 'exc-brujula-hse-progress-v2';
  let completed = new Set();
  try {
    const saved = JSON.parse(localStorage.getItem(progressKey) || '[]');
    if (Array.isArray(saved)) completed = new Set(saved.filter((item) => pages.slice(1).includes(item)));
  } catch { /* La experiencia funciona también sin almacenamiento local. */ }

  function updateProgress() {
    $$('.journey-nav [data-page]').forEach((link) => link.classList.toggle('completed', completed.has(link.dataset.page)));
    const names = { evidencia: 'Evidencia global', colombia: 'Panorama colombiano', enfoque: 'Enfoque ExC', compromiso: 'Mi compromiso' };
    $('#progress-list').innerHTML = Object.entries(names).map(([key, name]) => `<li>${completed.has(key) ? icon('check') : '<span class="pending-mark" aria-hidden="true"></span>'}<span>${name} · ${completed.has(key) ? 'completado' : 'por completar'}</span></li>`).join('');
    $('#progress-description').textContent = completed.size === 4 ? 'Has conectado evidencia, contexto y acción. Tu próximo paso está en el aula.' : `Has completado ${completed.size} de 4 momentos. Las actividades te ayudan a conectar cada mirada.`;
  }
  function complete(page) {
    completed.add(page);
    try { localStorage.setItem(progressKey, JSON.stringify([...completed])); } catch { /* Avance disponible durante esta visita. */ }
    updateProgress();
  }
  function focusLearningTitle(selector) {
    const heading = $(selector);
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
    heading.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  function navigate(initial = false) {
    const requested = location.hash.slice(1);
    if (!initial && requested === 'contenido') { $('#contenido').focus(); return; }
    const page = pages.includes(requested) ? requested : 'inicio';
    $$('.page').forEach((section) => { section.hidden = section.id !== page; });
    $$('.journey-nav [data-page]').forEach((link) => {
      if (link.dataset.page === page) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    if (!initial) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      const heading = $(`#${page} h1`);
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
    const activeLink = $(`.journey-nav [data-page="${page}"]`);
    const nav = $('.nav-inner');
    nav.scrollTo({ left: Math.max(0, activeLink.offsetLeft - nav.offsetLeft - 20), behavior: 'instant' });
  }
  window.addEventListener('hashchange', () => navigate());

  const selConcepts = {
    identidad: { title: 'Desarrollar identidades saludables', idea: 'Reconocer quién soy, mis fortalezas y mis posibilidades de crecer ayuda a construir una identidad saludable.', example: 'En esta escena ilustrativa, cada estudiante puede aportar algo distinto. Una docente puede reconocer esos talentos sin reducir a nadie a una etiqueta.', question: '¿Qué mensaje abre posibilidades de crecimiento?', choices: ['«Tienes recursos para aprender; probemos otra estrategia».', '«Tú no eres bueno para esta materia».'], correct: 0, feedback: ['Reconocer recursos y posibilidades fortalece una identidad que puede aprender y crecer.', 'Una etiqueta fija puede cerrar posibilidades. Reconocer fortalezas y estrategias abre un camino de aprendizaje.'] },
    emociones: { title: 'Gestionar emociones', idea: 'Reconocer lo que sentimos y regular nuestra respuesta nos ayuda a cuidar el bienestar y sostener el aprendizaje.', example: 'Antes de retomar una tarea difícil, la docente puede modelar cómo reconocer la frustración, hacer una pausa y pedir apoyo.', question: '¿Qué acción permite aprender a gestionar la frustración?', choices: ['Pedir que nadie exprese lo que siente.', 'Nombrar la emoción y practicar una pausa para retomar.'], correct: 1, feedback: ['Ocultar una emoción no enseña a regularla. Podemos reconocerla y elegir cómo responder.', 'La emoción se reconoce y se acompaña con una estrategia concreta; no se elimina ni reemplaza la tarea académica.'] },
    metas: { title: 'Alcanzar metas individuales y colectivas', idea: 'El aprendizaje socioemocional apoya la definición de metas y la perseverancia para avanzar hacia ellas, de forma personal y con otros.', example: 'Un cuaderno compartido puede ser una oportunidad para acordar qué quieren comprender, cómo se apoyarán y qué harán si aparece una dificultad.', question: '¿Qué convierte una intención en una meta compartida?', choices: ['Acordar el logro y revisar cómo avanzar juntos.', 'Esperar a que alguien termine la tarea por el grupo.'], correct: 0, feedback: ['Una meta explícita permite coordinar el esfuerzo y revisar los avances del grupo.', 'Delegar todo en alguien no construye una meta compartida ni oportunidades de perseverar.'] },
    empatia: { title: 'Sentir y mostrar empatía', idea: 'Comprender la perspectiva de otra persona y mostrar interés por lo que siente favorece una convivencia respetuosa.', example: 'Escuchar sin interrumpir y preguntar qué necesita un compañero son maneras de hacer visible la empatía en una conversación de aula.', question: '¿Qué respuesta muestra interés por la perspectiva del otro?', choices: ['«No es para tanto; deja de sentirte así».', '«Quiero entender lo que pasó para ti. Te escucho».'], correct: 1, feedback: ['Restar importancia a lo que alguien siente limita la comprensión de su perspectiva.', 'La invitación a escuchar reconoce la experiencia del otro sin suponer que ya sabemos lo que siente.'] },
    vinculos: { title: 'Establecer relaciones de apoyo', idea: 'Aprender a comunicar, escuchar, ofrecer ayuda y buscarla permite construir relaciones que sostienen el aprendizaje.', example: 'En un grupo, preguntar, compartir una estrategia y pedir ayuda sin temor a la burla favorece vínculos de confianza.', question: '¿Qué acuerdo favorece una relación de apoyo?', choices: ['Podemos pedir ayuda y explicar sin burlarnos.', 'Solo participa quien ya conoce la respuesta.'], correct: 0, feedback: ['El acuerdo permite aprender con otros y reconoce que necesitar apoyo es parte del proceso.', 'Excluir a quien todavía no sabe limita su participación y las oportunidades de apoyo mutuo.'] },
    decisiones: { title: 'Tomar decisiones responsables', idea: 'Considerar consecuencias, principios y bienestar personal y colectivo permite elegir de manera consciente.', example: 'Antes de compartir un trabajo o una imagen del grupo, podemos preguntar quién puede verse afectado y qué permisos necesitamos.', question: '¿Qué pregunta ayuda a tomar una decisión responsable?', choices: ['¿Qué me conviene sin pensar en nadie más?', '¿Qué consecuencias puede tener para mí y para los demás?'], correct: 1, feedback: ['Considerar solo el beneficio propio deja por fuera el bienestar colectivo.', 'Evaluar consecuencias amplía la mirada y conecta la decisión con el cuidado de otras personas.'] }
  };
  const exploredSEL = new Set(['identidad']);
  const selAnswers = new Map();
  let selectedSEL = 'identidad';
  function microFeedback(buttons, answer, correct, output, text) {
    buttons.forEach((button, index) => button.setAttribute('aria-pressed', String(index === answer)));
    output.hidden = false;
    output.classList.toggle('retry', answer !== correct);
    output.textContent = `${answer === correct ? 'Conexión lograda. ' : 'Vuelve a observar. '}${text}`;
  }
  function checkEvidenceComplete() { if (exploredBenefits.size === 4 && exploredSEL.size === 6 && evidenceSolved) complete('evidencia'); }
  function showSEL(key) {
    selectedSEL = key;
    exploredSEL.add(key);
    const concept = selConcepts[key];
    $$('[data-sel]').forEach((button) => { button.setAttribute('aria-pressed', String(button.dataset.sel === key)); button.classList.toggle('is-explored', exploredSEL.has(button.dataset.sel)); });
    $('#sel-discovered').textContent = `${exploredSEL.size} de 6 ideas exploradas`;
    $('#sel-detail').innerHTML = `<h3>${concept.title}</h3><p>${concept.idea}</p><div class="concept-example"><strong>Observa una posibilidad en el aula</strong>${concept.example}</div><div class="discovery-question">${concept.question}</div><div class="micro-choices" id="sel-micro-options" role="group" aria-label="Poner a prueba esta idea">${concept.choices.map((text, i) => `<button data-micro="${i}" aria-pressed="false">${text}</button>`).join('')}</div><p class="micro-feedback" id="sel-micro-feedback" role="status" hidden></p><button class="text-link" id="next-sel">Explorar otra idea${icon('arrow')}</button>`;
    const buttons = $$('#sel-micro-options button');
    const respond = (answer) => microFeedback(buttons, answer, concept.correct, $('#sel-micro-feedback'), concept.feedback[answer]);
    buttons.forEach((button, i) => button.addEventListener('click', () => { selAnswers.set(key, i); respond(i); }));
    if (selAnswers.has(key)) respond(selAnswers.get(key));
    $('#next-sel').addEventListener('click', () => {
      const keys = Object.keys(selConcepts);
      const next = keys.find((item) => !exploredSEL.has(item)) || keys[(keys.indexOf(selectedSEL) + 1) % keys.length];
      showSEL(next);
      focusLearningTitle('#sel-detail h3');
    });
    checkEvidenceComplete();
  }
  $$('[data-sel]').forEach((button) => button.addEventListener('click', () => showSEL(button.dataset.sel)));

  const benefits = {
    academico: { title: 'Más condiciones para aprender', text: 'La investigación sintetizada por CASEL relaciona el desarrollo socioemocional con mejores logros escolares en lectura, matemáticas y pruebas estandarizadas.', example: 'En una lectura compartida, reconocer la frustración y pedir ayuda permite retomar una tarea exigente. La habilidad socioemocional sostiene el esfuerzo académico.' },
    permanencia: { title: 'Pertenecer también es aprender', text: 'Las habilidades socioemocionales favorecen un mayor sentido de pertenencia y apoyan la asistencia y la permanencia escolar.', example: 'Un grupo que escucha y valora las voces de sus integrantes ayuda a que cada estudiante se sienta parte de la comunidad y quiera participar.' },
    futuro: { title: 'Habilidades que viajan con nosotros', text: 'El desarrollo de competencias socioemocionales en la niñez y la juventud se asocia con mejores oportunidades de empleo, estabilidad financiera y salud integral en la adultez.', example: 'Organizar un proyecto, perseverar ante una dificultad y evaluar consecuencias son aprendizajes útiles en la escuela, el trabajo y la vida cotidiana.' },
    bienestar: { title: 'Un entorno seguro abre posibilidades', text: 'El aprendizaje socioemocional puede reducir el estrés y las dinámicas reactivas o disruptivas, y fortalecer los factores de protección de la comunidad educativa.', example: 'Aprender a expresar una inconformidad sin atacar y escuchar antes de reaccionar permite cuidar los vínculos y volver a concentrarse en el aprendizaje.' }
  };
  const exploredBenefits = new Set(['academico']);
  let evidenceSolved = false;
  function showBenefit(key) {
    const benefit = benefits[key];
    $$('.benefit-buttons button').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.benefit === key)));
    $('#benefit-detail').innerHTML = `<h3>${benefit.title}</h3><p>${benefit.text}</p><div class="example-label">${icon('book')}Una conexión con el aula</div><p class="example-text">${benefit.example}</p>`;
    exploredBenefits.add(key);
    checkEvidenceComplete();
  }
  $$('.benefit-buttons button').forEach((button) => button.addEventListener('click', () => showBenefit(button.dataset.benefit)));
  function questionFeedback(container, output, answer, correct, explanations, success) {
    const buttons = $$(`${container} button`);
    buttons.forEach((button) => {
      button.classList.remove('correct', 'incorrect');
      button.setAttribute('aria-pressed', String(Number(button.dataset.answer) === answer));
    });
    buttons[answer].classList.add(answer === correct ? 'correct' : 'incorrect');
    const feedback = $(output);
    feedback.hidden = false;
    feedback.classList.toggle('retry', answer !== correct);
    feedback.innerHTML = `<strong>${answer === correct ? '¡Conexión lograda!' : 'Mira la idea desde otra perspectiva.'}</strong>${explanations[answer]}`;
    if (answer === correct) success();
  }
  $$('#evidence-options button').forEach((button) => button.addEventListener('click', () => {
    questionFeedback('#evidence-options', '#evidence-feedback', Number(button.dataset.answer), 1, [
      'El desarrollo socioemocional no reemplaza lectura, matemáticas ni otras áreas. Se integra con ellas para favorecer aprendizajes de rigor. Intenta otra respuesta.',
      'Las HSE apoyan la regulación, la perseverancia y los vínculos que permiten sostener el aprendizaje. Lo académico y lo socioemocional se potencian. Explora los seis puntos de la escena y los cuatro beneficios para completar esta mirada.',
      'La convivencia es uno de sus aportes, pero la evidencia también destaca aprendizaje académico, pertenencia, bienestar y preparación para la vida. Intenta otra respuesta.'
    ], () => { evidenceSolved = true; checkEvidenceComplete(); });
  }));

  const exploredLaws = new Set();
  let lawSolved = false;
  $$('.law-list details').forEach((detail, index) => detail.addEventListener('toggle', () => {
    if (detail.open) exploredLaws.add(index);
    checkColombiaComplete();
  }));
  const rings = {
    yo: { title: 'Yo conmigo mismo', text: 'Reconocer mis emociones, fortalezas y necesidades para actuar con conciencia.', example: 'Una pausa para reconocer mi frustración me permite elegir cómo responder antes de continuar una actividad.', question: '¿Qué acción comienza por el reconocimiento personal?', choices: ['Identificar lo que siento antes de reaccionar.', 'Proponer una campaña de cuidado del entorno.', 'Construir un acuerdo con el grupo.'], correct: 0, feedback: ['La atención está en mi experiencia y en cómo puedo regular mi respuesta.', 'La campaña amplía la mirada al entorno. Aquí buscamos reconocer primero la propia experiencia.', 'Un acuerdo ya implica a otras personas. El primer círculo invita a mirar mis emociones y necesidades.'] },
    otros: { title: 'Yo con los otros', text: 'Escuchar, mostrar empatía y construir relaciones respetuosas con quienes me rodean.', example: 'Esa misma pausa me prepara para escuchar a un compañero y expresar lo que necesito sin agredirlo.', question: '¿Qué acción hace crecer la relación interpersonal?', choices: ['Guardar silencio sin escuchar a la otra persona.', 'Escuchar su perspectiva y expresar mi necesidad.', 'Pensar únicamente en cómo me siento yo.'], correct: 1, feedback: ['No reaccionar puede ayudar, pero escuchar y comunicar son necesarios para construir la relación.', 'La acción conecta escucha y expresión respetuosa: pasamos del reconocimiento personal al vínculo.', 'El reconocimiento personal importa; la relación con otros añade su perspectiva y la comunicación.'] },
    sociedad: { title: 'Yo con la sociedad', text: 'Participar, construir acuerdos y considerar el bienestar de la comunidad.', example: 'Cuando el grupo construye acuerdos de convivencia, el cuidado de los vínculos se convierte en participación y corresponsabilidad.', question: '¿Qué acción tiene en cuenta el bienestar comunitario?', choices: ['Resolver todo sin consultar a la comunidad.', 'Centrarme solo en mi resultado individual.', 'Participar en acuerdos que cuiden a toda la comunidad.'], correct: 2, feedback: ['Participar implica reconocer otras voces, no sustituirlas en las decisiones comunes.', 'El resultado personal no contempla por sí solo las necesidades de la comunidad.', 'Los acuerdos compartidos vinculan participación y bienestar comunitario.'] },
    mundo: { title: 'Yo con el mundo', text: 'Reconocer nuestra interdependencia y actuar con responsabilidad frente a la vida y al entorno.', example: 'Un proyecto comunitario de cuidado del agua permite reconocer cómo nuestras acciones locales se conectan con la vida y el entorno.', question: '¿Qué acción amplía la mirada hacia la interdependencia?', choices: ['Relacionar el consumo de agua con el cuidado de la vida.', 'Ignorar el impacto de nuestras acciones en el entorno.', 'Pensar que el cuidado termina en la puerta del aula.'], correct: 0, feedback: ['La acción conecta nuestras decisiones con sistemas de vida que compartimos.', 'Reconocer la interdependencia implica considerar impactos, no dejarlos fuera de nuestra mirada.', 'La relación con el mundo amplía el cuidado más allá del aula y la comunidad inmediata.'] }
  };
  const exploredRings = new Set(['yo']);
  const ringAnswers = new Map();
  let selectedRing = 'yo';
  function checkColombiaComplete() { if (exploredLaws.size === 4 && exploredRings.size === 4 && lawSolved) complete('colombia'); }
  function showRing(key) {
    selectedRing = key;
    exploredRings.add(key);
    const ring = rings[key];
    $$('[data-ring]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.ring === key)));
    $('#ring-discovered').textContent = `${exploredRings.size} de 4 relaciones exploradas`;
    $('#ring-detail').innerHTML = `<h3>${ring.title}</h3><p>${ring.text}</p><div class="scope-example"><strong>Una acción que amplía su alcance</strong>${ring.example}</div><div class="world-question">${ring.question}</div><div class="micro-choices" id="ring-micro-options" role="group" aria-label="Conectar esta relación con una acción">${ring.choices.map((text, i) => `<button data-micro="${i}" aria-pressed="false">${text}</button>`).join('')}</div><p class="micro-feedback" id="ring-micro-feedback" role="status" hidden></p><p class="world-principle">Los círculos se complementan: lo personal y lo colectivo se construyen juntos.</p>`;
    const buttons = $$('#ring-micro-options button');
    const respond = (answer) => microFeedback(buttons, answer, ring.correct, $('#ring-micro-feedback'), ring.feedback[answer]);
    buttons.forEach((button, i) => button.addEventListener('click', () => { ringAnswers.set(key, i); respond(i); }));
    if (ringAnswers.has(key)) respond(ringAnswers.get(key));
    checkColombiaComplete();
  }
  $$('[data-ring]').forEach((button) => button.addEventListener('click', () => showRing(button.dataset.ring)));
  $('#expand-ring').addEventListener('click', () => { const keys = Object.keys(rings); const next = keys[(keys.indexOf(selectedRing) + 1) % keys.length]; showRing(next); $(`[data-ring="${next}"]`).focus({ preventScroll: true }); });
  $$('#law-options button').forEach((button) => button.addEventListener('click', () => {
    questionFeedback('#law-options', '#law-feedback', Number(button.dataset.answer), 1, [
      'La Ley 1620 de 2013 crea el Sistema Nacional de Convivencia Escolar. En esta panorámica, la integración de competencias socioemocionales en el PEI se vincula con otra norma. Vuelve a explorar.',
      'La Ley 2491 de 2025 se relaciona con la integración del componente socioemocional en el PEI, con enfoque territorial y diferencial. Abre las cuatro normas y explora las cuatro relaciones del modelo para completar esta mirada.',
      'La Ley 2503 de 2025 se relaciona con la Cátedra de Educación Emocional. La pregunta se refiere específicamente al PEI. Vuelve a explorar.'
    ], () => { lawSolved = true; checkColombiaComplete(); });
  }));

  const skills = {
    self: { title: 'Liderazgo en sí mismo', components: ['Autoconocimiento', 'Autoeficacia', 'Motivación', 'Autocontrol', 'Perseverancia'], purpose: 'Reconocerse como agente de cambio y autorregularse para disponer el aula hacia un aprendizaje seguro y efectivo.', example: 'Ante una tarea difícil, el docente modela cómo reconocer la frustración, hacer una pausa y ensayar otra estrategia sin abandonar la meta.' },
    decisions: { title: 'Toma de decisiones responsables', components: ['Bienestar colectivo', 'Integridad', 'Proyecto de vida'], purpose: 'Evaluar las consecuencias éticas de las acciones cotidianas y construir un proyecto de futuro consciente.', example: 'Antes de elegir una solución, el grupo analiza a quién beneficia, a quién afecta y si es coherente con los acuerdos de la comunidad.' },
    relationships: { title: 'Habilidades para relacionarse', components: ['Empatía', 'Comunicación asertiva', 'Resolución de conflictos'], purpose: 'Establecer vínculos respetuosos, escuchar activamente y transformar las diferencias mediante el diálogo.', example: 'Durante una discusión, cada estudiante explica lo que necesita y escucha la perspectiva de su compañero antes de proponer un acuerdo.' },
    team: { title: 'Trabajo con otros con propósito', components: ['Colaboración', 'Propósito', 'Respeto por la diferencia'], purpose: 'Unir talentos e identidades diversas hacia metas compartidas de transformación académica y comunitaria.', example: 'Un equipo acuerda una meta, distribuye responsabilidades según sus fortalezas y revisa cómo cada aporte contribuye al resultado compartido.' }
  };
  const exploredSkills = new Set(['self']);
  const solvedCases = new Set();
  function checkSkillsComplete() { if (exploredSkills.size === 4 && solvedCases.size === 4) complete('enfoque'); }
  function showSkill(key) {
    const skill = skills[key];
    $$('.skill-node').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.skill === key)));
    $('#skill-detail').innerHTML = `<h3>${skill.title}</h3><div class="skill-components">${skill.components.map((component) => `<span>${component}</span>`).join('')}</div><p>${skill.purpose}</p><div class="example-label">${icon('book')}Así puede verse en el aula</div><p>${skill.example}</p>`;
    exploredSkills.add(key);
    checkSkillsComplete();
  }
  $$('.skill-node').forEach((button) => button.addEventListener('click', () => showSkill(button.dataset.skill)));
  const cases = [
    { name: 'Volver a intentarlo', title: 'Cuando una tarea se vuelve difícil', text: 'Después de equivocarse al resolver un problema, un estudiante reconoce su frustración, confía en que puede mejorar y vuelve a intentarlo con otra estrategia.', dialogue: 'Me frustré, pero puedo hacer una pausa y probar otra forma de resolverlo.', hint: 'Observa tres pistas: reconocer la emoción, confiar en la propia capacidad y perseverar.', image: 'aula-aprendizaje', answer: 0, explanation: 'Reconocer la emoción, confiar en la propia capacidad y perseverar son componentes del liderazgo en sí mismo.', distinctions: ['', 'La situación no se centra en evaluar consecuencias para otros, sino en regularse y perseverar ante un desafío personal.', 'Los vínculos pueden dar apoyo, pero aquí la acción central es reconocer la propia emoción y volver a intentarlo.', 'No hay una meta de equipo en el centro de esta escena: el estudiante moviliza recursos personales para aprender.'], actions: ['Modelar una pausa, reconocer la emoción y ensayar otra estrategia.', 'Decir «esfuérzate más» sin explorar qué necesita.', 'Resolver el problema por el estudiante para que no se frustre.'], actionAnswer: 0, outcomes: ['La intervención ofrece una estrategia concreta de autorregulación y conserva el desafío académico. Así el estudiante puede ejercer su propia capacidad de aprender.', 'La exigencia por sí sola no muestra cómo regular la frustración ni cómo cambiar de estrategia. ¿Qué apoyo concreto permitiría retomar?', 'Quitar la dificultad puede terminar la tarea, pero reduce la oportunidad de practicar autorregulación y perseverancia. ¿Cómo acompañar sin sustituir?'] },
    { name: 'Cuidar una decisión', title: 'Antes de compartir una imagen', text: 'Antes de compartir una fotografía del grupo, una estudiante considera el consentimiento de sus compañeros y las posibles consecuencias de publicarla.', dialogue: '¿Todos están de acuerdo? ¿Qué puede pasar si la compartimos?', hint: 'El foco está en las consecuencias, el consentimiento y el bienestar de las personas involucradas.', image: 'aula-aprendizaje', answer: 1, explanation: 'Evaluar consecuencias y actuar con integridad para cuidar el bienestar colectivo conecta con la toma de decisiones responsables.', distinctions: ['La autorregulación puede apoyar la decisión, pero el centro es evaluar sus consecuencias éticas para otras personas.', '', 'La empatía está presente, pero la escena destaca la elección responsable de publicar o no y sus consecuencias.', 'Compartir una foto no equivale a coordinar talentos y responsabilidades hacia una meta de transformación.'], actions: ['Publicarla porque la intención es positiva.', 'Solicitar consentimiento y acordar alternativas para quien no quiera aparecer.', 'Dejar que la mayoría decida por quienes no quieren aparecer.'], actionAnswer: 1, outcomes: ['Una intención positiva no reemplaza la consideración de consecuencias ni el consentimiento. ¿Cómo incluir a quienes pueden verse afectados?', 'La intervención reconoce el bienestar y la autonomía de las personas, y permite construir una alternativa respetuosa.', 'La preferencia mayoritaria no elimina las necesidades de quienes no consienten. ¿Qué alternativa puede respetar a cada persona?'] },
    { name: 'Escuchar y acordar', title: 'Dos perspectivas, una conversación', text: 'Dos estudiantes expresan su desacuerdo sin agredirse, escuchan lo que el otro necesita y construyen un acuerdo para continuar.', dialogue: 'Yo lo vi de otra manera. Quiero escucharte para encontrar un acuerdo.', hint: 'Observa cómo se expresan, cómo escuchan y cómo transforman la diferencia mediante el diálogo.', image: 'aula-aprendizaje', answer: 2, explanation: 'La empatía, la comunicación asertiva y la resolución de conflictos hacen parte de las habilidades para relacionarse.', distinctions: ['Regularse puede facilitar el diálogo, pero aquí se destaca la relación: escuchar perspectivas y construir un acuerdo.', 'Toda conversación implica decisiones, pero el foco de esta escena es la comunicación y la transformación del desacuerdo.', '', 'Existe una interacción entre personas, pero el énfasis no está en un proyecto con roles y propósito compartido, sino en el vínculo.'], actions: ['Elegir por ellos quién tiene la razón antes de escucharlos.', 'Pedir que olviden el desacuerdo sin conversar.', 'Facilitar la escucha de ambas perspectivas y un acuerdo que puedan sostener.'], actionAnswer: 2, outcomes: ['Decidir antes de escuchar limita la oportunidad de practicar empatía y comunicación. ¿Cómo abrir espacio a ambas perspectivas?', 'Cerrar el tema no desarrolla por sí solo las habilidades para transformar la diferencia. ¿Qué conversación necesitan?', 'La intervención permite practicar escucha, expresión asertiva y construcción de acuerdos sin reemplazar las voces de los estudiantes.'] },
    { name: 'Construir juntos', title: 'Un proyecto con propósito compartido', text: 'Un grupo organiza un proyecto para mejorar su entorno: acuerda una meta común, reconoce sus talentos y comparte responsabilidades.', dialogue: '¿Qué queremos transformar y cómo puede contribuir cada persona?', hint: 'Trabajar al mismo tiempo no basta: busca una meta común, contribuciones diversas y corresponsabilidad.', image: 'liderazgo-colectivo', answer: 3, explanation: 'La colaboración orientada por un propósito y el respeto por aportes diversos caracterizan el trabajo con otros con propósito.', distinctions: ['Reconocer fortalezas personales contribuye, pero la escena las articula hacia una meta compartida con otras personas.', 'Evaluar consecuencias es importante; aquí la acción central es coordinar talentos y responsabilidades para transformar el entorno.', 'Los vínculos respetuosos sostienen el trabajo, pero la situación destaca un propósito colectivo y la colaboración organizada.', ''], actions: ['Acordar una meta, distribuir roles y revisar cómo se conectan los aportes.', 'Dividir tareas sin conversar sobre el propósito del proyecto.', 'Dejar todo el proyecto a quien termina más rápido.'], actionAnswer: 0, outcomes: ['La intervención hace explícitos el propósito, los roles y la contribución de cada talento al resultado común. Colaborar se convierte en una práctica intencional.', 'Repartir tareas organiza el trabajo, pero sin propósito ni conexión entre aportes puede reducirse a esfuerzos paralelos. ¿Cómo construir una visión común?', 'Concentrar el trabajo en una persona limita los aportes diversos y la corresponsabilidad. ¿Cómo abrir oportunidades reales de contribuir?'] }
  ];
  let caseIndex = 0;
  let caseStage = 'skill';
  function updateCaseNavigation() {
    if (!$('#case-navigation').children.length) {
      $('#case-navigation').innerHTML = cases.map((item, i) => `<button data-case="${i}" aria-pressed="false"></button>`).join('');
      $$('#case-navigation button').forEach((button, i) => button.addEventListener('click', () => { caseIndex = i; caseStage = 'skill'; showCase(); }));
    }
    $$('#case-navigation button').forEach((button, i) => {
      button.setAttribute('aria-pressed', String(i === caseIndex));
      button.classList.toggle('is-solved', solvedCases.has(i));
      button.innerHTML = `${icon(solvedCases.has(i) ? 'check' : ['compass', 'map', 'people', 'book'][i])}<span>${cases[i].name}${solvedCases.has(i) ? '<span class="sr-only">, conectada</span>' : ''}</span>`;
    });
    $('#simulator-progress').textContent = `${solvedCases.size} de 4 situaciones conectadas`;
  }
  function showCase() {
    const current = cases[caseIndex];
    $('#case-title').textContent = current.title;
    $('#case-announcement').textContent = `Situación ${caseIndex + 1} de 4: ${current.title}. ${caseStage === 'skill' ? 'Reconoce la habilidad en la escena.' : 'Elige una intervención para ponerla en práctica.'}`;
    $('#case-question').textContent = current.text;
    $('#case-dialogue').textContent = current.dialogue;
    $('#case-scene-image').src = `assets/${current.image}.webp`;
    $('#case-scene-image').alt = current.image === 'liderazgo-colectivo' ? 'Escena ilustrativa de estudiantes colaborando en un proyecto comunitario.' : 'Escena ilustrativa de aprendizaje compartido entre una docente y sus estudiantes.';
    $('#case-hint-toggle').setAttribute('aria-expanded', 'false');
    $('#case-hint').hidden = true;
    $('#case-hint').textContent = current.hint;
    $('#case-position').innerHTML = `<span class="${caseStage === 'skill' ? 'stage-active' : ''}"><span class="stage-marker">1</span>Reconoce</span>${icon('arrow')}<span class="${caseStage === 'action' ? 'stage-active' : ''}"><span class="stage-marker">2</span>Pon en práctica</span>`;
    $('#case-task').textContent = caseStage === 'skill' ? '¿Qué HSE está en el centro de esta escena?' : '¿Qué intervención pondrías en práctica?';
    $('#case-skill-reference').hidden = caseStage !== 'action';
    $('#case-skill-reference').textContent = `Ahora pon en práctica: ${Object.values(skills)[current.answer].title}.`;
    const options = caseStage === 'skill' ? Object.values(skills).map((skill) => skill.title) : current.actions;
    $('#case-options').innerHTML = options.map((text, index) => `<button type="button" data-answer="${index}" aria-pressed="false"><span class="option-symbol" aria-hidden="true">${caseStage === 'skill' ? icon(['compass', 'map', 'people', 'book'][index]) : ['A', 'B', 'C'][index]}</span><span>${text}</span></button>`).join('');
    $('#case-feedback').hidden = true;
    $('#apply-case').hidden = true;
    $('#next-case').hidden = true;
    $('#restart-cases').hidden = true;
    updateCaseNavigation();
    $$('#case-options button').forEach((button) => button.addEventListener('click', () => {
      const answer = Number(button.dataset.answer);
      $('#apply-case').hidden = true;
      $('#next-case').hidden = true;
      $('#restart-cases').hidden = true;
      const correct = caseStage === 'skill' ? current.answer : current.actionAnswer;
      const explanations = caseStage === 'skill' ? current.distinctions.map((text, index) => index === current.answer ? current.explanation : text) : current.outcomes;
      questionFeedback('#case-options', '#case-feedback', answer, correct, explanations, () => {
        if (caseStage === 'skill') $('#apply-case').hidden = false;
        else {
          solvedCases.add(caseIndex);
          checkSkillsComplete();
          updateCaseNavigation();
          $('#next-case').hidden = solvedCases.size === cases.length;
          $('#restart-cases').hidden = solvedCases.size !== cases.length;
          $('#case-feedback').innerHTML += `<p class="feedback-outcome">${solvedCases.size === cases.length ? 'Has conectado las cuatro HSE con intervenciones concretas. En el aula, estas habilidades se complementan.' : 'Ya conectaste la habilidad con una intervención. Puedes explorar otra situación o comparar las demás alternativas.'}</p>`;
        }
      });
    }));
  }
  $('#case-hint-toggle').addEventListener('click', () => { const open = $('#case-hint-toggle').getAttribute('aria-expanded') !== 'true'; $('#case-hint-toggle').setAttribute('aria-expanded', String(open)); $('#case-hint').hidden = !open; });
  $('#apply-case').addEventListener('click', () => { caseStage = 'action'; showCase(); focusLearningTitle('#case-task'); });
  $('#next-case').addEventListener('click', () => { caseIndex = cases.findIndex((item, i) => !solvedCases.has(i)); if (caseIndex < 0) caseIndex = 0; caseStage = 'skill'; showCase(); focusLearningTitle('#case-title'); });
  $('#restart-cases').addEventListener('click', () => { solvedCases.clear(); caseIndex = 0; caseStage = 'skill'; showCase(); focusLearningTitle('#case-title'); });

  const resources = {
    comprender: { title: 'Una base para comprender el SEL', description: 'Explora el marco de CASEL: su definición, sus áreas de competencia y los entornos donde se aprende. Conecta lo que lees con los propósitos que descubriste en la escena de aula.', task: 'Mientras exploras, identifica una competencia que ya promueves y otra que quieres trabajar de manera más intencional.', primary: 'Abrir el marco de CASEL', url: 'https://casel.org/fundamentals-of-sel/what-is-the-casel-framework/', external: true, relatedTitle: '¿Qué aporta la investigación?', relatedText: 'Consulta la síntesis de CASEL sobre los efectos del aprendizaje socioemocional. Busca cómo se conecta con el aprendizaje, el bienestar y la participación.', relatedLabel: 'Explorar la investigación', relatedURL: 'https://casel.org/fundamentals-of-sel/what-does-the-research-say/', relatedExternal: true },
    practica: { title: 'Lleva la brújula a tu próxima clase', description: 'La síntesis de tres páginas reúne los fundamentos, la panorámica colombiana y las cuatro HSE priorizadas. Puedes descargarla y usarla como referencia para planear.', task: 'Elige un contenido académico y una acción socioemocional que ayude a aprenderlo. Decide mentalmente en qué momento de la clase la integrarás.', primary: 'Descargar la síntesis PDF', url: 'sintesis-hse.pdf', download: true, relatedTitle: 'Haz explícita tu intención', relatedText: 'Construye un compromiso que conecte convicción, acción y propósito. Puedes volver a elegir y guardar una copia personal.', relatedLabel: 'Ir a mi compromiso', relatedURL: '#compromiso', relatedExternal: false },
    referentes: { title: 'Contextualiza tu práctica en Colombia', description: 'Consulta los recursos del Ministerio de Educación Nacional y profundiza en la relación entre formación integral, ciudadanía, convivencia y desarrollo socioemocional.', task: 'Busca un referente que dialogue con las necesidades y fortalezas de tu comunidad, y compáralo con la panorámica de este recurso.', primary: 'Consultar el MEN', url: 'https://www.mineducacion.gov.co/', external: true, relatedTitle: 'Vuelve a la arquitectura normativa', relatedText: 'Revisa el aporte de cada norma y su conexión con el aula. En cada desplegable puedes abrir el texto legal oficial para ampliar la consulta.', relatedLabel: 'Explorar las normas', relatedURL: '#colombia', relatedExternal: false }
  };
  function showResources(key) {
    const resource = resources[key];
    $$('[data-resource]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.resource === key)));
    $('#resource-panel').innerHTML = `<div class="resource-content"><div class="resource-feature"><h3>${resource.title}</h3><p>${resource.description}</p><div class="resource-task">${icon('compass')}<span><strong>Una acción para orientar tu exploración:</strong> ${resource.task}</span></div><a class="button primary" href="${resource.url}" ${resource.external ? 'target="_blank" rel="noopener noreferrer"' : ''} ${resource.download ? 'download' : ''}>${icon(resource.download ? 'download' : 'arrow')}${resource.primary}${resource.external ? '<span class="sr-only"> (abre otra pestaña)</span>' : ''}</a></div><div class="resource-related"><h4>${resource.relatedTitle}</h4><p>${resource.relatedText}</p><a href="${resource.relatedURL}" ${resource.relatedExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>${resource.relatedLabel}${icon('arrow')}${resource.relatedExternal ? '<span class="sr-only"> (abre otra pestaña)</span>' : ''}</a></div></div>`;
  }
  $$('[data-resource]').forEach((button) => button.addEventListener('click', () => showResources(button.dataset.resource)));
  $('.resource-library').addEventListener('toggle', () => { $('.library-open-label').textContent = $('.resource-library').open ? 'Cerrar biblioteca' : 'Abrir biblioteca'; });

  const choices = {
    belief: [
      { label: 'El desarrollo socioemocional potencia el aprendizaje académico.', sentence: 'Creo que el desarrollo socioemocional potencia el aprendizaje académico' },
      { label: 'El bienestar y la pertenencia sostienen la participación.', sentence: 'Creo que el bienestar y la pertenencia sostienen la participación y el aprendizaje' },
      { label: 'Cada estudiante puede contribuir al liderazgo colectivo.', sentence: 'Creo que cada estudiante puede contribuir al liderazgo colectivo de su comunidad' }
    ],
    action: [
      { label: 'Modelar la regulación emocional frente a los desafíos.', sentence: 'modelar la regulación emocional frente a los desafíos de aprendizaje', skill: 'Liderazgo en sí mismo' },
      { label: 'Abrir espacios de escucha y comunicación asertiva.', sentence: 'abrir espacios de escucha y comunicación asertiva dentro de las actividades de clase', skill: 'Habilidades para relacionarse' },
      { label: 'Diseñar tareas con metas comunes y responsabilidades compartidas.', sentence: 'diseñar tareas con metas comunes y responsabilidades compartidas', skill: 'Trabajo con otros con propósito' },
      { label: 'Analizar las consecuencias de nuestras decisiones.', sentence: 'analizar con mis estudiantes las consecuencias de nuestras decisiones', skill: 'Toma de decisiones responsables' }
    ],
    purpose: [
      { label: 'Sostener el esfuerzo y alcanzar aprendizajes de rigor.', sentence: 'sostener el esfuerzo y alcanzar aprendizajes de rigor' },
      { label: 'Construir un aula segura donde todas las voces cuenten.', sentence: 'construir un aula segura donde todas las voces cuenten' },
      { label: 'Movilizar talentos para transformar nuestra comunidad.', sentence: 'movilizar talentos para transformar nuestra comunidad' }
    ]
  };
  const selected = { belief: null, action: null, purpose: null };
  let manifesto = '';
  function updateManifesto() {
    const count = Object.values(selected).filter((value) => value !== null).length;
    $('#selection-count').textContent = `${count} de 3 elecciones`;
    $('#download-manifesto').disabled = count !== 3;
    $('#reset-manifesto').hidden = count === 0;
    $('#manifesto-feedback').hidden = count !== 3;
    if (count === 3) {
      manifesto = `${choices.belief[selected.belief].sentence}. Por eso, me comprometo a ${choices.action[selected.action].sentence}, para ${choices.purpose[selected.purpose].sentence}.\n\nIntegraré las habilidades socioemocionales como parte del aprendizaje, no como un contenido aislado. Reconozco en mis estudiantes y en mi comunidad la capacidad de aprender y liderar juntos.`;
      $('#manifesto-text').textContent = manifesto;
      $('#manifesto-feedback').textContent = `Tu acción pone en práctica «${choices.action[selected.action].skill}». Has conectado una convicción con una acción y un propósito. Para hacerla realidad, elige mentalmente en qué momento de tu próxima clase la pondrás en práctica.`;
      complete('compromiso');
    } else {
      $('#manifesto-text').textContent = count ? `Ya elegiste ${count === 1 ? 'una parte' : 'dos partes'} de tu compromiso. Completa ${count === 1 ? 'los otros dos grupos' : 'el grupo que falta'} para ver tu manifiesto.` : 'Tu compromiso toma forma aquí. Elige una opción en cada grupo para construirlo.';
      manifesto = '';
    }
  }
  Object.entries(choices).forEach(([group, options]) => {
    $(`#${group}-options`).innerHTML = options.map((option, index) => `<button type="button" data-choice="${index}" aria-pressed="false">${option.label}</button>`).join('');
    $$(`#${group}-options button`).forEach((button) => button.addEventListener('click', () => {
      selected[group] = Number(button.dataset.choice);
      $$(`#${group}-options button`).forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      updateManifesto();
    }));
  });
  $('#reset-manifesto').addEventListener('click', () => {
    Object.keys(selected).forEach((key) => { selected[key] = null; });
    $$('.selection-options button').forEach((button) => button.setAttribute('aria-pressed', 'false'));
    updateManifesto();
    $('#belief-options button').focus();
  });
  $('#download-manifesto').addEventListener('click', () => {
    if (!manifesto) return;
    const file = new Blob(['\ufeffMi Manifiesto de Liderazgo y Educación de Calidad\nLa brújula de las HSE · Enseña por Colombia\n\n', manifesto], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'mi-manifiesto-hse.txt';
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  $('#reset-progress').addEventListener('click', () => {
    completed.clear();
    try { localStorage.removeItem(progressKey); } catch { /* Almacenamiento opcional. */ }
    evidenceSolved = false;
    lawSolved = false;
    exploredBenefits.clear();
    exploredBenefits.add('academico');
    exploredSEL.clear();
    exploredSEL.add('identidad');
    selAnswers.clear();
    exploredLaws.clear();
    exploredRings.clear();
    exploredRings.add('yo');
    ringAnswers.clear();
    exploredSkills.clear();
    exploredSkills.add('self');
    solvedCases.clear();
    $$('.law-list details').forEach((detail) => { detail.open = false; });
    $$('#evidence-options button, #law-options button').forEach((button) => { button.classList.remove('correct', 'incorrect'); button.setAttribute('aria-pressed', 'false'); });
    $('#evidence-feedback').hidden = true;
    $('#law-feedback').hidden = true;
    caseIndex = 0;
    caseStage = 'skill';
    showCase();
    showSEL('identidad');
    showRing('yo');
    showBenefit('academico');
    showSkill('self');
    Object.keys(selected).forEach((key) => { selected[key] = null; });
    $$('.selection-options button').forEach((button) => button.setAttribute('aria-pressed', 'false'));
    updateManifesto();
    updateProgress();
    $('#reset-status').textContent = 'Tu avance se reinició. Puedes volver a recorrer las actividades.';
  });
  showBenefit('academico');
  showSEL('identidad');
  showRing('yo');
  showSkill('self');
  showCase();
  showResources('comprender');
  updateProgress();
  navigate(true);
})();
