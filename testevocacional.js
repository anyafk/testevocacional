function resultado() {
  var respostas = document.getElementsByClassName("resposta");
  var a = 0, b = 0, c = 0, d = 0, e = 0;

  for (var i = 0; i < respostas.length; i++) {
    if (respostas[i].checked) {
      var valor = respostas[i].value;
      if (valor === "a") a++;
      else if (valor === "b") b++;
      else if (valor === "c") c++;
      else if (valor === "d") d++;
      else if (valor === "e") e++;
    }
  }

  var maior = a;
  var resultado = "a";

  if (b > maior) {
    maior = b;
    resultado = "b";
  }
  if (c > maior) {
    maior = c;
    resultado = "c";
  }
  if (d > maior) {
    maior = d;
    resultado = "d";
  }
  if (e > maior) {
    maior = e;
    resultado = "e";
  }


if (resultado == "a") {
  document.getElementById("textoResultado").innerHTML = `
    <p><strong>Resultado: Perfil A – Área de Exatas e Tecnologia</strong></p>
    <p>Você tem um perfil lógico, analítico e curioso. Provavelmente gosta de entender como as coisas funcionam, resolver problemas complexos, lidar com números, cálculos e raciocínio matemático. Costuma preferir ambientes mais estruturados e silenciosos, e se sente motivado(a) quando consegue encontrar soluções eficientes para desafios técnicos.</p>
    <p>Seu interesse por dados, sistemas ou estruturas indica afinidade com profissões que envolvem planejamento, engenharia, computação ou ciências exatas. Essa área também costuma oferecer boas oportunidades de carreira, remuneração e estabilidade.</p>
    <p><strong>Exemplos de profissões:</strong> Engenheiro(a), Cientista de Dados, Programador(a), Analista de Sistemas, Economista, Físico(a), Estatístico(a), Matemático(a), Técnico(a) em Automação, Arquiteto(a) com foco técnico.</p>
  `;
} 
else if (resultado == "b") {
  document.getElementById("textoResultado").innerHTML = `
    <p><strong>Resultado: Perfil B – Área de Artes e Criatividade</strong></p>
    <p>Você tem um perfil criativo, imaginativo e expressivo. Provavelmente se sente mais motivado(a) em ambientes que incentivam a originalidade, a liberdade artística e a inovação. Valoriza a estética, gosta de experimentar novas ideias e costuma buscar formas únicas de se comunicar.</p>
    <p>Trabalhar com arte, design, moda, criação de conteúdo ou arquitetura pode ser uma forma de transformar sua criatividade em carreira. Essa área permite que você use sua sensibilidade para transformar ideias em projetos concretos, com forte identidade visual ou conceitual.</p>
    <p><strong>Exemplos de profissões:</strong> Designer, Artista Plástico(a), Publicitário(a), Arquiteto(a) com foco artístico, Ilustrador(a), Fotógrafo(a), Roteirista, Estilista, Produtor(a) cultural, Atores/Atrizes, Criador(a) de conteúdo digital.</p>
  `;
} 
else if (resultado == "c") {
  document.getElementById("textoResultado").innerHTML = `
    <p><strong>Resultado: Perfil C – Área de Humanas e Comunicação</strong></p>
    <p>Você é comunicativo, empático e social. Provavelmente gosta de estar com outras pessoas, trocar ideias, ensinar, ouvir e ajudar. Se sente confortável em ambientes com interação social, valoriza o diálogo e costuma ter boa habilidade com palavras e argumentação.</p>
    <p>Profissões ligadas à educação, psicologia, direito, jornalismo e áreas sociais combinam com quem deseja causar impacto na vida das pessoas por meio da palavra, do cuidado e da orientação. É comum que esse perfil também se destaque em liderança, mediação de conflitos e pensamento crítico.</p>
    <p><strong>Exemplos de profissões:</strong> Psicólogo(a), Professor(a), Jornalista, Advogado(a), Relações Públicas, Antropólogo(a), Sociólogo(a), Comunicador(a) Social, Pedagogo(a), Assistente Social, Historiador(a), Político(a).</p>
  `;
} 
else if (resultado == "d") {
  document.getElementById("textoResultado").innerHTML = `
    <p><strong>Resultado: Perfil D – Área Técnica e Prática</strong></p>
    <p>Você tem um perfil prático, objetivo e voltado para a ação. Provavelmente gosta de resolver problemas com as próprias mãos, montar, consertar, operar ou programar equipamentos e sistemas. Se sente motivado(a) em ambientes com tarefas concretas e metas claras, e prefere trabalhar executando atividades diretas ao invés de longas análises ou teorias.</p>
    <p>A área técnica envolve uma ampla gama de funções essenciais no mercado, especialmente em setores como tecnologia, indústria, construção e manutenção, com foco na aplicação prática do conhecimento.</p>
    <p><strong>Exemplos de profissões:</strong> Técnico(a) em Informática, Técnico(a) em Eletrônica ou Mecânica, Mecânico(a), Operador(a) de Máquinas, Técnico(a) em Redes, Técnico(a) em Manutenção, Eletricista, Técnico(a) de Segurança do Trabalho, Profissional de Logística.</p>
  `;
} 
else if (resultado == "e") {
  document.getElementById("textoResultado").innerHTML = `
    <p><strong>Resultado: Perfil E – Área da Saúde, Natureza e Bem-estar</strong></p>
    <p>Você tem um perfil cuidadoso, empático e sensível às necessidades dos outros. Provavelmente sente prazer em cuidar, ouvir, orientar e ajudar pessoas ou animais. Também pode ter interesse pela natureza, meio ambiente e sustentabilidade.</p>
    <p>Se sente mais motivado(a) quando percebe que seu trabalho tem um impacto positivo na vida de alguém ou na sociedade como um todo. Essa área exige responsabilidade, paciência e vocação para lidar com diferentes públicos, oferecendo acolhimento, prevenção ou cura.</p>
    <p><strong>Exemplos de profissões:</strong> Médico(a), Enfermeiro(a), Psicólogo(a), Veterinário(a), Biólogo(a), Nutricionista, Fisioterapeuta, Terapeuta Ocupacional, Farmacêutico(a), Zootecnista, Técnico(a) em Meio Ambiente, Educador(a) Ambiental.</p>
  `;
}
}