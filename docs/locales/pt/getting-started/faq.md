---
outline: [2]
---
# Perguntas Frequentes (FAQ)

Abaixo estão algumas das perguntas mais comuns.

## Geral

#### Onde o servidor está localizado?
> O servidor está hospedado na Alemanha.

#### Qual é a confiabilidade da API?
> Nossa API mantém atualmente uma disponibilidade (uptime) de **pelo menos** 99,99% ao ano.

#### Preciso dar créditos ao usar a API?
> Não, a atribuição não é obrigatória, mas agradecemos muito quando ela é feita.

## Imagens e GIFs

#### As imagens e os GIFs são realmente seguros?
> Priorizamos conteúdo totalmente seguro para o trabalho (SFW). Diferente de muitas outras APIs de anime, você não vai encontrar personagens com roupas sexualmente sugestivas (como trajes de banho, biquínis, roupas íntimas, peças transparentes ou trajes excessivamente reveladores).\
> Também excluímos conteúdos como *panty shots* (quando a roupa íntima aparece intencionalmente), conteúdos sugestivos focados em axilas e outros materiais voltados a fetiches.\
> Cada imagem e GIF é escolhido com cuidado para garantir conteúdo seguro e de alta qualidade, em vez de focar apenas em volume.

#### Posso usar as imagens ou GIFs comercialmente?
> Não. O uso comercial é proibido conforme descrito nos nossos [Termos de Serviço](/legal/tos).\
> As imagens não pertencem a nós e são compartilhadas apenas para fins de entretenimento, com os devidos créditos aos criadores originais.

#### Sou obrigado a incluir os créditos dos artistas?
> Embora não seja obrigatório incluir os créditos dos artistas, recomendamos fortemente que você faça isso, já que a API já retorna essas informações.

#### Encontrei uma fonte incorreta ou ausente em uma imagem ou GIF. Onde posso relatar?
> Se você notar uma fonte incorreta ou ausente na API, relate isso no nosso servidor do Discord. Acesse o canal `#api-support` e crie uma nova postagem.

#### Vocês podem adicionar X à API?
> Sugestões de categorias devem ser enviadas no nosso servidor do Discord, onde temos um canal dedicado em `#suggestions`.
>
> **Nota:** Apenas sugestões de categorias SFW são aceitas. Sugestões que envolvam conteúdos como *lick* (lamber) ou *kidnap* (sequestrar) não seguem nossas diretrizes SFW e serão recusadas.

#### Quando novas imagens, GIFs ou categorias são lançados?
> Não há um cronograma fixo nem previsão de lançamento (ETA). Todo o conteúdo é adicionado manualmente, e as atualizações saem quando ficam prontas e conforme o tempo disponível dos mantenedores.

#### Posso contribuir com imagens ou GIFs para a API?
> Com certeza! Se quiser contribuir, entre no nosso servidor do Discord e crie uma postagem em `#api-support`.\
> Os contribuidores recebem um cargo especial de Contributor na nossa comunidade do Discord.

#### Existem imagens ou GIFs gerados por IA na API?
> Não. Todas as imagens e GIFs da API são criados por artistas humanos. Não aceitamos conteúdo gerado por IA.

#### Posso usar as imagens ou GIFs para treinar modelos de IA, ML ou LLM?
> **Não.** Conforme estabelecido nos nossos [Termos de Serviço](/legal/tos), usar conteúdo da API para treinar modelos de IA, aprendizado de máquina (ML) ou LLMs (incluindo *scraping* ou coleta de datasets) é estritamente proibido e resultará em banimento da API. Não podemos conceder permissão, pois não somos os proprietários do conteúdo.

#### Posso fazer cache, baixar ou fazer *scraping* das imagens ou GIFs?
> Fazer cache das **respostas JSON da API** (como metadados e URLs) é permitido apenas para **uso privado**, desde que não sejam tornadas públicas nem redistribuídas.\
> Fazer cache, baixar, fazer *scraping*, rehospedar ou extrair em massa os **arquivos reais de imagem ou GIF** é **estritamente proibido**, conforme os nossos [Termos de Serviço](/legal/tos), e resultará em banimento da API.

#### Qual é o tamanho dos GIFs?
> Nossos GIFs são leves e otimizados para carregar rápido, com tamanho médio de cerca de **~900 KB** por arquivo.

## Depuração e erros

#### Por que estou recebendo o código ERR-C "NB-BXIUA"?
> Cabeçalhos `User-Agent` vazios ou falsificados são bloqueados. Certifique-se de incluir um cabeçalho `User-Agent` válido nas suas requisições e evite simular strings de navegador ou se passar por crawlers conhecidos. Consulte nossa [documentação do User-Agent](/pt/getting-started/api-reference.html#user-agent) para ver o formato recomendado.

#### Por que estou recebendo o código ERR-C "NB-BCFSD"?
> `NB-BCFSD` significa que seu acesso à API foi banido pelo nosso sistema automático de detecção de abuso. Se você acredita que isso foi um engano, entre em contato pelo nosso [servidor do Discord](https://nekos.best/discord) ou envie um e-mail para **[contact@nekos.best](mailto:contact@nekos.best)**.

#### Por que estou recebendo o código ERR-C "NB-BXASN"?
> `NB-BXASN` significa que o seu ASN (Autonomous System Number) está banido no nosso sistema. Para fazer requisições, seu endereço IP precisará ser adicionado à lista de permissões (*whitelist*). Entre em contato pelo nosso [servidor do Discord](https://nekos.best/discord) ou envie um e-mail para **[contact@nekos.best](mailto:contact@nekos.best)**.

#### Eu uso uma VPN ou proxy, mas agora não consigo mais fazer requisições.
> VPNs e proxies são permitidos, mas têm limitações importantes. Seus endereços IP são compartilhados por muitos usuários, o que significa que um único usuário mal-intencionado pode causar o banimento de um IP e afetar todos os demais que o utilizam. IPs de VPN ou proxy banidos ficam bloqueados permanentemente, sem exceções, e são sinalizados com uma frequência muito maior do que IPs comuns. Se você depende de um e perder o acesso, infelizmente não há nada que possamos fazer.
