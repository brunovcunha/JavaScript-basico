 frutas = [
    "Abacate", "Abacaxi", "Abiu", "Abricó", "Abrunho", "Açaí", "Acerola", "Akee", "Alfarroba", "Ameixa", "Amêndoa", "Amora", "Ananás", "Anona", "Araçá", "Arando", "Araticum", "Ata", "Atemoia", "Avelã",
    "Babaco", "Babaçu", "Bacaba", "Bacuri", "Bacupari", "Banana", "Baru", "Bergamota", "Biribá", "Buriti", "Butiá",
    "Cabeludinha", "Cacau", "Cagaita", "Caimito", "Cajá", "Caju", "Calabaça", "Calabura", "Calamondin", "Cambucá", "Cambuci", "Camu-camu", "Caqui", "Carambola", "Carnaúba", "Castanha", "Castanha-do-pará", "Cereja", "Ciriguela", "Ciruela", "Coco", "Cranberry", "Cupuaçu",
    "Damasco", "Dekopon", "Dendê", "Dióspiro", "Dovyalis", "Durião",
    "Embaúba", "Embaubarana", "Engkala", "Escropari", "Esfregadinha", "Esporão-de-galo",
    "Figo", "Framboesa", "Fruta-do-conde", "Fruta-pão", "Feijoa", "Figo-da-índia", "Fruta-de-cedro", "Fruta-de-lobo", "Fruta-do-milagre", "Fruta-de-tatu",
    "Gabiroba", "Glicosmis", "Goiaba", "Granadilla", "Gravatá", "Graviola", "Groselha", "Grumixama", "Guabiju", "Guabiroba", "Guaraná",
    "Hawthorn", "Heisteria", "Hilocéreo",
    "Ibacurupari", "Ilama", "Imbe", "Imbu", "Inajá", "Ingá", "Inharé",
    "Jabuticaba", "Jaca", "Jambo", "Jambolão", "Jamelão", "Jaracatiá", "Jatobá", "Jenipapo", "Jerivá", "Juá", "Jujuba",
    "Kiwi", "Kumquat", "Kinkan", "Kino", "Kiwano", "Kabosu", "Karité", "Korlan",
    "Laranja", "Limão", "Lima", "Lichia", "Longan", "Lucuma", "Lacucha", "Lulo", "Lobeira", "Langsat", "Laranja-de-pacu",
    "Mabolo", "Maçã", "Macadâmia", "Macaúba", "Mamão", "Mamey", "Mamoncillo", "Maná-cubiu", "Manga", "Mangaba", "Mangostão", "Maracujá", "Marang", "Marmelo", "Marolo", "Marula", "Massala", "Melancia", "Melão", "Meloa", "Mexerica", "Mirtilo", "Morango", "Murici",
    "Naranjilla", "Nectarina", "Nêspera", "Noni", "Noz", "Noz-pecã", "Noz-macadâmia",
    "Oiti", "Oxicoco", "Orangelo",
    "Pera", "Pêssego", "Pitanga", "Pinha", "Pitaia", "Pitomba", "Pitangatuba", "Pindaíba", "Pequi", "Pequiá", "Physalis", "Pulasan", "Pomelo", "Pupunha", "Puçá", "Patauá", "Pajurá", "Pixirica", "Pistache",
    "Quina", "Quiuí", "Quixabeira",
    "Romã", "Rambai", "Rambutão", "Rukam",
    "Saguaraji", "Salak", "Santol", "Sapota", "Sapoti", "Sapucaia", "Saputá", "Seriguela", "Sorvinha",
    "Tangerina", "Tamarindo", "Tâmara", "Toranja", "Tucumã", "Taiuva", "Tapiá", "Tarumã", "Tangor", "Tucujá",
    "Uva", "Umbu", "Uvaia", "Uchuva", "Umê", "Uxi", "Ucuuba",
    "Vacínio", "Veludo", "Vergamota", "Veludo-branco",
    "Wampi",
    "Xixá",
    "Yamamomo", "Yuzu",
    "Zimbro"
];

 frutasMaiusculas = [
    "ABACATE", "ABACAXI", "ABIU", "ABRICÓ", "ABRUNHO", "AÇAÍ", "ACEROLA", "AKEE", "ALFARROBA", "AMEIXA", "AMÊNDOA", "AMORA", "ANANÁS", "ANONA", "ARAÇÁ", "ARANDO", "ARATICUM", "ATA", "ATEMOIA", "AVELÃ", "BABACO", "BABAÇU", "BACABA", "BACURI", "BACUPARI", "BANANA", "BARU", "BERGAMOTA", "BIRIBÁ", "BURITI", "BUTIÁ", "CABELUDINHA", "CACAU", "CAGAITA", "CAIMITO", "CAJÁ", "CAJU", "CALABAÇA", "CALABURA", "CALAMONDIN", "CAMBUCÁ", "CAMBUCI", "CAMU-CAMU", "CAQUI", "CARAMBOLA", "CARNAÚBA", "CASTANHA", "CASTANHA-DO-PARÁ", "CEREJA", "CIRIGUELA", "CIRUELA", "COCO", "CRANBERRY", "CUPUAÇU",
    "DAMASCO", "DEKOPON", "DENDÊ", "DIÓSPIRO", "DOVYALIS", "DURIÃO",
    "EMBAÚBA", "EMBAUBARANA", "ENGKALA", "ESCROPARIA", "ESFREGADINHA", "ESPORÃO-DE-GALO",
    "FIGO", "FRAMBOESA", "FRUTA-DO-CONDE", "FRUTA-PÃO", "FEIJOA", "FIGO-DA-ÍNDIA", "FRUTA-DE-CEDRO", "FRUTA-DE-LOBO", "FRUTA-DO-MILAGRE", "FRUTA-DE-TATU",
    "GABIROBA", "GLICOSMIS", "GOIABA", "GRANADILLA", "GRAVATÁ", "GRAVIOLA", "GROSELHA", "GRUMIXAMA", "GUABIJU", "GUABIROBA", "GUARANÁ",
    "HAWTHORN", "HEISTERIA", "HILOCÉREO",
    "IBACURUPARI", "ILAMA", "IMBE", "IMBU", "INAJÁ", "INGÁ", "INHARÉ",
    "JABUTICABA", "JACA", "JAMBO", "JAMBOÃO", "JAMELÃO", "JARACATIÁ", "JATOBÁ", "JENIPAPO", "JERIVÁ", "JUÁ", "JUJUBA",
    "KIWI", "KUMQUAT", "KINKAN", "KINO", "KIWANO", "KABOSU", "KARITÉ", "KORLAN",
    "LARANJA", "LIMÃO", "LIMA", "LICHIA", "LONGAN", "LUCUMA", "LACUCHA", "LULO", "LOBEIRA", "LANGSAT", "LARANJA-DE-PACU",
    "MABOLO", "MAÇÃ", "MACADÂMIA", "MACAÚBA", "MAMÃO", "MAMEY", "MAMONCILLO", "MANÁ-CUBIU", "MANGA", "MANGABA", "MANGOSTÃO", "MARACUJÁ", "MARANG", "MARMELO", "MAROLO", "MARULA", "MASSALA", "MELANCIA", "MELÃO", "MELOA", "MEXERICA", "MIRTILO", "MORANGO", "MURICI",
    "NARANJILLA", "NECTARINA", "NÊSPERA", "NONI", "NOZ", "NOZ-PECÃ", "NOZ-MACADÂMIA",
    "OITI", "OXICOCO", "ORANGELO",
    "PERA", "PÊSSEGO", "PITANGA", "PINHA", "PITAIA", "PITOMBA", "PITANGATUBA", "PINDAÍBA", "PEQUI", "PEQUIÁ", "PHYSALIS", "PULASAN", "POMELO", "PUPUNHA", "PUÇÁ", "PATAUÁ", "PAJURÁ", "PIXIRICA", "PISTACHE",
    "QUINA", "QUIUÍ", "QUIXABEIRA",
    "ROMÃ", "RAMBAI", "RAMBUTÃO", "RUKAM",
    "SAGUARAJI", "SALAK", "SANTOL", "SAPOTA", "SAPOTI", "SAPUCAIA", "SAPUTÁ", "SERIGUELA", "SORVINHA",
    "TANGERINA", "TAMARINDO", "TÂMARA", "TORANJA", "TUCUMÃ", "TAIUVA", "TAPIÁ", "TARUMÃ", "TANGOR", "TUCUJÁ",
    "UVA", "UMBU", "UVAIA", "UCHUVA", "UMÊ", "UXI", "UCUUBA",
    "VACÍNIO", "VELUDO", "VERGAMOTA", "VELUDO-BRANCO",
    "WAMPI",
    "XIXÁ",
    "YAMAMOMO", "YUZU",
    "ZIMBRO"
];

