let data = [
    { id: "Emocoes", name: "Emoções", parent: null, custom_field: "Selecione uma emoção" },
    
    { id: "Enjoado", name: "Enjoado", parent: "Emocoes", custom_field: "Sentimento de repulsa ou desconforto, muitas vezes associado a uma sensação de náusea ou aversão a algo.", fill: "#8f8f8f" },
    
    { id: "Desaprovacao", name: "Desaprovação", parent: "Enjoado", custom_field: "Sentimento de rejeição em relação a algo que não atende às expectativas ou padrões." },
    { id: "Julgamento", name: "Julgamento", parent: "Desaprovacao", custom_field: "Ato de avaliar ou criticar alguém ou algo, muitas vezes com uma conotação negativa." },
    { id: "Constrangido", name: "Constrangido", parent: "Desaprovacao", custom_field: "Sentimento de vergonha ou embaraço em uma situação social." },
    
    { id: "Desapontado", name: "Desapontado", parent: "Enjoado", custom_field: "Sentimento de insatisfação que surge quando as expectativas não são atendidas." },
    { id: "Chocado", name: "Chocado", parent: "Desapontado", custom_field: "Sentimento de surpresa intensa, frequentemente associado a eventos inesperados." },
    { id: "Revoltado", name: "Revoltado", parent: "Desapontado", custom_field: "Sentimento de indignação ou raiva devido a uma injustiça percebida." },
    
    { id: "Terrivel", name: "Terrível", parent: "Enjoado", custom_field: "Sentimento de extrema negatividade, muitas vezes associado a experiências profundamente desconfortáveis." },
    { id: "Nauseado", name: "Nauseado", parent: "Terrivel", custom_field: "Sensação física de enjoo, frequentemente acompanhada por mal-estar." },
    { id: "Detestavel", name: "Detestável", parent: "Terrivel", custom_field: "Sentimento de aversão intensa em relação a algo ou alguém." },
    
    { id: "Rejeicao", name: "Rejeição", parent: "Enjoado", custom_field: "Sentimento de exclusão ou não aceitação, que pode levar a uma dor emocional significativa." },
    { id: "Horrorizado", name: "Horrorizado", parent: "Rejeicao", custom_field: "Sentimento de choque e repulsa diante de algo extremamente perturbador." },
    { id: "Hesitacao", name: "Hesitação", parent: "Rejeicao", custom_field: "Sentimento de dúvida ou insegurança que impede a ação." },

    { id: "Triste", name: "Triste", parent: "Emocoes", custom_field: "Sentimento de melancolia, frequentemente associado a perdas ou desilusões na vida.", fill: "#8fbde1" },
    { id: "Magoado", name: "Magoado", parent: "Triste", custom_field: "Sentimento de dor emocional resultante de ações de outras pessoas que ferem ou decepcionam." },
    { id: "Constrangido2", name: "Constrangido", parent: "Magoado", custom_field: "Sentimento de vergonha em situações sociais, criando desconforto." },
    { id: "Desapontado2", name: "Desapontado", parent: "Magoado", custom_field: "Sentimento de insatisfação quando as expectativas não são cumpridas." },

    { id: "Depressivo", name: "Depressivo", parent: "Triste", custom_field: "Sentimento de tristeza profunda e prolongada, muitas vezes acompanhado por falta de energia e desinteresse." },
    { id: "Inferior", name: "Inferior", parent: "Depressivo", custom_field: "Sentimento de inadequação em relação aos outros, levando a uma autoimagem negativa." },
    { id: "Vazio", name: "Vazio", parent: "Depressivo", custom_field: "Sentimento de falta de propósito ou significado na vida." },

    { id: "Culpa", name: "Culpa", parent: "Triste", custom_field: "Sentimento de responsabilidade ou arrependimento por ações que causaram danos ou descontentamento a outros." },
    { id: "Remorso", name: "Remorso", parent: "Culpa", custom_field: "Sentimento de tristeza ou arrependimento por algo que foi feito ou deixado de fazer." },
    { id: "Vergonha", name: "Vergonha", parent: "Culpa", custom_field: "Sentimento de desconforto ou humilhação em relação a si mesmo." },

    { id: "Desespero", name: "Desespero", parent: "Triste", custom_field: "Sentimento de falta de esperança, muitas vezes levando a comportamentos autodestrutivos." },
    { id: "Impotente", name: "Impotente", parent: "Desespero", custom_field: "Sentimento de incapacidade de mudar ou influenciar uma situação." },
    { id: "Sofrimento", name: "Sofrimento", parent: "Desespero", custom_field: "Experiência de dor emocional ou física intensa." },

    { id: "Vulneravel", name: "Vulnerável", parent: "Triste", custom_field: "Sentimento de fragilidade emocional, onde alguém se sente exposto a ferimentos emocionais." },
    { id: "Fragil", name: "Frágil", parent: "Vulneravel", custom_field: "Sentimento de delicadeza emocional, onde pequenos eventos podem causar dor." },
    { id: "Vitimado", name: "Vitimado", parent: "Vulneravel", custom_field: "Sentimento de ser alvo de injustiças ou abusos." },

    { id: "Solidão", name: "Solidão", parent: "Triste", custom_field: "Sentimento de isolamento, onde a pessoa sente falta de conexão ou companhia." },
    { id: "Abandonado", name: "Abandonado", parent: "Solidão", custom_field: "Sentimento de ser deixado para trás ou esquecido por aqueles que se importam." },
    { id: "Isolado", name: "Isolado", parent: "Solidão", custom_field: "Sentimento de estar longe dos outros, resultando em solidão." },

    { id: "Feliz", name: "Feliz", parent: "Emocoes", custom_field: "Sentimento de alegria e contentamento com a vida, gerando uma sensação de bem-estar.", fill: "#ffff8f" },
    { id: "Otimismo", name: "Otimismo", parent: "Feliz", custom_field: "Expectativa positiva em relação ao futuro, acreditando que coisas boas podem acontecer." },
    { id: "Inspiração", name: "Inspiração", parent: "Otimismo", custom_field: "Sentimento de motivação e criatividade que leva a ações positivas." },
    { id: "Esperanca", name: "Esperança", parent: "Otimismo", custom_field: "Sentimento de expectativa positiva em relação ao que está por vir." },

    { id: "Confianca", name: "Confiança", parent: "Feliz", custom_field: "Sentimento de segurança em si mesmo e em suas capacidades, promovendo ações decisivas." },
    { id: "Intimidade", name: "Intimidade", parent: "Confianca", custom_field: "Sentimento de proximidade emocional com outra pessoa." },
    { id: "Sensibilidade", name: "Sensibilidade", parent: "Confianca", custom_field: "Capacidade de perceber e responder às emoções dos outros." },

    { id: "Paz", name: "Paz", parent: "Feliz", custom_field: "Sentimento de tranquilidade e harmonia interior, livre de conflitos e estresse." },
    { id: "Agradecimento", name: "Agradecimento", parent: "Paz", custom_field: "Sentimento de gratidão por experiências e pessoas que trazem alegria." },
    { id: "Amoroso", name: "Amoroso", parent: "Paz", custom_field: "Sentimento profundo de afeto e conexão emocional com os outros." },

    { id: "Poder", name: "Poder", parent: "Feliz", custom_field: "Sentimento de controle e capacidade de influenciar seu ambiente e decisões." },
    { id: "Criatividade", name: "Criatividade", parent: "Poder", custom_field: "Capacidade de gerar novas ideias e soluções inovadoras." },
    { id: "Coragem", name: "Coragem", parent: "Poder", custom_field: "Capacidade de enfrentar situações difíceis com bravura." },

    { id: "Aceitacao", name: "Aceitação", parent: "Feliz", custom_field: "Sentimento de reconhecimento e aprovação de si mesmo e dos outros, promovendo a paz interior." },
    { id: "Reconhecimento", name: "Reconhecimento", parent: "Aceitacao", custom_field: "Valorização e apreciação de si mesmo e dos outros." },
    { id: "Respeito", name: "Respeito", parent: "Aceitacao", custom_field: "Sentimento de consideração e valorização das diferenças." },

    { id: "Orgulho", name: "Orgulho", parent: "Feliz", custom_field: "Sentimento de satisfação e realização em relação a conquistas pessoais ou de outros." },
    { id: "Confianca2", name: "Confiança", parent: "Orgulho", custom_field: "Sentimento de segurança em si mesmo e em suas capacidades." },
    { id: "Respeito2", name: "Respeito", parent: "Orgulho", custom_field: "Sentimento de estima e consideração por si mesmo e pelos outros." },

    { id: "Interesse", name: "Interesse", parent: "Feliz", custom_field: "Sentimento de curiosidade e desejo de explorar novas informações ou experiências." },
    { id: "Indagacao", name: "Indagação", parent: "Interesse", custom_field: "Ato de questionar ou buscar respostas para entender melhor o mundo." },
    { id: "Curiosidade", name: "Curiosidade", parent: "Interesse", custom_field: "Desejo de aprender e descobrir coisas novas." },

    { id: "Satisfacao", name: "Satisfação", parent: "Feliz", custom_field: "Sentimento de contentamento e plenitude com a vida e suas circunstâncias." },
    { id: "Felicidade", name: "Felicidade", parent: "Satisfacao", custom_field: "Sentimento geral de alegria e bem-estar." },
    { id: "Liberdade", name: "Liberdade", parent: "Satisfacao", custom_field: "Sentimento de ter controle e autonomia sobre a própria vida." },

    { id: "Diversao", name: "Diversão", parent: "Feliz", custom_field: "Sentimento de prazer e alegria ao se envolver em atividades recreativas e leves." },
    { id: "Atrevimento", name: "Atrevimento", parent: "Diversao", custom_field: "Sentimento de ousadia e disposição para correr riscos de maneira divertida." },
    { id: "Excitacao", name: "Excitação", parent: "Diversao", custom_field: "Sentimento intenso de entusiasmo e energia em relação a experiências." },

    { id: "Surpresa", name: "Surpresa", parent: "Emocoes", custom_field: "Sentimento intenso que surge diante de eventos inesperados, que podem ser positivos ou negativos.", fill: "#bca2d1" },
    { id: "Excitacao2", name: "Excitação", parent: "Surpresa", custom_field: "Sentimento de energia elevada e entusiasmo, frequentemente associado a novas experiências." },
    { id: "Energetico", name: "Energético", parent: "Excitacao2", custom_field: "Sentimento de vitalidade e disposição para agir." },
    { id: "Ansiedade2", name: "Ansiedade", parent: "Excitacao2", custom_field: "Sentimento de preocupação ou nervosismo antecipando eventos futuros." },

    { id: "Espanto", name: "Espanto", parent: "Surpresa", custom_field: "Sentimento de surpresa intensa, frequentemente resultante de algo chocante ou impressionante." },
    { id: "Temor", name: "Temor", parent: "Espanto", custom_field: "Sentimento de medo ou apreensão em relação a algo desconhecido." },
    { id: "Atonito", name: "Atônito", parent: "Espanto", custom_field: "Sentimento de estar em estado de choque ou perplexidade." },

    { id: "Confusao", name: "Confusão", parent: "Surpresa", custom_field: "Sentimento de incerteza ou falta de clareza sobre uma situação ou evento." },
    { id: "Perplexidade", name: "Perplexidade", parent: "Confusao", custom_field: "Sentimento de estar confuso ou surpreso por algo inesperado." },
    { id: "Desilusao", name: "Desilusão", parent: "Confusao", custom_field: "Sentimento de desapontamento resultante de expectativas não cumpridas." },

    { id: "Assombro", name: "Assombro", parent: "Surpresa", custom_field: "Sentimento de admiração ou espanto diante de algo grandioso ou impressionante." },
    { id: "Desanimo", name: "Desânimo", parent: "Assombro", custom_field: "Sentimento de perda de motivação ou esperança." },
    { id: "Choque", name: "Choque", parent: "Assombro", custom_field: "Sentimento de surpresa e impacto emocional intenso." },

    { id: "Mal", name: "Mal", parent: "Emocoes", custom_field: "Sentimento de desconforto ou infelicidade, muitas vezes associado a estresse ou cansaço.", fill: "#8ed9ae" },
    { id: "Cansaco", name: "Cansaço", parent: "Mal", custom_field: "Sentimento de fadiga física e mental resultante de esforço excessivo ou estresse." },
    { id: "Disperso", name: "Disperso", parent: "Cansaco", custom_field: "Sentimento de falta de concentração e foco." },
    { id: "Sonolento", name: "Sonolento", parent: "Cansaco", custom_field: "Sensação de necessidade de dormir devido ao cansaço." },

    { id: "Estresse", name: "Estresse", parent: "Mal", custom_field: "Sentimento de pressão e tensão emocional, frequentemente decorrente de responsabilidades excessivas." },
    { id: "SemControle", name: "Sem Controle", parent: "Estresse", custom_field: "Sentimento de impotência diante das circunstâncias." },
    { id: "Sobrecarregado", name: "Sobrecarregado", parent: "Estresse", custom_field: "Sentimento de estar lidando com mais do que se pode suportar." },

    { id: "Ocupado", name: "Ocupado", parent: "Mal", custom_field: "Sentimento de estar constantemente envolvido em atividades, resultando em exaustão." },
    { id: "Agradecimento", name: "Agradecimento", parent: "Ocupado", custom_field: "Sentimento de gratidão por apoio, mesmo em tempos ocupados." },
    { id: "Pressionado", name: "Pressionado", parent: "Ocupado", custom_field: "Sentimento de estar sob pressão para cumprir prazos ou expectativas." },

    { id: "Tedio", name: "Tédio", parent: "Mal", custom_field: "Sentimento de desinteresse e falta de estímulo, resultando em frustração." },
    { id: "Apatia", name: "Apátia", parent: "Tedio", custom_field: "Sentimento de indiferença e falta de emoção." },
    { id: "Indiferenca", name: "Indiferença", parent: "Tedio", custom_field: "Sentimento de não se importar com eventos ou situações ao redor." },

    { id: "Medo", name: "Medo", parent: "Emocoes", custom_field: "Sentimento de apreensão diante de situações ameaçadoras ou desconhecidas.", fill: "#ffde8d" },
    { id: "Assustado", name: "Assustado", parent: "Medo", custom_field: "Sentimento de medo intenso em resposta a situações que provocam pavor." },
    { id: "Indefeso", name: "Indefeso", parent: "Assustado", custom_field: "Sentimento de vulnerabilidade e impotência em situações de risco." },
    { id: "Aterrorizado", name: "Aterrorizado", parent: "Assustado", custom_field: "Sentimento extremo de medo que pode paralisar ou causar reações intensas." },

    { id: "Ansiedade", name: "Ansiedade", parent: "Medo", custom_field: "Sentimento de preocupação constante e desconforto em resposta a incertezas." },
    { id: "Sobrecarregado2", name: "Sobrecarregado", parent: "Ansiedade", custom_field: "Sentimento de estar lutando para lidar com muitas demandas ao mesmo tempo." },
    { id: "Preocupacao", name: "Preocupação", parent: "Ansiedade", custom_field: "Sentimento de ansiedade sobre eventos futuros ou consequências." },

    { id: "Inseguranca", name: "Insegurança", parent: "Medo", custom_field: "Sentimento de dúvida e falta de confiança em si mesmo e nas próprias capacidades." },
    { id: "Inadequado", name: "Inadequado", parent: "Inseguranca", custom_field: "Sentimento de não ser bom o suficiente em comparação aos outros." },
    { id: "Inferior2", name: "Inferior", parent: "Inseguranca", custom_field: "Sentimento de ser menos importante ou menos capaz do que os outros." },

    { id: "Fraco", name: "Fraco", parent: "Medo", custom_field: "Sentimento de fraqueza emocional ou física, resultando em incapacidade de lidar com desafios." },
    { id: "Incapaz", name: "Incapaz", parent: "Fraco", custom_field: "Sentimento de não ter a habilidade ou força necessária para realizar algo." },
    { id: "Insignificante", name: "Insignificante", parent: "Fraco", custom_field: "Sentimento de falta de valor ou importância." },

    { id: "Rejeicao2", name: "Rejeição", parent: "Medo", custom_field: "Sentimento de ser excluído ou não aceito, causando dor emocional." },
    { id: "Excluido", name: "Excluído", parent: "Rejeicao2", custom_field: "Sentimento de ser deixado de fora de grupos ou atividades sociais." },
    { id: "Reprimido", name: "Reprimido", parent: "Rejeicao2", custom_field: "Sentimento de ser silenciado ou censurado por opiniões ou ações." },

    { id: "Ameaçado", name: "Ameaçado", parent: "Medo", custom_field: "Sentimento de perigo iminente, levando a reações de defesa." },
    { id: "Nervoso", name: "Nervoso", parent: "Ameaçado", custom_field: "Sentimento de ansiedade e tensão, muitas vezes em situações sociais." },
    { id: "Exposto", name: "Exposto", parent: "Ameaçado", custom_field: "Sentimento de vulnerabilidade em uma situação onde se sente em risco." },

    { id: "Raiva", name: "Raiva", parent: "Emocoes", custom_field: "Sentimento intenso de frustração e hostilidade, muitas vezes resultante de injustiças percebidas.", fill: "#ff8f8e" },
    { id: "Desapontado3", name: "Desapontado", parent: "Raiva", custom_field: "Sentimento de traição ou insatisfação profunda em relação a ações de outros." },
    { id: "Traido", name: "Traído", parent: "Desapontado3", custom_field: "Sentimento de desconfiança e dor emocional após ser enganado." },
    { id: "Resentido2", name: "Resentido", parent: "Desapontado3", custom_field: "Sentimento de amargura em relação a ofensas passadas." },

    { id: "Humilhacao", name: "Humilhação", parent: "Raiva", custom_field: "Sentimento de desrespeito ou menosprezo, causando dor emocional significativa." },
    { id: "Desrespeitado", name: "Desrespeitado", parent: "Humilhacao", custom_field: "Sentimento de não ser valorizado ou tratado com dignidade." },
    { id: "Ridicularizado2", name: "Ridicularizado", parent: "Humilhacao", custom_field: "Sentimento de vergonha ao ser alvo de zombarias." },

    { id: "Amargura", name: "Amargura", parent: "Raiva", custom_field: "Sentimento de ressentimento e dor emocional, frequentemente resultante de experiências negativas." },
    { id: "Indignado", name: "Indignado", parent: "Amargura", custom_field: "Sentimento intenso de raiva em resposta a uma injustiça." },
    { id: "Violado", name: "Violado", parent: "Amargura", custom_field: "Sentimento de ter seus direitos ou sentimentos desrespeitados." },

    { id: "Ensandecido", name: "Ensandecido", parent: "Raiva", custom_field: "Sentimento de raiva extrema que pode levar a comportamentos impulsivos." },
    { id: "Furia", name: "Fúria", parent: "Ensandecido", custom_field: "Sentimento de raiva intensa que pode resultar em explosões emocionais." },
    { id: "Inveja", name: "Inveja", parent: "Ensandecido", custom_field: "Sentimento de descontentamento devido às conquistas ou posses de outros." },

    { id: "Agressivo", name: "Agressivo", parent: "Raiva", custom_field: "Sentimento de hostilidade que pode se manifestar em comportamentos confrontadores." },
    { id: "Provocador", name: "Provocador", parent: "Agressivo", custom_field: "Sentimento de desejo de incitar ou desafiar os outros." },
    { id: "Hostil", name: "Hostil", parent: "Agressivo", custom_field: "Sentimento de antagonismo ou oposição em relação a outros." },

    { id: "Frustracao", name: "Frustração", parent: "Raiva", custom_field: "Sentimento de insatisfação e impotência diante de obstáculos que não podem ser superados." },
    { id: "Enfurecido", name: "Enfurecido", parent: "Frustracao", custom_field: "Sentimento de raiva intensa e irritação." },
    { id: "Aborrecido", name: "Aborrecido", parent: "Frustracao", custom_field: "Sentimento de descontentamento que pode levar a reações emocionais." },

    { id: "Reservado", name: "Reservado", parent: "Raiva", custom_field: "Sentimento de contenção emocional, onde a pessoa evita expressar seus sentimentos." },
    { id: "Retraido", name: "Retraído", parent: "Reservado", custom_field: "Sentimento de se afastar ou evitar interações sociais." },
    { id: "Entorpecido", name: "Entorpecido", parent: "Reservado", custom_field: "Sentimento de desconexão emocional, onde a pessoa não se sente presente." },

    { id: "Critico", name: "Crítico", parent: "Raiva", custom_field: "Sentimento de julgamento severo em relação a si mesmo ou aos outros, resultando em insatisfação." },
    { id: "Cetico", name: "Cético", parent: "Critico", custom_field: "Sentimento de dúvida e desconfiança em relação a ideias ou pessoas." },
    { id: "Arrogante", name: "Arrogante", parent: "Critico", custom_field: "Sentimento de superioridade que leva à desconsideração dos outros." },
];