import React, { useEffect, useState } from 'react'

const MyCV = () => {


   
    

  return (
    <section id="bg" class="font-serif gap-x-[8vw] gap-y-[5vw] grid grid-rows-[3fr,1fr] grid-cols-[2fr, 2fr] w-full py-[100px] px-20 text-white">
        

        <div class="rounded bg-[url('./img/perfilphoto.jpeg')] bg-cover bg-center w-[10vw] h-[10vw]"></div>
        <div class="col-start-2">
            <h1 class="text-[2.5vw] font-sans">ÂNGELO MATEUS NERY SOUZA</h1>
            <p class="text-[1.5vw]">(65) 9 9267-3850</p>
            <p class="text-[1.5vw]">angelomateusnerysouza@gmail.com</p>
        </div>

        <h2 class="text-[1.5vw]">Desenvoledor Web</h2>
        <div class="font-sans font-medium text-[1.2vw] text-justify w-full">
                Estudante de Análise e Desenvolvimento de Sistemas (3º semestre), 
                18 anos, com formação anterior no IFMT Eletrônica Integrado. 
                Habilidades em programação e busca por oportunidades desafiadoras. 
        </div>

        <div class="col-start-2 row-start-3 row-end-4 grid grid-rows-[2fr, 1fr] grid-cols-3 gap-5">
            <h2 class="text-[1.5vw]">Competências</h2>
            <ul class="text-[1.2vw] font-sans col-start-1">
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
                <li>TAILWIND</li>
                <li>GIT</li>
                <li>NODE</li>
                <li>MYSQL</li>
            </ul>
            <ul>
                <li>3/5</li>
                <li>3/5</li>
                <li>3/5</li>
                <li>3/5</li>
                <li>3/5</li>
                <li>2/5</li>
                <li>1/5</li>
                <li>2/5</li>
            </ul>
        </div>

        <h1 class="text-[1.5vw] row-start-4">Experiência Profissional</h1>
        <div class="grid grid-rows-[2fr, 1fr] row-start-4 gap-[1rem]">
            <h2 class="font-sans text-[1.2vw] font-medium">Auxiliar Admistrativo - R Master Telecom, Cuiabá - Janeiro 2023</h2>
            <p>Criei apresentações,  planilhas e documentos, 
                utilizando o Pacote Office otimizando processos
                administrativos e facilitando a comunicação eficaz.
                Supervisão eficaz das equipes através de apps de 
                rastreamento  Real Time, promovendo um ambiente 
                organizado e produtivo.</p>
        </div>

        <h1 class="text-[1.5vw] row-start-5">Formação</h1>
        <div class="grid grid-rows-[2fr, 1fr] row-start-5 gap-[1rem]">
            <h2 class="font-sans text-[1.2vw] font-medium">IFMT (Instituto Federal de Mato Grosso), Cuiabá Janeiro 2020 - Dezembro 2023</h2>
            <p>Ensino Médio com Eletrônica Integrado</p>
        </div>

        <h1 class="text-[1.5vw] row-start-6">Dados Pessoais</h1>
        <div class="grid grid-rows-[2fr, 1fr] row-start-6 gap-[1rem]">
            <h2 class="font-sans text-[1.2vw] font-medium">Links</h2>
            <p>
                <a class="underline" target="_blank" href="https://www.linkedin.com/in/angelo-mateus-nery-souza-a2738821b">Linkedin</a> <br />
                <a class="underline" target="_blank" href="https://github.com/angelo2004-mateus">GitHub</a>
            </p>
        </div>
    </section>
  )
}

export default MyCV