verdurasLegumes = [
    "Abóbora", "Abobrinha", "Aipim", "Alho", "Amaranto", "Amêndoa", "Amendoim", "Amendoim-da-mata", "Andu", "Arachachá", "Arroz", "Arroz-selvagem", "Aveia", "Avelã", "Azeitona",
    "Abóbora (flor)", "Açafrão", "Açafrão", "Acelga", "Acelga-chinesa", "Agave-caribenho", "Agrião", "Agrião-do-líbano", "Aipo", "Alcachofra", "Alcaparra", "Alecrim", "Alface", "Alfafa (broto)", "Alfavaca", "Alho-poró", "Almeirão", "Aspargo", "Azedinha",
    "Baroa", "Batata", "Batata-doce", "Berdana", "Berinjela", "Beterraba", "Batata-doce (folha)", "Beldroega", "Beldroega-grande", "Beldroegão", "Berdana (folha)", "Bertalha", "Bertalha-coração", "Bredo", "Brócolis",
    "Cabotchan", "Cará", "Cará-do-ar", "Cará-moela", "Castanha-de-baru", "Castanha-de-caju", "Castanha-de-macaco", "Castanha-do-maranhão", "Castanha-do-pará", "Castanheiro-do-mato", "Caxi", "Cebola", "Celósia (sementes)", "Cenoura", "Centeio", "Cevada", "Chalota", "Chia", "Chichá", "Chichá-do-norte", "Chuchu", "Couve-nabo", "Couve-rábano", "Cumaru", "Cambuquira", "Capeba", "Capiçoba", "Capuchinha", "Caruru", "Caruru-manteiga", "Catalonha", "Cebolinha", "Celósia", "Chaya", "Chicória", "Coentro", "Comelina", "Couve", "Couve-de-bruxelas", "Couve-de-milão", "Couve-de-saboia", "Couve-flor", "Couve-lombarda", "Couve-nabo (folha)", "Couve-rábano", "Couvinha",
    "Dendê", "Dill",
    "Ervilha", "Ervilha-de-pombo", "Escorcioneira", "Echalota", "Embaúba", "Endívia", "Erva-cidreira", "Erva-doce", "Erva-luísa", "Erva-mate", "Escarola", "Espinafre", "Espinafre-de-okinawa", "Estragão",
    "Fava", "Feijão", "Feijão-andu", "Feijão-azuki", "Feijão-boer", "Fruta-pão", "Feijão (broto)", "Funcho",
    "Gengibre", "Gergelim", "Girassol (semente)", "Gobô", "Goya", "Grão-de-bico", "Grumixama", "Guandu", "Gergelim (broto)", "Gobô (folha)", "Grão-de-bico (broto)", "Guasca",
    "Hibisco", "Hortelã",
    "Inajá", "Inhame", "Inhame (folha)", "Jaca verde", "Jalapeño", "Jicama", "Jiló", "Jasmim-manga",
    "Kohlrabi", "Kohlrabi (folha)",
    "Labaca", "Lentilha", "Linhaça", "Lírio-do-brejo", "Labaca (folha)", "Lambari-da-horta", "Lentilha (broto)", "Linhaça (broto)", "Louro",
    "Macassá", "Malagueta", "Malte", "Mandioca", "Mandioquinha", "Maxixe", "Mendubiguaçu", "Milho", "Mitsubá", "Mogango", "Monguba", "Moranga", "Madressilva", "Major-gomes", "Manjericão", "Manjerona", "Maria-gorda", "Mostarda",
    "Nabo", "Nabo-da-suécia", "Nabo-mexicano", "Nabo-sueco", "Noz", "Nozes-da-macadâmia", "Nabo-da-suécia (folha)", "Nabo-sueco (folha)",
    "Oliva", "Ora-pro-nobis", "Orégano", "Orelha-de-coelho",
    "Palmito", "Paru", "Pau-rei", "Pé-de-anta", "Pelega", "Pepino", "Pepino-japonês", "Pequi", "Pimenta", "Pimentão", "Pinhão", "Pistache", "Peixinho-da-horta", "Palma", "Picão",
    "Quiabo", "Quinoa", "Quina",
    "Rabanete", "Rábano", "Rábano-silvestre", "Raiz-forte", "Rutabaga", "Radicchio", "Repolho", "Rúcula", "Ruibarbo", "Rutabaga (folha)",
    "Shissô (sementes)", "Soja", "Sorgo", "Salsa", "Salsão", "Sálvia", "Serralha", "Shissô", "Soja (broto)",
    "Taioba (batata)", "Taro", "Tomate", "Tomate-cereja", "Tonka", "Trigo", "Tupinambo", "Taioba", "Taro (folha)", "Tingensai", "Tomilho", "Trapoeraba", "Trevo (broto)", "Trigo (broto)",
    "Urucum", "Urtiga",
    "Vagem", "Vinagreira",
    "Wasabi", "Wasabi (folha)",
    "Xixá", "Xoconostle",
    "Zizânia"
];

