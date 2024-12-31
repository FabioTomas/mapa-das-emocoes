var data = [
    {
        name: "Emoções",         
        children: [
            {
                name: "Enjoado",
                custom_field: "Sentimento de repulsa ou desconforto, muitas vezes associado a uma sensação de náusea ou aversão a algo.",
                fill: "#8f8f8f",
                children: [
                    {
                        name: "Desaprovação",
                        custom_field: "Sentimento de rejeição em relação a algo que não atende às expectativas ou padrões.",
                        children: [
                            { name: "Julgamento", custom_field: "Ato de avaliar ou criticar alguém ou algo, muitas vezes com uma conotação negativa." },
                            { name: "Constrangido", custom_field: "Sentimento de vergonha ou embaraço em uma situação social." },
                        ]
                    },
                    {
                        name: "Desapontado",
                        custom_field: "Sentimento de insatisfação que surge quando as expectativas não são atendidas.",
                        children: [
                            { name: "Chocado", custom_field: "Sentimento de surpresa intensa, frequentemente associado a eventos inesperados." },
                            { name: "Revoltado", custom_field: "Sentimento de indignação ou raiva devido a uma injustiça percebida." },
                        ]
                    },
                    {
                        name: "Terrível",
                        custom_field: "Sentimento de extrema negatividade, muitas vezes associado a experiências profundamente desconfortáveis.",
                        children: [
                            { name: "Nauseado", custom_field: "Sensação física de enjoo, frequentemente acompanhada por mal-estar." },
                            { name: "Detestável", custom_field: "Sentimento de aversão intensa em relação a algo ou alguém." },
                        ]
                    },
                    {
                        name: "Rejeição",
                        custom_field: "Sentimento de exclusão ou não aceitação, que pode levar a uma dor emocional significativa.",
                        children: [
                            { name: "Horrorizado", custom_field: "Sentimento de choque e repulsa diante de algo extremamente perturbador." },
                            { name: "Hesitação", custom_field: "Sentimento de dúvida ou insegurança que impede a ação." },
                        ]
                    }
                ]
            },
            {
                name: "Triste",
                custom_field: "Sentimento de melancolia, frequentemente associado a perdas ou desilusões na vida.",
                fill: "#8fbde1",
                children: [
                    {
                        name: "Magoado",
                        custom_field: "Sentimento de dor emocional resultante de ações de outras pessoas que ferem ou decepcionam.",
                        children: [
                            { name: "Constrangido", custom_field: "Sentimento de vergonha em situações sociais, criando desconforto." },
                            { name: "Desapontado", custom_field: "Sentimento de insatisfação quando as expectativas não são cumpridas." },
                        ]
                    },
                    {
                        name: "Depressivo",
                        custom_field: "Sentimento de tristeza profunda e prolongada, muitas vezes acompanhado por falta de energia e desinteresse.",
                        children: [
                            { name: "Inferior", custom_field: "Sentimento de inadequação em relação aos outros, levando a uma autoimagem negativa." },
                            { name: "Vazio", custom_field: "Sentimento de falta de propósito ou significado na vida." },
                        ]
                    },
                    {
                        name: "Culpa", 
                        custom_field: "Sentimento de responsabilidade ou arrependimento por ações que causaram danos ou descontentamento a outros.",
                        children: [
                            { name: "Remorso", custom_field: "Sentimento de tristeza ou arrependimento por algo que foi feito ou deixado de fazer." },
                            { name: "Vergonha", custom_field: "Sentimento de desconforto ou humilhação em relação a si mesmo." },
                        ]
                    },
                    {
                        name: "Desespero",
                        custom_field: "Sentimento de falta de esperança, muitas vezes levando a comportamentos autodestrutivos.",
                        children: [
                            { name: "Impotente", custom_field: "Sentimento de incapacidade de mudar ou influenciar uma situação." },
                            { name: "Sofrimento", custom_field: "Experiência de dor emocional ou física intensa." },
                        ]
                    },
                    {
                        name: "Vulnerável",
                        custom_field: "Sentimento de fragilidade emocional, onde alguém se sente exposto a ferimentos emocionais.",
                        children: [
                            { name: "Frágil", custom_field: "Sentimento de delicadeza emocional, onde pequenos eventos podem causar dor." },
                            { name: "Vitimado", custom_field: "Sentimento de ser alvo de injustiças ou abusos." },
                        ]
                    },
                    {
                        name: "Solidão",
                        custom_field: "Sentimento de isolamento, onde a pessoa sente falta de conexão ou companhia.",
                        children: [
                            { name: "Abandonado", custom_field: "Sentimento de ser deixado para trás ou esquecido por aqueles que se importam." },
                            { name: "Isolado", custom_field: "Sentimento de estar longe dos outros, resultando em solidão." },
                        ]
                    },
                ]
            },
            {
                name: "Feliz",
                custom_field: "Sentimento de alegria e contentamento com a vida, gerando uma sensação de bem-estar.",
                fill: "#ffff8f",
                children: [
                    {
                        name: "Otimismo",
                        custom_field: "Expectativa positiva em relação ao futuro, acreditando que coisas boas podem acontecer.",
                        children: [
                            { name: "Inspiração", custom_field: "Sentimento de motivação e criatividade que leva a ações positivas." },
                            { name: "Esperança", custom_field: "Sentimento de expectativa positiva em relação ao que está por vir." },
                        ]
                    },
                    {
                        name: "Confiança",
                        custom_field: "Sentimento de segurança em si mesmo e em suas capacidades, promovendo ações decisivas.",
                        children: [
                            { name: "Intimidade", custom_field: "Sentimento de proximidade emocional com outra pessoa." },
                            { name: "Sensibilidade", custom_field: "Capacidade de perceber e responder às emoções dos outros." },
                        ]
                    },
                    {
                        name: "Paz",
                        custom_field: "Sentimento de tranquilidade e harmonia interior, livre de conflitos e estresse.",
                        children: [
                            { name: "Agradecimento", custom_field: "Sentimento de gratidão por experiências e pessoas que trazem alegria." },
                            { name: "Amoroso", custom_field: "Sentimento profundo de afeto e conexão emocional com os outros." },
                        ]
                    },
                    {
                        name: "Poder",
                        custom_field: "Sentimento de controle e capacidade de influenciar seu ambiente e decisões.",
                        children: [
                            { name: "Criatividade", custom_field: "Capacidade de gerar novas ideias e soluções inovadoras." },
                            { name: "Coragem", custom_field: "Capacidade de enfrentar situações difíceis com bravura." },
                        ]
                    },
                    {
                        name: "Aceitação",
                        custom_field: "Sentimento de reconhecimento e aprovação de si mesmo e dos outros, promovendo a paz interior.",
                        children: [
                            { name: "Reconhecimento", custom_field: "Valorização e apreciação de si mesmo e dos outros." },
                            { name: "Respeito", custom_field: "Sentimento de consideração e valorização das diferenças." },
                        ]
                    },
                    {
                        name: "Orgulho",
                        custom_field: "Sentimento de satisfação e realização em relação a conquistas pessoais ou de outros.",
                        children: [
                            { name: "Confiança", custom_field: "Sentimento de segurança em si mesmo e em suas capacidades." },
                            { name: "Respeito", custom_field: "Sentimento de estima e consideração por si mesmo e pelos outros." },
                        ]
                    },
                    {
                        name: "Interesse",
                        custom_field: "Sentimento de curiosidade e desejo de explorar novas informações ou experiências.",
                        children: [
                            { name: "Indagação", custom_field: "Ato de questionar ou buscar respostas para entender melhor o mundo." },
                            { name: "Curiosidade", custom_field: "Desejo de aprender e descobrir coisas novas." },
                        ]
                    },
                    {
                        name: "Satisfação",
                        custom_field: "Sentimento de contentamento e plenitude com a vida e suas circunstâncias.",
                        children: [
                            { name: "Felicidade", custom_field: "Sentimento geral de alegria e bem-estar." },
                            { name: "Liberdade", custom_field: "Sentimento de ter controle e autonomia sobre a própria vida." },
                        ]
                    },
                    {
                        name: "Diversão",
                        custom_field: "Sentimento de prazer e alegria ao se envolver em atividades recreativas e leves.",
                        children: [
                            { name: "Atrevimento", custom_field: "Sentimento de ousadia e disposição para correr riscos de maneira divertida." },
                            { name: "Excitação", custom_field: "Sentimento intenso de entusiasmo e energia em relação a experiências." },
                        ]
                    },
                ]
            },
            {
                name: "Surpresa",
                custom_field: "Sentimento intenso que surge diante de eventos inesperados, que podem ser positivos ou negativos.",
                fill: "#bca2d1",
                children: [
                    {
                        name: "Excitação",
                        custom_field: "Sentimento de energia elevada e entusiasmo, frequentemente associado a novas experiências.",
                        children: [
                            { name: "Energético", custom_field: "Sentimento de vitalidade e disposição para agir." },
                            { name: "Ansiedade", custom_field: "Sentimento de preocupação ou nervosismo antecipando eventos futuros." },
                        ]
                    },
                    {
                        name: "Espanto",
                        custom_field: "Sentimento de surpresa intensa, frequentemente resultante de algo chocante ou impressionante.",
                        children: [
                            { name: "Temor", custom_field: "Sentimento de medo ou apreensão em relação a algo desconhecido." },
                            { name: "Atônito", custom_field: "Sentimento de estar em estado de choque ou perplexidade." },
                        ]
                    },
                    {
                        name: "Confusão",
                        custom_field: "Sentimento de incerteza ou falta de clareza sobre uma situação ou evento.",
                        children: [
                            { name: "Perplexidade", custom_field: "Sentimento de estar confuso ou surpreso por algo inesperado." },
                            { name: "Desilusão", custom_field: "Sentimento de desapontamento resultante de expectativas não cumpridas." },
                        ]
                    },
                    {
                        name: "Assombro",
                        custom_field: "Sentimento de admiração ou espanto diante de algo grandioso ou impressionante.",
                        children: [
                            { name: "Desânimo", custom_field: "Sentimento de perda de motivação ou esperança." },
                            { name: "Choque", custom_field: "Sentimento de surpresa e impacto emocional intenso." },
                        ]
                    }
                ]
            },
            {
                name: "Mal",
                custom_field: "Sentimento de desconforto ou infelicidade, muitas vezes associado a estresse ou cansaço.",
                fill: "#8ed9ae",
                children: [
                    {
                        name: "Cansaço",
                        custom_field: "Sentimento de fadiga física e mental resultante de esforço excessivo ou estresse.",
                        children: [
                            { name: "Disperso", custom_field: "Sentimento de falta de concentração e foco." },
                            { name: "Sonolento", custom_field: "Sensação de necessidade de dormir devido ao cansaço." },
                        ]
                    },
                    {
                        name: "Estresse",
                        custom_field: "Sentimento de pressão e tensão emocional, frequentemente decorrente de responsabilidades excessivas.",
                        children: [
                            { name: "Sem Controle", custom_field: "Sentimento de impotência diante das circunstâncias." },
                            { name: "Sobrecarregado", custom_field: "Sentimento de estar lidando com mais do que se pode suportar." },
                        ]
                    },
                    {
                        name: "Ocupado",
                        custom_field: "Sentimento de estar constantemente envolvido em atividades, resultando em exaustão.",
                        children: [
                            { name: "Agradecimento", custom_field: "Sentimento de gratidão por apoio, mesmo em tempos ocupados." },
                            { name: "Pressionado", custom_field: "Sentimento de estar sob pressão para cumprir prazos ou expectativas." },
                        ]
                    },
                    {
                        name: "Tédio",
                        custom_field: "Sentimento de desinteresse e falta de estímulo, resultando em frustração.",
                        children: [
                            { name: "Apátia", custom_field: "Sentimento de indiferença e falta de emoção." },
                            { name: "Indiferença", custom_field: "Sentimento de não se importar com eventos ou situações ao redor." },
                        ]
                    }
                ]
            },
            {
                name: "Medo",
                custom_field: "Sentimento de apreensão diante de situações ameaçadoras ou desconhecidas.",
                fill: "#ffde8d",
                children: [
                    {
                        name: "Assustado",
                        custom_field: "Sentimento de medo intenso em resposta a situações que provocam pavor.",
                        children: [
                            { name: "Indefeso", custom_field: "Sentimento de vulnerabilidade e impotência em situações de risco." },
                            { name: "Aterrorizado", custom_field: "Sentimento extremo de medo que pode paralisar ou causar reações intensas." },
                        ]
                    },
                    {
                        name: "Ansiedade",
                        custom_field: "Sentimento de preocupação constante e desconforto em resposta a incertezas.",
                        children: [
                            { name: "Sobrecarregado", custom_field: "Sentimento de estar lutando para lidar com muitas demandas ao mesmo tempo." },
                            { name: "Preocupação", custom_field: "Sentimento de ansiedade sobre eventos futuros ou consequências." },
                        ]
                    },
                    {
                        name: "Insegurança",
                        custom_field: "Sentimento de dúvida e falta de confiança em si mesmo e nas próprias capacidades.",
                        children: [
                            { name: "Inadequado", custom_field: "Sentimento de não ser bom o suficiente em comparação aos outros." },
                            { name: "Inferior", custom_field: "Sentimento de ser menos importante ou menos capaz do que os outros." },
                        ]
                    },
                    {
                        name: "Fraco",
                        custom_field: "Sentimento de fraqueza emocional ou física, resultando em incapacidade de lidar com desafios.",
                        children: [
                            { name: "Incapaz", custom_field: "Sentimento de não ter a habilidade ou força necessária para realizar algo." },
                            { name: "Insignificante", custom_field: "Sentimento de falta de valor ou importância." },
                        ]
                    },
                    {
                        name: "Rejeição",
                        custom_field: "Sentimento de ser excluído ou não aceito, causando dor emocional.",
                        children: [
                            { name: "Excluído", custom_field: "Sentimento de ser deixado de fora de grupos ou atividades sociais." },
                            { name: "Reprimido", custom_field: "Sentimento de ser silenciado ou censurado por opiniões ou ações." },
                        ]
                    },
                    {
                        name: "Ameaçado",
                        custom_field: "Sentimento de perigo iminente, levando a reações de defesa.",
                        children: [
                            { name: "Nervoso", custom_field: "Sentimento de ansiedade e tensão, muitas vezes em situações sociais." },
                            { name: "Exposto", custom_field: "Sentimento de vulnerabilidade em uma situação onde se sente em risco." },
                        ]
                    }
                ]
            },
            {
                name: "Raiva",
                custom_field: "Sentimento intenso de frustração e hostilidade, muitas vezes resultante de injustiças percebidas.",
                fill: "#ff8f8e",
                children: [
                    {
                        name: "Desapontado",
                        custom_field: "Sentimento de traição ou insatisfação profunda em relação a ações de outros.",
                        children: [
                            { name: "Traído", custom_field: "Sentimento de desconfiança e dor emocional após ser enganado." },
                            { name: "Resentido", custom_field: "Sentimento de amargura em relação a ofensas passadas." },
                        ]
                    },
                    {
                        name: "Humilhação",
                        custom_field: "Sentimento de desrespeito ou menosprezo, causando dor emocional significativa.",
                        children: [
                            { name: "Desrespeitado", custom_field: "Sentimento de não ser valorizado ou tratado com dignidade." },
                            { name: "Ridicularizado", custom_field: "Sentimento de vergonha ao ser alvo de zombarias." },
                        ]
                    },
                    {
                        name: "Amargura",
                        custom_field: "Sentimento de ressentimento e dor emocional, frequentemente resultante de experiências negativas.",
                        children: [
                            { name: "Indignado", custom_field: "Sentimento intenso de raiva em resposta a uma injustiça." },
                            { name: "Violado", custom_field: "Sentimento de ter seus direitos ou sentimentos desrespeitados." },
                        ]
                    },
                    {
                        name: "Ensandecido",
                        custom_field: "Sentimento de raiva extrema que pode levar a comportamentos impulsivos.",
                        children: [
                            { name: "Fúria", custom_field: "Sentimento de raiva intensa que pode resultar em explosões emocionais." },
                            { name: "Inveja", custom_field: "Sentimento de descontentamento devido às conquistas ou posses de outros." },
                        ]
                    },
                    {
                        name: "Agressivo",
                        custom_field: "Sentimento de hostilidade que pode se manifestar em comportamentos confrontadores.",
                        children: [
                            { name: "Provocador", custom_field: "Sentimento de desejo de incitar ou desafiar os outros." },
                            { name: "Hostil", custom_field: "Sentimento de antagonismo ou oposição em relação a outros." },
                        ]
                    },
                    {
                        name: "Frustração",
                        custom_field: "Sentimento de insatisfação e impotência diante de obstáculos que não podem ser superados.",
                        children: [
                            { name: "Enfurecido", custom_field: "Sentimento de raiva intensa e irritação." },
                            { name: "Aborrecido", custom_field: "Sentimento de descontentamento que pode levar a reações emocionais." },
                        ]
                    },
                    {
                        name: "Reservado",
                        custom_field: "Sentimento de contenção emocional, onde a pessoa evita expressar seus sentimentos.",
                        children: [
                            { name: "Retraído", custom_field: "Sentimento de se afastar ou evitar interações sociais." },
                            { name: "Entorpecido", custom_field: "Sentimento de desconexão emocional, onde a pessoa não se sente presente." },
                        ]
                    },
                    {
                        name: "Crítico",
                        custom_field: "Sentimento de julgamento severo em relação a si mesmo ou aos outros, resultando em insatisfação.",
                        children: [
                            { name: "Cético", custom_field: "Sentimento de dúvida e desconfiança em relação a ideias ou pessoas." },
                            { name: "Arrogante", custom_field: "Sentimento de superioridade que leva à desconsideração dos outros." },
                        ]
                    }
                ]
            },
        ]
    }
];