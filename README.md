# TULALD22SemestralProject
## Ovládání aplikace

Pro vygenerování světa stačí pouze načíst stránku  [World Generator](https://tulald22semestralproject.github.io/TULALD22SemestralProject/). Pro vytvoření nového světa je potřeba jen stránku načíst znovu.

## Generování světa

Pro generování světa je nejprve potřeba vytvořit samostatné dlaždice "tileType", které mají informaci o obrázku, ke kterému se vztahují, a o tom jaké dlaždice mohou být na jakých stranách.

Samotné generování informace o stranách každé dlaždice funguje tak, že nejdříve jsou u každé dlaždice strany nazvány podle toho, jak jsou kompatibilní (grass, water,...). Následně je zavolána funkce, která pomocí těchto názvů ukládá indexy kompatibilních dlaždic do polí pro jednotlivé strany. 

> To znamená, že pokud má **strana A dlaždice 1** název "grass" a **strana  C dlaždice 2** je také "grass", poté lze index dlaždice 2 uložit do pole strany A v dlaždici 1.
> 
> Naopak pokud by tyto názvy byly rozdílné, tak se index neuloží a dlaždice nelze vložit vedle sebe

  

Při generování pak algoritmus prochází desku "board". Pro každý blok projde pole obsahující všechny existující dlaždice a kontroluje jestli se taková dlaždice může na dané pozici vyskytovat. Zde se vždy kontroluje zda se dlaždice vyskytuje v povolených dlaždicích příslušných stran všech okolních bloků. Pokud ano, tak se taková dlaždice uloží do nového pole, ze kterého se nakonec akorát náhodně vybírá a tato dlaždice se poté akorát vloží do "board".

Pokud se program zasekne s tím, že neexistuje žádná dlaždice, kterou by šlo na pozici vložit, tak se "board" resetuje a generování začne odznova.

 
