import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 2rem;
  margin-bottom: 4rem;
  h2 {
    margin: 1.5rem 0 1rem;
    &:nth-of-type(1) {
      font-size: 2rem;
    }
  }
  p:nth-of-type(2) {
    margin-top: 1rem;
  }
`;

const TextContent = () => {
  return (
    <Wrapper className='section-center'>
      <h2>Jak wyglądają lekcje gitary?</h2>
      <p>
        Przede wszystkim lekcje zawsze odbywają się w luźnej i inspirującej
        atmosferze. W trakcie swoich lekcji staram się rozwinąć u gitarzystów
        uniwersalne podejście do muzyki i gry na gitarze. Dzięki temu w
        przyszłości będziesz w stanie zagrać cały wachlarz rozmaitych piosenek i
        zagrywek. Zaczynamy od zbudowania solidnych podstaw, takich jak:
        prawidłowa i szybka zmiana akordów, odpowiednie prowadzenie palców na
        gryfie i poznanie terminologii muzycznej oraz akcesoriów do gitary.
      </p>
      <p>
        Na kolejnych lekcjach zajmujemy się realizacją Twoich indywidualnych
        celów muzycznych. Mogę Ci pomóc w: nauce Twoich ulubionych piosenek,
        rozwinięciu improwizacji i gry solowej, dobrym poznaniu gryfu gitary.
        Jeżeli chcesz zacząć pisać własną muzykę - nauczę Cię podstaw teorii
        oraz kompozycji muzycznej. Czuje się swobodnie w różnych gatunkach
        muzycznych: od ciężkiego rocka do bluesa, funky, country i wielu innych.
        Odkąd pamiętam pasjonuję się muzyką i grą na gitarze dlatego z
        przyjemnością pomogę Ci w rozwoju Twojej pasji.
      </p>
      <h2>Dlaczego indywidualne zajęcia gry na gitarze?</h2>
      <p>
        Indywidualne lekcje są najbardziej efektywną formą nauki gitary. W ten
        sposób możemy w 100% skupić się na Tobie i materiale, nad którym
        aktualnie pracujesz. Ponadto po pracy z ponad setką uczniów, wiem, że
        każdy uczy się w innym tempie i ma różne mocne i słabe strony i
        preferuję indywidualne podejście do każdego gitarzysty. Jeżeli jednak
        chcesz przyjść na lekcję z kolegą/koleżanką lub członkiem rodziny
        istnieje również możliwość nauki w 2-osobowych grupach.
      </p>
      <h2>Co wziąć ze sobą na pierwszą lekcję gitary?</h2>
      <p>
        Idealnie, jeżeli masz już swoją gitarę. Zawsze lepiej się gra na własnym
        instrumencie. Ponadto różne modele mogą różnić się szerokością i
        kształtem gryfu. Jeżeli jednak chwilowo nie masz swojej gitary, mam na
        miejscu zapasowe instrumenty, z których możesz skorzystać. W przypadku
        gitary elektrycznej nie musisz przejmować się noszeniem wzmacniacza,
        kabli czy efektów - wszystko jest na miejscu. Wystarczy wziąć gitarę i
        entuzjazm. Jeżeli masz jakieś notatki i własne materiały dotyczące
        wcześniejszych lekcji lub piosenek, nad którymi aktualnie pracujesz,
        również możesz je wziąć.
      </p>
    </Wrapper>
  );
};

export default TextContent;
