import { useCharacters } from "../hooks/useCharacters"
import { ContenedorCharacter } from "./ContenedorCharacter";
import { BuscarCharacter } from "./BuscarCharacter"

export const MarvelApp = () => {
    const { characters, formtaImageuRL, buscarCharacter, nextPage, previousPage } = useCharacters();

    return (
        <>
            <BuscarCharacter buscarCharacter={buscarCharacter} />
            <ContenedorCharacter
                characters={characters} 
                formtaImageuRL={formtaImageuRL} 
                nextPage={nextPage} 
                previousPage={previousPage} 
            />
        </>
    );
}
