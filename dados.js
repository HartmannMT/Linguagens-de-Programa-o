let dados = [
    {
        nome: "JavaScript",
        descricao: "Uma linguagem amplamente usada tanto no desenvolvimento front-end quanto back-end. Ela permite a criação de sites dinâmicos, interativos e é essencial para desenvolvimento web moderno. No front-end, é usada junto com HTML e CSS para controlar o comportamento de páginas web. No back-end, frameworks como Node.js permitem a criação de servidores e APIs.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
        linkMaisInformacoes: "https://www.javascript.com/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
        nome: "Python",
        descricao: "Conhecida por sua simplicidade e legibilidade, Python é usada em diversas áreas, como ciência de dados, automação, desenvolvimento web e inteligência artificial. Sua extensa biblioteca padrão e comunidade ativa fazem dela uma linguagem poderosa para iniciantes e especialistas.",
        nivelDificuldade: "Fácil",
        linkDocumentacao: "https://docs.python.org/3/",
        linkMaisInformacoes: "https://www.python.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png"
    },
    {
        nome: "Java",
        descricao: "Uma linguagem robusta, estável e orientada a objetos, muito usada em grandes corporações, desenvolvimento Android e sistemas embarcados. Ela é popular por sua capacidade de rodar em qualquer plataforma que suporte a JVM (Java Virtual Machine), garantindo portabilidade de código.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://docs.oracle.com/javase/8/docs/",
        linkMaisInformacoes: "https://www.java.com/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Java_programming_language_logo.svg/96px-Java_programming_language_logo.svg.png"
    },
    {
        nome: "C++",
        descricao: "Uma linguagem de alto desempenho, derivada de C, amplamente utilizada em sistemas embarcados, jogos e aplicações que demandam alta performance. É complexa devido à sua flexibilidade e ao uso de ponteiros e gerenciamento manual de memória.",
        nivelDificuldade: "Difícil",
        linkDocumentacao: "https://en.cppreference.com/w/",
        linkMaisInformacoes: "https://isocpp.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
    },
    {
        nome: "C#",
        descricao: "Desenvolvida pela Microsoft, C# é uma linguagem versátil e moderna usada para desenvolver aplicações no ambiente Windows, além de jogos com o Unity, web apps no ASP.NET e até aplicativos móveis.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        linkMaisInformacoes: "https://docs.microsoft.com/en-us/dotnet/csharp/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/200px-C_Sharp_Logo_2023.svg.png"
    },
    {
        nome: "Ruby",
        descricao: "Uma linguagem de programação interpretada, dinâmica e orientada a objetos. Ruby é especialmente conhecida pelo framework Ruby on Rails, amplamente utilizado para o desenvolvimento rápido de aplicações web.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://www.ruby-lang.org/en/documentation/",
        linkMaisInformacoes: "https://www.ruby-lang.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/121px-Ruby_logo.svg.png"
    },
    {
        nome: "PHP",
        descricao: "Uma linguagem popular para desenvolvimento web, principalmente em servidores. PHP permite gerar páginas dinâmicas e interativas e é usada em plataformas de grande escala como WordPress e Facebook.",
        nivelDificuldade: "Fácil",
        linkDocumentacao: "https://www.php.net/docs.php",
        linkMaisInformacoes: "https://www.php.net/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
    },
    {
        nome: "Swift",
        descricao: "Swift foi criada pela Apple para ser uma linguagem mais simples, rápida e segura para o desenvolvimento de apps iOS e macOS. É altamente otimizada para o ambiente Apple e está substituindo o Objective-C.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://developer.apple.com/documentation/swift",
        linkMaisInformacoes: "https://swift.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/200px-Swift_logo.svg.png"
    },
    {
        nome: "Go (Golang)",
        descricao: "Criada pelo Google, Go é conhecida por sua simplicidade, velocidade e capacidade de lidar com concorrência de forma eficiente. Ela é usada para backend de serviços em larga escala e microserviços.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://golang.org/doc/",
        linkMaisInformacoes: "https://golang.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/215px-Go_Logo_Blue.svg.png"
    },
    {
        nome: "Kotlin",
        descricao: "Uma alternativa ao Java para desenvolvimento Android, Kotlin combina simplicidade e segurança com uma integração perfeita com o ecossistema Java. Ela está se tornando a linguagem principal para desenvolvimento Android.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://kotlinlang.org/docs/home.html",
        linkMaisInformacoes: "https://kotlinlang.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Kotlin_logo_2021.svg/180px-Kotlin_logo_2021.svg.png"
    },
    {
        nome: "TypeScript",
        descricao: "Um superconjunto de JavaScript que adiciona tipagem estática. Ideal para grandes aplicações web, onde a tipagem ajuda a evitar erros e torna o código mais escalável e fácil de manter.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://www.typescriptlang.org/docs/",
        linkMaisInformacoes: "https://www.typescriptlang.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/64px-Typescript.svg.png"
    },
    {
        nome: "Rust",
        descricao: "Focada em segurança e performance, Rust evita muitos erros comuns de memória, como vazamentos, sem perder a eficiência, sendo uma das linguagens mais elogiadas por sua robustez em sistemas de baixo nível.",
        nivelDificuldade: "Difícil",
        linkDocumentacao: "https://doc.rust-lang.org/",
        linkMaisInformacoes: "https://www.rust-lang.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/121px-Rust_programming_language_black_logo.svg.png"
    },
    {
        nome: "Perl",
        descricao: "Uma linguagem de script conhecida pela sua flexibilidade e facilidade em manipular texto, amplamente utilizada em automação de tarefas e administração de sistemas.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://perldoc.perl.org/",
        linkMaisInformacoes: "https://www.perl.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Perl_language_logo.svg/121px-Perl_language_logo.svg.png"
    },
    {
        nome: "Lua",
        descricao: "Usada principalmente em scripts de jogos, Lua é leve e flexível, oferecendo uma excelente performance para integração com aplicações e ambientes de tempo real.",
        nivelDificuldade: "Fácil",
        linkDocumentacao: "https://www.lua.org/manual/5.1/",
        linkMaisInformacoes: "https://www.lua.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/128px-Lua-Logo.svg.png"
    },
    {
        nome: "R",
        descricao: "Focada em estatística e gráficos, R é uma das linguagens mais utilizadas para análise de dados, com diversas bibliotecas para processamento e visualização.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://www.r-project.org/manuals.html",
        linkMaisInformacoes: "https://www.r-project.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/121px-R_logo.svg.png"
    },
    {
        nome: "MATLAB",
        descricao: "Popular entre engenheiros e cientistas, MATLAB é utilizada para cálculos numéricos avançados, modelagem e simulação de sistemas complexos.",
        nivelDificuldade: "Difícil",
        linkDocumentacao: "https://www.mathworks.com/help/matlab/",
        linkMaisInformacoes: "https://www.mathworks.com/products/matlab.html",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
    },
    {
        nome: "Scala",
        descricao: "Scala combina programação funcional com programação orientada a objetos, sendo uma linguagem muito utilizada em plataformas de processamento de grandes volumes de dados, como Apache Spark.",
        nivelDificuldade: "Difícil",
        linkDocumentacao: "https://docs.scala-lang.org/",
        linkMaisInformacoes: "https://www.scala-lang.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Scala-full-color.svg/121px-Scala-full-color.svg.png"
    },
    {
        nome: "Groovy",
        descricao: "Uma linguagem dinâmica que estende Java, usada principalmente para automação de tarefas e desenvolvimento de scripts simples, especialmente em ambientes Java.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://groovy-lang.org/documentation.html",
        linkMaisInformacoes: "https://groovy-lang.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Groovy-logo.svg/121px-Groovy-logo.svg.png"
    },
    {
        nome: "Haskell",
        descricao: "Uma linguagem funcional pura, conhecida por sua robustez em garantir código seguro e sem efeitos colaterais. É usada principalmente em pesquisa e aplicações críticas.",
        nivelDificuldade: "Difícil",
        linkDocumentacao: "https://www.haskell.org/documentation/",
        linkMaisInformacoes: "https://www.haskell.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Logo_of_the_Haskell_programming_language.svg/250px-Logo_of_the_Haskell_programming_language.svg.png"
    },
    {
        nome: "F#",
        descricao: "Parte do ecossistema .NET, F# é uma linguagem funcional que também suporta orientação a objetos, usada para resolver problemas complexos com menos código.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://docs.microsoft.com/en-us/dotnet/fsharp/",
        linkMaisInformacoes: "https://fsharp.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/F_Sharp_logo.svg/128px-F_Sharp_logo.svg.png"
    },
    {
        nome: "Visual Basic",
        descricao: "Uma linguagem orientada a eventos, amplamente usada no desenvolvimento de aplicações Windows e em automação com o Microsoft Office.",
        nivelDificuldade: "Fácil",
        linkDocumentacao: "https://docs.microsoft.com/en-us/dotnet/visual-basic/",
        linkMaisInformacoes: "https://www.visual-basic.net/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/2048px-VB.NET_Logo.svg.png"
    },
    {
        nome: "ActionScript",
        descricao: "Era a linguagem usada para interações dentro de aplicações Flash, muito popular na criação de jogos e animações online.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://www.adobe.com/content/dam/acom/en/devnet/actionscript/pdfs/actionscript3_language_reference.pdf",
        linkMaisInformacoes: "https://www.adobe.com/products/flashplayer.html",
        linkImagem: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/ActionScript_icon.png/121px-ActionScript_icon.png"
    },
    {
        nome: "Ada",
        descricao: "Usada em sistemas de tempo real e em ambientes onde a segurança é crucial, Ada é conhecida por sua confiabilidade, sendo usada em sistemas militares e aeroespaciais.",
        nivelDificuldade: "Difícil",
        linkDocumentacao: "https://www.adacore.com/docs/gnat_coverage/ada_coverage.html",
        linkMaisInformacoes: "https://www.adaic.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ada_horizon_green_logo_with_slogan.svg/1280px-Ada_horizon_green_logo_with_slogan.svg.png"
    },
    {
        nome: "Smalltalk",
        descricao: "Uma linguagem influente na história da programação orientada a objetos, usada principalmente em ambientes acadêmicos e na prototipagem de sistemas.",
        nivelDificuldade: "Difícil",
        linkDocumentacao: "https://www.squeak.org/documentation/",
        linkMaisInformacoes: "https://www.smalltalk.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Smalltalk_Balloon.svg/150px-Smalltalk_Balloon.svg.png"
    },
    {
        nome: "D",
        descricao: "Uma linguagem de sistemas que mistura a performance do C++ com a simplicidade de linguagens mais modernas, usada principalmente para desenvolvimento de software de alto desempenho.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://dlang.org/spec/",
        linkMaisInformacoes: "https://dlang.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/D_Programming_Language_logo.svg/120px-D_Programming_Language_logo.svg.png"
    },
    {
        nome: "Julia",
        descricao: "Projetada para alta performance em computação científica, Julia combina a facilidade de uso com uma velocidade quase comparável a linguagens de baixo nível.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://docs.julialang.org/",
        linkMaisInformacoes: "https://julialang.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Julia_Programming_Language_Logo.svg/120px-Julia_Programming_Language_Logo.svg.png"
    },
    {
        nome: "Shell",
        descricao: "Usada em sistemas Unix e Linux para automação de tarefas administrativas e desenvolvimento de scripts, sendo a base de diversas operações do sistema.",
        nivelDificuldade: "Fácil",
        linkDocumentacao: "https://www.gnu.org/software/bash/manual/",
        linkMaisInformacoes: "https://en.wikipedia.org/wiki/Shell_script",
        linkImagem: "https://lucidica.co.uk/wp-content/uploads/2015/11/PowerShell-logo-e1448884592228-1200x900.png"
    },
    {
        nome: "Erlang",
        descricao: "Uma linguagem de programação funcional criada para sistemas de telecomunicações e aplicativos distribuídos, conhecida por sua alta concorrência, tolerância a falhas e capacidade de manter sistemas em tempo real sem interrupções.",
        nivelDificuldade: "Difícil",
        linkDocumentacao: "https://www.erlang.org/docs",
        linkMaisInformacoes: "https://www.erlang.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Erlang_logo.svg/120px-Erlang_logo.svg.png"
    },
    {
        nome: "OCaml",
        descricao: "Uma linguagem de programação funcional que também suporta paradigmas imperativos e orientados a objetos, combinando expressividade e eficiência, amplamente usada em áreas acadêmicas e na indústria para análise de dados e verificação formal.",
        nivelDificuldade: "Difícil",
        linkDocumentacao: "https://ocaml.org/manual/",
        linkMaisInformacoes: "https://ocaml.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/OCaml_Logo.svg/121px-OCaml_Logo.svg.png"
    },
    {
        nome: "VBScript",
        descricao: "Uma linguagem de script desenvolvida pela Microsoft, utilizada principalmente para automação de tarefas em ambientes Windows, especialmente em scripts do lado do cliente e automação de tarefas administrativas.",
        nivelDificuldade: "Fácil",
        linkDocumentacao: "https://docs.microsoft.com/en-us/previous-versions/windows/desktop/gg592229(v=vs.85)",
        linkMaisInformacoes: "https://en.wikipedia.org/wiki/VBScript",
        linkImagem: "https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63018734d8a92027c8796b82_261e43d7.png"
    },
    {
        nome: "Forth",
        descricao: "Uma linguagem de programação de baixo nível, popular em sistemas embarcados e aplicações de tempo real, conhecida por sua eficiência, simplicidade e controle direto sobre hardware.",
        nivelDificuldade: "Difícil",
        linkDocumentacao: "https://skilldrick.github.io/easyforth/",
        linkMaisInformacoes: "https://en.wikipedia.org/wiki/Forth_(programming_language)",
        linkImagem: "https://styles.redditmedia.com/t5_2qjkc/styles/communityIcon_4b3nino0yos01.png"
    },
    {
        nome: "Logo",
        descricao: "Uma linguagem de programação educacional, usada principalmente para ensinar conceitos de programação e matemática por meio de ferramentas visuais, como a famosa 'tartaruga' que desenha formas geométricas.",
        nivelDificuldade: "Fácil",
        linkDocumentacao: "http://el.media.mit.edu/logo-foundation/",
        linkMaisInformacoes: "https://en.wikipedia.org/wiki/Logo_(programming_language)",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Code.svg/800px-Code.svg.png"
    },
    {
        nome: "APL",
        descricao: "Uma linguagem de programação altamente concisa e expressiva, usada principalmente para manipulação de matrizes, processamento de dados e aplicações matemáticas complexas, conhecida por seu uso intensivo de símbolos.",
        nivelDificuldade: "Difícil",
        linkDocumentacao: "https://www.aplwiki.com/",
        linkMaisInformacoes: "https://en.wikipedia.org/wiki/APL_(programming_language)",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/APL_%28programming_language%29_logo.svg/120px-APL_%28programming_language%29_logo.svg.png"
    },
    {
        nome: "SAS",
        descricao: "Uma linguagem especializada em análise de dados e estatísticas, amplamente utilizada em pesquisa acadêmica, negócios e governo para manipulação e análise de grandes volumes de dados.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://documentation.sas.com/doc/en/vdmmlcdc/8.3/",
        linkMaisInformacoes: "https://www.sas.com/en_us/software/sas9.html",
        linkImagem: "https://abrudz.github.io/logos/SAS.svg"
    },
    {
        nome: "PowerShell",
        descricao: "Uma linguagem de script poderosa desenvolvida pela Microsoft, usada principalmente para automação de tarefas administrativas e gerenciamento de sistemas Windows, oferecendo integração profunda com o sistema operacional.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://docs.microsoft.com/en-us/powershell/",
        linkMaisInformacoes: "https://en.wikipedia.org/wiki/Windows_PowerShell",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/PowerShell_Core_6.0_icon.png/121px-PowerShell_Core_6.0_icon.png"
    },
    {
        nome: "Racket",
        descricao: "Uma linguagem derivada do Scheme, utilizada em pesquisa e ensino de ciência da computação, destacando-se pela flexibilidade e suporte a múltiplos paradigmas de programação.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://docs.racket-lang.org/",
        linkMaisInformacoes: "https://racket-lang.org/",
        linkImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Racket-logo.svg/121px-Racket-logo.svg.png"
    },
    {
        nome: "XSLT",
        descricao: "Uma linguagem de transformação projetada para converter documentos XML em outros formatos, como HTML, texto ou outro XML, essencial em aplicações que manipulam grandes volumes de dados XML.",
        nivelDificuldade: "Médio",
        linkDocumentacao: "https://www.w3.org/TR/xslt/",
        linkMaisInformacoes: "https://en.wikipedia.org/wiki/XSLT",
        linkImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCOfQkScMhntwUD7M_wgKYOuzW-1IIL5FX0g&s"
    },
    {
        nome: "Dylan",
        descricao: "Uma linguagem de programação multi-paradigma que combina características de linguagens funcionais e orientadas a objetos, oferecendo uma sintaxe semelhante a Lisp e Smalltalk, usada principalmente para desenvolvimento de software flexível e modular.",
        nivelDificuldade: "Difícil",
        linkDocumentacao: "https://www.dylan-lang.org/documentation/",
        linkMaisInformacoes: "https://en.wikipedia.org/wiki/Dylan_(programming_language)",
        linkImagem: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Dylan_logo.png/121px-Dylan_logo.png"
    },
    {
        nome: "VHDL",
        descricao: "Uma linguagem de descrição de hardware utilizada para modelar e simular circuitos digitais, amplamente adotada em projetos de engenharia eletrônica e desenvolvimento de circuitos integrados.",
        nivelDificuldade: "Difícil",
        linkDocumentacao: "https://www.asic-world.com/vhdl/",
        linkMaisInformacoes: "https://en.wikipedia.org/wiki/VHDL",
        linkImagem: "https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/638a61921edcd66afc20a239_XrbJ07KiqWOBrxBtkJGoAUdyjwynYp-eC0MPmL1RoQU.png"
    }
];