verdurasMaiusculo = [
    "ABÓBORA", "ABOBRINHA", "AIPIM", "ALHO", "AMARANTO", "AMÊNDOA", "AMENDOIM", "AMENDOIM-DA-MATA", "ANDU", "ARACHACHÁ", "ARROZ", "ARROZ-SELVAGEM", "AVEIA", "AVELÃ", "AZEITONA",
    "ABÓBORA (FLOR)", "AÇAFRÃO", "AÇAFRÃO", "ACELGA", "ACELGA-CHINESA", "AGAVE-CARIBENHO", "AGRIÃO", "AGRIÃO-DO-LÍBANO", "AÇAÍ", "ALCACHOFRA", "ALCAPARRA", "ALECRIM", "ALFACE", "ALFAFA (BROTO)", "ALFAVACA", "ALHO-PORÓ", "ALMEIRÃO", "ASPARGO", "AZEDINHA",
    "BAROA", "BATATA", "BATATA-DOCE", "BERDANA", "BERINJELA", "BETERRABA", "BATATA-DOCE (FOLHA)", "BELDROEGA", "BELDROEGA-GRANDE", "BELDROEGÃO", "BERDANA (FOLHA)", "BERTALHA", "BERTALHA-CORAÇÃO", "BREDO", "BRÓCOLIS",
    "CABOTCHAN", "CARÁ", "CARÁ-DO-AR", "CARÁ-MOELA", "CASTANHA-DE-BARU", "CASTANHA-DE-CAJU", "CASTANHA-DE-MACACO", "CASTANHA-DO-MARANHÃO", "CASTANHA-DO-PARÁ", "CASTANHEIRO-DO-MATO", "CAXI", "CEBOLA", "CELÓSIA (SEMENTES)", "CENOURA", "CENTEIO", "CEVADA", "CHALOTA", "CHIA", "CHICHÁ", "CHICHÁ-DO-NORTE", "CHUCHU", "COUVE-NABO", "COUVE-RÁBANO", "CUMARU", "CAMBUQUIRA", "CAPEBA", "CAPIÇOBA", "CAPUCHINHA", "CARURU", "CARURU-MANTEIGA", "CATALONHA", "CEBOLINHA", "CELÓSIA", "CHAYA", "CHICÓRIA", "COENTRO", "COMELINA", "COUVE", "COUVE-DE-BRUXELAS", "COUVE-DE-MILÃO", "COUVE-DE-SABOIA", "COUVE-FLOR", "COUVE-LOMBARDA", "COUVE-NABO (FOLHA)", "COUVE-RÁBANO", "COUVINHA",
    "DENDÊ", "DILL",
    "ERVILHA", "ERVILHA-DE-POMBO", "ESCORCIONEIRA", "ECHALOTA", "EMBAÚBA", "ENDÍVIA", "ERVA-CIDREIRA", "ERVA-DOCE", "ERVA-LUÍSA", "ERVA-MATE", "ESCAROLA", "ESPINAFRE", "ESPINAFRE-DE-OKINAWA", "ESTRAGÃO",
    "FAVA", "FEIJÃO", "FEIJÃO-ANDU", "FEIJÃO-AZUKI", "FEIJÃO-BOER", "FRUTA-PÃO", "FEIJÃO (BROTO)", "FUNCHO",
    "GENGIBRE", "GERGELIM", "GIRASSOL (SEMENTE)", "GOBÔ", "GOYA", "GRÃO-DE-BICO", "GRUMIXAMA", "GUANDU", "GERGELIM (BROTO)", "GOBÔ (FOLHA)", "GRÃO-DE-BICO (BROTO)", "GUASCA",
    "HIBISCO", "HORTELÃ",
    "INAJÁ", "INHAME", "INHAME (FOLHA)", "JACA VERDE", "JALAPEÑO", "JICAMA", "JILÓ", "JASMIM-MANGA",
    "KOHLRABI", "KOHLRABI (FOLHA)",
    "LABACA", "LENTILHA", "LINHAÇA", "LÍRIO-DO-BREJO", "LABACA (FOLHA)", "LAMBARI-DA-HORTA", "LENTILHA (BROTO)", "LINHAÇA (BROTO)", "LOURO",
    "MACASSÁ", "MALAGUETA", "MALTE", "MANDIOCA", "MANDIOQUINHA", "MAXIXE", "MENDUBIGUAÇU", "MILHO", "MITSUBÁ", "MOGANGO", "MONGUBA", "MORANGA", "MADRESSILVA", "MAJOR-GOMES", "MANJERICÃO", "MANJERONA", "MARIA-GORDA", "MOSTARDA",
    "NABO", "NABO-DA-SUÉCIA", "NABO-MEXICANO", "NABO-SUECO", "NOZ", "NOZES-DA-MACADÂMIA", "NABO-DA-SUÉCIA (FOLHA)", "NABO-SUECO (FOLHA)",
    "OLIVA", "ORA-PRO-NÓBIS", "ORÉGANO", "ORELHA-DE-COELHO",
    "PALMITO", "PARU", "PAU-REI", "PÉ-DE-ANTA", "PELEGA", "PEPINO", "PEPINO-JAPONÊS", "PEQUI", "PIMENTA", "PIMENTÃO", "PINHÃO", "PISTACHE", "PEIXINHO-DA-HORTA", "PALMA", "PICÃO",
    "QUIABO", "QUINOA", "QUINA",
    "RABANETE", "RÁBANO", "RÁBANO-SILVESTRE", "RAIZ-FORTE", "RUTABAGA", "RADICCHIO", "REPOLHO", "RÚCULA", "RUIBARBO", "RUTABAGA (FOLHA)",
    "SHISSÔ (SEMENTES)", "SOJA", "SORGO", "SALSA", "SALSÃO", "SÁLVIA", "SERRALHA", "SHISSÔ", "SOJA (BROTO)",
    "TAIOBA (BATATA)", "TARO", "TOMATE", "TOMATE-CEREJA", "TONKA", "TRIGO", "TUPINAMBO", "TAIOBA", "TARO (FOLHA)", "TINGENSAI", "TOMILHO", "TRAPOERABA", "TREVO (BROTO)", "TRIGO (BROTO)",
    "URUCUM", "URTIGA",
    "VAGEM", "VINAGREIRA",
    "WASABI", "WASABI (FOLHA)",
    "XIXÁ", "XOCONOSTLE",
    "ZIZÂNIA"
];

texto = prompt("Digite um texto qualquer: ", "Eu amo abacaxi(amora, mexerica). Eu gosto de moranga. Você gosta de batata? Gosto também de cebola na comida. Cebola (alho) é bom demais.");

//passo 2, substituir caracteres especiais por um espaço em branco
texto = texto.replaceAll("("," ").replaceAll(")"," ").replaceAll("."," ").replaceAll("?"," ").replaceAll("!"," ").replaceAll(","," ");

console.log(texto);


texto = texto.split(" ");






