(function () {
  const TOTAL = 8; // perguntas por rodada
  const LETRAS = ["A", "B", "C", "D"];

  // Formato: [pergunta, CERTA, errada1, errada2, errada3, explicação]
  // A certa vem sempre primeiro aqui; as opções são embaralhadas na tela.
  const B = [
    // ---- Palmares e resistência ----
    ["Em que ano Zumbi foi morto, data lembrada em 20 de novembro?", "1695", "1694", "1678", "1710", "Zumbi foi morto em 20 de novembro de 1695. Em 1694 caiu o Mocambo do Macaco, a capital de Palmares."],
    ["Qual líder de Palmares aceitou o acordo de paz de 1678 com a Coroa, enquanto Zumbi o rejeitou?", "Ganga Zumba", "Zumbi", "Domingos Jorge Velho", "Aqualtune", "Ganga Zumba aceitou o tratado; Zumbi recusou por não aceitar a escravidão de quem nasceu fora de Palmares."],
    ["Quem comandou a expedição bandeirante que destruiu Palmares?", "Domingos Jorge Velho", "Fernão Dias", "Borba Gato", "Bartolomeu Bueno", "O paulista Domingos Jorge Velho foi contratado para atacar Palmares."],
    ["Quem foi Dandara dos Palmares?", "Guerreira ligada a Zumbi e à resistência de Palmares", "Princesa que assinou a Lei Áurea", "Primeira romancista abolicionista", "Líder da Revolta dos Malês", "Dandara é lembrada como guerreira de Palmares e companheira de Zumbi."],
    ["Zumbi nasceu livre em Palmares, mas ainda bebê foi entregue a quem?", "Ao padre Antônio Melo, que o batizou como Francisco", "A Domingos Jorge Velho", "A Ganga Zumba", "Ao governador de Pernambuco", "Capturado ainda criança, Zumbi foi criado por um padre e depois voltou a Palmares."],
    ["Qual é a origem da palavra \"quilombo\"?", "Línguas bantu, ligada a acampamento ou povoação", "Tupi, ligada a floresta", "Iorubá, ligada a orixá", "Português arcaico, ligada a quilha de navio", "Quilombo vem de línguas bantu da África Central."],
    ["Em que serra ficava a maior parte de Palmares?", "Serra da Barriga", "Serra do Mar", "Serra da Mantiqueira", "Serra do Espinhaço", "A Serra da Barriga fica em União dos Palmares, em Alagoas."],
    ["Em que estado fica a comunidade quilombola Kalunga, uma das maiores do país?", "Goiás", "Maranhão", "Minas Gerais", "Mato Grosso", "O território Kalunga fica no norte de Goiás, na região da Chapada dos Veadeiros."],
    ["Quem liderou o Quilombo do Quariterê, no Mato Grosso, no século XVIII?", "Tereza de Benguela", "Esperança Garcia", "Chica da Silva", "Dandara", "Tereza de Benguela é lembrada em 25 de julho, Dia da Mulher Negra Latino-Americana e Caribenha."],
    ["Esperança Garcia, escravizada no Piauí, ficou famosa por quê?", "Escreveu em 1770 uma carta denunciando maus-tratos", "Liderou uma revolta armada em Salvador", "Fundou um terreiro", "Publicou um romance", "A carta de Esperança Garcia é considerada um dos primeiros documentos de petição de uma mulher escravizada no Brasil."],
    ["Chica da Silva viveu em qual arraial?", "Tijuco (atual Diamantina)", "Vila Rica", "Paraty", "Cachoeira", "Chica da Silva viveu no Arraial do Tijuco, na região diamantina de Minas Gerais."],
    // ---- Revoltas ----
    ["Em que cidade e ano ocorreu a Revolta dos Malês?", "Salvador, 1835", "Recife, 1824", "Rio de Janeiro, 1910", "São Luís, 1838", "A Revolta dos Malês, de africanos muçulmanos, aconteceu em Salvador em 1835."],
    ["A Revolta da Chibata, de 1910, teve como líder:", "João Cândido", "Zumbi", "Luiz Gama", "Cosme Bento", "João Cândido, o \"Almirante Negro\", liderou marinheiros contra os castigos físicos na Marinha."],
    ["A Conjuração Baiana, também chamada Revolta dos Alfaiates, ocorreu em:", "1798", "1835", "1888", "1710", "A conjuração de 1798 defendia o fim da escravidão e da desigualdade."],
    ["Quem foi Francisco José do Nascimento, o Dragão do Mar?", "Jangadeiro que ajudou a parar o embarque de escravizados no Ceará", "Líder de Palmares", "Poeta simbolista", "Fundador da Frente Negra", "O Ceará aboliu a escravidão em 1884, antes do resto do país."],
    ["Qual província abolira a escravidão em 1884, quatro anos antes da Lei Áurea?", "Ceará", "Bahia", "Pernambuco", "Rio Grande do Sul", "O Ceará declarou a abolição em 25 de março de 1884."],
    // ---- Leis ----
    ["Qual lei de 1885 libertou escravizados com mais de 60 anos?", "Lei dos Sexagenários", "Lei do Ventre Livre", "Lei Eusébio de Queirós", "Lei Áurea", "A Lei dos Sexagenários teve pouco efeito prático, pois poucos chegavam a essa idade."],
    ["A Lei do Ventre Livre foi aprovada em:", "1871", "1850", "1885", "1888", "A lei de 28 de setembro de 1871 declarou livres os filhos de escravizadas nascidos depois dela."],
    ["Na prática, a Lei do Ventre Livre permitia que a criança:", "Ficasse com o senhor até os 8 ou até os 21 anos", "Fosse libertada junto com a mãe", "Recebesse terras", "Fosse enviada à África", "O senhor podia receber indenização aos 8 anos ou usar o trabalho do menor até os 21."],
    ["A Lei Eusébio de Queirós, de 1850, foi aprovada principalmente sob pressão de qual país?", "Inglaterra", "França", "Portugal", "Estados Unidos", "A pressão inglesa contra o tráfico foi decisiva, e a lei proibiu o tráfico atlântico."],
    ["Qual lei de 1850 também dificultou o acesso dos libertos à terra?", "Lei de Terras", "Lei do Ventre Livre", "Lei Saraiva-Cotegipe", "Lei Rio Branco", "A Lei de Terras de 1850 passou a exigir compra para obter terras, o que excluía os ex-escravizados."],
    ["Qual lei de 1951 tornou contravenção penal a discriminação racial?", "Lei Afonso Arinos", "Lei Caó", "Lei Áurea", "Lei de Cotas", "A Lei Afonso Arinos foi a primeira a punir a discriminação racial, mas como contravenção."],
    ["Qual lei de 1989 definiu os crimes resultantes de preconceito de raça ou cor?", "Lei Caó (Lei 7.716)", "Lei Afonso Arinos", "Lei 10.639", "Lei 12.288", "A Lei Caó, de Carlos Alberto Caó, regulamentou a Constituição de 1988."],
    ["O que a Constituição de 1988 diz sobre o racismo?", "É crime inafiançável e imprescritível", "É contravenção penal", "É crime afiançável e prescreve em 20 anos", "É apenas infração administrativa", "Art. 5º, XLII. Também garante aos quilombolas a propriedade definitiva de suas terras (ADCT, art. 68)."],
    ["A Lei 10.639 foi sancionada em:", "2003", "1988", "2008", "2012", "A Lei 10.639/2003 tornou obrigatório o ensino de história e cultura afro-brasileira."],
    ["Qual lei de 2008 ampliou a 10.639 para incluir também a história e cultura indígena?", "Lei 11.645", "Lei 12.711", "Lei 12.990", "Lei 12.288", "A Lei 11.645/2008 incluiu a temática indígena."],
    ["Qual é o ano da Lei de Cotas nas universidades federais (Lei 12.711)?", "2012", "2003", "2010", "2014", "A Lei 12.711/2012 reserva vagas para escola pública, pretos, pardos, indígenas e pessoas com deficiência, com critérios de renda."],
    ["A Lei 12.990, de 2014, trata de:", "Reserva de 20% das vagas em concursos públicos federais", "Cotas em universidades", "Ensino de história africana", "Estatuto da Igualdade Racial", "A lei reserva 20% das vagas em concursos federais para pessoas negras."],
    ["Em 2012, o STF julgou as cotas raciais (ADPF 186) e decidiu que elas são:", "Constitucionais", "Inconstitucionais", "Válidas só por 5 anos", "Válidas só para escolas públicas", "O STF decidiu por unanimidade que as cotas são constitucionais."],
    ["O Estatuto da Igualdade Racial é de:", "2010", "1988", "2003", "2023", "A Lei 12.288/2010 instituiu o Estatuto da Igualdade Racial."],
    ["O feriado nacional de 20 de novembro foi criado pela:", "Lei 14.759, de 2023", "Lei 12.519, de 2011", "Lei 10.639, de 2003", "Constituição de 1988", "A Lei 12.519/2011 criou o Dia Nacional de Zumbi, mas só em 2023 virou feriado nacional."],
    ["O Brasil foi o último país das Américas a abolir a escravidão. Qual país o antecedeu, em 1886?", "Cuba", "Estados Unidos", "Haiti", "Colômbia", "Cuba aboliu em 1886 e o Brasil, em 1888."],
    ["Aproximadamente quantos africanos escravizados desembarcaram no Brasil?", "Cerca de 4,8 milhões", "Cerca de 1,2 milhão", "Cerca de 2,5 milhões", "Cerca de 7,5 milhões", "O Brasil recebeu a maior parte dos africanos trazidos às Américas."],
    ["Qual sítio carioca, Patrimônio Mundial da UNESCO desde 2017, foi grande porto de desembarque de africanos?", "Cais do Valongo", "Pedra do Sal", "Praça Onze", "Morro da Conceição", "O Cais do Valongo recebeu centenas de milhares de africanos escravizados."],
    ["Segundo o Censo 2022 do IBGE, qual a porcentagem de pessoas que se declararam pretas?", "10,2%", "7,6%", "45,3%", "55,5%", "No Censo 2022, 10,2% se declararam pretos, 45,3% pardos e 55,5% juntos."],
    // ---- Movimento negro e intelectuais ----
    ["A Frente Negra Brasileira foi fundada em:", "1931", "1944", "1978", "1888", "A Frente Negra, de 1931, foi uma das maiores organizações negras do país."],
    ["O Movimento Negro Unificado teve seu ato de lançamento em:", "1978, em São Paulo", "1944, no Rio de Janeiro", "1971, em Porto Alegre", "1988, em Brasília", "O ato foi em 7 de julho de 1978, nas escadarias do Theatro Municipal de São Paulo."],
    ["Quem fundou o Teatro Experimental do Negro, em 1944, e criou o conceito de quilombismo?", "Abdias Nascimento", "Oliveira Silveira", "Clóvis Moura", "Milton Santos", "Abdias Nascimento foi artista, ativista e senador."],
    ["Qual poeta gaúcho integrou o Grupo Palmares, que propôs o 20 de novembro em 1971?", "Oliveira Silveira", "Cruz e Sousa", "Solano Trindade", "Luiz Gama", "O Grupo Palmares, de Porto Alegre, propôs a data em vez do 13 de maio."],
    ["Quem criou a expressão \"amefricanidade\" e chamou de \"pretuguês\" o português marcado pelas línguas africanas?", "Lélia Gonzalez", "Conceição Evaristo", "Sueli Carneiro", "Beatriz Nascimento", "Lélia Gonzalez uniu racismo e gênero em suas análises."],
    ["Quem criou o conceito de \"escrevivência\"?", "Conceição Evaristo", "Carolina Maria de Jesus", "Djamila Ribeiro", "Maria Firmina dos Reis", "Escrevivência une escrita e vivência. Ponciá Vicêncio é de 2003."],
    ["Qual historiadora escreveu sobre quilombo como conceito de resistência e participou do filme Ôri (1989)?", "Beatriz Nascimento", "Lélia Gonzalez", "Sueli Carneiro", "Esperança Garcia", "Beatriz Nascimento é referência nos estudos sobre quilombos e identidade negra."],
    ["Quem escreveu \"Rebeliões da Senzala\"?", "Clóvis Moura", "Abdias Nascimento", "Milton Santos", "Oliveira Silveira", "Clóvis Moura estudou as rebeliões de escravizados."],
    ["Qual entidade foi fundada por Sueli Carneiro em 1988, em São Paulo?", "Geledés – Instituto da Mulher Negra", "Frente Negra Brasileira", "Teatro Experimental do Negro", "Grupo Palmares", "Geledés combate o racismo e o sexismo."],
    ["Qual geógrafo negro brasileiro ganhou o Prêmio Vautrin Lud em 1994?", "Milton Santos", "Abdias Nascimento", "Clóvis Moura", "Joaquim Nabuco", "Milton Santos foi um dos maiores geógrafos do mundo."],
    ["Silvio Almeida publicou, em 2019:", "Racismo Estrutural", "Lugar de Fala", "Quarto de Despejo", "Úrsula", "Silvio Almeida trata do racismo como parte da estrutura social."],
    ["Quem escreveu \"Lugar de Fala\", da coleção Feminismos Plurais?", "Djamila Ribeiro", "Lélia Gonzalez", "Conceição Evaristo", "Sueli Carneiro", "Djamila Ribeiro coordena a coleção Feminismos Plurais."],
    ["Quem foi Luiz Gama?", "Nasceu livre, foi vendido ilegalmente como escravizado e virou advogado abolicionista", "Nasceu escravizado e foi libertado pela Lei Áurea", "Foi engenheiro e amigo do imperador", "Foi líder de Palmares", "Luiz Gama, nascido livre em Salvador, libertou muitas pessoas na Justiça."],
    ["Quem foi André Rebouças?", "Engenheiro abolicionista", "Poeta simbolista", "Jornalista e orador da Confederação Abolicionista", "Médico do Império", "Rebouças foi engenheiro e abolicionista, amigo de Joaquim Nabuco."],
    ["Quem foi José do Patrocínio?", "Jornalista e orador abolicionista", "Engenheiro do Império", "Capitão do Mato", "General da Guerra do Paraguai", "Patrocínio foi um dos principais nomes do movimento abolicionista."],
    ["Qual escritor negro foi o primeiro presidente da Academia Brasileira de Letras?", "Machado de Assis", "Lima Barreto", "Cruz e Sousa", "Luiz Gama", "Machado de Assis presidiu a ABL desde a fundação, em 1897."],
    ["Qual poeta catarinense simbolista publicou \"Broquéis\" em 1893?", "Cruz e Sousa", "Machado de Assis", "Lima Barreto", "Solano Trindade", "Cruz e Sousa é nome central do simbolismo brasileiro."],
    ["Quem escreveu \"Triste Fim de Policarpo Quaresma\"?", "Lima Barreto", "Machado de Assis", "Cruz e Sousa", "Lélia Gonzalez", "O romance de Lima Barreto foi publicado em 1915."],
    ["Maria Firmina dos Reis era de qual estado?", "Maranhão", "Bahia", "Pernambuco", "Minas Gerais", "Maria Firmina publicou \"Úrsula\" em 1859, considerado o primeiro romance abolicionista de autoria feminina."],
    ["Em que cidade mineira nasceu Carolina Maria de Jesus?", "Sacramento", "Diamantina", "Ouro Preto", "Uberaba", "Ela nasceu em Sacramento e escreveu \"Quarto de Despejo\" (1960), diário sobre a favela do Canindé."],
    ["Quem foi o primeiro presidente negro do STF, em 2012?", "Joaquim Barbosa", "Luiz Gama", "Milton Santos", "Carlos Caó", "Joaquim Barbosa presidiu o Supremo entre 2012 e 2014."],
    ["Quem foi a primeira senadora negra do Brasil, eleita em 1994?", "Benedita da Silva", "Marielle Franco", "Lélia Gonzalez", "Sueli Carneiro", "Benedita foi eleita senadora pelo Rio de Janeiro."],
    ["Marielle Franco, assassinada em 2018, era:", "Vereadora do Rio de Janeiro", "Senadora", "Deputada federal", "Prefeita", "Marielle era vereadora e socióloga, nascida na Maré."],
    ["Ruth de Souza foi a primeira brasileira indicada a qual prêmio, em 1954?", "Melhor atriz no Festival de Veneza", "Oscar", "Palma de Ouro", "Urso de Ouro", "Ruth de Souza foi indicada por \"Sinhá Moça\" e fundou o Teatro Experimental do Negro com Abdias."],
    ["Aleijadinho, autor dos Profetas de Congonhas, era filho de:", "Um português e de uma mulher escravizada", "Dois africanos livres", "Uma princesa do Congo", "Um padre e uma indígena", "Antônio Francisco Lisboa nasceu de pai português e mãe escravizada."],
    // ---- Música afro-brasileira ----
    ["Qual samba, de Donga e Mauro de Almeida, é lembrado como o primeiro gravado? (1917)", "Pelo Telefone", "Carinhoso", "As Rosas Não Falam", "Aquarela do Brasil", "\"Pelo Telefone\" ficou famoso em 1917 e nasceu em rodas na casa de Tia Ciata."],
    ["Em qual casa da Praça Onze, no Rio, nasceu o samba, junto a rodas de baianas?", "Casa de Tia Ciata", "Casa de Pixinguinha", "Casa de Cartola", "Casa de Donga", "Tia Ciata foi baiana quituteira e acolhia rodas de música e candomblé."],
    ["Qual é considerada a primeira escola de samba do Rio, fundada em 1928 no Estácio?", "Deixa Falar", "Mangueira", "Portela", "Império Serrano", "A Deixa Falar nasceu no Estácio em 1928."],
    ["Quem foi um dos fundadores da Mangueira e compôs \"As Rosas Não Falam\"?", "Cartola", "Pixinguinha", "Candeia", "Noel Rosa", "Cartola ajudou a fundar a Estação Primeira de Mangueira."],
    ["Quem compôs \"Carinhoso\" e liderou o grupo Oito Batutas?", "Pixinguinha", "Cartola", "Donga", "Jackson do Pandeiro", "Pixinguinha foi mestre do choro e do samba."],
    ["Dona Ivone Lara foi a primeira mulher a integrar a ala de compositores de qual escola?", "Império Serrano", "Portela", "Mangueira", "Salgueiro", "Ela compôs \"Sonho Meu\" e abriu espaço às mulheres no samba."],
    ["Candeia fundou, em 1975, qual escola de samba, ligada à valorização da cultura negra?", "GRES Quilombo", "GRES Palmares", "GRES Zumbi", "GRES Deixa Falar", "A Quilombo foi criada por Candeia como espaço de resistência cultural."],
    ["Qual cantora foi descoberta por Hermínio Bello de Carvalho, em 1963, e gravou \"Rosa de Ouro\"?", "Clementina de Jesus", "Elza Soares", "Dona Ivone Lara", "Jovelina Pérola Negra", "Clementina de Jesus cantava jongos, corimas e partido-alto."],
    ["Qual álbum de Elza Soares, de 2015, tem título de música sobre o fim do mundo?", "A Mulher do Fim do Mundo", "Planeta Fome", "Deus É Mulher", "Beba-me", "Elza Soares foi uma das maiores vozes do país."],
    ["Qual disco de Baden Powell e Vinicius de Moraes mistura samba e religiosidade afro-brasileira?", "Os Afro-Sambas (1966)", "Clube da Esquina", "Sobrevivendo no Inferno", "Racional", "Os Afro-Sambas usam pontos de candomblé e capoeira."],
    ["Qual cantor lançou \"Tim Maia Racional\" na década de 1970?", "Tim Maia", "Jorge Ben", "Milton Nascimento", "Gilberto Gil", "Tim Maia foi um dos pilares do soul brasileiro."],
    ["Quem lançou o álbum \"África Brasil\", em 1976, e compôs \"Mas Que Nada\"?", "Jorge Ben", "Gilberto Gil", "Caetano Veloso", "Jackson do Pandeiro", "Jorge Ben misturou samba, rock e ritmos africanos."],
    ["Qual grupo de rap paulistano lançou \"Sobrevivendo no Inferno\", em 1997?", "Racionais MC's", "Planet Hemp", "Emicida", "Thaíde e DJ Hum", "O disco, com \"Capítulo 4, Versículo 3\", marcou o rap nacional."],
    ["Qual foi o primeiro bloco afro de Salvador, fundado em 1974 na Liberdade?", "Ilê Aiyê", "Olodum", "Timbalada", "Filhos de Gandhy", "O Ilê Aiyê valoriza a estética e a cultura negra."],
    ["Em que bairro de Salvador o Olodum, fundado em 1979, tem sua sede?", "Pelourinho", "Liberdade", "Barra", "Itapuã", "O Olodum desenvolveu o samba-reggae."],
    ["Qual grupo foi fundado por Carlinhos Brown em Salvador, nos anos 1990?", "Timbalada", "Olodum", "Ilê Aiyê", "Muzenza", "A Timbalada nasceu no Candeal."],
    ["Qual afoxé de Salvador, fundado em 1949, usa o ritmo ijexá?", "Filhos de Gandhy", "Ilê Aiyê", "Olodum", "Malê Debalê", "Afoxé é ligado ao candomblé, e o ijexá é seu ritmo."],
    ["O instrumento berimbau, usado na capoeira, é:", "Um arco musical de origem africana", "Um instrumento de sopro indígena", "Um tambor de couro de origem portuguesa", "Um tipo de viola", "O berimbau comanda o ritmo da roda."],
    ["Quem criou a Capoeira Regional e quem defendeu a Capoeira Angola?", "Mestre Bimba e Mestre Pastinha", "Mestre Pastinha e Mestre Bimba", "Mestre Bimba e Mestre Vitalino", "Mestre Valentim e Mestre Pastinha", "Bimba criou a Regional; Pastinha foi símbolo da Angola."],
    ["Quando o Ofício dos Mestres de Capoeira e a Roda foram registrados como patrimônio pelo Iphan?", "2008", "1984", "2014", "2003", "Em 2008 pelo Iphan, e em 2014 a roda foi reconhecida pela UNESCO."],
    ["O jongo, dança do Sudeste, foi registrado como patrimônio imaterial do Brasil em:", "2005", "1988", "2014", "2012", "O Jongo no Sudeste tem raízes bantu."],
    ["O Tambor de Crioula é uma manifestação cultural tradicional de qual estado?", "Maranhão", "Pernambuco", "Bahia", "Pará", "Tem registro no Iphan desde 2007."],
    ["O maracatu de baque virado, com nações e rainha, é tradição de qual estado?", "Pernambuco", "Ceará", "Maranhão", "Alagoas", "O maracatu nação tem relação com a coroação de reis do Congo."],
    ["O Congado, que reúne coroação de reis do Congo, é muito presente em:", "Minas Gerais", "Rio Grande do Sul", "Amazonas", "Santa Catarina", "As irmandades do Rosário mantêm o Congado vivo."],
    ["A Irmandade de Nossa Senhora do Rosário dos Homens Pretos era:", "Uma associação religiosa e de ajuda mútua de negros", "Um quilombo", "Um navio negreiro", "Uma escola de samba", "As irmandades ajudavam a comprar alforrias e a organizar enterros."],
    ["Qual região baiana é berço do samba de roda?", "Recôncavo", "Chapada Diamantina", "Sertão", "Litoral Sul", "O samba de roda do Recôncavo é patrimônio imaterial."],
    ["Quem é Jackson do Pandeiro, referência do coco e do forró?", "Paraibano", "Baiano", "Carioca", "Gaúcho", "Ele misturou ritmos africanos e nordestinos."],
    ["Qual álbum de Milton Nascimento, de 1972, divide autoria com Lô Borges?", "Clube da Esquina", "Travessia", "Geraes", "Courage", "Milton Nascimento foi voz de Minas e da música brasileira."],
    // ---- Religiões e culinária ----
    ["Qual casa de candomblé de Salvador foi o primeiro terreiro tombado pelo Iphan, em 1984?", "Casa Branca do Engenho Velho", "Gantois", "Ilê Axé Opô Afonjá", "Terreiro do Bogum", "O terreiro, Ilê Axé Iyá Nassô Oká, é considerado dos mais antigos."],
    ["Quem foi Mãe Menininha do Gantois?", "Ialorixá do terreiro do Gantois, em Salvador", "Fundadora da Umbanda", "Poeta abolicionista", "Líder de Palmares", "Mãe Menininha foi figura central do candomblé baiano."],
    ["Qual orixá é associado às águas doces, ao ouro e à fertilidade?", "Oxum", "Iemanjá", "Iansã", "Nanã", "Oxum é a dona das águas doces; Iemanjá é a das águas salgadas."],
    ["Qual orixá é associado ao trovão e à justiça?", "Xangô", "Ogum", "Oxóssi", "Exu", "Xangô é o orixá da justiça e do fogo."],
    ["Qual orixá é senhor do ferro e da guerra?", "Ogum", "Xangô", "Oxóssi", "Omolu", "Ogum abre caminhos e é protetor dos trabalhadores."],
    ["Em que cidade e ano, segundo a tradição, nasceu a Umbanda com Zélio de Moraes?", "Niterói, 1908", "Salvador, 1835", "São Paulo, 1930", "Recife, 1910", "A Umbanda surgiu no Rio de Janeiro, e o Caboclo das Sete Encruzilhadas é seu marco inicial."],
    ["A nação Ketu do candomblé tem origem:", "Iorubá", "Banto", "Tupi", "Árabe", "Ketu vem do povo iorubá, e angola e jeje são outras nações."],
    ["O Ofício das Baianas de Acarajé foi registrado como patrimônio imaterial em:", "2005", "1988", "2014", "2012", "O acarajé vem do mundo iorubá e está ligado ao candomblé."],
    ["O azeite de dendê, comum na culinária baiana, vem de:", "Uma palmeira de origem africana", "Uma fruta amazônica", "Um tipo de milho", "Uma raiz indígena", "O dendezeiro veio da África Ocidental."],
    ["A região da Pedra do Sal, no Rio, é lembrada como:", "Berço do samba, na Pequena África", "Primeiro quilombo urbano", "Porto de entrada do café", "Sede do Theatro Municipal", "Rodas de samba ali ajudaram a firmar o gênero."],
    ["Quem foi Grande Otelo?", "Ator e comediante negro, astro do cinema brasileiro", "Líder da Revolta da Chibata", "Compositor de \"Pelo Telefone\"", "Poeta simbolista", "Sebastião Prata, o Grande Otelo, brilhou nas chanchadas e no teatro de revista."],
    ["Qual é a data do Dia Nacional de Tereza de Benguela e da Mulher Negra Latino-Americana e Caribenha?", "25 de julho", "20 de novembro", "13 de maio", "8 de março", "A data foi criada em 1992, e a Lei 12.987/2014 reconheceu Tereza de Benguela."],
    ["O pagode e o partido-alto são variações de qual gênero?", "Samba", "Choro", "Maracatu", "Forró", "São formas de samba de roda e de terreiro, nascidas em comunidades negras."],
    ["O agogô, instrumento de metal duplo do samba e do candomblé, tem origem:", "Iorubá", "Indígena", "Portuguesa", "Árabe", "O agogô veio das tradições iorubás e marca o ritmo de cultos e blocos."],
    ["Quem é considerado símbolo da Capoeira Angola e fundou o Centro Esportivo de Capoeira Angola?", "Mestre Pastinha", "Mestre Bimba", "Mestre Waldemar", "Mestre Vitalino", "Vicente Ferreira Pastinha defendeu a tradição da angola."],
    ["A Lei Saraiva-Cotegipe é outro nome para qual lei?", "Lei dos Sexagenários", "Lei do Ventre Livre", "Lei Áurea", "Lei Eusébio de Queirós", "A lei de 1885 tem esse nome por causa de seus autores."],
    ["A Pequena África era a região do Rio de Janeiro formada por:", "Bairros da zona portuária, como Saúde, Gamboa e Santo Cristo", "Copacabana e Ipanema", "Tijuca e Vila Isabel", "Santa Teresa e Laranjeiras", "Ali viviam muitos africanos e descendentes após a abolição."],
  ];

  const banco = B.map(([p, certa, ...resto]) => ({
    p, o: [certa, resto[0], resto[1], resto[2]], c: 0, e: resto[3],
  }));

  const caixa = document.getElementById("quiz-caixa");
  if (!caixa) return;

  // estilo mínimo das letras (não precisa mexer no style.css)
  const st = document.createElement("style");
  st.textContent = `
    .quiz-op{display:flex;align-items:center;gap:.75rem;text-align:left}
    .quiz-letra{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;
      width:2rem;height:2rem;border-radius:50%;border:2px solid currentColor;font-weight:700}
    .quiz-op.certa .quiz-letra,.quiz-op.errada .quiz-letra{background:currentColor}
    .quiz-op.certa .quiz-letra span,.quiz-op.errada .quiz-letra span{color:#14100c}
    .quiz-op .quiz-marca{margin-left:auto;font-size:.8rem;font-weight:600;white-space:nowrap}
  `;
  document.head.appendChild(st);

  let rodada = [], i = 0, acertos = 0, atual = [];

  function embaralhar(lista) {
    const a = lista.map((t, idx) => ({ t, idx }));
    for (let k = a.length - 1; k > 0; k--) {
      const j = Math.floor(Math.random() * (k + 1));
      [a[k], a[j]] = [a[j], a[k]];
    }
    return a;
  }

  // Perguntas já sorteadas (guardadas no navegador para não repetir até acabar o banco)
  const CHAVE = "quiz-usadas-v2";
  function lerUsadas() {
    try { return JSON.parse(localStorage.getItem(CHAVE)) || []; } catch (e) { return []; }
  }
  function guardarUsadas(lista) {
    try { localStorage.setItem(CHAVE, JSON.stringify(lista)); } catch (e) {}
  }

  function sortear() {
    const todas = banco.map((_, k) => k);
    let usadas = lerUsadas().filter((k) => k < banco.length);
    let livres = todas.filter((k) => !usadas.includes(k));
    if (livres.length < TOTAL) { usadas = []; livres = todas; }
    const sorteadas = embaralhar(livres).slice(0, TOTAL).map((x) => x.t);
    guardarUsadas(usadas.concat(sorteadas));
    rodada = sorteadas.map((k) => banco[k]);
    i = 0;
    acertos = 0;
  }

  function mostrar() {
    const q = rodada[i];
    caixa.innerHTML = `
      <div class="quiz-topo"><span>Pergunta ${i + 1} de ${rodada.length}</span><span>Acertos: ${acertos}</span></div>
      <div class="quiz-barra"><span style="width:${(i / rodada.length) * 100}%"></span></div>
      <h3></h3>
      <div class="quiz-opcoes"></div>
      <div class="quiz-extra"></div>`;
    caixa.querySelector("h3").textContent = q.p;
    const area = caixa.querySelector(".quiz-opcoes");

    atual = embaralhar(q.o); // posição na tela = letra
    atual.forEach(({ t, idx }, pos) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "quiz-op";
      b.dataset.pos = pos;
      const letra = document.createElement("span");
      letra.className = "quiz-letra";
      letra.innerHTML = "<span>" + LETRAS[pos] + "</span>";
      const texto = document.createElement("span");
      texto.className = "quiz-texto";
      texto.textContent = t;
      b.append(letra, texto);
      b.addEventListener("click", () => responder(pos));
      area.appendChild(b);
    });
  }

  function responder(posEscolhida) {
    const q = rodada[i];
    const posCerta = atual.findIndex((x) => x.idx === q.c);
    const certo = posEscolhida === posCerta;

    caixa.querySelectorAll(".quiz-op").forEach((b) => {
      b.disabled = true;
      const pos = Number(b.dataset.pos);
      if (pos === posCerta) {
        b.classList.add("certa");
        b.insertAdjacentHTML("beforeend", '<span class="quiz-marca">✓ Correta</span>');
      } else if (pos === posEscolhida) {
        b.classList.add("errada");
        b.insertAdjacentHTML("beforeend", '<span class="quiz-marca">✗ Sua resposta</span>');
      }
    });
    if (certo) acertos++;

    const ultima = i === rodada.length - 1;
    const resumo = certo
      ? `Você marcou <strong>${LETRAS[posEscolhida]}</strong> e acertou!`
      : `Você marcou <strong>${LETRAS[posEscolhida]}</strong>, mas a correta é a <strong>${LETRAS[posCerta]}</strong>.`;
    const extra = caixa.querySelector(".quiz-extra");
    extra.innerHTML = `
      <p class="quiz-retorno">${resumo}</p>
      <p class="quiz-retorno"></p>
      <button type="button" class="botao" id="quiz-prox">${ultima ? "Ver resultado" : "Próxima pergunta"}</button>`;
    extra.querySelectorAll(".quiz-retorno")[1].textContent = q.e;
    const prox = document.getElementById("quiz-prox");
    prox.focus();
    prox.addEventListener("click", () => {
      if (ultima) fim(); else { i++; mostrar(); }
    });
  }

  function fim() {
    const msg = acertos === rodada.length ? "Perfeito! Você aprendeu tudo."
      : acertos >= 6 ? "Muito bem! Você conhece bem o tema."
      : acertos >= 4 ? "Bom resultado! Dá para melhorar na próxima."
      : "Vale rever a exposição e tentar de novo.";
    caixa.innerHTML = `
      <div class="quiz-final">
        <h3>Resultado</h3>
        <p class="quiz-nota">${acertos}/${rodada.length}</p>
        <p>${msg}</p>
        <button type="button" class="botao" id="quiz-de-novo">Jogar de novo com novas perguntas</button>
      </div>`;
    document.getElementById("quiz-de-novo").addEventListener("click", () => { sortear(); mostrar(); });
  }

  sortear();
  mostrar();
})();
